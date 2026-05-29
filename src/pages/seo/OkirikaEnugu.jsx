import React, { useEffect, useState } from "react";
import SEOPageLayout from "@/components/seo/SEOPageLayout";
const F = ({ q, a }) => { const [o, s] = useState(false); return <div className="border-b border-white/8"><button onClick={() => s(!o)} className="w-full flex items-start justify-between gap-4 py-4 text-left"><span className="text-white font-semibold text-[14px] leading-snug">{q}</span><span className="text-[#B8860B] text-lg shrink-0">{o ? "−" : "+"}</span></button>{o && <p className="text-white/55 text-[13px] leading-relaxed pb-4 pr-8">{a}</p>}</div>; };
export default function OkirikaEnugu() {
  useEffect(() => { document.title = "Okirika Enugu | Wholesale Bales Delivered to Enugu — Kay Amazing Grace Global Aba"; const m = document.querySelector('meta[name="description"]'); if (m) m.setAttribute("content", "Order wholesale okirika bales delivered to Enugu from Kay Amazing Grace Global in Aba. Grade A quality. Fast delivery to Enugu State. WhatsApp 08035239489."); }, []);
  return (
    <SEOPageLayout breadcrumb="Okirika Enugu" category="SEO" h1="Okirika Enugu — Wholesale Bales Delivered from Aba">
      <p className="text-white/70 text-[15px] leading-relaxed mb-6">Enugu State is a major commercial hub in Southeast Nigeria, with a well-established okirika market at Ogbete Main Market and other trading points. <strong className="text-white">Kay Amazing Grace Global</strong> supplies wholesale okirika bales from Aba to Enugu resellers and boutique owners.</p>
      <h2 className="text-white font-bold text-xl mt-8 mb-3">Enugu Okirika Market</h2>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">Ogbete Main Market is Enugu's primary wholesale okirika trading hub. Many Enugu market traders source their stock from Aba — either by travelling to Aba directly or via WhatsApp orders with delivery. Kay Amazing Grace Global serves many Enugu-based buyers.</p>
      <h2 className="text-white font-bold text-xl mt-8 mb-3">FAQs</h2>
      <div className="mt-4 mb-8">{[{q:"Do you deliver okirika bales to Enugu?",a:"Yes. We deliver to Enugu via courier from our Aba warehouse. WhatsApp 08035239489 for current delivery rates."},{q:"What okirika bales sell well in Enugu?",a:"Ladies wear, mixed bales, and children's bales are consistently popular in Enugu markets."},{q:"Can I come from Enugu to buy from your Aba store?",a:"Yes. Walk-in buyers from Enugu and surroundings are welcome. Call 08035239489 ahead to confirm stock."}].map((f,i)=><F key={i} {...f}/>)}</div>
    </SEOPageLayout>
  );
}