import { siteConfig } from "../siteData";

export default function FloatingContacts() {
  return (
    <div className="floating-contact-buttons" aria-label="Contact options">
      <a
        href={siteConfig.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Home Life Interiors on WhatsApp"
        className="floating-contact-btn floating-whatsapp"
      >
        <span className="floating-contact-icon" aria-hidden="true">
          WA
        </span>
        <span>WhatsApp</span>
      </a>

      <a
        href={`tel:${siteConfig.phoneE164}`}
        aria-label={`Call Home Life Interiors at ${siteConfig.phoneDisplay}`}
        className="floating-contact-btn floating-call"
      >
        <span className="floating-contact-icon" aria-hidden="true">
          Tel
        </span>
        <span>Call Now</span>
      </a>
    </div>
  );
}
