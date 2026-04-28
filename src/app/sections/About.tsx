import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import Link from "next/link";
import {
  UserGroupIcon,
  CurrencyDollarIcon,
  SparklesIcon,
  ChatBubbleLeftRightIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

export default function About() {
  const benefits = [
    {
      title: "Direct Collaboration",
      text: "Work directly with the developers building your vision. No middlemen, just clear results.",
      icon: <UserGroupIcon className="w-6 h-6" />,
    },
    {
      title: "Affordable Excellence",
      text: "Premium quality shouldn't break the bank. We offer competitive pricing for every stage.",
      icon: <CurrencyDollarIcon className="w-6 h-6" />,
    },
    {
      title: "Focus on Performance",
      text: "We build for speed and conversion, ensuring your site is an asset, not just an expense.",
      icon: <SparklesIcon className="w-6 h-6" />,
    },
    {
      title: "Personalized Support",
      text: "Every project is unique. We provide tailored strategies to help your business thrive.",
      icon: <ChatBubbleLeftRightIcon className="w-6 h-6" />,
    },
  ];

  return (
    <section id="about" className="section-padding bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Why Choose"
          highlightText="ZyForge"
          subtitle="We are your partners in digital growth, committed to delivering excellence without compromise."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 hover:border-orange-500/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg font-syne font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-1 rounded-2xl bg-gradient-to-br from-orange-500/20 to-transparent"
          >
            <div className="glass-card p-10 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-3xl rounded-full" />
              <RocketLaunchIcon className="w-16 h-16 text-orange-500 mx-auto mb-6 animate-float" />
              <h3 className="text-3xl font-syne font-bold text-white mb-4">
                Ready to Scale?
              </h3>
              <p className="text-text-secondary mb-8 max-w-md mx-auto">
                We're currently accepting new projects for Q3. 
                Let's discuss how we can elevate your business today.
              </p>
              <Link 
                href="/start-project"
                className="btn-primary"
              >
                Book a Strategy Call
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
