"use client";

import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import AnimatedSection from "../components/AnimatedSection";
import SectionHeader from "../components/SectionHeader";
import IconWithText from "../components/IconWithText";
import Card from "../components/Card";
import CTAButton from "../components/CTAButton";

export default function About() {
  const { isVisible, sectionRef } = useIntersectionObserver();

  const benefits = [
    {
      text: "No upfront payment — risk-free for you",
      icon: "🛡️",
    },
    {
      text: "Mobile-first, SEO-friendly designs",
      icon: "📱",
    },
    {
      text: "Affordable packages for startups & small businesses",
      icon: "💰",
    },
    {
      text: "Clear communication & fast turnaround times",
      icon: "⚡",
    },
  ];

  return (
    <AnimatedSection id="about" backgroundColor="#1E1E1E" ref={sectionRef}>
      <SectionHeader
        title="Why Choose"
        highlightText="ZyForge"
        subtitle=""
        isVisible={isVisible}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div
          className={`space-y-6 ${
            isVisible ? "animate-fadeInLeft" : "loading"
          }`}
        >
          {benefits.map((item, index) => (
            <IconWithText
              key={index}
              icon={item.icon}
              text={item.text}
              animationDelay={`${index * 0.1}s`}
            />
          ))}
        </div>

        <div
          className={`relative ${
            isVisible ? "animate-fadeInRight" : "loading"
          }`}
        >
          <div className="gradient-border p-6 sm:p-8 text-center">
            <div className="text-4xl sm:text-6xl mb-4">🚀</div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Launch?
            </h3>
            <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
              From sleek landing pages to powerful web applications, ZyForge
              helps bring your ideas to life — on time, on budget, and built to
              perform.
            </p>
            <CTAButton
              targetSection="contact"
              className="w-full sm:w-auto text-sm sm:text-base px-6 py-3"
            >
              Get Started Today
            </CTAButton>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
