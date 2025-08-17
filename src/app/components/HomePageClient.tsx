"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Import sections
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import About from "../sections/About";
import Process from "../sections/Process";
import Contact from "../sections/Contact";

// Import components
import FloatingNav from "./FloatingNav";

export default function HomePageClient() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "services", "about", "process", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <FloatingNav activeSection={activeSection} />
      <main className="relative">
        <Hero motion={motion} />
        <Services motion={motion} />
        <About motion={motion} />
        {/* <Portfolio /> */}
        <Process motion={motion} />
        <Contact motion={motion} />
      </main>
    </>
  );
}
