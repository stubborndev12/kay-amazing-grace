import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Package, Users, MapPin, Truck } from "lucide-react";
import { SOCIAL_LINKS, FacebookIcon, InstagramIcon, TikTokIcon } from "@/lib/social.jsx";

const EAGLE_LOGO = "https://media.base44.com/images/public/69edd82e4a975eaa5f121f62/03bd86246_ChatGPT_Image_May_7__2026__04_17_01_PM-removebg-preview.png";
const HERO_BG = "https://media.base44.com/images/public/69edd82e4a975eaa5f121f62/1bf9f2672_generated_image.png";
const WA_URL = "https://wa.me/2348035239489?text=Hello%20Kay%20Amazing%20Grace%20Global%2C%20I%27m%20interested%20in%20your%20bale%20products.%20Please%20send%20availability%20and%20current%20wholesale%20pricing.";

const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const TRUST_BADGES = [
  { icon: Package, label: "Wholesale Only" },
  { icon: Users, label: "Resellers Welcome" },
  { icon: MapPin, label: "Based in Aba" },
  { icon: Truck, label: "Nationwide Delivery" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] bg-[#080808] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={HERO_BG} alt="Thrift bale warehouse" className="w-full h-full object-cover opacity-55" />
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
              {/* Brand Label */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="h-px w-8 bg-[#B8860B]" />
                  <span className="text-white font-bold text-[15px] tracking-wide">Kay Amazing Grace Global</span>
                </div>
                <p className="text-[#B8860B] text-[10px] font-semibold uppercase tracking-[0.28em] pl-10">
                  Quality Okirika &amp; Thrift Bales — Aba, Nigeria
                </p>
              </div>

              {/* Headline */}
              <h1 className="mb-5 leading-none">
                <span className="block text-white font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight">
                  Quality Okirika &
                </span>
                <span className="block text-[#B8860B] font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight">
                  Thrift Bales
                </span>
              </h1>

              {/* Sub */}
              <p className="text-white/60 text-sm sm:text-base max-w-md leading-relaxed mb-2">
                Available for Resellers &amp; Bulk Buyers
              </p>
              <p className="text-white/40 text-sm max-w-md leading-relaxed mb-8">
                Contact us on WhatsApp for current bale availability and pricing. We supply across Nigeria from Aba.
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

              {/* Social Follow Row */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-semibold whitespace-nowrap">Follow Bale Arrivals</span>
                <div className="h-px flex-1 bg-white/10 max-w-[40px]" />
                {[
                  { href: SOCIAL_LINKS.instagram, icon: InstagramIcon, label: "Instagram" },
                  { href: SOCIAL_LINKS.tiktok, icon: TikTokIcon, label: "TikTok" },
                  { href: SOCIAL_LINKS.facebook, icon: FacebookIcon, label: "Facebook" },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-7 h-7 flex items-center justify-center border border-white/15 text-white/40 hover:text-[#B8860B] hover:border-[#B8860B]/50 transition-all duration-200"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
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

            {/* RIGHT: Warehouse Image + Brand Overlay */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="hidden lg:block relative"
            >
              {/* Main warehouse image */}
              <div className="relative rounded-sm overflow-hidden border border-[#B8860B]/20 shadow-2xl shadow-black/60">
                <img
                  src="https://media.base44.com/images/public/69edd82e4a975eaa5f121f62/744c46cc8_generated_image.png"
                  alt="Kay Amazing Grace Global Warehouse"
                  className="w-full h-[460px] object-cover"
                />
                {/* Dark overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/20" />

                {/* Gold corner accents */}
                <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[#B8860B]" />
                <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-[#B8860B]" />
                <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-[#B8860B]" />
                <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[#B8860B]" />

                {/* Eagle logo overlay */}
                <div className="absolute top-4 right-4">
                  <img src={EAGLE_LOGO} alt="Kay Amazing Grace Global" className="w-20 h-20 object-contain drop-shadow-2xl opacity-90" />
                </div>

              </div>
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