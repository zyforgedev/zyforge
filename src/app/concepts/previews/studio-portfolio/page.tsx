"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function StudioPreview() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* Mini Nav */}
      <nav className="p-8 mix-blend-difference fixed top-0 w-full z-50 flex justify-between items-center">
        <div className="text-xl font-bold uppercase tracking-tighter">STUDIO.</div>
        <Link href="/concepts/studio-portfolio" className="text-sm font-medium hover:line-through flex items-center">
          <ArrowLeftIcon className="w-4 h-4 mr-2" /> Back to Blueprint
        </Link>
      </nav>

      {/* Full Screen Hero */}
      <section className="h-screen flex flex-col justify-center px-8 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "circOut" }}
        >
          <span className="text-xs uppercase tracking-widest text-zinc-500 mb-6 block">Visual Storyteller & Creator</span>
          <h1 className="text-[12vw] font-black leading-[0.8] mb-12 uppercase tracking-tighter">
            Digital <br />
            Architect
          </h1>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-md text-zinc-500 leading-relaxed text-sm"
        >
          A portfolio concept for creators who let their work do the talking. 
          Minimalist interface. Maximum visual impact. Built for the modern creator.
        </motion.p>
      </section>

      {/* Large Image Scroll */}
      <section className="py-24 px-8 lg:px-24 space-y-24">
        <div className="aspect-video bg-zinc-900 flex items-center justify-center text-zinc-800 text-6xl font-black italic">
          PROJECT ONE
        </div>
        <div className="aspect-video bg-zinc-900 flex items-center justify-center text-zinc-800 text-6xl font-black italic">
          PROJECT TWO
        </div>
      </section>

      <footer className="p-24 text-center border-t border-zinc-900">
        <div className="text-4xl font-bold mb-8 hover:line-through cursor-pointer tracking-tighter">LET'S CREATE.</div>
        <div className="text-zinc-500 text-[10px] uppercase tracking-widest">
          &copy; 2024 Studio Concept. Forged by ZyForge.
        </div>
      </footer>
    </div>
  );
}
