"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowLeftIcon, 
  SparklesIcon,
  GlobeAltIcon,
  PaintBrushIcon,
  RocketLaunchIcon
} from "@heroicons/react/24/outline";

const CONCEPT_DATA: Record<string, any> = {
  "core-startup": {
    title: "Core: Startup Launchpad",
    type: "Startup Concept",
    description: "A conversion-focused concept designed for new startups needing a high-impact, professional landing page to secure their first users.",
    features: ["Conversion-Optimized CTA", "Feature Showcases", "Waitlist Integration", "Responsive Core"],
    vision: "To give emerging startups the professional edge they need to compete with established players.",
    image: "/Concepts/Core/Core.png"
  },
  "bloom-boutique": {
    title: "Bloom: Boutique Storefront",
    type: "E-commerce Concept",
    description: "A warm, elegant e-commerce concept for local boutiques and craft brands wanting a premium shopping experience.",
    features: ["Curated Product Grids", "Mobile-First Shopping", "Secure Checkout Experience", "Brand Story Pages"],
    vision: "Bringing the intimacy and beauty of a local boutique into a high-performance digital storefront.",
    image: "/Concepts/Bloom/Bloom.png"
  },
  "authority-business": {
    title: "Authority: Small Business Hub",
    type: "Business Concept",
    description: "A clean, trustworthy digital home for service-based small businesses looking to establish a professional online presence.",
    features: ["Service Bookings", "Client Testimonials", "Trust-Building Layouts", "Direct Contact Focus"],
    vision: "Establishing the digital authority every small business needs to attract and retain high-quality clients.",
    image: "/Concepts/Authority/Authority.png"
  },
  "studio-portfolio": {
    title: "Studio: Creator Portfolio",
    type: "Creative Concept",
    description: "A minimalist, storytelling-first concept for freelancers and creative studios to showcase their best work beautifully.",
    features: ["Full-Width Media", "Interactive Projects", "Simple Navigation", "High-Impact Typography"],
    vision: "A digital stage built specifically for creators who need their work to take center stage.",
    image: "/Concepts/Studio/Studio.png"
  }
};

export default function ConceptPage() {
  const params = useParams();
  const slug = params.slug as string;
  const data = CONCEPT_DATA[slug] || CONCEPT_DATA["nova-saas"];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Header */}
      <nav className="p-8">
        <Link href="/" className="inline-flex items-center text-text-muted hover:text-orange-500 transition-colors">
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Back to ZyForge
        </Link>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-bold uppercase tracking-widest">
              {data.type}
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-syne font-bold leading-tight">
              {data.title.split(":")[0]} <br />
              <span className="gradient-text">{data.title.split(":")[1]}</span>
            </h1>

            <p className="text-xl text-text-secondary leading-relaxed max-w-xl">
              {data.description}
            </p>

            <div className="space-y-6 pt-8">
              <h3 className="text-lg font-bold text-white flex items-center">
                <SparklesIcon className="w-5 h-5 text-orange-500 mr-3" />
                The Concept Vision
              </h3>
              <p className="text-text-muted leading-relaxed">
                {data.vision}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-8">
              <Link 
                href={`/concepts/previews/${slug}`}
                className="btn-primary"
              >
                View Live Preview
              </Link>
              <Link href="/start-project" className="btn-secondary">
                Forge a Similar Site
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="glass-card p-2 relative z-10 overflow-hidden aspect-[4/3] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent" />
              <div className="relative w-full h-full">
                <img 
                  src={data.image} 
                  alt={data.title} 
                  className="w-full h-full object-cover object-top rounded-xl brightness-[0.7] group-hover:brightness-[0.8] transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 pointer-events-none" />
              </div>
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <div className="text-center p-8">
                  <h2 className="text-2xl font-syne font-bold text-white mb-4">Interactive Preview</h2>
                  <p className="text-text-secondary text-sm">
                    This concept is a "Live Blueprint". We can deploy a fully functional version of this design for your brand within 14 days.
                  </p>
                </div>
              </div>
            </div>

            {/* Background Glows */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-orange-500/20 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none" />
          </motion.div>
        </div>
      </main>
    </div>
  );
}
