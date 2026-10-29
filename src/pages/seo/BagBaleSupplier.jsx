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

export default function BagBaleSupplier() {
  useEffect(() => {
    document.title = "Bag Bale Supplier Nigeria | Wholesale Okirika Bags & Accessories — Kay Amazing Grace Global";
    const m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute("content", "Buy wholesale bag and accessories okirika bales from Kay Amazing Grace Global in Aba, Nigeria. Handbags, backpacks, belts, and more. Nationwide delivery. WhatsApp 08035239489.");
  }, []);

  return (
    <SEOPageLayout
      breadcrumb="Bag Bale Supplier"
      category="SEO"
      h1="Bag Bale Supplier Nigeria — Wholesale Okirika Bags from Aba"
    >
      <p className="text-white/70 text-[15px] leading-relaxed mb-6">
        Bags and accessories are high-value additions to any okirika business. Wholesale bag bales from <strong className="text-white">Kay Amazing Grace Global</strong> in Aba, Abia State, give resellers access to quality handbags, backpacks, shoulder bags, and fashion accessories at wholesale prices, for resale across Nigerian markets and boutiques.
      </p>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">What's in Our Bag & Accessories Bales?</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
        {["Handbags", "Shoulder Bags", "Backpacks", "Clutch Bags", "Tote Bags", "Wallets & Purses", "Belts", "Scarves", "Fashion Accessories"].map(cat => (
          <div key={cat} className="border border-white/10 px-3 py-2 text-white/60 text-[12px] font-semibold">{cat}</div>
        ))}
      </div>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">Why Bag Bales Are a Profitable Niche</h2>
      <ul className="text-white/70 text-[14px] leading-relaxed mb-6 space-y-2 list-none">
        {[
          "Designer and branded bags frequently appear in UK/USA bales",
          "High resale price per item relative to bale cost",
          "Popular with boutique owners as add-on stock",
          "Accessories sell well year-round and at every price point",
          "Low competition compared to main clothing categories",
        ].map(item => (
          <li key={item} className="flex items-start gap-2"><span className="text-[#B8860B] mt-1">▸</span><span>{item}</span></li>
        ))}
      </ul>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">Combining Bags with Other Bale Categories</h2>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">
        Many of our customers buy bags and accessories bales alongside ladies wear or Korea bales to create a complete boutique stock offering. Bags complement fashion clothing perfectly and increase average transaction values for boutique and market traders.
      </p>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">Frequently Asked Questions</h2>
      <div className="mt-4 mb-8">
        {[
          { q: "Do you sell bag bales in Nigeria?", a: "Yes. Kay Amazing Grace Global supplies wholesale bags and accessories okirika bales from our Aba warehouse. Nationwide delivery via courier." },
          { q: "What types of bags are in your bales?", a: "Handbags, shoulder bags, backpacks, clutch bags, totes, wallets, purses, and fashion accessories. Contents vary per bale." },
          { q: "Can branded bags be found in okirika bales?", a: "Yes. UK and USA bags bales frequently contain well-known fashion brands. Brand occurrence cannot be guaranteed per bale but is a regular feature." },
          { q: "Can I order a bags-only bale?", a: "Yes. We supply dedicated bags and accessories bales. WhatsApp 08035239489 to check current availability and pricing." },
        ].map((faq, i) => <FAQItem key={i} {...faq} />)}
      </div>
    </SEOPageLayout>
  );
}