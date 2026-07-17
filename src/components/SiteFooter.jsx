import { siteConfig } from "../siteData";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">Home Life Interiors</p>
          <p className="footer-copy">
            Residential interior design and turnkey execution across Noida and
            Delhi NCR.
          </p>
        </div>

        <div>
          <p className="footer-heading">Explore</p>
          <nav className="footer-links" aria-label="Footer navigation">
            <a href="/about/">About</a>
            <a href="/services/">Services</a>
            <a href="/projects/">Projects</a>
            <a href="/contact/">Contact</a>
          </nav>
        </div>

        <div>
          <p className="footer-heading">Contact</p>
          <div className="footer-links">
            <a href={`tel:${siteConfig.phoneE164}`}>
              {siteConfig.phoneDisplay}
            </a>
            <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
              WhatsApp consultation
            </a>
          </div>
        </div>

        <div>
          <p className="footer-heading">Service areas</p>
          <p className="footer-copy">{siteConfig.serviceAreas.join(", ")}</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© 2026 Home Life Interiors. All rights reserved.</p>
      </div>
    </footer>
  );
}
