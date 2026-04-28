import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import Link from "next/link";
import {
  CodeBracketIcon,
  RocketLaunchIcon,
  PaintBrushIcon,
  ShieldCheckIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from "@heroicons/react/24/outline";

interface Service {
  title: string;
  description: string;
  longDescription: string;
  icon: React.ReactNode;
  features: string[];
  priceRange: string;
}

export default function Services() {
  const services: Service[] = [
    {
      title: "Custom Web Forge",
      description: "High-performance websites built from the ground up.",
      longDescription: "We don't do generic. Every line of code is written to ensure your site is lightning fast, SEO-optimized, and perfectly aligned with your brand.",
      icon: <CodeBracketIcon className="w-8 h-8" />,
      features: ["Next.js Performance", "SEO Architecture", "Responsive Design", "API Integration"],
      priceRange: "Starting at ₱5,000",
    },
    {
      title: "E-Commerce Systems",
      description: "Scalable storefronts that turn visitors into customers.",
      longDescription: "Complete digital commerce solutions including inventory management, secure payment gateways, and conversion-focused user journeys.",
      icon: <RocketLaunchIcon className="w-8 h-8" />,
      features: ["Stripe/PayMongo", "Inventory Sync", "Cart Optimization", "Sales Analytics"],
      priceRange: "Starting at ₱12,000",
    },
    {
      title: "UI/UX & Branding",
      description: "Visual identities forged for the modern digital era.",
      longDescription: "Beyond just looking good. We design intuitive interfaces that guide your users and visual identities that command authority in your niche.",
      icon: <PaintBrushIcon className="w-8 h-8" />,
      features: ["User Psychology", "Brand Strategy", "Interactive Prototyping", "Design Systems"],
      priceRange: "Starting at ₱3,500",
    },
    {
      title: "Tech Optimization",
      description: "Revitalize your existing digital assets.",
      longDescription: "Is your site slow or outdated? We perform deep technical audits and optimizations to bring your legacy sites into the high-performance era.",
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      features: ["Speed Audits", "Core Web Vitals", "Security Hardening", "Legacy Refactoring"],
      priceRange: "Starting at ₱2,500",
    },
  ];

  return (
    <section id="services" className="section-padding bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Service"
          highlightText="Expertise"
          subtitle="Precision engineering for every digital touchpoint. We don't just build websites; we forge competitive advantages."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 group hover:border-orange-500/30 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="w-16 h-16 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-syne font-bold text-white mb-4 leading-tight">
                    {service.title}
                  </h3>
                  <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-orange-500 text-xs font-bold uppercase tracking-widest">
                    {service.priceRange}
                  </div>
                </div>

                <div className="md:w-2/3 space-y-6">
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {service.longDescription}
                  </p>
                  
                  <div className="space-y-3">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-text-muted">Core Features</p>
                    <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                      {service.features.map((f, i) => (
                        <li key={i} className="text-xs text-white flex items-center">
                          <span className="w-1 h-1 rounded-full bg-orange-500 mr-2" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 glass-card p-12 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-500/5 to-transparent pointer-events-none" />
          <h3 className="text-3xl font-syne font-bold text-white mb-4">Have a unique requirement?</h3>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Our expertise isn't limited to the above. We forge custom solutions for local businesses, innovative startups, and individual entrepreneurs.
          </p>
          <Link href="/start-project" className="btn-primary">Request a Custom Quote</Link>
        </motion.div>
      </div>
    </section>
  );
}
