import React, { useEffect, useState } from "react";
import SEOPageLayout from "@/components/seo/SEOPageLayout";
const F = ({ q, a }) => { const [o, s] = useState(false); return <div className="border-b border-white/8"><button onClick={() => s(!o)} className="w-full flex items-start justify-between gap-4 py-4 text-left"><span className="text-white font-semibold text-[14px] leading-snug">{q}</span><span className="text-[#B8860B] text-lg shrink-0">{o ? "−" : "+"}</span></button>{o && <p className="text-white/55 text-[13px] leading-relaxed pb-4 pr-8">{a}</p>}</div>; };
export default function OkirikaSupplierNigeria() {
  useEffect(() => { document.title = "Okirika Supplier Nigeria | Trusted Wholesale Okirika — Kay Amazing Grace Global Aba"; const m = document.querySelector('meta[name="description"]'); if (m) m.setAttribute("content", "Find a trusted okirika supplier in Nigeria. Kay Amazing Grace Global in Aba supplies Grade A thrift bales in all categories to resellers nationwide. WhatsApp 08035239489."); }, []);
  return (
    <SEOPageLayout breadcrumb="Okirika Supplier Nigeria" category="SEO" h1="Okirika Supplier Nigeria — Trusted Wholesale from Kay Amazing Grace Global, Aba">
      <p className="text-white/70 text-[15px] leading-relaxed mb-6">Finding a trustworthy <strong className="text-white">okirika supplier in Nigeria</strong> is critical for any reseller or boutique owner. Kay Amazing Grace Global, based on Ngwa Road, Aba, Abia State, has built a reputation as one of Nigeria's most reliable wholesale okirika suppliers — Grade A quality, transparent pricing, and dependable nationwide delivery.</p>
      <h2 className="text-white font-bold text-xl mt-8 mb-3">All Bale Categories Available</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">{["Mixed Bales","Korea Bales","Ladies Wear","Men's Wear","Children's Bales","Corporate Wear","Shoes","Bags","Underwear / Nightwear"].map(c=><div key={c} className="border border-white/10 px-3 py-2 text-white/60 text-[12px] font-semibold">{c}</div>)}</div>
      <h2 className="text-white font-bold text-xl mt-8 mb-3">How to Contact Your Okirika Supplier</h2>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">WhatsApp: 08035239489. State the bale type and quantity. Receive photos. Confirm price. Pay by transfer. Delivery nationwide. It's that simple with Kay Amazing Grace Global.</p>
      <h2 className="text-white font-bold text-xl mt-8 mb-3">FAQs</h2>
      <div className="mt-4 mb-8">{[{q:"What should I look for in an okirika supplier in Nigeria?",a:"Grade A quality guarantee, photos before payment, physical address, nationwide delivery, and a consistent track record. Kay Amazing Grace Global meets all these criteria."},{q:"Is Kay Amazing Grace Global a verified okirika supplier?",a:"Yes. We are based at 97/98 Ndoki by East off Ngwa Road, Aba — a verifiable physical address. Walk-in buyers welcome. Our number: 08035239489."},{q:"Do you supply okirika to the North of Nigeria?",a:"Yes. We deliver to Kano, Kaduna, Abuja, Jos, and all states across Northern Nigeria via logistics partners."}].map((f,i)=><F key={i} {...f}/>)}</div>
    </SEOPageLayout>
  );
}