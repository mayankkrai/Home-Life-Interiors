import { renderToString } from "react-dom/server";
import SiteRouter from "./SiteRouter";
import { pageMetadata } from "./siteData";

export { pageMetadata };

export function render(path) {
  return renderToString(<SiteRouter path={path} />);
}
