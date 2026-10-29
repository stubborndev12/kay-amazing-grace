import React, { useEffect, useState } from "react";
import SEOPageLayout from "@/components/seo/SEOPageLayout";
const F = ({ q, a }) => { const [o, s] = useState(false); return <div className="border-b border-white/8"><button onClick={() => s(!o)} className="w-full flex items-start justify-between gap-4 py-4 text-left"><span className="text-white font-semibold text-[14px] leading-snug">{q}</span><span className="text-[#B8860B] text-lg shrink-0">{o ? "−" : "+"}</span></button>{o && <p className="text-white/55 text-[13px] leading-relaxed pb-4 pr-8">{a}</p>}</div>; };
export default function BagBalesNigeria() {
  useEffect(() => { document.title = "Bag Bales Nigeria | Wholesale Okirika Bag Bales — Kay Amazing Grace Global Aba"; const m = document.querySelector('meta[name="description"]'); if (m) m.setAttribute("content", "Buy wholesale bag bales in Nigeria from Kay Amazing Grace Global, Aba. Handbags, backpacks, accessories. Grade A quality. Nationwide delivery. WhatsApp 08035239489."); }, []);
  return (
    <SEOPageLayout breadcrumb="Bag Bales Nigeria" category="SEO" h1="Bag Bales Nigeria — Wholesale Okirika Bags & Accessories from Aba">
      <p className="text-white/70 text-[15px] leading-relaxed mb-6">Wholesale bag bales are an underserved niche in Nigeria's okirika market — and that means lower competition and higher profit potential for traders who enter it. <strong className="text-white">Kay Amazing Grace Global</strong> in Aba supplies quality bag bales containing handbags, backpacks, clutches, wallets, and fashion accessories to buyers nationwide.</p>
      <h2 className="text-white font-bold text-xl mt-8 mb-3">What's in Our Bag Bales?</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">{["Handbags","Shoulder Bags","Backpacks","Clutch Bags","Tote Bags","Wallets & Purses","Belts","Scarves","Mixed Accessories"].map(c=><div key={c} className="border border-white/10 px-3 py-2 text-white/60 text-[12px] font-semibold">{c}</div>)}</div>
      <h2 className="text-white font-bold text-xl mt-8 mb-3">Combining Bags with Clothing Bales</h2>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">Bag bales work extremely well as an add-on to ladies wear bales. Boutique owners can sell clothing and matching bags together, increasing average sale value per customer. Ask us about combined bale ordering for your boutique stock.</p>
      <h2 className="text-white font-bold text-xl mt-8 mb-3">FAQs</h2>
      <div className="mt-4 mb-8">{[{q:"Where can I buy bag bales in Nigeria?",a:"Kay Amazing Grace Global in Aba supplies wholesale bag bales. Nationwide delivery. WhatsApp 08035239489 for current stock and pricing."},{q:"What types of bags are in your bales?",a:"Handbags, shoulder bags, backpacks, clutches, totes, wallets, belts, and accessories. Contents vary per bale."},{q:"Can I order bags bales alongside clothing bales?",a:"Yes. Many customers order a mixed bundle of clothing and bag bales. Contact us on WhatsApp to arrange combined bale orders."}].map((f,i)=><F key={i} {...f}/>)}</div>
    </SEOPageLayout>
  );
}