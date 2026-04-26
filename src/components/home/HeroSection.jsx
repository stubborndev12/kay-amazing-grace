import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageCircle, ArrowRight, MapPin, CheckCircle } from "lucide-react";
import { getWhatsAppGeneralUrl } from "@/lib/constants";

const TRUST_BADGES = [
  "Grade A+ Quality",
  "Retail & Bulk Available",
  "Based in Aba, Nigeria",
];

export default function HeroSection({ heroImage }) {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-gray-900">
      {/* Background image with subtle zoom */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      >
        <img
          src={heroImage}
          alt="Kay Amazing Grace Global — Quality Thrift & Okirika Bales"
          className="w-full h-full object-cover"
        />
        {/* Layered gradient: bottom-heavy for text legibility, slight top shade for navbar */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 min-h-[100svh] flex flex-col justify-end pb-12 md:pb-20 px-4 sm:px-6 max-w-6xl mx-auto pt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Brand name label */}
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-3.5 h-3.5 text-[#B8860B]" />
            <span className="text-[11px] uppercase tracking-[0.28em] text-[#B8860B] font-semibold">
              Kay Amazing Grace Global — Aba, Nigeria
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-white leading-tight mb-4">
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight">
              Quality Okirika
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight">
              & Thrift Bales
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl font-light italic text-[#B8860B] mt-1">
              You Can Trust.
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-white/70 text-sm sm:text-base max-w-xl leading-relaxed mb-8">
            We supply carefully selected thrift wear, okirika pieces, and clothing bales —
            perfect for personal use and resale. Available in Aba and delivered beyond.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            {/* WhatsApp — primary, most prominent */}
            <a
              href={getWhatsAppGeneralUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#25D366] text-white text-sm font-bold uppercase tracking-wider rounded-sm hover:bg-[#20BD5A] active:scale-95 transition-all duration-200 shadow-lg shadow-[#25D366]/30"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5 w-[18px] h-[18px]">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Order on WhatsApp
            </a>

            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 text-white border border-white/30 text-sm font-semibold uppercase tracking-wider rounded-sm hover:bg-white/20 active:scale-95 transition-all duration-200 backdrop-blur-sm"
            >
              Browse Collection
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-3">
            {TRUST_BADGES.map((badge) => (
              <div key={badge} className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-[#B8860B] shrink-0" />
                <span className="text-[11px] text-white/70 font-medium">{badge}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
      >
        <div className="w-px h-8 bg-white/20" />
        <span className="text-[9px] uppercase tracking-[0.25em] text-white/30">Scroll</span>
      </motion.div>
    </section>
  );
}