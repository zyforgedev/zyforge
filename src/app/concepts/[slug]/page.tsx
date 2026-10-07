import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { concepts, findConcept } from "../../data/concepts";
import SiteHeader from "../../components/SiteHeader";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return concepts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const concept = findConcept(slug);
  if (!concept) return { title: "Concept not found | Zyforge", robots: { index: false, follow: false } };
  return {
    title: `${concept.title} | Zyforge Design Concept`,
    description: concept.description,
    alternates: { canonical: `/concepts/${slug}` },
    openGraph: {
      title: concept.title,
      description: concept.description,
      url: `https://zyforge.com/concepts/${slug}`,
      siteName: "Zyforge",
      type: "website",
      images: [{ url: concept.image, alt: concept.title }],
    },
  };
}

export default async function ConceptPage({ params }: PageProps) {
  const { slug } = await params;
  const concept = findConcept(slug);
  if (!concept) notFound();
  return (
    <>
      <SiteHeader />
      <main className="discovery-width concept-main">
        <Link href="/#portfolio" className="discovery-link">All design concepts</Link>
        <h1 className="font-syne">{concept.title}</h1>
        <p className="catalog-lead">{concept.description}</p>
        <p className="concept-disclosure">This is an original design study, not a client case study or a working business. Preview content is illustrative; checkout, bookings and other business integrations require a real implementation.</p>
        <Image src={concept.image} width={1200} height={900} alt={`${concept.title} design preview`} className="concept-image" priority />
        <div className="concept-details">
          <section><h2>Design purpose</h2><p>{concept.vision}</p></section>
          <section><h2>Layouts explored</h2><ul>{concept.features.map(feature => <li key={feature}>{feature}</li>)}</ul></section>
        </div>
        <div className="discovery-actions"><a href={`/concepts/previews/${slug}`} className="btn-primary">Open the concept demo</a><Link href="/start-project" className="btn-secondary">Discuss a website for your business</Link></div>
        <footer className="discovery-footer"><Link href="/">Zyforge home</Link><Link href="/products">Digital products</Link></footer>
      </main>
    </>
  );
}
