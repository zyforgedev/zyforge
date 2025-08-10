"use client";

import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import AnimatedSection from "../components/AnimatedSection";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import FeatureList from "../components/FeatureList";
import CTAButton from "../components/CTAButton";

export default function Services() {
  const { isVisible, sectionRef } = useIntersectionObserver();

  const services = [
    {
      title: "Custom Website Design & Development",
      description:
        "Bespoke websites tailored to your brand and business needs with modern design principles",
      icon: "🎨",
      features: [
        "Responsive Design",
        "Custom UI/UX",
        "Brand Integration",
        "Performance Optimized",
      ],
    },
    {
      title: "Web App Development",
      description:
        "Scalable web applications built with cutting-edge frameworks and technologies",
      icon: "⚡",
      features: [
        "React/Next.js",
        "Database Integration",
        "API Development",
        "Real-time Features",
      ],
    },
    {
      title: "WordPress & CMS Solutions",
      description:
        "Easy-to-manage content management systems that empower your team",
      icon: "📝",
      features: [
        "Custom Themes",
        "Plugin Development",
        "SEO Optimization",
        "Training Included",
      ],
    },
    {
      title: "Website Optimization & Maintenance",
      description:
        "Keep your site fast, secure, and running smoothly with ongoing support",
      icon: "🔧",
      features: [
        "Speed Optimization",
        "Security Updates",
        "Content Updates",
        "24/7 Monitoring",
      ],
    },
  ];

  return (
    <AnimatedSection id="services" backgroundColor="#2F2F2F" ref={sectionRef}>
      <SectionHeader
        title="Services"
        highlightText="Offered"
        subtitle="Comprehensive web development solutions designed to elevate your digital presence"
        isVisible={isVisible}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8">
        {services.map((service, index) => (
          <Card
            key={index}
            className="service-card"
            isVisible={isVisible}
            animationDelay={`${index * 0.15}s`}
          >
            <div className="flex items-start mb-6">
              <div className="text-3xl sm:text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white group-hover:text-orange-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>

            <FeatureList features={service.features} />

            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
          </Card>
        ))}
      </div>

      <div
        className={`text-center mt-12 sm:mt-16 ${
          isVisible ? "animate-fadeInUp" : "loading"
        }`}
        style={{ animationDelay: "0.8s" }}
      >
        <p className="text-base sm:text-lg text-gray-300 mb-6">
          Need something specific? Let's discuss your custom requirements.
        </p>
        <CTAButton
          targetSection="contact"
          className="text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
        >
          Get Custom Quote
        </CTAButton>
      </div>
    </AnimatedSection>
  );
}
