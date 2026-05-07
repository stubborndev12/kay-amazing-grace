import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Package, Users, MapPin, Truck, CheckCircle } from "lucide-react";

const EAGLE_LOGO = "https://media.base44.com/images/public/69edd82e4a975eaa5f121f62/03bd86246_ChatGPT_Image_May_7__2026__04_17_01_PM-removebg-preview.png";
const HERO_BG = "https://media.base44.com/images/public/69edd82e4a975eaa5f121f62/21c869bc8_generated_image.png";
const WA_URL = "https://wa.me/2348035239489?text=Hello%20Kay%20Amazing%20Grace%20Global%2C%20I%27m%20interested%20in%20your%20bale%20products.%20Please%20send%20availability%20and%20current%20wholesale%20pricing.";

const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const TRUST_BADGES = [
  { icon: Package, label: "Wholesale Only" },
  { icon: Users, label: "Bulk Orders Available" },
  { icon: MapPin, label: "Trusted Aba Supplier" },
  { icon: Truck, label: "Nationwide Supply" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] bg-[#080808] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={HERO_BG} alt="Thrift bale warehouse" className="w-full h-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-[#050505]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/60" />
      </div>

      {/* Decorative gold lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#B8860B]/50 to-transparent" />
      <div className="absolute top-[70px] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#B8860B]/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 min-h-[100svh] flex items-center pt-[70px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT: Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              {/* Label */}
              <div className="flex items-center gap-2 mb-6">
                <div className="h-px w-8 bg-[#B8860B]" />
                <span className="text-[#B8860B] text-[11px] font-bold uppercase tracking-[0.32em]">
                  Premium Wholesale Supplier
                </span>
              </div>

              {/* Headline */}
              <h1 className="mb-5 leading-none">
                <span className="block text-white font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight">
                  Premium Okirika &
                </span>
                <span className="block text-[#B8860B] font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight">
                  Thrift Bale Supplier
                </span>
              </h1>

              {/* Sub */}
              <p className="text-white/60 text-sm sm:text-base max-w-md leading-relaxed mb-8">
                We supply carefully selected thrift clothing bales for resellers, retailers, and wholesale buyers across Nigeria.
              </p>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-2 mb-8 max-w-md">
                {TRUST_BADGES.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2 rounded-sm">
                    <Icon className="w-3.5 h-3.5 text-[#B8860B] shrink-0" />
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-white/70">{label}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#B8860B] text-black text-[12px] font-black uppercase tracking-widest hover:bg-[#D4A017] active:scale-95 transition-all shadow-lg shadow-[#B8860B]/20"
                >
                  <WaIcon />
                  Order via WhatsApp
                </a>
                <Link
                  to="/shop"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-white/20 text-white/80 text-[12px] font-bold uppercase tracking-widest hover:border-[#B8860B] hover:text-[#B8860B] active:scale-95 transition-all"
                >
                  View Bale Categories
                </Link>
              </div>
            </motion.div>

            {/* RIGHT: Logo Brand Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="hidden lg:flex flex-col items-center justify-center"
            >
              {/* Logo showcase */}
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[#B8860B]/10 blur-3xl scale-125" />
                <img
                  src={EAGLE_LOGO}
                  alt="Kay Amazing Grace Global"
                  className="relative w-80 h-80 object-contain drop-shadow-2xl"
                />
              </div>

              {/* Badge strip */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="mt-4 flex items-center gap-3 px-6 py-3.5 bg-[#B8860B]/10 border border-[#B8860B]/30 backdrop-blur-sm"
              >
                <Package className="w-5 h-5 text-[#B8860B]" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#B8860B]">
                    Wholesale · Resellers · Bulk Buyers
                  </p>
                  <p className="text-[10px] text-white/40 uppercase tracking-wider mt-0.5">
                    Your Reliable Okirika Bale Partner
                  </p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
      >
        <div className="w-px h-8 bg-gradient-to-b from-[#B8860B]/60 to-transparent" />
      </motion.div>
    </section>
  );
}