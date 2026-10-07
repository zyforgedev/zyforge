import Link from "next/link";

export default function HeroIntro() {
  return (
    <section id="hero" className="discovery-hero">
      <div className="discovery-width">
        <h1 className="font-syne">Websites and tools that fit your work.</h1>
        <p>Cebu-based freelance web development for startups and small businesses in the Philippines. Choose a custom website, or start with a practical spreadsheet you can use yourself.</p>
        <div className="discovery-actions">
          <Link href="/start-project" className="btn-primary">Discuss your website</Link>
          <Link href="/products" className="btn-secondary">Browse digital products</Link>
        </div>
        <p className="discovery-payment">Custom development has no upfront payment. Scope, timing and price are agreed for your project.</p>
      </div>
    </section>
  );
}
