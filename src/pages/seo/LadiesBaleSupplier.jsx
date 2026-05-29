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

export default function LadiesBaleSupplier() {
  useEffect(() => {
    document.title = "Ladies Bale Supplier Nigeria | Wholesale Ladies Okirika Bales — Kay Amazing Grace Global";
    const m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute("content", "Buy wholesale ladies okirika bales from Kay Amazing Grace Global in Aba. Grade A quality ladies wear for boutiques and resellers. Nationwide delivery. WhatsApp 08035239489.");
  }, []);

  return (
    <SEOPageLayout
      breadcrumb="Ladies Bale Supplier"
      category="SEO"
      h1="Ladies Bale Supplier Nigeria — Wholesale Ladies Okirika from Aba"
    >
      <p className="text-white/70 text-[15px] leading-relaxed mb-6">
        Ladies wear is the most consistently demanded okirika category across Nigeria. Whether you run a boutique in Lagos, a market stall in Enugu, or a WhatsApp clothing business, quality ladies bales from a trusted supplier are the foundation of a profitable business. <strong className="text-white">Kay Amazing Grace Global</strong> is a premier ladies bale supplier based in Aba, Abia State, serving resellers and boutique owners nationwide.
      </p>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">What's Inside Our Ladies Okirika Bales?</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
        {["Dresses", "Blouses & Tops", "Skirts", "Trousers & Jeans", "Cardigans", "Blazers & Jackets", "Jumpsuits", "Evening Wear", "Casual Wear"].map(cat => (
          <div key={cat} className="border border-white/10 px-3 py-2 text-white/60 text-[12px] font-semibold">{cat}</div>
        ))}
      </div>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">Types of Ladies Bales Available</h2>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">
        <strong className="text-white">Korea Ladies Bales:</strong> Premium fashion-forward items from South Korea. Best for upscale boutiques and fashion-conscious markets. Highest resale price per piece.
      </p>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">
        <strong className="text-white">UK Ladies Bales:</strong> Classic British fashion including quality brands. Mix of casual and smart-casual wear. Excellent condition.
      </p>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">
        <strong className="text-white">USA Ladies Bales:</strong> American casual fashion with strong brand representation. Jeans, hoodies, sportswear, and casualwear popular in younger demographics.
      </p>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">Why Ladies Bales Sell Fast in Nigeria</h2>
      <ul className="text-white/70 text-[14px] leading-relaxed mb-6 space-y-2 list-none">
        {[
          "Highest demand category — women buy clothing more frequently",
          "Wide variety of sizes and styles suits all customer types",
          "Strong online selling potential — WhatsApp and Instagram",
          "Boutique-quality Korea ladies bales command premium prices",
          "Consistent year-round demand, spikes at festive seasons",
        ].map(item => (
          <li key={item} className="flex items-start gap-2"><span className="text-[#B8860B] mt-1">▸</span><span>{item}</span></li>
        ))}
      </ul>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">Profitable Markets for Ladies Okirika in Nigeria</h2>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">
        Ladies okirika sells strongly at: Balogun Market Lagos; Ariaria International Market Aba; Onitsha Main Market; Wuse Market Abuja; Ogbete Market Enugu; Mile 1 Market Port Harcourt; and online via WhatsApp groups and Instagram boutiques.
      </p>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">How to Order Ladies Bales</h2>
      <ol className="text-white/70 text-[14px] leading-relaxed mb-6 space-y-2">
        {["WhatsApp 08035239489 — request ladies bales (specify Korea, UK, or USA)", "Receive photos/video of available stock", "Confirm price and delivery address", "Bank transfer payment", "Delivery to your state from Aba"].map((s, i) => (
          <li key={i} className="flex items-start gap-3 list-none"><span className="text-[#B8860B] font-bold shrink-0">{i + 1}.</span><span>{s}</span></li>
        ))}
      </ol>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">Frequently Asked Questions</h2>
      <div className="mt-4 mb-8">
        {[
          { q: "Who is the best ladies bale supplier in Nigeria?", a: "Kay Amazing Grace Global on Ngwa Road, Aba is one of Nigeria's most trusted ladies okirika bale suppliers. Grade A quality, nationwide delivery." },
          { q: "What is the difference between Korea ladies bales and UK ladies bales?", a: "Korea ladies bales are more fashion-forward and command higher resale prices. UK ladies bales offer classic styles and strong brand variety at slightly lower cost." },
          { q: "How many pieces are in a ladies bale?", a: "Typically 50–100+ pieces depending on bale weight and category. WhatsApp us for specific bale contents and current stock." },
          { q: "Can boutique owners buy ladies bales from you?", a: "Absolutely. Many boutique owners across Nigeria source their stock from us. Korea ladies bales are especially popular with boutiques. WhatsApp 08035239489." },
        ].map((faq, i) => <FAQItem key={i} {...faq} />)}
      </div>
    </SEOPageLayout>
  );
}