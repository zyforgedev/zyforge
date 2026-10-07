import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";
import Link from "next/link";
import { concepts } from "../data/concepts";

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Design" highlightText="Concepts" subtitle="Original design studies for different website needs. These are demonstrations, rather than paid client case studies." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {concepts.map((project, index) => <ProjectCard key={project.slug} title={project.title} description={project.description} category={project.type} slug={project.slug} image={project.image} index={index} />)}
        </div>
        <div className="text-center mt-16">
          <p className="text-text-secondary mb-6">Have a website in mind?</p>
          <Link href="/start-project" className="btn-primary">Discuss your project</Link>
        </div>
      </div>
    </section>
  );
}
