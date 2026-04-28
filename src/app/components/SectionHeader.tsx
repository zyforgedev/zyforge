import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  highlightText: string;
  subtitle?: string;
}

export default function SectionHeader({
  title,
  highlightText,
  subtitle,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl sm:text-5xl font-syne font-bold mb-6 text-white tracking-tight">
        {title} <span className="gradient-text">{highlightText}</span>
      </h2>
      <div className="w-16 h-1 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full" />
      {subtitle && (
        <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
