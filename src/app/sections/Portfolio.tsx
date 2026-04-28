import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";
import Link from "next/link";

export default function Portfolio() {
  const concepts = [
    {
      title: "Core: Startup Launchpad",
      description: "A conversion-focused concept designed for new startups needing a high-impact, professional landing page to secure their first users.",
      category: "Startup Concept",
      slug: "core-startup",
      image: "/Concepts/Core/Core.png",
    },
    {
      title: "Bloom: Boutique Storefront",
      description: "A warm, elegant e-commerce concept for local boutiques and craft brands wanting a premium shopping experience.",
      category: "E-commerce Concept",
      slug: "bloom-boutique",
      image: "/Concepts/Bloom/Bloom.png",
    },
    {
      title: "Authority: Small Business Hub",
      description: "A clean, trustworthy digital home for service-based small businesses looking to establish a professional online presence.",
      category: "Business Concept",
      slug: "authority-business",
      image: "/Concepts/Authority/Authority.png",
    },
    {
      title: "Studio: Creator Portfolio",
      description: "A minimalist, storytelling-first concept for freelancers and creative studios to showcase their best work beautifully.",
      category: "Creative Concept",
      slug: "studio-portfolio",
      image: "/Concepts/Studio/Studio.png",
    },
  ];

  return (
    <section id="portfolio" className="section-padding bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Design"
          highlightText="Concepts"
          subtitle="A glimpse into the standards we set. These concepts showcase our design philosophy and technical depth."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {concepts.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              index={index}
            />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-text-secondary mb-8">Inspired by these concepts?</p>
          <Link href="/start-project" className="btn-primary">Forge Your Own Vision</Link>
        </motion.div>
      </div>
    </section>
  );
}
