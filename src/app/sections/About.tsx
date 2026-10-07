import Link from "next/link";

const workingPrinciples = [
  { title: "Direct communication", text: "Discuss the work directly with the freelancer building your site." },
  { title: "Agreed scope", text: "Set the pages, deliverables, price and timing before development begins." },
  { title: "Useful by design", text: "Prioritise readable content, clear navigation and the tasks visitors need to complete." },
  { title: "A practical handover", text: "Agree how the site will be delivered and which updates or support are included." },
];

export default function About() {
  return (
    <section id="about" className="business-section business-section-alt">
      <div className="discovery-width">
        <h2>Working with Zyforge</h2>
        <p className="business-lead">A freelance web development business in Cebu, Philippines, with digital tools for everyday work.</p>
        <div className="principle-grid">
          {workingPrinciples.map((principle) => (
            <div key={principle.title}>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </div>
          ))}
        </div>
        <Link href="/start-project" className="discovery-link">Tell us about your website</Link>
      </div>
    </section>
  );
}
