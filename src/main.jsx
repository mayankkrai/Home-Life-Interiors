import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import SiteRouter from "./SiteRouter";
import "./index.css";

const rootElement = document.getElementById("root");
const app = (
  <React.StrictMode>
    <SiteRouter path={window.location.pathname} />
  </React.StrictMode>
);

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
