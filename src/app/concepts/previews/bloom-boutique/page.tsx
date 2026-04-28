"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeftIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";

export default function BloomPreview() {
  return (
    <div className="min-h-screen bg-[#fafaf9] text-[#2d2d2d] font-serif">
      {/* Mini Nav */}
      <nav className="p-8 flex justify-between items-center border-b border-[#e7e7e4]">
        <div className="text-2xl font-light tracking-widest uppercase">BLOOM</div>
        <div className="flex items-center gap-8">
          <Link href="/concepts/bloom-boutique" className="text-sm font-sans text-stone-500 hover:text-stone-900 flex items-center">
            <ArrowLeftIcon className="w-4 h-4 mr-2" /> Back to Blueprint
          </Link>
          <ShoppingBagIcon className="w-6 h-6 text-stone-700" />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-32 px-6 flex flex-col items-center text-center">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-stone-400 font-sans uppercase tracking-[0.3em] text-xs mb-8"
        >
          Summer Collection 2024
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-light mb-12 max-w-4xl"
        >
          Crafted for the <br />
          <span className="italic">conscious soul.</span>
        </motion.h1>
        <motion.button 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-[#2d2d2d] text-white px-12 py-5 font-sans uppercase tracking-widest text-sm hover:bg-stone-800 transition-colors"
        >
          Explore Collection
        </motion.button>
      </section>

      {/* Product Teaser */}
      <section className="px-6 py-24 bg-[#f5f5f4]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="aspect-[3/4] bg-stone-200 flex items-center justify-center text-stone-400 italic">
            [Product Image 1]
          </div>
          <div className="aspect-[3/4] bg-stone-200 flex items-center justify-center text-stone-400 italic">
            [Product Image 2]
          </div>
        </div>
      </section>

      <footer className="py-20 text-center font-sans text-stone-400 text-xs tracking-widest uppercase">
        &copy; 2024 Bloom Boutique. Forged by ZyForge.
      </footer>
    </div>
  );
}
