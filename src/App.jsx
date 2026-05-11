import { useState } from "react";

const heroImage = "/assets/interiors/hero-living-room.jpg";
const projectLivingRoom = "/assets/interiors/living-room.jpg";
const projectBedroom = "/assets/interiors/project-bedroom.jpg";
const projectKitchen = "/assets/interiors/project-kitchen.jpg";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    message: "",
  });

  const services = [
  { title: "Free quote", icon: "◫" },
  { title: "False ceiling design", icon: "⬚" },
  { title: "Modular solutions", icon: "◈" },
  { title: "Personal designer", icon: "◌" },
  { title: "Wall designs & painting", icon: "▭" },
  { title: "Terrace gardening", icon: "❋" },
  { title: "Site measurement", icon: "╱" },
  { title: "Electrical & plumbing work", icon: "⌁" },
  { title: "Easy payments", icon: "◧" },
  { title: "Budget planning", icon: "▣" },
  { title: "On-site carpentry", icon: "⚒" },
  { title: "Rigorous quality checks", icon: "⬒" },
];

  const projects = [
    {
      title: "Modern Luxury Living Room",
      type: "Living Room",
      location: "Noida",
    },
    {
      title: "Warm Minimal Bedroom",
      type: "Bedroom",
      location: "Greater Noida",
    },
    {
      title: "Elegant Modular Kitchen",
      type: "Kitchen",
      location: "Ghaziabad",
    },
  ];

  const process = [
    "Consultation",
    "Site Visit",
    "3D Design",
    "Material Selection",
    "Execution",
    "Handover",
  ];

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const { name, phone, location, message } = formData;

    if (!name || !phone || !location || !message) {
      alert("Please fill all the fields before submitting.");
      return;
    }

    const whatsappNumber = "918796359302"; // replace with your actual WhatsApp number

    const whatsappMessage = `
Hello, I want to request a consultation.

Name: ${name}
Phone: ${phone}
Location: ${location}
Requirement: ${message}
    `.trim();

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");

    setFormData({
      name: "",
      phone: "",
      location: "",
      message: "",
    });
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <div>
            <p className="brand-name">Home Life Interiors</p>
            <p className="brand-tag">Luxury Interior Design</p>
          </div>

          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="btn btn-outline">
            Book Consultation
          </a>
        </div>
      </header>

      <main>
        <section className="hero section">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">Interior Design Studio • Noida NCR</p>
              <h1 className="hero-title">
                Designs Crafted for Modern Living
              </h1>
              <p className="hero-text">
                We design warm, timeless homes with premium finishes, functional
                planning, and end-to-end execution for a seamless experience.
              </p>

              <div className="hero-actions">
                <a
            href="https://wa.me/918796359302?text=Hi%2C%20I%20want%20to%20book%20an%20interior%20design%20consultation."
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
            className="floating-contact-btn floating-call"
          >
            <span className="floating-contact-icon">💬</span>
            <span>Get Free Quote on Whatsapp</span>
          </a>
                <a href="#projects" className="btn btn-dark-outline">
                  View Projects
                </a>
              </div>

              <div className="stats-grid">
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
                <div
                  className="hero-image-card"
                  style={{ backgroundImage: `url(${heroImage})` }}
                >
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
      <p className="eyebrow">Everything Interiors, In One Place</p>
    </div>

    <div className="services-style-grid">
      {services.map((service) => (
        <div key={service.title} className="service-style-card">
          <div className="service-style-icon-wrap">
            <span className="service-style-dot" />
            <span className="service-style-icon">{service.icon}</span>
          </div>

          <h3 className="service-style-title">{service.title}</h3>
        </div>
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
                  Featured projects that reflect our design language
                </h2>
              </div>
              <a href="#contact" className="text-link">
                Start your project
              </a>
            </div>

            <div className="projects-grid">
              {projects.map((project, index) => {
                const image =
                  index === 0
                    ? projectLivingRoom
                    : index === 1
                    ? projectBedroom
                    : projectKitchen;

                return (
                  <div key={project.title} className="project-card">
                    <div
                      className="project-image"
                      style={{ backgroundImage: `url(${image})` }}
                    />
                    <div className="project-body">
                      <div className="tag-row">
                        <span className="tag">{project.type}</span>
                        <span className="tag">{project.location}</span>
                      </div>
                      <h4>{project.title}</h4>
                      <p className="muted">
                        A thoughtfully designed space balancing modern elegance,
                        comfort, and efficient use of every detail.
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="process" className="section">
          <div className="container">
            <div className="process-head">
              <p className="eyebrow">Our Process</p>
              <h2 className="section-title">
                A smooth and transparent journey from idea to handover
              </h2>
            </div>

            <div className="process-grid">
              {process.map((step, index) => (
                <div key={step} className="process-card">
                  <p className="step-number">0{index + 1}</p>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="process-head">
              <p className="eyebrow">Testimonials</p>
              <h2 className="section-title">
                What our clients say about working with us
              </h2>
            </div>

            <div className="testimonials-grid">
              {testimonials.map((item) => (
                <div key={item.name} className="testimonial-card">
                  <p className="testimonial-text">“{item.text}”</p>
                  <div className="testimonial-footer">
                    <p>{item.name}</p>
                    <p className="verified">Verified Client</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="floating-contact-buttons">
          <a
            href="https://wa.me/918796359302?text=Hi%2C%20I%20want%20to%20book%20an%20interior%20design%20consultation."
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
            className="floating-contact-btn floating-whatsapp"
          >
            <span className="floating-contact-icon">💬</span>
            <span>WhatsApp</span>
          </a>

          <a
            href="tel:+918796359302"
            aria-label="Call now"
            className="floating-contact-btn floating-call"
          >
            <span className="floating-contact-icon">📞</span>
            <span>Call Now</span>
          </a>
        </div>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div>
              <p className="eyebrow bright">Let’s Build Your Dream Space</p>
              <h2 className="section-title">
                Book a free consultation and start designing a home that feels
                truly yours.
              </h2>
              <p className="contact-copy">
                Serving Noida, Greater Noida, Ghaziabad, Indirapuram, and Delhi
                NCR with premium residential interior design and turnkey solutions.
              </p>
            </div>

            <form className="contact-form" onSubmit={handleWhatsAppSubmit}>
              <div className="form-grid">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  value={formData.location}
                  onChange={handleChange}
                />
                <textarea
                  name="message"
                  placeholder="Tell us about your space"
                  value={formData.message}
                  onChange={handleChange}
                />
                <button type="submit" className="btn btn-gold">
                  Request Consultation
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}