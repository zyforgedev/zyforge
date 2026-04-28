import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeader from "../components/SectionHeader";
import {
  MagnifyingGlassIcon,
  PaintBrushIcon,
  BoltIcon,
  WrenchScrewdriverIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We deep-dive into your goals and target audience to build a strategy that works.",
      icon: <MagnifyingGlassIcon className="w-6 h-6" />,
    },
    {
      number: "02",
      title: "Design",
      description: "Crafting beautiful, intuitive interfaces that represent your brand perfectly.",
      icon: <PaintBrushIcon className="w-6 h-6" />,
    },
    {
      number: "03",
      title: "Development",
      description: "Turning designs into high-performance, responsive code using modern tech.",
      icon: <BoltIcon className="w-6 h-6" />,
    },
    {
      number: "04",
      title: "Optimization",
      description: "Testing and fine-tuning every detail for speed, SEO, and accessibility.",
      icon: <WrenchScrewdriverIcon className="w-6 h-6" />,
    },
    {
      number: "05",
      title: "Launch",
      description: "Deploying your site and providing the support needed for a successful start.",
      icon: <RocketLaunchIcon className="w-6 h-6" />,
    },
  ];

  return (
    <section id="process" className="section-padding bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Our Forge"
          highlightText="Process"
          subtitle="A streamlined approach to turning your ideas into digital reality."
        />

        <div className="relative mt-20">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="w-full lg:w-5/12"
                >
                  <div className="glass-card p-8 group hover:border-orange-500/30 transition-colors">
                    <div className="flex items-center mb-4">
                      <div className="text-orange-500 font-syne font-bold text-4xl opacity-20 mr-4">
                        {step.number}
                      </div>
                      <h3 className="text-2xl font-syne font-bold text-white group-hover:text-orange-500 transition-colors">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>

                {/* Dot */}
                <div className="hidden lg:flex w-2/12 justify-center relative z-10">
                  <div className="w-4 h-4 rounded-full bg-orange-500 shadow-[0_0_15px_rgba(255,107,26,0.5)] border-4 border-[#0a0a0a]" />
                </div>

                {/* Spacer */}
                <div className="hidden lg:block w-5/12" />
              </div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-1 rounded-2xl bg-gradient-to-r from-orange-500/20 to-transparent max-w-2xl mx-auto"
        >
          <div className="glass-card p-10 text-center">
            <h3 className="text-2xl font-syne font-bold text-white mb-4">Ready to forge your site?</h3>
            <p className="text-text-secondary mb-8">
              Let's start the discovery phase today and build something amazing together.
            </p>
            <Link 
              href="/start-project"
              className="btn-primary inline-block"
            >
              Start Your Project
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
