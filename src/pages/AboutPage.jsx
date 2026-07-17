import ContactCta from "../components/ContactCta";
import PageShell from "../components/PageShell";
import { processSteps, siteConfig } from "../siteData";

const approachPoints = [
  {
    title: "Turnkey coordination",
    description:
      "Bring design planning and on-site execution into one coordinated project journey.",
  },
  {
    title: "Transparent planning",
    description:
      "Discuss scope, priorities, budgets, and project stages clearly before execution.",
  },
  {
    title: "Personalized design",
    description:
      "Shape the layout, materials, and visual direction around the household and the space.",
  },
  {
    title: "Detail-focused execution",
    description:
      "Review the practical and visual details throughout site work and before handover.",
  },
];

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About the Studio"
      title="About Home Life Interiors"
      intro="Home Life Interiors plans warm, functional residential spaces with personalized design guidance and coordinated execution across Noida and Delhi NCR."
    >
      <section className="section section-alt" aria-labelledby="approach-title">
        <div className="container about-page-grid">
          <div>
            <p className="eyebrow">Our Approach</p>
            <h2 id="approach-title" className="section-title">
              Homes designed around how people live
            </h2>
            <p className="body-copy">
              A successful interior should look cohesive, support everyday
              routines, and make good use of the available space. We begin by
              understanding the home, the requirements, and the intended
              budget before developing the design direction.
            </p>
            <p className="body-copy">
              Our service area includes {siteConfig.serviceAreas.join(", ")}.
            </p>
          </div>

          <div className="feature-grid">
            {approachPoints.map((point) => (
              <article key={point.title} className="feature-card">
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="about-process-title">
        <div className="container">
          <div className="process-head">
            <p className="eyebrow">Project Journey</p>
            <h2 id="about-process-title" className="section-title">
              A structured path from idea to execution
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
        </div>
      </section>

      <ContactCta />
    </PageShell>
  );
}
