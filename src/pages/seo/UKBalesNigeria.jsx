import React, { useEffect, useState } from "react";
import SEOPageLayout from "@/components/seo/SEOPageLayout";
const F = ({ q, a }) => { const [o, s] = useState(false); return <div className="border-b border-white/8"><button onClick={() => s(!o)} className="w-full flex items-start justify-between gap-4 py-4 text-left"><span className="text-white font-semibold text-[14px] leading-snug">{q}</span><span className="text-[#B8860B] text-lg shrink-0">{o ? "−" : "+"}</span></button>{o && <p className="text-white/55 text-[13px] leading-relaxed pb-4 pr-8">{a}</p>}</div>; };
export default function UKBalesNigeria() {
  useEffect(() => { document.title = "UK Bales Nigeria | Wholesale UK Okirika Bales — Kay Amazing Grace Global Aba"; const m = document.querySelector('meta[name="description"]'); if (m) m.setAttribute("content", "Buy wholesale UK okirika bales in Nigeria from Kay Amazing Grace Global, Aba. Grade A British fashion, ladies and men's wear. Nationwide delivery. WhatsApp 08035239489."); }, []);
  return (
    <SEOPageLayout breadcrumb="UK Bales Nigeria" category="SEO" h1="UK Bales Nigeria — Wholesale British Okirika from Aba">
      <p className="text-white/70 text-[15px] leading-relaxed mb-6">UK bales are among the most popular sources of okirika in Nigeria — known for classic British style, quality fabrics, and recognizable brands. <strong className="text-white">Kay Amazing Grace Global</strong> in Aba supplies Grade A UK okirika bales to resellers and boutique owners across Nigeria.</p>
      <h2 className="text-white font-bold text-xl mt-8 mb-3">What's in UK Okirika Bales?</h2>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">UK bales contain clothing from British high street brands — Marks & Spencer (M&S), Next, ASOS, Primark, Topshop, River Island, and department stores like Debenhams. Ladies wear, men's wear, children's clothing, and shoes from the UK are in consistent demand in Nigerian markets.</p>
      <h2 className="text-white font-bold text-xl mt-8 mb-3">UK Bales vs Korea Bales</h2>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">UK bales offer classic style and strong brand variety at generally lower prices than Korea bales. Korea bales are more fashion-forward and trendy. Both are Grade A quality from Kay Amazing Grace Global. Many resellers buy both for a complementary stock mix.</p>
      <h2 className="text-white font-bold text-xl mt-8 mb-3">FAQs</h2>
      <div className="mt-4 mb-8">{[{q:"What brands are in UK okirika bales?",a:"M&S, Next, ASOS, River Island, Topshop, Primark, and other British high street brands are commonly found in UK bales."},{q:"Are UK bales cheaper than Korea bales in Nigeria?",a:"Generally yes. UK bales typically cost slightly less than Korea bales, though both offer excellent resale value. WhatsApp 08035239489 for current pricing."},{q:"Where can I buy UK bales in Nigeria?",a:"Kay Amazing Grace Global in Aba supplies Grade A UK okirika bales to all 36 Nigerian states. WhatsApp 08035239489."}].map((f,i)=><F key={i} {...f}/>)}</div>
    </SEOPageLayout>
  );
}