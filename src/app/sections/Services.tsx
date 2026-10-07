import Link from "next/link";

const services = [
  {
    title: "Custom websites",
    price: "Starting at ₱5,000",
    description: "A website built around your business, content and visitors. Agree the pages and features before development starts.",
    features: ["Responsive layouts", "Search metadata", "Next.js development", "Agreed integrations"],
  },
  {
    title: "E-commerce",
    price: "Starting at ₱12,000",
    description: "Help customers browse products and place orders. Payment, inventory and reporting requirements are scoped for your store.",
    features: ["Product catalogue", "Cart and checkout", "Payment integration", "Order reporting"],
  },
  {
    title: "Interface design and branding",
    price: "Starting at ₱3,500",
    description: "Plan readable pages, useful navigation and a consistent visual identity before the website is built.",
    features: ["Page layouts", "Brand direction", "Interactive prototypes", "Reusable design rules"],
  },
  {
    title: "Website improvements",
    price: "Starting at ₱2,500",
    description: "Review an existing site and identify practical fixes for loading, usability and maintainability.",
    features: ["Performance review", "Mobile fixes", "Accessibility review", "Code maintenance"],
  },
];

export default function Services() {
  return (
    <section id="services" className="business-section">
      <div className="discovery-width">
        <h2>Web development services</h2>
        <p className="business-lead">Choose a starting point. The final quote depends on the agreed scope, content and integrations.</p>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-item" key={service.title}>
              <p className="catalog-purpose">{service.price}</p>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>{service.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
            </article>
          ))}
        </div>
        <Link href="/start-project" className="discovery-link">Discuss your requirements</Link>
      </div>
    </section>
  );
}
