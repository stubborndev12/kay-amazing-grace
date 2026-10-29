import React, { useEffect, useState } from "react";
import SEOPageLayout from "@/components/seo/SEOPageLayout";
const F = ({ q, a }) => { const [o, s] = useState(false); return <div className="border-b border-white/8"><button onClick={() => s(!o)} className="w-full flex items-start justify-between gap-4 py-4 text-left"><span className="text-white font-semibold text-[14px] leading-snug">{q}</span><span className="text-[#B8860B] text-lg shrink-0">{o ? "−" : "+"}</span></button>{o && <p className="text-white/55 text-[13px] leading-relaxed pb-4 pr-8">{a}</p>}</div>; };
export default function OkirikaAbuja() {
  useEffect(() => { document.title = "Okirika Abuja | Wholesale Thrift Bales Delivered to Abuja — Kay Amazing Grace Global"; const m = document.querySelector('meta[name="description"]'); if (m) m.setAttribute("content", "Order wholesale okirika bales for Abuja resellers from Kay Amazing Grace Global in Aba. Grade A quality, delivered to Abuja. WhatsApp 08035239489."); }, []);
  return (
    <SEOPageLayout breadcrumb="Okirika Abuja" category="SEO" h1="Okirika Abuja — Wholesale Thrift Bales Delivered from Aba">
      <p className="text-white/70 text-[15px] leading-relaxed mb-6">Abuja's growing urban population and rising middle class creates strong demand for quality, affordable clothing. Many Abuja resellers and boutique owners source their wholesale okirika from Aba — particularly Korea bales and corporate wear bales. <strong className="text-white">Kay Amazing Grace Global</strong> delivers to Abuja regularly.</p>
      <h2 className="text-white font-bold text-xl mt-8 mb-3">Best Okirika Categories for Abuja</h2>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">Korea ladies bales, corporate wear, and high-quality mixed bales are most popular with Abuja buyers. Wuse Market, Utako Market, and Garki Market are active okirika trading points in Abuja.</p>
      <h2 className="text-white font-bold text-xl mt-8 mb-3">Delivery to Abuja</h2>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">We deliver bales to Abuja via GIG Logistics, CTG Express, and other trusted carriers. Typical delivery is 2–4 working days from Aba after payment. WhatsApp 08035239489 for current delivery rates to Abuja.</p>
      <h2 className="text-white font-bold text-xl mt-8 mb-3">FAQs</h2>
      <div className="mt-4 mb-8">{[{q:"Do you deliver okirika bales to Abuja?",a:"Yes. We deliver to Abuja via trusted logistics partners. Typical delivery: 2–4 working days after payment. WhatsApp 08035239489."},{q:"What okirika types sell well in Abuja?",a:"Korea bales, corporate wear, and ladies wear bales sell strongly in Abuja due to the city's professional class and fashion-conscious population."},{q:"How do Abuja buyers order from Kay Amazing Grace Global?",a:"WhatsApp 08035239489. We send photos, confirm price, you pay by transfer, and we ship to your Abuja address."}].map((f,i)=><F key={i} {...f}/>)}</div>
    </SEOPageLayout>
  );
}