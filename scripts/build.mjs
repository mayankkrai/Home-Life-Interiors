import { readFile, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import react from "@vitejs/plugin-react";
import { build } from "vite";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(projectRoot, "dist");
const serverOutDir = path.join(projectRoot, ".prerender-server");
const siteUrl = "https://homelifeinterior.in";
const socialImage = `${siteUrl}/assets/interiors/hero-living-room.jpg`;

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const replaceMeta = (html, attribute, key, value) => {
  const expression = new RegExp(
    `<meta\\s+${attribute}=["']${key}["'][^>]*>`,
    "i",
  );
  return html.replace(
    expression,
    `<meta ${attribute}="${key}" content="${escapeHtml(value)}" />`,
  );
};

const breadcrumbSchema = (metadata) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${siteUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: metadata.title.split("|")[0].trim(),
        item: `${siteUrl}${metadata.path}`,
      },
    ],
  };

  return `<script id="breadcrumb-schema" type="application/ld+json">${JSON.stringify(
    data,
  ).replaceAll("<", "\\u003c")}</script>`;
};

const applyMetadata = (template, routeKey, metadata) => {
  const canonicalUrl = `${siteUrl}${metadata.path}`;
  let html = template
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(metadata.title)}</title>`)
    .replace(
      /<link\s+rel=["']canonical["'][^>]*>/i,
      `<link rel="canonical" href="${canonicalUrl}" />`,
    );

  html = replaceMeta(html, "name", "description", metadata.description);
  html = replaceMeta(html, "property", "og:title", metadata.title);
  html = replaceMeta(html, "property", "og:description", metadata.description);
  html = replaceMeta(html, "property", "og:url", canonicalUrl);
  html = replaceMeta(html, "property", "og:image", socialImage);
  html = replaceMeta(html, "name", "twitter:title", metadata.title);
  html = replaceMeta(html, "name", "twitter:description", metadata.description);
  html = replaceMeta(html, "name", "twitter:image", socialImage);

  if (routeKey !== "/") {
    html = html
      .replace(/\s*<link[^>]+id=["']home-hero-preload["'][^>]*>/i, "")
      .replace(
        /\s*<script[^>]+id=["']website-schema["'][^>]*>[\s\S]*?<\/script>/i,
        "",
      )
      .replace("</head>", `  ${breadcrumbSchema(metadata)}\n  </head>`);
  }

  return html;
};

const createSitemap = (metadataEntries) => {
  const urls = metadataEntries
    .map(
      ([, metadata]) => `  <url>
    <loc>${siteUrl}${metadata.path}</loc>
    <lastmod>2026-07-17</lastmod>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
};

try {
  await build({
    root: projectRoot,
    configFile: false,
    plugins: [react()],
    build: {
      outDir: distDir,
      emptyOutDir: true,
    },
  });

  await build({
    root: projectRoot,
    configFile: false,
    plugins: [react()],
    build: {
      ssr: path.join(projectRoot, "src", "entry-server.jsx"),
      outDir: serverOutDir,
      emptyOutDir: true,
      rollupOptions: {
        output: {
          entryFileNames: "entry-server.js",
        },
      },
    },
  });

  const serverModule = await import(
    `${pathToFileURL(path.join(serverOutDir, "entry-server.js")).href}?v=${Date.now()}`
  );
  const template = await readFile(path.join(distDir, "index.html"), "utf8");
  const metadataEntries = Object.entries(serverModule.pageMetadata);

  for (const [routeKey, metadata] of metadataEntries) {
    const renderedApp = serverModule.render(metadata.path);
    const pageHtml = applyMetadata(template, routeKey, metadata).replace(
      '<div id="root"></div>',
      `<div id="root">${renderedApp}</div>`,
    );
    const outputDirectory =
      routeKey === "/" ? distDir : path.join(distDir, routeKey.slice(1));
    await mkdir(outputDirectory, { recursive: true });
    await writeFile(path.join(outputDirectory, "index.html"), pageHtml, "utf8");
  }

  await writeFile(
    path.join(distDir, "sitemap.xml"),
    createSitemap(metadataEntries),
    "utf8",
  );

  console.log(`Prerendered ${metadataEntries.length} SEO pages.`);
} finally {
  await rm(serverOutDir, { recursive: true, force: true });
}
