import React, { useEffect, useState } from "react";
import SEOPageLayout from "@/components/seo/SEOPageLayout";

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="border-b border-white/8">
      <button onClick={() => setOpen(!open)} className="w-full flex items-start justify-between gap-4 py-4 text-left">
        <span className="text-white font-semibold text-[14px] leading-snug">{q}</span>
        <span className="text-[#B8860B] text-lg shrink-0">{open ? "−" : "+"}</span>
      </button>
      {open && <p className="text-white/55 text-[13px] leading-relaxed pb-4 pr-8">{a}</p>}
    </div>
  );
};

export default function ShoeBaleSupplier() {
  useEffect(() => {
    document.title = "Shoe Bale Supplier Nigeria | Wholesale Okirika Shoe Bales — Kay Amazing Grace Global";
    const m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute("content", "Buy wholesale shoe bales from Kay Amazing Grace Global in Aba, Nigeria. Men's, women's, and children's shoe bales. Grade A quality. Nationwide delivery. WhatsApp 08035239489.");
  }, []);

  return (
    <SEOPageLayout
      breadcrumb="Shoe Bale Supplier"
      category="SEO"
      h1="Shoe Bale Supplier Nigeria — Wholesale Okirika Shoes from Aba"
    >
      <p className="text-white/70 text-[15px] leading-relaxed mb-6">
        Shoe bales are one of the fastest-selling wholesale okirika categories in Nigeria. From Aba's Ngwa Road to markets across Lagos, Onitsha, and beyond, okirika shoe bales generate strong profits for traders who source quality stock. <strong className="text-white">Kay Amazing Grace Global</strong> is a trusted wholesale shoe bale supplier in Nigeria, based in Aba, Abia State.
      </p>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">What's in Our Shoe Bales?</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
        {["Sneakers & Trainers", "Men's Formal Shoes", "Women's Heels", "Women's Flats", "Sandals & Slippers", "Boots", "Loafers", "Children's Shoes", "Sports Shoes"].map(cat => (
          <div key={cat} className="border border-white/10 px-3 py-2 text-white/60 text-[12px] font-semibold">{cat}</div>
        ))}
      </div>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">Types of Shoe Bales Available</h2>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">
        <strong className="text-white">Mixed Shoe Bales:</strong> Combination of men's, women's, and children's shoes in one bale. Ideal for general market traders.
      </p>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">
        <strong className="text-white">Ladies Shoe Bales:</strong> Women's footwear only — heels, flats, sandals, boots, and sneakers. Popular with boutique traders.
      </p>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">
        <strong className="text-white">Men's Shoe Bales:</strong> Men's formal, casual, and sports footwear.
      </p>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">
        <strong className="text-white">Korea Shoe Bales:</strong> Premium Korean footwear in excellent condition — higher resale value.
      </p>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">
        <strong className="text-white">Children's Shoe Bales:</strong> Kids footwear from toddler to pre-teen sizes.
      </p>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">Why Shoe Bales Are Profitable</h2>
      <ul className="text-white/70 text-[14px] leading-relaxed mb-6 space-y-2 list-none">
        {[
          "Brand-name shoes (Nike, Adidas, Clark's, Timberland) frequent in bales",
          "Footwear has universal demand across age groups and demographics",
          "Shoes retain higher individual resale prices than clothing",
          "Nigeria's footwear market is large and consistently active",
        ].map(item => (
          <li key={item} className="flex items-start gap-2"><span className="text-[#B8860B] mt-1">▸</span><span>{item}</span></li>
        ))}
      </ul>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">Frequently Asked Questions</h2>
      <div className="mt-4 mb-8">
        {[
          { q: "Who sells shoe bales in Nigeria?", a: "Kay Amazing Grace Global in Aba sells Grade A wholesale shoe bales, including mixed, ladies, men's, children's, and Korea shoe bales. Nationwide delivery." },
          { q: "What brands are typically in shoe bales?", a: "UK and USA shoe bales frequently contain Nike, Adidas, Clark's, Timberland, and high street brands like Next and Marks & Spencer. Brand occurrence varies per bale." },
          { q: "Are shoe bales more expensive than clothing bales?", a: "Shoe bales are generally priced higher per bale but also yield higher per-item resale prices. WhatsApp 08035239489 for current shoe bale pricing." },
          { q: "Can I order ladies shoe bales specifically?", a: "Yes. We can supply ladies-only shoe bales when in stock. WhatsApp us to check current availability." },
        ].map((faq, i) => <FAQItem key={i} {...faq} />)}
      </div>
    </SEOPageLayout>
  );
}