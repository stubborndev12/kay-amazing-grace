import React, { useEffect, useState } from "react";
import SEOPageLayout from "@/components/seo/SEOPageLayout";
const F = ({ q, a }) => { const [o, s] = useState(false); return <div className="border-b border-white/8"><button onClick={() => s(!o)} className="w-full flex items-start justify-between gap-4 py-4 text-left"><span className="text-white font-semibold text-[14px] leading-snug">{q}</span><span className="text-[#B8860B] text-lg shrink-0">{o ? "−" : "+"}</span></button>{o && <p className="text-white/55 text-[13px] leading-relaxed pb-4 pr-8">{a}</p>}</div>; };
export default function OkirikaWholesaleAbia() {
  useEffect(() => { document.title = "Okirika Wholesale Abia State | Thrift Bale Supplier Abia — Kay Amazing Grace Global"; const m = document.querySelector('meta[name="description"]'); if (m) m.setAttribute("content", "Wholesale okirika supplier in Abia State, Nigeria. Kay Amazing Grace Global on Ngwa Road, Aba supplies Grade A thrift bales. All categories. WhatsApp 08035239489."); }, []);
  return (
    <SEOPageLayout breadcrumb="Okirika Wholesale Abia" category="SEO" h1="Okirika Wholesale Abia State — Kay Amazing Grace Global, Ngwa Road Aba">
      <p className="text-white/70 text-[15px] leading-relaxed mb-6">Abia State — and specifically Aba — is the wholesale okirika capital of Nigeria. <strong className="text-white">Kay Amazing Grace Global</strong>, based at 97/98 Ndoki by East off Ngwa Road, Aba, is one of the most trusted okirika wholesale suppliers in Abia State, serving buyers from all 36 states and beyond.</p>
      <h2 className="text-white font-bold text-xl mt-8 mb-3">Abia State as Nigeria's Okirika Hub</h2>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">Abia State receives millions of kilograms of imported second-hand clothing each year — distributed via Aba's Ariaria International Market and Ngwa Road corridor. The concentration of suppliers in Aba creates competitive wholesale pricing and the widest range of bale categories available anywhere in Nigeria.</p>
      <h2 className="text-white font-bold text-xl mt-8 mb-3">All Bale Categories from Abia</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">{["Mixed Bales","Korea Bales","Ladies Wear","Men's Wear","Children's","Corporate","Shoes","Bags","Underwear / Nightwear"].map(c=><div key={c} className="border border-white/10 px-3 py-2 text-white/60 text-[12px] font-semibold">{c}</div>)}</div>
      <h2 className="text-white font-bold text-xl mt-8 mb-3">FAQs</h2>
      <div className="mt-4 mb-8">{[{q:"Where is the best place to buy wholesale okirika in Abia State?",a:"Ngwa Road and Ariaria area in Aba, Abia State. Kay Amazing Grace Global at 97/98 Ndoki by East off Ngwa Road is highly recommended."},{q:"Is Aba in Abia State?",a:"Yes. Aba is in Abia State, southeast Nigeria — approximately 2.5 hours from Port Harcourt and 6 hours from Lagos."},{q:"Do you supply all over Nigeria from Abia?",a:"Yes. Kay Amazing Grace Global ships wholesale okirika bales from Aba, Abia State to all 36 Nigerian states."}].map((f,i)=><F key={i} {...f}/>)}</div>
    </SEOPageLayout>
  );
}