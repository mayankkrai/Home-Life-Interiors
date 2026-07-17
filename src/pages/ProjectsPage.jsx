import ContactCta from "../components/ContactCta";
import PageShell from "../components/PageShell";
import { projects } from "../siteData";

export default function ProjectsPage() {
  return (
    <PageShell
      eyebrow="Project Portfolio"
      title="Interior Design Projects in Noida NCR"
      intro="Explore living room, bedroom, and modular kitchen concepts created around modern lifestyles, comfort, and practical use of space."
    >
      <section className="section section-alt" aria-labelledby="portfolio-title">
        <div className="container">
          <div className="content-heading">
            <h2 id="portfolio-title" className="section-title">
              Featured residential spaces
            </h2>
            <p className="section-note">
              These featured spaces show our approach to balancing warm
              finishes, everyday function, and a cohesive visual language.
            </p>
          </div>

          <div className="projects-grid projects-page-grid">
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
                    A residential interior concept focused on comfortable
                    modern living and thoughtful use of the available space.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCta
        title="Have a space you want to transform?"
        copy="Share your location and requirements so we can begin with the right design conversation."
      />
    </PageShell>
  );
}
