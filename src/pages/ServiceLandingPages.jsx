import ContactCta from "../components/ContactCta";
import PageShell from "../components/PageShell";
import { processSteps, siteConfig } from "../siteData";

const landingPages = {
  fullHome: {
    eyebrow: "Turnkey Home Interiors",
    title: "Full Home Interior Design in Noida NCR",
    intro:
      "Plan your apartment or villa with coordinated design, budgeting, material selection, site work, and end-to-end execution across Noida and Delhi NCR.",
    image: "/assets/interiors/hero-living-room.jpg",
    imageAlt: "Complete living room interior by Home Life Interiors in Noida NCR",
    sectionTitle: "One coordinated team for your complete home",
    sectionCopy:
      "Start with your space, requirements, and budget, then move through design development and execution with a dedicated point of contact.",
    benefits: [
      {
        title: "Complete design planning",
        copy: "Coordinate layouts, storage, lighting, finishes, and personalized 3D design consultation around your household.",
      },
      {
        title: "Turnkey execution",
        copy: "Bring carpentry, false ceilings, electrical, plumbing, wall finishes, and quality checks into one planned interior scope.",
      },
      {
        title: "Clear project stages",
        copy: "Discuss scope, budget planning, payment stages, and timelines clearly before execution begins.",
      },
    ],
    ctaTitle: "Plan your full-home interior",
    ctaCopy:
      "Book a free initial consultation to discuss your home, location, priorities, and the next step for a site visit.",
  },
  modularKitchen: {
    eyebrow: "Modular Kitchen Interiors",
    title: "Modular Kitchen Design in Noida NCR",
    intro:
      "Create a practical modular kitchen around your cooking routine, storage needs, available space, and preferred finish, with coordinated design and execution.",
    image: "/assets/interiors/project-kitchen.jpg",
    imageAlt: "Modular kitchen interior project by Home Life Interiors in Ghaziabad",
    sectionTitle: "A kitchen planned around everyday use",
    sectionCopy:
      "Every modular kitchen starts with the site measurements and a clear conversation about workflow, storage, materials, and project scope.",
    benefits: [
      {
        title: "Layout and workflow",
        copy: "Plan work zones, movement, counter use, and appliance positions around the available kitchen footprint.",
      },
      {
        title: "Storage and finishes",
        copy: "Coordinate cabinets, drawers, internal storage, surfaces, and finishes for a consistent design language.",
      },
      {
        title: "Coordinated execution",
        copy: "Align carpentry, electrical, plumbing, installation, and quality checks as part of one kitchen plan.",
      },
    ],
    ctaTitle: "Start your modular kitchen plan",
    ctaCopy:
      "Book a free initial consultation to discuss your kitchen measurements, location, storage requirements, and preferred style.",
  },
  roomInteriors: {
    eyebrow: "Living Room & Bedroom Interiors",
    title: "Room Interior Design in Noida NCR",
    intro:
      "Refresh a living room, bedroom, or focused residential space with coordinated layouts, storage, lighting, finishes, and execution.",
    image: "/assets/interiors/project-bedroom.jpg",
    imageAlt: "Bedroom interior project by Home Life Interiors in Greater Noida",
    sectionTitle: "Focused design for the rooms you use most",
    sectionCopy:
      "Plan a room around its daily purpose, available dimensions, storage needs, and the way it should feel within the rest of your home.",
    benefits: [
      {
        title: "Living room planning",
        copy: "Coordinate furniture layout, TV units, lighting, wall details, and circulation for a welcoming shared space.",
      },
      {
        title: "Bedroom interiors",
        copy: "Plan wardrobes, dressing areas, lighting, colours, and practical storage around a calm bedroom layout.",
      },
      {
        title: "Finishes and execution",
        copy: "Bring carpentry, false ceiling, electrical, painting, and quality checks into one focused room scope.",
      },
    ],
    ctaTitle: "Discuss your room interior",
    ctaCopy:
      "Book a free initial consultation for a living room, bedroom, or focused residential interior project in Noida NCR.",
  },
  wallpaper: {
    eyebrow: "Wallpaper Supply & Installation",
    title: "Wallpaper for Homes in Noida NCR",
    intro:
      "Explore wallpaper for bedrooms, living rooms, and feature walls, supplied to retail customers with optional home measurement and installation across Noida NCR.",
    image: "/assets/interiors/project-living-room.jpg",
    imageAlt: "Living room feature wall by Home Life Interiors in Noida NCR",
    sectionTitle: "Choose wallpaper with practical support",
    sectionCopy:
      "Select patterns, colours, and finishes around your room, wall condition, and budget, then choose supply-only service or home installation.",
    benefits: [
      {
        title: "Retail wallpaper supply",
        copy: "Explore wallpaper options for bedrooms, living rooms, feature walls, and other residential spaces.",
      },
      {
        title: "Measurement and selection",
        copy: "Request a home visit when needed to review the wall, confirm measurements, and discuss suitable options.",
      },
      {
        title: "Optional home installation",
        copy: "Arrange wallpaper installation at your home when required, with final scope confirmed before work begins.",
      },
    ],
    gallery: [
      {
        title: "Hanging tropical leaves",
        copy: "A soft lilac botanical mural for a calm living-room feature wall.",
        image: "/assets/wallpaper/hanging-tropical-leaves-lilac.webp",
        imageAlt: "Lilac hanging tropical leaves wallpaper in a contemporary living room",
      },
      {
        title: "Tropical vintage nature",
        copy: "A muted scenic mural with foliage and birds for a statement wall.",
        image: "/assets/wallpaper/tropical-vintage-nature.webp",
        imageAlt: "Vintage tropical nature wallpaper with flamingos and a crane behind a sofa",
      },
      {
        title: "Vintage tropical foliage",
        copy: "Warm layered foliage designed to bring depth to a residential lounge.",
        image: "/assets/wallpaper/vintage-tropical-foliage.webp",
        imageAlt: "Vintage tropical foliage wallpaper on a living-room feature wall",
      },
    ],
    processSteps: [
      "Consultation",
      "Site Measurement",
      "Wallpaper Selection",
      "Quote",
      "Supply or Installation",
      "Final Check",
    ],
    ctaTitle: "Enquire about wallpaper for your home",
    ctaCopy:
      "Tell us your room, approximate wall size, location, and whether you need wallpaper supply only or home installation.",
  },
};

