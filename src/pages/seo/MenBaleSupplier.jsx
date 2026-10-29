import React, { useEffect, useState } from "react";
import SEOPageLayout from "@/components/seo/SEOPageLayout";

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="border-b border-white/8">
      <button onClick={() => setOpen(!open)} className="w-full flex items-start justify-between gap-4 py-4 text-left">
        <span className="text-white font-semibold text-[14px] leading-snug">{q}</span>
        <span className="text-[#B8860B] text-lg shrink-0">{open ? "−" : "+"}</span>
      </button>
      {open && <p className="text-white/55 text-[13px] leading-relaxed pb-4 pr-8">{a}</p>}
    </div>
  );
};

export default function MenBaleSupplier() {
  useEffect(() => {
    document.title = "Men Bale Supplier Nigeria | Wholesale Men's Okirika Bales — Kay Amazing Grace Global Aba";
    const m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute("content", "Buy wholesale men's okirika bales from Kay Amazing Grace Global in Aba. Grade A quality men's wear for resellers and boutiques nationwide. WhatsApp 08035239489.");
  }, []);

  return (
    <SEOPageLayout
      breadcrumb="Men Bale Supplier"
      category="SEO"
      h1="Men Bale Supplier Nigeria — Wholesale Men's Okirika from Aba"
    >
      <p className="text-white/70 text-[15px] leading-relaxed mb-6">
        Men's okirika bales are a consistent and reliable income source for resellers across Nigeria. The demand for quality, affordable men's clothing drives strong bale sales year-round. <strong className="text-white">Kay Amazing Grace Global</strong> is a wholesale men's bale supplier based in Aba, Abia State, delivering Grade A men's okirika bales to buyers in all 36 Nigerian states.
      </p>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">What's in Our Men's Okirika Bales?</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
        {["Casual Shirts", "T-Shirts & Polos", "Jeans & Trousers", "Shorts", "Blazers", "Corporate Shirts", "Suits", "Jackets & Coats", "Sportswear"].map(cat => (
          <div key={cat} className="border border-white/10 px-3 py-2 text-white/60 text-[12px] font-semibold">{cat}</div>
        ))}
      </div>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">Men's Bale Options at Kay Amazing Grace Global</h2>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">
        <strong className="text-white">Casual Men's Bales:</strong> General casual wear for everyday dressing — shirts, jeans, T-shirts, shorts. High volume, good variety.
      </p>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">
        <strong className="text-white">Corporate Men's Bales:</strong> Office and formal wear — suits, blazers, formal shirts, ties, and dress trousers. Popular in business districts in Lagos, Abuja, and Port Harcourt.
      </p>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">
        <strong className="text-white">Korea Men's Bales:</strong> Premium quality Korean men's fashion. Modern styling, excellent condition, higher resale value.
      </p>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">
        <strong className="text-white">Men's Sportswear Bales:</strong> Jerseys, joggers, tracksuits, and branded athletic wear. Popular with young male buyers.
      </p>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">Best Markets for Men's Okirika</h2>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">
        Men's okirika bales sell strongly at Ariaria Market Aba, Tejuosho Market Lagos, Onitsha Main Market, Kantin Kwari Market Kano, Wuse Market Abuja, and through WhatsApp and Facebook clothing groups across Nigeria.
      </p>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">Frequently Asked Questions</h2>
      <div className="mt-4 mb-8">
        {[
          { q: "What men's bale categories do you stock?", a: "We stock casual men's bales, corporate wear bales, Korea men's bales, and sportswear bales. WhatsApp 08035239489 for current stock." },
          { q: "Are corporate men's bales available in Nigeria?", a: "Yes. Kay Amazing Grace Global stocks corporate men's bales containing suits, blazers, and formal shirts. Popular with Lagos, Abuja, and Port Harcourt buyers." },
          { q: "Who is the best men's bale supplier in Aba?", a: "Kay Amazing Grace Global on Ngwa Road, Aba is a trusted men's okirika bale supplier with Grade A quality and nationwide delivery." },
          { q: "Can I order men's bales online without visiting Aba?", a: "Yes. WhatsApp 08035239489, receive photos, pay by transfer, and we deliver to your state." },
        ].map((faq, i) => <FAQItem key={i} {...faq} />)}
      </div>
    </SEOPageLayout>
  );
}