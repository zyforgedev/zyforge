"use client";

import { useActiveSection } from "../hooks/useActiveSection";

// Import sections
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import About from "../sections/About";
import Portfolio from "../sections/Portfolio";
import Process from "../sections/Process";
import Contact from "../sections/Contact";

// Import components
import FloatingNav from "./FloatingNav";

const SECTIONS = ["hero", "services", "about", "portfolio", "process", "contact"];

export default function HomePageClient() {
  const activeSection = useActiveSection(SECTIONS);

  return (
    <>
      <FloatingNav activeSection={activeSection} />
      <main className="relative">
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Process />
        <Contact />
      </main>
    </>
  );
}
