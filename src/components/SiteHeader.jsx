export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a href="/" className="brand-link" aria-label="Home Life Interiors home">
          <span className="brand-name">Home Life Interiors</span>
          <span className="brand-tag">Luxury Interior Design</span>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          <a href="/about/">About</a>
          <a href="/services/">Services</a>
          <a href="/projects/">Projects</a>
          <a href="/#process">Process</a>
          <a href="/contact/">Contact</a>
        </nav>

        <a href="/contact/" className="btn btn-outline">
          Book Consultation
        </a>
      </div>
    </header>
  );
}
