import React, { useEffect, useState } from "react";
import SEOPageLayout from "@/components/seo/SEOPageLayout";
const F = ({ q, a }) => { const [o, s] = useState(false); return <div className="border-b border-white/8"><button onClick={() => s(!o)} className="w-full flex items-start justify-between gap-4 py-4 text-left"><span className="text-white font-semibold text-[14px] leading-snug">{q}</span><span className="text-[#B8860B] text-lg shrink-0">{o ? "−" : "+"}</span></button>{o && <p className="text-white/55 text-[13px] leading-relaxed pb-4 pr-8">{a}</p>}</div>; };
export default function OkirikaStoreAba() {
  useEffect(() => { document.title = "Okirika Store in Aba | Buy Thrift Bales — Kay Amazing Grace Global, Ngwa Road"; const m = document.querySelector('meta[name="description"]'); if (m) m.setAttribute("content", "Visit Kay Amazing Grace Global — a trusted okirika store on Ngwa Road, Aba. Buy wholesale thrift bales in all categories. Walk-in or order via WhatsApp 08035239489."); }, []);
  return (
    <SEOPageLayout breadcrumb="Okirika Store Aba" category="SEO" h1="Okirika Store in Aba — Kay Amazing Grace Global, Ngwa Road">
      <p className="text-white/70 text-[15px] leading-relaxed mb-6"><strong className="text-white">Kay Amazing Grace Global</strong> is one of the most active okirika stores on Ngwa Road, Aba. We operate from 97/98 Ndoki by East off Ngwa Road — in the heart of Aba's wholesale okirika corridor. Walk-in buyers are welcome Monday to Saturday, 8am–6pm. We also process nationwide WhatsApp orders daily.</p>
      <h2 className="text-white font-bold text-xl mt-8 mb-3">About Our Aba Okirika Store</h2>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">Our Aba store maintains fresh stock of all major bale categories. We receive regular shipments and keep a well-organized warehouse so walk-in buyers can inspect bales before purchase. Our team is knowledgeable and happy to advise on the right bale for your specific business needs.</p>
      <h2 className="text-white font-bold text-xl mt-8 mb-3">Categories in Stock at Our Aba Store</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">{["Mixed Bales","Korea Bales","Ladies Wear","Men's Wear","Children's Bales","Corporate Wear","Shoes Bales","Bags & Accessories","Underwear / Nightwear"].map(c=><div key={c} className="border border-white/10 px-3 py-2 text-white/60 text-[12px] font-semibold">{c}</div>)}</div>
      <h2 className="text-white font-bold text-xl mt-8 mb-3">How to Find Us in Aba</h2>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">Address: 97/98 Ndoki by East off Ngwa Road, Aba, Abia State. Nearest landmark: Ngwa Road corridor near Ariaria junction. Call or WhatsApp 08035239489 before visiting to confirm current stock availability.</p>
      <h2 className="text-white font-bold text-xl mt-8 mb-3">FAQs</h2>
      <div className="mt-4 mb-8">{[{q:"Can I walk into your Aba store to buy bales?",a:"Yes. Walk-in buyers are welcome Monday to Saturday, 8am–6pm at 97/98 Ndoki by East off Ngwa Road, Aba. Call ahead on 08035239489 to confirm availability."},{q:"What okirika categories are at your Aba store?",a:"We keep all major categories in stock — ladies, men's, children's, Korea, mixed, shoes, bags, and corporate wear bales."},{q:"Do I need to book an appointment to visit?",a:"No appointment needed, but we recommend calling ahead on WhatsApp 08035239489 so we can confirm what's in stock before you travel."}].map((f,i)=><F key={i} {...f}/>)}</div>
    </SEOPageLayout>
  );
}