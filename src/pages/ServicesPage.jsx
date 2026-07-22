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

      <section className="section" aria-labelledby="focused-services-title">
        <div className="container">
          <div className="content-heading">
            <h2 id="focused-services-title" className="section-title">
              Explore a focused interior service
            </h2>
            <p className="section-note">
              Choose the project type that best matches the space you want to plan.
            </p>
          </div>
          <div className="detail-grid service-link-grid">
            <a className="detail-card service-link-card" href="/full-home-interiors/">
              <p className="detail-number">01</p>
              <h3>Full Home Interiors</h3>
              <p>Complete apartment and villa design with coordinated turnkey execution.</p>
            </a>
            <a className="detail-card service-link-card" href="/modular-kitchens/">
              <p className="detail-number">02</p>
              <h3>Modular Kitchens</h3>
              <p>Kitchen layouts, storage, finishes, and coordinated installation.</p>
            </a>
            <a className="detail-card service-link-card" href="/room-interiors/">
              <p className="detail-number">03</p>
              <h3>Room Interiors</h3>
              <p>Focused living room and bedroom design for practical everyday use.</p>
            </a>
            <a className="detail-card service-link-card" href="/wallpaper-installation/">
              <p className="detail-number">04</p>
              <h3>Wallpaper Supply &amp; Installation</h3>
              <p>Retail wallpaper for residential walls with optional home installation.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="service-process-title">
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
