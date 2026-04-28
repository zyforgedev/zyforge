import { motion } from "framer-motion";
import { ReactNode } from "react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  slug: string;
  image: string | ReactNode;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  category,
  slug,
  image,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card group overflow-hidden flex flex-col"
    >
      <div className="relative h-64 bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center overflow-hidden border-b border-white/10">
        <div className="w-full h-full text-orange-500/30 group-hover:scale-110 transition-all duration-700 flex items-center justify-center">
          {typeof image === 'string' ? (
            <div className="relative w-full h-full">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover object-top brightness-[0.7] group-hover:brightness-[0.8] transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/20" />
            </div>
          ) : (
            <div className="group-hover:text-orange-500/50">
              {image}
            </div>
          )}
        </div>
        
        <div className="absolute top-4 left-4 px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 text-orange-500 text-[10px] uppercase tracking-widest font-bold rounded-full">
          {category}
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-syne font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
          {title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-8">
          {description}
        </p>

        <div className="mt-auto">
          <Link 
            href={`/concepts/${slug}`}
            className="inline-flex items-center text-sm font-bold text-white hover:text-orange-500 transition-colors group/btn"
          >
            View Concept
            <svg className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
