import { siteConfig } from "../siteData";

export default function ContactCta({
  title = "Ready to plan your home interiors?",
  copy = "Tell us about your space and arrange a free initial consultation.",
}) {
  return (
    <section className="section contact-cta">
      <div className="container contact-cta-inner">
        <div>
          <p className="eyebrow bright">Start a Conversation</p>
          <h2 className="section-title">{title}</h2>
          <p className="contact-copy">{copy}</p>
        </div>
        <div className="cta-actions">
          <a href="/contact/" className="btn btn-gold">
            Book a Consultation
          </a>
          <a href={`tel:${siteConfig.phoneE164}`} className="btn btn-outline">
            Call {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
