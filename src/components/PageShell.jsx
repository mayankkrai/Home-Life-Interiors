import FloatingContacts from "./FloatingContacts";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

export default function PageShell({ eyebrow, title, intro, children }) {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main-content">
        <section className="page-hero section">
          <div className="container page-hero-inner">
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="page-title">{title}</h1>
            <p className="page-lead">{intro}</p>
          </div>
        </section>
        {children}
      </main>
      <SiteFooter />
      <FloatingContacts />
    </div>
  );
}
