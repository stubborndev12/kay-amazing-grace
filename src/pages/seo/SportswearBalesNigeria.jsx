import React, { useEffect, useState } from "react";
import SEOPageLayout from "@/components/seo/SEOPageLayout";
const F = ({ q, a }) => { const [o, s] = useState(false); return <div className="border-b border-white/8"><button onClick={() => s(!o)} className="w-full flex items-start justify-between gap-4 py-4 text-left"><span className="text-white font-semibold text-[14px] leading-snug">{q}</span><span className="text-[#B8860B] text-lg shrink-0">{o ? "−" : "+"}</span></button>{o && <p className="text-white/55 text-[13px] leading-relaxed pb-4 pr-8">{a}</p>}</div>; };
export default function SportswearBalesNigeria() {
  useEffect(() => { document.title = "Sportswear Bales Nigeria | Wholesale Okirika Sports Bales — Kay Amazing Grace Global Aba"; const m = document.querySelector('meta[name="description"]'); if (m) m.setAttribute("content", "Buy wholesale sportswear okirika bales in Nigeria from Kay Amazing Grace Global, Aba. Jerseys, tracksuits, and athletic wear. Grade A quality. WhatsApp 08035239489."); }, []);
  return (
    <SEOPageLayout breadcrumb="Sportswear Bales Nigeria" category="SEO" h1="Sportswear Bales Nigeria — Wholesale Athletic Okirika from Aba">
      <p className="text-white/70 text-[15px] leading-relaxed mb-6">Sportswear and casual athleisure are among the fastest-growing segments of Nigeria's okirika market. Branded sportswear bales from the UK, USA, and Korea command strong resale prices from young Nigerian buyers. <strong className="text-white">Kay Amazing Grace Global</strong> in Aba supplies wholesale sportswear bales to traders nationwide.</p>
      <h2 className="text-white font-bold text-xl mt-8 mb-3">What's in Our Sportswear Bales?</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">{["Football Jerseys","Tracksuits","Joggers","Hoodies","Athletic Shorts","Sports Tops","Running Shoes","Branded T-Shirts","Gym Wear"].map(c=><div key={c} className="border border-white/10 px-3 py-2 text-white/60 text-[12px] font-semibold">{c}</div>)}</div>
      <h2 className="text-white font-bold text-xl mt-8 mb-3">Sportswear Brand Presence</h2>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">UK and USA sportswear bales frequently contain Nike, Adidas, Puma, Under Armour, and Reebok branded items. Football jerseys from major European clubs are also common finds. These branded items command significantly higher resale prices at markets and online.</p>
      <h2 className="text-white font-bold text-xl mt-8 mb-3">FAQs</h2>
      <div className="mt-4 mb-8">{[{q:"Do you sell sportswear bales in Nigeria?",a:"Yes. Kay Amazing Grace Global in Aba supplies wholesale sportswear okirika bales. WhatsApp 08035239489 for current stock."},{q:"What brands are in sportswear bales?",a:"Nike, Adidas, Puma, Under Armour, and Reebok are commonly found. Football jerseys and branded gym wear also appear frequently."},{q:"Where do sportswear okirika bales sell best in Nigeria?",a:"Sportswear sells strongly to younger buyers at markets, online via Instagram, and in urban areas. Lagos, Abuja, Enugu, and Port Harcourt have strong sportswear demand."}].map((f,i)=><F key={i} {...f}/>)}</div>
    </SEOPageLayout>
  );
}