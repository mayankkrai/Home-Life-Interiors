import App from "./App";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProjectsPage from "./pages/ProjectsPage";
import ServicesPage from "./pages/ServicesPage";
import {
  FullHomeInteriorsPage,
  ModularKitchensPage,
  RoomInteriorsPage,
} from "./pages/ServiceLandingPages";
import { normalizePath } from "./siteData";

const routeComponents = {
  "/": App,
  "/about": AboutPage,
  "/contact": ContactPage,
  "/full-home-interiors": FullHomeInteriorsPage,
  "/modular-kitchens": ModularKitchensPage,
  "/projects": ProjectsPage,
  "/room-interiors": RoomInteriorsPage,
  "/services": ServicesPage,
};

export default function SiteRouter({ path = "/" }) {
  const normalizedPath = normalizePath(path);
  const RouteComponent = routeComponents[normalizedPath] || NotFoundPage;
  return <RouteComponent />;
}
