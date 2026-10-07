import Link from "next/link";

const steps = [
  { title: "Define the work", text: "Discuss the audience, pages, required features, budget and timeline." },
  { title: "Review the design", text: "Check the proposed layout and content direction before implementation." },
  { title: "Build the site", text: "Develop the agreed pages and integrations, with progress to review." },
  { title: "Check the result", text: "Review mobile layouts, key tasks, content and deployment requirements." },
  { title: "Launch and hand over", text: "Publish the approved site and complete the agreed handover and support." },
];

export default function Process() {
  return (
    <section id="process" className="business-section">
      <div className="discovery-width">
        <h2>From inquiry to launch</h2>
        <p className="business-lead">Each project starts with a scope and a quote. Sending an inquiry does not commit you to a purchase.</p>
        <ol className="business-process">
          {steps.map((step, index) => (
            <li key={step.title}>
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <div><h3>{step.title}</h3><p>{step.text}</p></div>
            </li>
          ))}
        </ol>
        <Link href="/start-project" className="discovery-link">Start a project inquiry</Link>
      </div>
    </section>
  );
}
