import React, { useEffect, useState } from "react";
import SEOPageLayout from "@/components/seo/SEOPageLayout";
const F = ({ q, a }) => { const [o, s] = useState(false); return <div className="border-b border-white/8"><button onClick={() => s(!o)} className="w-full flex items-start justify-between gap-4 py-4 text-left"><span className="text-white font-semibold text-[14px] leading-snug">{q}</span><span className="text-[#B8860B] text-lg shrink-0">{o ? "−" : "+"}</span></button>{o && <p className="text-white/55 text-[13px] leading-relaxed pb-4 pr-8">{a}</p>}</div>; };
export default function SecondHandClothesNigeria() {
  useEffect(() => { document.title = "Second Hand Clothes Nigeria | Wholesale Okirika Supplier — Kay Amazing Grace Global"; const m = document.querySelector('meta[name="description"]'); if (m) m.setAttribute("content", "Buy second hand clothes wholesale in Nigeria from Kay Amazing Grace Global, Aba. Grade A okirika bales for resellers and boutiques. Nationwide delivery. WhatsApp 08035239489."); }, []);
  return (
    <SEOPageLayout breadcrumb="Second Hand Clothes Nigeria" category="SEO" h1="Second Hand Clothes Nigeria — Wholesale Okirika Bales from Aba">
      <p className="text-white/70 text-[15px] leading-relaxed mb-6">Second-hand clothes — locally known as okirika — are among the most traded goods in Nigeria. Millions of Nigerians rely on quality second-hand clothing for affordable dressing, and hundreds of thousands of traders build livelihoods from selling it. <strong className="text-white">Kay Amazing Grace Global</strong> is a trusted wholesale second-hand clothes supplier in Nigeria, operating from Aba, Abia State.</p>
      <h2 className="text-white font-bold text-xl mt-8 mb-3">Why Second-Hand Clothes Are Big Business in Nigeria</h2>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">Nigeria's large, price-conscious population creates massive demand for quality second-hand clothing at affordable prices. Okirika clothing from UK and USA sources often features recognizable global brands — making them attractive to fashion-conscious buyers who want brand value at Nigerian market prices.</p>
      <h2 className="text-white font-bold text-xl mt-8 mb-3">Second-Hand Clothes Categories We Supply</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">{["Ladies Wear", "Men's Wear", "Children's Wear", "Corporate Wear", "Shoes & Slippers", "Bags & Accessories", "Underwear & Nightwear", "Sportswear", "Korea Fashion"].map(c => <div key={c} className="border border-white/10 px-3 py-2 text-white/60 text-[12px] font-semibold">{c}</div>)}</div>
      <h2 className="text-white font-bold text-xl mt-8 mb-3">How to Buy Second-Hand Clothes Wholesale in Nigeria</h2>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">WhatsApp 08035239489, state your bale category and quantity, receive photos, pay via bank transfer, and receive delivery anywhere in Nigeria. Kay Amazing Grace Global serves buyers from Lagos, Abuja, Port Harcourt, Enugu, Kano, and all other states.</p>
      <h2 className="text-white font-bold text-xl mt-8 mb-3">FAQs</h2>
      <div className="mt-4 mb-8">
        {[{q:"Where can I buy second hand clothes wholesale in Nigeria?",a:"Kay Amazing Grace Global on Ngwa Road, Aba is a leading wholesale supplier of Grade A second-hand clothes in Nigeria. Nationwide delivery available."},{q:"What is the difference between okirika and okrika?",a:"Both 'okirika' and 'okrika' refer to the same thing — imported second-hand clothing sold in Nigerian markets. Both spellings are widely used."},{q:"Are second-hand clothes from Aba good quality?",a:"Quality varies by supplier. Kay Amazing Grace Global sells Grade A okirika only — the highest quality category, in excellent condition."}].map((f,i)=><F key={i} {...f}/>)}
      </div>
    </SEOPageLayout>
  );
}