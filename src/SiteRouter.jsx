import App from "./App";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProjectsPage from "./pages/ProjectsPage";
import ServicesPage from "./pages/ServicesPage";
import { normalizePath } from "./siteData";

const routeComponents = {
  "/": App,
  "/about": AboutPage,
  "/contact": ContactPage,
  "/projects": ProjectsPage,
  "/services": ServicesPage,
};

export default function SiteRouter({ path = "/" }) {
  const normalizedPath = normalizePath(path);
  const RouteComponent = routeComponents[normalizedPath] || NotFoundPage;
  return <RouteComponent />;
}
