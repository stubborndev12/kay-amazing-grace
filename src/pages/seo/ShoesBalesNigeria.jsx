import React, { useEffect, useState } from "react";
import SEOPageLayout from "@/components/seo/SEOPageLayout";
const F = ({ q, a }) => { const [o, s] = useState(false); return <div className="border-b border-white/8"><button onClick={() => s(!o)} className="w-full flex items-start justify-between gap-4 py-4 text-left"><span className="text-white font-semibold text-[14px] leading-snug">{q}</span><span className="text-[#B8860B] text-lg shrink-0">{o ? "−" : "+"}</span></button>{o && <p className="text-white/55 text-[13px] leading-relaxed pb-4 pr-8">{a}</p>}</div>; };
export default function ShoesBalesNigeria() {
  useEffect(() => { document.title = "Shoes Bales Nigeria | Buy Wholesale Okirika Shoe Bales — Kay Amazing Grace Global Aba"; const m = document.querySelector('meta[name="description"]'); if (m) m.setAttribute("content", "Buy wholesale shoes bales in Nigeria from Kay Amazing Grace Global, Aba. Men's, women's, and children's shoe bales, Grade A quality. Nationwide delivery. WhatsApp 08035239489."); }, []);
  return (
    <SEOPageLayout breadcrumb="Shoes Bales Nigeria" category="SEO" h1="Shoes Bales Nigeria — Wholesale Okirika Footwear from Aba">
      <p className="text-white/70 text-[15px] leading-relaxed mb-6">Shoes bales are among the highest-value okirika categories in Nigeria. Quality second-hand footwear — especially branded shoes from the UK, USA, and Korea — commands strong resale prices in Nigerian markets and online. <strong className="text-white">Kay Amazing Grace Global</strong> in Aba supplies wholesale shoes bales to traders across Nigeria.</p>
      <h2 className="text-white font-bold text-xl mt-8 mb-3">Types of Shoe Bales Available</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">{["Mixed Shoe Bales","Ladies Shoe Bales","Men's Shoe Bales","Children's Shoe Bales","Korea Shoe Bales","Sports Shoe Bales"].map(c=><div key={c} className="border border-white/10 px-3 py-2 text-white/60 text-[12px] font-semibold">{c}</div>)}</div>
      <h2 className="text-white font-bold text-xl mt-8 mb-3">Brands Found in Shoe Bales</h2>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">UK and USA shoe bales regularly contain well-known brands including Nike, Adidas, Timberland, Clark's, New Balance, Reebok, and high street fashion brands. Brand occurrence varies but is a frequent feature of quality shoe bales.</p>
      <h2 className="text-white font-bold text-xl mt-8 mb-3">Where to Sell Okirika Shoes in Nigeria</h2>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">Shoes sell strongly at open markets, online (Instagram, Facebook Marketplace, WhatsApp groups), and dedicated shoe stalls in Ariaria, Balogun, Onitsha, and Kano markets. Branded shoes from quality bales attract premium prices at boutique-style shoe stalls.</p>
      <h2 className="text-white font-bold text-xl mt-8 mb-3">FAQs</h2>
      <div className="mt-4 mb-8">{[{q:"Where can I buy shoe bales in Nigeria?",a:"Kay Amazing Grace Global in Aba supplies wholesale shoe bales to all states in Nigeria. WhatsApp 08035239489 for current stock and pricing."},{q:"Are branded shoes common in shoe bales?",a:"Yes. UK and USA shoe bales frequently contain Nike, Adidas, Clark's, and other branded footwear. Brand presence varies per bale."},{q:"How many shoes are in a shoe bale?",a:"Typically 30–60 pairs per bale depending on bale weight. WhatsApp for current stock details and bale contents."}].map((f,i)=><F key={i} {...f}/>)}</div>
    </SEOPageLayout>
  );
}