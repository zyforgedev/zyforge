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
      title: "Custom Website Development",
      description:
        "From simple landing pages to full-featured websites, I build sites that are fast, responsive, and tailored to your needs.",
      icon: "🎨",
      features: [
        "Responsive Design",
        "Custom UI/UX",
        "Content Management",
        "Performance Optimized",
      ],
      price: "Starts at ₱1,000",
    },
    {
      title: "E-commerce Solutions",
      description:
        "Sell your products online with a beautiful and easy-to-use e-commerce website.",
      icon: "🛒",
      features: [
        "Shopify Integration",
        "Payment Gateway Setup",
        "Product Management",
        "Secure Checkout",
      ],
      price: "Starts at ₱5,000",
    },
    {
      title: "Website Maintenance & Support",
      description:
        "Keep your website running smoothly with ongoing maintenance and support.",
      icon: "🔧",
      features: [
        "Regular Backups",
        "Security Updates",
        "Content Updates",
        "Performance Monitoring",
      ],
      price: "Starts at ₱500 / month",
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

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
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

            <div className="mt-6 text-center">
              <p className="text-lg font-bold text-orange-400">
                {service.price}
              </p>
            </div>

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
