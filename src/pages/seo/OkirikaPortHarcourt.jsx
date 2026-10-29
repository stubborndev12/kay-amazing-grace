import React, { useEffect, useState } from "react";
import SEOPageLayout from "@/components/seo/SEOPageLayout";
const F = ({ q, a }) => { const [o, s] = useState(false); return <div className="border-b border-white/8"><button onClick={() => s(!o)} className="w-full flex items-start justify-between gap-4 py-4 text-left"><span className="text-white font-semibold text-[14px] leading-snug">{q}</span><span className="text-[#B8860B] text-lg shrink-0">{o ? "−" : "+"}</span></button>{o && <p className="text-white/55 text-[13px] leading-relaxed pb-4 pr-8">{a}</p>}</div>; };
export default function OkirikaPortHarcourt() {
  useEffect(() => { document.title = "Okirika Port Harcourt | Wholesale Bales Delivered to PH — Kay Amazing Grace Global"; const m = document.querySelector('meta[name="description"]'); if (m) m.setAttribute("content", "Buy wholesale okirika bales delivered to Port Harcourt from Kay Amazing Grace Global in Aba. Grade A quality. Fast delivery to PH. WhatsApp 08035239489."); }, []);
  return (
    <SEOPageLayout breadcrumb="Okirika Port Harcourt" category="SEO" h1="Okirika Port Harcourt — Wholesale Bales Delivered from Aba">
      <p className="text-white/70 text-[15px] leading-relaxed mb-6">Port Harcourt, Rivers State, is one of Nigeria's most active commercial cities. The oil industry creates a strong middle-class market for quality okirika — particularly Korea bales, ladies wear, and corporate clothing. <strong className="text-white">Kay Amazing Grace Global</strong> in Aba supplies wholesale okirika bales to Port Harcourt resellers and boutiques regularly.</p>
      <h2 className="text-white font-bold text-xl mt-8 mb-3">Top Okirika Markets in Port Harcourt</h2>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">Mile 1 Market, Artillery Market, and Rumuola Road are key okirika trading points in Port Harcourt. Many Port Harcourt boutiques and social media sellers also source from Aba wholesale suppliers.</p>
      <h2 className="text-white font-bold text-xl mt-8 mb-3">FAQs</h2>
      <div className="mt-4 mb-8">{[{q:"Do you deliver okirika bales to Port Harcourt?",a:"Yes. We deliver to Port Harcourt via trusted couriers from our Aba warehouse. WhatsApp 08035239489 for delivery rates and times."},{q:"What okirika sells best in Port Harcourt?",a:"Korea ladies bales, mixed bales, and shoes bales sell strongly in Port Harcourt. The city's oil-sector middle class has strong fashion purchasing power."},{q:"How far is Aba from Port Harcourt?",a:"Aba and Port Harcourt are both in Rivers/Abia State corridor — approximately 1–2 hours apart. We can arrange transport for walk-in buyers from PH."}].map((f,i)=><F key={i} {...f}/>)}</div>
    </SEOPageLayout>
  );
}