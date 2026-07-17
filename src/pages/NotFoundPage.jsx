import PageShell from "../components/PageShell";

export default function NotFoundPage() {
  return (
    <PageShell
      eyebrow="Page Not Found"
      title="We could not find that page"
      intro="The address may have changed, or the page may no longer be available."
    >
      <section className="section section-alt">
        <div className="container centered-content">
          <a href="/" className="btn btn-gold">
            Return to Home
          </a>
        </div>
      </section>
    </PageShell>
  );
}
