"use client";

import { motion } from "framer-motion";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function CorePreview() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Mini Nav */}
      <nav className="p-6 flex justify-between items-center border-b border-slate-800">
        <div className="text-xl font-bold tracking-tighter">CORE</div>
        <a href="/concepts/core-startup" className="text-sm text-slate-400 hover:text-white flex items-center">
          <ArrowLeftIcon className="w-4 h-4 mr-2" /> Back to concept
        </a>
      </nav>

      {/* Hero Section */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold mb-8"
        >
          v1.0 LAUNCHPAD
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-8 tracking-tight"
        >
          Build your startup <br />
          <span className="text-blue-500">at the speed of light.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-slate-400 mb-12"
        >
          The ultimate landing page concept for founders who need to move fast, 
          look professional, and convert early adopters.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-4"
        >
          <button type="button" disabled title="Illustrative button; this demo does not collect sign-ups." className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold">
            Join the Waitlist
          </button>
          <button type="button" disabled title="Illustrative button." className="border border-slate-700 text-white px-8 py-4 rounded-full font-bold">
            View Demo
          </button>
        </motion.div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Lightning Fast", desc: "Optimized for Core Web Vitals from day one." },
            { title: "Conversion First", desc: "Strategically placed CTAs to drive growth." },
            { title: "Mobile Ready", desc: "Looks stunning on every screen size." }
          ].map((f, i) => (
            <div key={i} className="p-8 rounded-3xl bg-slate-800/50 border border-slate-700">
              <h3 className="text-xl font-bold mb-4">{f.title}</h3>
              <p className="text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-12 text-center text-slate-600 text-sm">
        Core design concept by Zyforge.
      </footer>
    </div>
  );
}
