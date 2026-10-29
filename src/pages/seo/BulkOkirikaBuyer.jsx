import React, { useEffect, useState } from "react";
import SEOPageLayout from "@/components/seo/SEOPageLayout";
const F = ({ q, a }) => { const [o, s] = useState(false); return <div className="border-b border-white/8"><button onClick={() => s(!o)} className="w-full flex items-start justify-between gap-4 py-4 text-left"><span className="text-white font-semibold text-[14px] leading-snug">{q}</span><span className="text-[#B8860B] text-lg shrink-0">{o ? "−" : "+"}</span></button>{o && <p className="text-white/55 text-[13px] leading-relaxed pb-4 pr-8">{a}</p>}</div>; };
export default function BulkOkirikaBuyer() {
  useEffect(() => { document.title = "Bulk Okirika Buyer Nigeria | Wholesale Bale Orders — Kay Amazing Grace Global Aba"; const m = document.querySelector('meta[name="description"]'); if (m) m.setAttribute("content", "Bulk okirika buyer? Kay Amazing Grace Global in Aba offers the best wholesale pricing for bulk bale orders across all categories. WhatsApp 08035239489 for bulk rates."); }, []);
  return (
    <SEOPageLayout breadcrumb="Bulk Okirika Buyer" category="SEO" h1="Bulk Okirika Buyers — Best Wholesale Rates from Kay Amazing Grace Global, Aba">
      <p className="text-white/70 text-[15px] leading-relaxed mb-6">If you are a bulk okirika buyer — purchasing 3, 5, 10, or more bales at once — <strong className="text-white">Kay Amazing Grace Global</strong> in Aba offers the most competitive wholesale pricing in Nigeria. Bulk buyers receive priority service, better per-bale pricing, and first notification of new arrivals.</p>
      <h2 className="text-white font-bold text-xl mt-8 mb-3">Bulk Buying Benefits</h2>
      <ul className="text-white/70 text-[14px] leading-relaxed mb-6 space-y-2 list-none">{["Lower per-bale price with quantity orders","Priority allocation of best stock","First notification of new arrivals","Faster order processing","Dedicated account management via WhatsApp"].map(i=><li key={i} className="flex items-start gap-2"><span className="text-[#B8860B] mt-1">▸</span><span>{i}</span></li>)}</ul>
      <h2 className="text-white font-bold text-xl mt-8 mb-3">Bulk Order Categories</h2>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">Bulk orders can be same-category (e.g., 5 Korea ladies bales) or mixed across categories (e.g., 2 ladies + 2 men's + 1 children's). We customize bulk orders to match your specific stock requirements and market needs.</p>
      <h2 className="text-white font-bold text-xl mt-8 mb-3">FAQs</h2>
      <div className="mt-4 mb-8">{[{q:"What qualifies as a bulk order?",a:"3 or more bales in a single order qualifies for our bulk pricing. The more bales, the better the per-bale rate."},{q:"Can I mix categories in a bulk order?",a:"Yes. You can order across multiple categories in a single bulk order — e.g., 3 ladies bales + 2 Korea bales."},{q:"How do I place a bulk order?",a:"WhatsApp 08035239489 and state: bulk order, categories needed, quantities, and your delivery state. We respond with a quote promptly."}].map((f,i)=><F key={i} {...f}/>)}</div>
    </SEOPageLayout>
  );
}