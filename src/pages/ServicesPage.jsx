import ContactCta from "../components/ContactCta";
import PageShell from "../components/PageShell";
import { processSteps, services, siteConfig } from "../siteData";

export default function ServicesPage() {
  return (
    <PageShell
      eyebrow="Interior Design Services"
      title="Residential Interior Design Services in Noida NCR"
      intro="Plan a complete home interior or a focused room upgrade with coordinated design, budgeting, site work, and execution across Noida and Delhi NCR."
    >
      <section className="section section-alt" aria-labelledby="services-list-title">
        <div className="container">
          <div className="content-heading">
            <h2 id="services-list-title" className="section-title">
              Interior solutions for the complete home
            </h2>
            <p className="section-note">
              Every project starts with your requirements, the existing space,
              and a clear discussion of scope before design work begins.
            </p>
          </div>

          <div className="detail-grid">
            {services.map((service) => (
              <article key={service.title} className="detail-card">
                <p className="detail-number" aria-hidden="true">
                  {service.icon}
                </p>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="service-process-title">
        <div className="container">
          <div className="process-head">
            <p className="eyebrow">How It Works</p>
            <h2 id="service-process-title" className="section-title">
              From consultation to final handover
            </h2>
          </div>
          <ol className="process-grid process-list">
            {processSteps.map((step, index) => (
              <li key={step} className="process-card">
                <p className="step-number">0{index + 1}</p>
                <p>{step}</p>
              </li>
            ))}
          </ol>
          <p className="service-area-note">
            Available across {siteConfig.serviceAreas.join(", ")}.
          </p>
        </div>
      </section>

      <ContactCta />
    </PageShell>
  );
}
