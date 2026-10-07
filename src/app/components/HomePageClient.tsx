"use client";

import { useActiveSection } from "../hooks/useActiveSection";

// Import sections
import Hero from "../sections/HeroIntro";
import Services from "../sections/Services";
import About from "../sections/About";
import Portfolio from "../sections/Portfolio";
import Process from "../sections/Process";
import Contact from "../sections/Contact";
import Products from "../sections/Products";
import { MotionConfig } from "framer-motion";

// Import components
import SiteHeader from "./SiteHeader";

const SECTIONS = ["hero", "products", "services", "about", "portfolio", "process", "contact"];

export default function HomePageClient() {
  const activeSection = useActiveSection(SECTIONS);

  return (
    <MotionConfig reducedMotion="user">
      <SiteHeader activeSection={activeSection} />
      <main className="relative">
        <Hero />
        <Products />
        <Services />
        <About />
        <Portfolio />
        <Process />
        <Contact />
      </main>
    </MotionConfig>
  );
}
