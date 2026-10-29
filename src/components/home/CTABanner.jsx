import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Package } from "lucide-react";

const EAGLE_LOGO = "https://media.base44.com/images/public/69edd82e4a975eaa5f121f62/03bd86246_ChatGPT_Image_May_7__2026__04_17_01_PM-removebg-preview.png";
const WA_URL = "https://wa.me/2348035239489?text=Hello%20Kay%20Amazing%20Grace%20Global%2C%20I%27m%20interested%20in%20your%20bale%20products.%20Please%20send%20availability%20and%20current%20wholesale%20pricing.";

export default function CTABanner() {
  return (
    <section className="relative py-16 md:py-20 bg-[#0a0a0a] overflow-hidden border-t border-[#B8860B]/20">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#B8860B]/8 blur-3xl rounded-full pointer-events-none" />

      {/* Gold lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#B8860B]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#B8860B]/30 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        {/* Eagle */}
        <div className="flex justify-center mb-6">
          <img src={EAGLE_LOGO} alt="Kay Amazing Grace Global" className="h-24 w-auto object-contain opacity-90" />
        </div>

        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-12 bg-[#B8860B]" />
          <span className="text-[#B8860B] text-[10px] font-bold uppercase tracking-[0.32em]">
            Ready to Order?
          </span>
          <div className="h-px w-12 bg-[#B8860B]" />
        </div>

        <h2 className="text-white font-black text-3xl md:text-4xl uppercase tracking-tight mb-3">
          Start Your <span className="text-[#B8860B]">Wholesale Order</span> Today
        </h2>
        <p className="text-white/50 text-sm md:text-base mb-8 max-w-lg mx-auto leading-relaxed">
          Whether you need a single bale or a full container — chat with us on WhatsApp for instant availability and current wholesale pricing.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {["Contact for Bale Pricing", "Wholesale Only", "Bulk Orders Available"].map(t => (
            <span key={t} className="px-3 py-1 border border-[#B8860B]/30 text-[#B8860B]/70 text-[9px] font-bold uppercase tracking-widest">
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#B8860B] text-black text-[12px] font-black uppercase tracking-widest hover:bg-[#D4A017] transition-colors shadow-xl shadow-[#B8860B]/20"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Order via WhatsApp
          </a>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/15 text-white/70 text-[12px] font-bold uppercase tracking-widest hover:border-[#B8860B]/50 hover:text-[#B8860B] transition-all"
          >
            Browse Bale Categories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}