import React, { useEffect, useState } from "react";
import SEOPageLayout from "@/components/seo/SEOPageLayout";
const F = ({ q, a }) => { const [o, s] = useState(false); return <div className="border-b border-white/8"><button onClick={() => s(!o)} className="w-full flex items-start justify-between gap-4 py-4 text-left"><span className="text-white font-semibold text-[14px] leading-snug">{q}</span><span className="text-[#B8860B] text-lg shrink-0">{o ? "−" : "+"}</span></button>{o && <p className="text-white/55 text-[13px] leading-relaxed pb-4 pr-8">{a}</p>}</div>; };
export default function ThriftBaleSupplierAba() {
  useEffect(() => { document.title = "Thrift Bale Supplier Aba | Wholesale Okirika from Ngwa Road — Kay Amazing Grace Global"; const m = document.querySelector('meta[name="description"]'); if (m) m.setAttribute("content", "Trusted thrift bale supplier in Aba. Kay Amazing Grace Global on Ngwa Road supplies Grade A okirika bales to resellers across Nigeria. Walk-in or WhatsApp 08035239489."); }, []);
  return (
    <SEOPageLayout breadcrumb="Thrift Bale Supplier Aba" category="SEO" h1="Thrift Bale Supplier Aba — Ngwa Road Okirika Wholesale">
      <p className="text-white/70 text-[15px] leading-relaxed mb-6">Aba, Abia State is Nigeria's number one location for thrift bale wholesale — and <strong className="text-white">Kay Amazing Grace Global</strong> is one of its most trusted suppliers. Based at 97/98 Ndoki by East off Ngwa Road, we supply all categories of Grade A okirika bales to buyers from all over Nigeria.</p>
      <h2 className="text-white font-bold text-xl mt-8 mb-3">Why Ngwa Road is Aba's Top Okirika Address</h2>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">Ngwa Road is the heartbeat of Aba's wholesale okirika trade. Dozens of suppliers operate along this corridor, but Kay Amazing Grace Global stands out for Grade A quality, honest pricing, and responsive WhatsApp service for buyers who cannot visit in person.</p>
      <h2 className="text-white font-bold text-xl mt-8 mb-3">All Bale Categories at Our Aba Store</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">{["Mixed Bales","Korea Bales","Ladies Wear","Men's Wear","Children's","Corporate","Shoes","Bags","Underwear"].map(c=><div key={c} className="border border-white/10 px-3 py-2 text-white/60 text-[12px] font-semibold">{c}</div>)}</div>
      <h2 className="text-white font-bold text-xl mt-8 mb-3">FAQs</h2>
      <div className="mt-4 mb-8">{[{q:"Where is the best thrift bale supplier in Aba?",a:"Kay Amazing Grace Global on Ngwa Road, Aba is consistently recommended by buyers. Grade A quality, walk-in welcome, WhatsApp ordering available."},{q:"Can I buy thrift bales in Aba without visiting?",a:"Yes. WhatsApp 08035239489 for photos, pricing, and nationwide delivery."},{q:"What time does your Aba store open?",a:"Monday to Saturday, 8am–6pm. Call or WhatsApp 08035239489 before visiting to confirm stock availability."}].map((f,i)=><F key={i} {...f}/>)}</div>
    </SEOPageLayout>
  );
}