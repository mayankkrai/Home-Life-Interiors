import ConsultationForm from "./components/ConsultationForm";
import FloatingContacts from "./components/FloatingContacts";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import { processSteps, projects, services, siteConfig } from "./siteData";

const heroImage = "/assets/interiors/hero-living-room.jpg";

const testimonials = [
  {
    name: "Aarav Sharma",
    text: "The entire experience felt premium from the first consultation to final handover. The design was elegant, practical, and exactly what we wanted.",
  },
  {
    name: "Neha Gupta",
    text: "They transformed our apartment into a warm, modern home. Communication was smooth, timelines were clear, and the finish quality was excellent.",
  },
  {
    name: "Ritika Mehra",
    text: "What stood out most was their attention to detail. Every corner felt thoughtfully designed and professionally executed.",
  },
];

export default function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <SiteHeader />

      <main id="main-content">
        <section className="hero section">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">Interior Design Studio · Noida NCR</p>
              <h1 className="hero-title">
                Interior Designers in Noida for End-to-End Home Interiors
              </h1>
              <p className="hero-text">
                We design warm, timeless homes with premium finishes,
                functional planning, and end-to-end execution for a seamless
                experience across Noida and Delhi NCR.
              </p>

              <div className="hero-actions">
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-gold"
                >
                  Get a Free Quote on WhatsApp
                </a>
                <a href="/projects/" className="btn btn-dark-outline">
                  View Projects
                </a>
              </div>

              <div className="stats-grid" aria-label="Business highlights">
                <div className="stat-card">
                  <p className="stat-number">150+</p>
                  <p className="muted">Projects Delivered</p>
                </div>
                <div className="stat-card">
                  <p className="stat-number">4.9/5</p>
                  <p className="muted">Client Satisfaction</p>
                </div>
                <div className="stat-card">
                  <p className="stat-number">10+</p>
                  <p className="muted">Years Experience</p>
                </div>
              </div>
            </div>

            <div className="hero-visual-wrap">
              <div className="hero-frame">
                <div className="hero-image-card">
                  <img
                    className="hero-image"
                    src={heroImage}
                    width="736"
                    height="1104"
                    alt="Warm modern living room interior designed by Home Life Interiors"
                    fetchPriority="high"
                    decoding="async"
                  />
                  <div className="signature-card">
                    <p className="signature-label">Signature Style</p>
                    <p className="signature-text">
                      Luxury, warmth, and functionality in perfect balance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section section-alt">
          <div className="container about-grid">
            <div>
              <p className="eyebrow">Why Choose Us</p>
              <h2 className="section-title">
                A premium interior experience from concept to completion
              </h2>
              <a href="/about/" className="text-link section-link">
                Learn about our approach
              </a>
            </div>

            <div className="feature-grid">
              {[
                "Turnkey design and execution",
                "Transparent pricing and timelines",
                "Premium materials and detailing",
                "Personalized 3D design consultation",
              ].map((item) => (
                <div key={item} className="feature-card">
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section services-style-section">
          <div className="container">
            <div className="services-style-head">
              <div>
                <p className="eyebrow">Everything Interiors, In One Place</p>
                <h2 className="section-title">Residential interior services</h2>
              </div>
              <a href="/services/" className="text-link">
                Explore all services
              </a>
            </div>

            <div className="services-style-grid">
              {services.map((service) => (
                <article key={service.title} className="service-style-card">
                  <div className="service-style-icon-wrap" aria-hidden="true">
                    <span className="service-style-dot" />
                    <span className="service-style-icon">{service.icon}</span>
                  </div>
                  <div>
                    <h3 className="service-style-title">{service.title}</h3>
                    <p className="service-style-description">
                      {service.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section section-dark">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">Portfolio</p>
                <h2 className="section-title">
                  Interior projects across Noida and Delhi NCR
                </h2>
              </div>
              <a href="/projects/" className="text-link">
                View the project portfolio
              </a>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <article key={project.title} className="project-card">
                  <img
                    className="project-image"
                    src={project.image}
                    width="736"
                    height="1104"
                    alt={project.alt}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="project-body">
                    <div className="tag-row">
                      <span className="tag">{project.type}</span>
                      <span className="tag">{project.location}</span>
                    </div>
                    <h3>{project.title}</h3>
                    <p className="muted">
                      A thoughtfully designed space balancing modern elegance,
                      comfort, and efficient use of every detail.
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="section">
          <div className="container">
            <div className="process-head">
              <p className="eyebrow">Our Process</p>
              <h2 className="section-title">
                A clear journey from the first idea to handover
              </h2>
            </div>

            <div className="process-grid">
              {processSteps.map((step, index) => (
                <div key={step} className="process-card">
                  <p className="step-number">0{index + 1}</p>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt" aria-labelledby="reviews-title">
          <div className="container">
            <div className="process-head">
              <p className="eyebrow">Testimonials</p>
              <h2 id="reviews-title" className="section-title">
                What clients say about working with us
              </h2>
            </div>

            <div className="testimonials-grid">
              {testimonials.map((item) => (
                <blockquote key={item.name} className="testimonial-card">
                  <p className="testimonial-text">“{item.text}”</p>
                  <footer className="testimonial-footer">
                    <cite>{item.name}</cite>
                    <p className="verified">Client feedback</p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div>
              <p className="eyebrow bright">Let’s Build Your Dream Space</p>
              <h2 className="section-title">
                Book a free consultation for a home that feels truly yours
              </h2>
              <p className="contact-copy">
                Serving {siteConfig.serviceAreas.join(", ")} with residential
                interior design and turnkey solutions.
              </p>
              <p className="contact-copy">
                Prefer to speak directly? Call us at{" "}
                <a className="inline-link" href={`tel:${siteConfig.phoneE164}`}>
                  {siteConfig.phoneDisplay}
                </a>
                .
              </p>
            </div>

            <ConsultationForm />
          </div>
        </section>
      </main>

      <SiteFooter />
      <FloatingContacts />
    </div>
  );
}
