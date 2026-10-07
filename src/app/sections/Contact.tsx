import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="business-section business-section-alt">
      <div className="discovery-width">
        <h2>Tell us what you need.</h2>
        <p className="business-lead">Share the website you have in mind, your budget and your timeline. For a quick question, use email or the Zyforge Facebook Page.</p>
        <div className="discovery-actions">
          <Link href="/start-project" className="btn-primary">Start a project inquiry</Link>
          <a href="mailto:zyforge.dev@gmail.com" className="btn-secondary">Email Zyforge</a>
        </div>
        <div className="contact-details">
          <a className="discovery-link" href="mailto:zyforge.dev@gmail.com">zyforge.dev@gmail.com</a>
          <a className="discovery-link" href="https://www.facebook.com/profile.php?id=61579057059331">Zyforge on Facebook</a>
          <p>Cebu City, Philippines</p>
        </div>
        <footer className="discovery-footer">
          <span>© {new Date().getFullYear()} Zyforge</span>
          <Link href="/products">Digital products</Link>
          <Link href="/legal/privacy-policy">Privacy policy</Link>
          <Link href="/legal/terms-and-conditions">Terms and conditions</Link>
        </footer>
      </div>
    </section>
  );
}
