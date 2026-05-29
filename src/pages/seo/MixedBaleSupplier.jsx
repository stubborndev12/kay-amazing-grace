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

export default function MixedBaleSupplier() {
  useEffect(() => {
    document.title = "Mixed Bale Supplier Nigeria | Wholesale Mixed Okirika Bales — Kay Amazing Grace Global Aba";
    const m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute("content", "Buy wholesale mixed okirika bales from Kay Amazing Grace Global in Aba, Nigeria. Grade A quality, ladies, men's, and children's items. Nationwide delivery. WhatsApp 08035239489.");
  }, []);

  return (
    <SEOPageLayout
      breadcrumb="Mixed Bale Supplier"
      category="SEO"
      h1="Mixed Bale Supplier Nigeria — Wholesale from Aba, Abia State"
    >
      <p className="text-white/70 text-[15px] leading-relaxed mb-6">
        Mixed bales are one of the most popular and versatile options in Nigeria's okirika trade. As a leading <strong className="text-white">mixed bale supplier</strong> in Nigeria, Kay Amazing Grace Global supplies Grade A mixed okirika bales from our warehouse on Ngwa Road, Aba, to market traders, resellers, and wholesale buyers across all 36 states.
      </p>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">What is a Mixed Okirika Bale?</h2>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">
        A mixed okirika bale contains a variety of second-hand clothing items across multiple categories — typically a combination of ladies wear, men's wear, and children's clothing in a single bale. Mixed bales are sourced from the UK, USA, and Canada and offer excellent variety for open market traders and general resellers.
      </p>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">What's Inside a Mixed Bale?</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
        {["Ladies Tops & Blouses", "Men's Shirts & Polos", "Children's Clothing", "Trousers & Jeans", "Dresses & Skirts", "Jackets & Coats", "Casual Wear", "Light Sportswear", "Sleepwear items"].map(cat => (
          <div key={cat} className="border border-white/10 px-3 py-2 text-white/60 text-[12px] font-semibold">{cat}</div>
        ))}
      </div>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">Who Should Buy Mixed Bales?</h2>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">
        Mixed bales are ideal for: first-time okirika buyers who want variety before specializing; open market traders at Ariaria, Balogun, Onitsha, and similar markets; resellers who sell to a broad demographic (men, women, and children); traders who prefer one bale serving multiple customer types.
      </p>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">Mixed Bales vs Sorted Category Bales</h2>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">
        Mixed bales offer variety and lower average cost per piece. Sorted category bales (e.g., pure ladies bales) give you more focused stock for specific customer bases. Many experienced resellers buy both — mixed bales for volume and category bales for specific market segments.
      </p>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">How to Order Mixed Bales from Kay Amazing Grace Global</h2>
      <ol className="text-white/70 text-[14px] leading-relaxed mb-6 space-y-2">
        {["WhatsApp 08035239489 and request 'mixed bales'", "Specify quantity needed (we stock from 1 bale upward)", "Receive photos and current pricing", "Confirm and pay via bank transfer", "Delivery nationwide from Aba"].map((s, i) => (
          <li key={i} className="flex items-start gap-3 list-none"><span className="text-[#B8860B] font-bold shrink-0">{i + 1}.</span><span>{s}</span></li>
        ))}
      </ol>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">Frequently Asked Questions</h2>
      <div className="mt-4 mb-8">
        {[
          { q: "What is in a mixed okirika bale?", a: "Mixed bales contain a variety of ladies, men's, and children's clothing — shirts, blouses, trousers, dresses, jeans, and more — all Grade A from UK and USA sources." },
          { q: "Are mixed bales good for beginners?", a: "Yes. Mixed bales are one of the best starting options for new resellers due to their variety and lower cost compared to sorted category bales." },
          { q: "How much is a mixed bale in Nigeria?", a: "Prices vary with stock and exchange rates. WhatsApp 08035239489 for current mixed bale pricing. Bulk discounts available for 3+ bales." },
          { q: "Where can I buy mixed okirika bales near me?", a: "Kay Amazing Grace Global supplies mixed bales nationwide from Aba. WhatsApp 08035239489 to order. We deliver to Lagos, Abuja, Enugu, PH, Kano, and all other states." },
        ].map((faq, i) => <FAQItem key={i} {...faq} />)}
      </div>
    </SEOPageLayout>
  );
}