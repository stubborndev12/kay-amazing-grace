import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const WA_BASE = "https://wa.me/2348035239489?text=Hello%20Kay%20Amazing%20Grace%20Global%2C%20I%27m%20interested%20in%20your%20bale%20products.%20Please%20send%20availability%20and%20current%20wholesale%20pricing.";

const WaIcon = ({ size = 14 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: size, height: size }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const FILTERS = ["All", "Mixed", "Ladies", "Men", "Jackets", "Footwear", "Underwear", "Accessories", "Special"];

const CATEGORIES = [
  {
    id: "mixed-bale", filter: "Mixed",
    label: "Mixed Bale",
    sub: "Mixed Bag · Supreme Mix · Korea Bale · Box Bale",
    desc: "Carefully selected premium thrift bales suitable for resellers and wholesale buyers.",
    img: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=85",
    badge: "POPULAR",
  },
  {
    id: "korea-bale", filter: "Mixed",
    label: "Korea Bale",
    sub: "High-grade Korea quality bales",
    desc: "Premium Korea-grade thrift bales known for quality fabric and durability.",
    img: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&q=85",
    badge: "GRADE A+",
  },
  {
    id: "ladies-bale", filter: "Ladies",
    label: "Ladies Bale",
    sub: "Gowns · Blouses · Skirts · Leggings · Scarves",
    desc: "Full range of ladies wear — from silk gowns to cotton blouses, bumshorts and more.",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=85",
    badge: "LADIES",
  },
  {
    id: "men-bale", filter: "Men",
    label: "Men Bale",
    sub: "Jeans · T-Shirts · Corporate Shirts · Shorts",
    desc: "Men's okirika bales including jeans, t-shirts, corporate wear and casual styles.",
    img: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=85",
    badge: "MEN",
  },
  {
    id: "jackets-hoodies", filter: "Jackets",
    label: "Jackets / Hoodies",
    sub: "Hoodies · Zippers · Jean Jackets · Fleece · Track",
    desc: "Quality winter and sports bales — hoodies, jackets, jerseys, and fleece items.",
    img: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&q=85",
    badge: "WINTER",
  },
  {
    id: "shoes-accessories", filter: "Footwear",
    label: "Shoes & Accessories",
    sub: "Shoes · Slippers · Socks · School Bags",
    desc: "Footwear and accessories including rubber slippers, shoes, socks, and school bags.",
    img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=85",
    badge: "FOOTWEAR",
  },
  {
    id: "underwear-nightwear", filter: "Underwear",
    label: "Nightwear / Underwear",
    sub: "Silk Nightwear · Cotton Nightwear · Bra · Girdle",
    desc: "Ladies and general underwear bales — silk nightwear, brassieres, sports bra and girdle.",
    img: "https://images.unsplash.com/photo-1603400521630-9f2de124b33b?w=800&q=85",
    badge: "NIGHTWEAR",
  },
  {
    id: "special-coded", filter: "Special",
    label: "Special / Coded Bales",
    sub: "CSW · ATW · CTW · CWW",
    desc: "Premium coded bales for experienced resellers. Contact us for category details and pricing.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85",
    badge: "CODED",
  },
  {
    id: "accessories-bags", filter: "Accessories",
    label: "Bags & Accessories",
    sub: "Towel · Jean Dress · Jeanshort",
    desc: "Miscellaneous bale categories including towels, jean dresses, and jean shorts.",
    img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=85",
    badge: "BAGS",
  },
];

function CategoryCard({ cat, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.07 }}
      className="group relative bg-[#111] border border-white/8 overflow-hidden hover:border-[#B8860B]/50 transition-all duration-400"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={cat.img}
          alt={cat.label}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-75 group-hover:opacity-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Badge */}
        <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#B8860B] text-black text-[9px] font-black uppercase tracking-[0.18em]">
          {cat.badge}
        </span>

        {/* Wholesale label */}
        <span className="absolute top-3 right-3 px-2 py-1 bg-black/60 border border-white/10 text-white/60 text-[8px] font-semibold uppercase tracking-wider backdrop-blur-sm">
          Wholesale Only
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-white font-bold text-[15px] mb-1 group-hover:text-[#B8860B] transition-colors">
          {cat.label}
        </h3>
        <p className="text-[#B8860B]/70 text-[10px] font-semibold uppercase tracking-wider mb-2">
          {cat.sub}
        </p>
        <p className="text-white/45 text-[11px] leading-relaxed mb-4">
          {cat.desc}
        </p>

        {/* CTA */}
        <a
          href={WA_BASE}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 w-full justify-center py-2.5 border border-[#B8860B]/40 text-[#B8860B] text-[10px] font-bold uppercase tracking-widest hover:bg-[#B8860B] hover:text-black transition-all duration-200"
        >
          <WaIcon />
          Inquire Now
        </a>
      </div>
    </motion.div>
  );
}

export default function BaleCategories() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? CATEGORIES
    : CATEGORIES.filter(c => c.filter === activeFilter);

  return (
    <section className="py-16 md:py-24 bg-[#080808]" id="bale-categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="h-px w-8 bg-[#B8860B]" />
            <span className="text-[#B8860B] text-[10px] font-bold uppercase tracking-[0.32em]">
              Our Bale Categories
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="text-white font-black text-3xl md:text-4xl uppercase tracking-tight">
                Quality Bales. <span className="text-[#B8860B]">Trusted Supply.</span>
              </h2>
              <p className="text-white/40 text-sm mt-2 max-w-lg">
                Explore our wide range of thrift clothing bales available in bulk for resellers and wholesale buyers.
              </p>
            </div>
            <a
              href={WA_BASE}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 border border-[#B8860B]/40 text-[#B8860B] text-[10px] font-bold uppercase tracking-widest hover:bg-[#B8860B] hover:text-black transition-all whitespace-nowrap"
            >
              View All Categories
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest border transition-all duration-200 ${
                activeFilter === f
                  ? "bg-[#B8860B] border-[#B8860B] text-black"
                  : "border-white/15 text-white/50 hover:border-[#B8860B]/40 hover:text-[#B8860B]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 md:gap-4">
          {filtered.map((cat, i) => (
            <CategoryCard key={cat.id} cat={cat} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-white/30 text-xs uppercase tracking-widest mb-4">
            Contact for Bale Pricing · Wholesale Only · Bulk Orders Available
          </p>
          <a
            href={WA_BASE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#B8860B] text-black text-[12px] font-black uppercase tracking-widest hover:bg-[#D4A017] transition-colors shadow-lg shadow-[#B8860B]/20"
          >
            <WaIcon size={16} />
            Inquire About All Bales
          </a>
        </motion.div>
      </div>
    </section>
  );
}