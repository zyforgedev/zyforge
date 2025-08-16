"use client";

import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import AnimatedSection from "../components/AnimatedSection";
import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";
import CTAButton from "../components/CTAButton";
import {
  ShoppingCartIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/outline";

export default function Portfolio() {
  const { isVisible, sectionRef } = useIntersectionObserver();

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Modern online store with payment integration and inventory management",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      category: "Web App",
      image: <ShoppingCartIcon className="w-16 h-16 text-primary-cyan" />,
    },
    {
      title: "Corporate Website",
      description:
        "Professional business website with CMS and SEO optimization",
      tech: ["WordPress", "PHP", "MySQL", "SEO"],
      category: "Website",
      image: <BuildingOfficeIcon className="w-16 h-16 text-primary-cyan" />,
    },
    {
      title: "SaaS Dashboard",
      description: "Analytics dashboard with real-time data visualization",
      tech: ["Next.js", "TypeScript", "D3.js", "API"],
      category: "Web App",
      image: <ChartBarIcon className="w-16 h-16 text-primary-cyan" />,
    },
    {
      title: "Portfolio Website",
      description: "Creative portfolio showcase for digital artist",
      tech: ["React", "Framer Motion", "Tailwind", "CMS"],
      category: "Portfolio",
      image: <PaintBrushIcon className="w-16 h-16 text-primary-cyan" />,
    },
  ];

  return (
    <AnimatedSection id="portfolio" backgroundColor="#2F2F2F" ref={sectionRef}>
      <SectionHeader
        title="Recent"
        highlightText="Work"
        subtitle="Showcasing successful projects that drive results for our clients"
        isVisible={isVisible}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            index={index}
            isVisible={isVisible}
          />
        ))}
      </div>

      <div
        className={`text-center mt-12 sm:mt-16 ${
          isVisible ? "animate-fadeInUp" : "loading"
        }`}
        style={{ animationDelay: "0.8s" }}
      >
        <p className="text-base sm:text-lg text-gray-300 mb-6">
          Want to see more examples or discuss your project?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-secondary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
            View All Projects
          </button>
          <CTAButton
            targetSection="contact"
            className="text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
          >
            Start Your Project
          </CTAButton>
        </div>
      </div>
    </AnimatedSection>
  );
}