function ServiceLandingPage({ page }) {
  const serviceProcessSteps = page.processSteps || processSteps;

  return (
    <PageShell eyebrow={page.eyebrow} title={page.title} intro={page.intro}>
      <section className="section section-alt" aria-labelledby="landing-overview-title">
        <div className="container landing-overview-grid">
          <div>
            <p className="eyebrow">Designed for Your Space</p>
            <h2 id="landing-overview-title" className="section-title">
              {page.sectionTitle}
            </h2>
            <p className="body-copy">{page.sectionCopy}</p>
            <p className="service-area-note landing-service-area">
              Serving {siteConfig.serviceAreas.join(", ")}.
            </p>
          </div>
          <img className="landing-overview-image" src={page.image} alt={page.imageAlt} />
        </div>
      </section>

      {page.gallery && (
        <section className="section" aria-labelledby="wallpaper-gallery-title">
          <div className="container">
            <div className="content-heading wallpaper-gallery-heading">
              <div>
                <p className="eyebrow">Wallpaper Inspiration</p>
                <h2 id="wallpaper-gallery-title" className="section-title">
                  Explore feature-wall styles
                </h2>
              </div>
              <p className="section-note">
                Share the style you like and your approximate wall size to discuss availability, supply, and optional installation.
              </p>
            </div>
            <div className="wallpaper-gallery-grid">
              {page.gallery.map((item) => (
                <article key={item.title} className="wallpaper-gallery-card">
                  <img src={item.image} alt={item.imageAlt} loading="lazy" />
                  <div className="wallpaper-gallery-copy">
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={`section${page.gallery ? " section-alt" : ""}`} aria-labelledby="landing-benefits-title">
        <div className="container">
          <div className="content-heading">
            <h2 id="landing-benefits-title" className="section-title">
              What the service includes
            </h2>
            <p className="section-note">
              Final scope is confirmed after discussing your requirements and reviewing the existing space.
            </p>
          </div>
          <div className="detail-grid">
            {page.benefits.map((benefit, index) => (
              <article key={benefit.title} className="detail-card">
                <p className="detail-number" aria-hidden="true">
                  0{index + 1}
                </p>
                <h3>{benefit.title}</h3>
                <p>{benefit.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`section${page.gallery ? "" : " section-alt"}`} aria-labelledby="landing-process-title">
        <div className="container">
          <div className="process-head">
            <p className="eyebrow">How It Works</p>
            <h2 id="landing-process-title" className="section-title">
              From consultation to handover
            </h2>
          </div>
          <ol className="process-grid process-list">
            {serviceProcessSteps.map((step, index) => (
              <li key={step} className="process-card">
                <p className="step-number">0{index + 1}</p>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ContactCta title={page.ctaTitle} copy={page.ctaCopy} />
    </PageShell>
  );
}

export function FullHomeInteriorsPage() {
  return <ServiceLandingPage page={landingPages.fullHome} />;
}

export function ModularKitchensPage() {
  return <ServiceLandingPage page={landingPages.modularKitchen} />;
}

export function RoomInteriorsPage() {
  return <ServiceLandingPage page={landingPages.roomInteriors} />;
}

export function WallpaperInstallationPage() {
  return <ServiceLandingPage page={landingPages.wallpaper} />;
}
