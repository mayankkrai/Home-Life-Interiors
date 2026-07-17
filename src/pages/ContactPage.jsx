import ConsultationForm from "../components/ConsultationForm";
import PageShell from "../components/PageShell";
import { siteConfig } from "../siteData";

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact Home Life Interiors"
      title="Book a Free Interior Design Consultation"
      intro="Tell us about your home, location, and requirements to start an interior design conversation for your project in Noida or Delhi NCR."
    >
      <section className="section section-alt">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">Speak With Us</p>
            <h2 className="section-title">Choose the easiest way to connect</h2>
            <div className="contact-options">
              <a className="contact-option" href={`tel:${siteConfig.phoneE164}`}>
                <span>Call</span>
                <strong>{siteConfig.phoneDisplay}</strong>
              </a>
              <a
                className="contact-option"
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span>Message</span>
                <strong>Start a WhatsApp conversation</strong>
              </a>
            </div>

            <div className="service-area-block">
              <h3>Areas we serve</h3>
              <p>{siteConfig.serviceAreas.join(", ")}.</p>
            </div>
          </div>

          <div>
            <ConsultationForm />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
