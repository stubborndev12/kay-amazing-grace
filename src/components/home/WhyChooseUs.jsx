import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Tag, MapPin, MessageCircle, Package, Star, Award, Globe } from "lucide-react";

const WA_URL = "https://wa.me/2348035239489?text=Hello%20Kay%20Amazing%20Grace%20Global%2C%20I%27m%20interested%20in%20your%20bale%20products.%20Please%20send%20availability%20and%20current%20wholesale%20pricing.";

const STATS = [
  { value: "500+", label: "Wholesale Buyers" },
  { value: "50+", label: "Bale Categories" },
  { value: "10+", label: "Years in Business" },
  { value: "36", label: "States Supplied" },
];

const REASONS = [
  {
    icon: ShieldCheck,
    title: "Hand-Inspected Quality",
    description: "Every bale is personally inspected before supply. Only Grade A+ thrift wear leaves our warehouse.",
  },
  {
    icon: Package,
    title: "Bales for Every Reseller",
    description: "Mixed bags, Korea bales, coded bales — we have the right product for every category of reseller.",
  },
  {
    icon: MapPin,
    title: "Aba Supply Hub",
    description: "Based in Nigeria's #1 thrift and okirika hub. Real location, verified stock, no middlemen.",
  },
  {
    icon: Tag,
    title: "Fair Wholesale Pricing",
    description: "Transparent, competitive wholesale rates for bulk buyers. No retail markup. No hidden fees.",
  },
  {
    icon: MessageCircle,
    title: "Instant WhatsApp Response",
    description: "Chat with us directly. Orders confirmed within minutes, not hours.",
  },
  {
    icon: Globe,
    title: "Nationwide Delivery",
    description: "We supply resellers across all 36 states in Nigeria. Reliable and timely bale dispatch.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "Hundreds of repeat wholesale buyers. Built on trust, referrals, and consistent quality.",
  },
  {
    icon: Star,
    title: "Special / Coded Bales",
    description: "We carry premium coded bales (CSW, ATW, CTW, CWW) for experienced traders and resellers.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-[#0d0d0d]" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#B8860B]/20 border border-[#B8860B]/20 mb-16"
        >
          {STATS.map((stat, i) => (
            <div key={i} className="bg-[#0d0d0d] px-6 py-6 text-center">
              <p className="text-[#B8860B] font-black text-3xl md:text-4xl">{stat.value}</p>
              <p className="text-white/40 text-[10px] uppercase tracking-widest mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="h-px w-8 bg-[#B8860B]" />
            <span className="text-[#B8860B] text-[10px] font-bold uppercase tracking-[0.32em]">
              The Kay Amazing Grace Difference
            </span>
          </div>
          <h2 className="text-white font-black text-3xl md:text-4xl uppercase tracking-tight">
            Why Wholesale Buyers <span className="text-[#B8860B]">Choose Us</span>
          </h2>
          <p className="text-white/40 text-sm mt-2 max-w-xl leading-relaxed">
            From mixed bales to coded stock — quality, trust, and scale you can build a resale business on.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {REASONS.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.08 }}
              className="group p-5 bg-[#111] border border-white/6 hover:border-[#B8860B]/40 hover:bg-[#141414] transition-all duration-300"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-[#B8860B]/10 group-hover:bg-[#B8860B]/20 transition-colors mb-4">
                <reason.icon className="w-5 h-5 text-[#B8860B]" />
              </div>
              <h3 className="text-white font-bold text-sm mb-2 group-hover:text-[#B8860B] transition-colors">
                {reason.title}
              </h3>
              <p className="text-white/40 text-[11px] leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#B8860B] text-black text-[11px] font-black uppercase tracking-widest hover:bg-[#D4A017] transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Start Your Wholesale Order
          </a>
        </motion.div>
      </div>
    </section>
  );
}