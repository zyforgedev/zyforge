import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import Link from "next/link";

export default function Contact() {

  return (
    <section id="contact" className="section-padding bg-[#050505] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="glass-card p-12 sm:p-20 text-center border-orange-500/20">
          <SectionHeader
            title="Ready to Forge Your"
            highlightText="Digital Legacy?"
            subtitle="Take the first step towards a premium web presence. Start our discovery process today."
          />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <Link href="/start-project" className="btn-primary text-lg px-10 py-5">
              Start Project Discovery
            </Link>
            <a 
              href="mailto:zyforge.dev@gmail.com" 
              className="btn-secondary text-lg px-10 py-5"
            >
              Quick Inquiry
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 border-t border-white/5 pt-12">
            <div>
              <p className="text-xs text-text-muted uppercase tracking-widest mb-2 font-bold">Email Us</p>
              <p className="text-white font-medium">zyforge.dev@gmail.com</p>
            </div>
            <div>
              <p className="text-xs text-text-muted uppercase tracking-widest mb-2 font-bold">Response Time</p>
              <p className="text-white font-medium">Within 24 Hours</p>
            </div>
            <div>
              <p className="text-xs text-text-muted uppercase tracking-widest mb-2 font-bold">Location</p>
              <p className="text-white font-medium">Cebu City, Philippines</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-24 pt-12 border-t border-white/5 text-center">
          <div className="mb-8">
            <h2 className="text-3xl font-syne font-bold text-white mb-2">ZyForge</h2>
            <p className="text-text-secondary">Forging digital excellence, one project at a time.</p>
          </div>
          <div className="text-text-muted text-sm space-x-6">
            <span>&copy; {new Date().getFullYear()} ZyForge.</span>
            <Link href="/legal/privacy-policy" className="hover:text-orange-500 transition-colors">Privacy Policy</Link>
            <Link href="/legal/terms-and-conditions" className="hover:text-orange-500 transition-colors">Terms & Conditions</Link>
          </div>
        </footer>
      </div>
    </section>
  );
}
