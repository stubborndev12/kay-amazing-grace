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

export default function WholesaleOkirika() {
  useEffect(() => {
    document.title = "Wholesale Okirika Supplier Nigeria | Buy Okirika Bales in Bulk — Kay Amazing Grace Global";
    const m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute("content", "Buy wholesale okirika bales from Kay Amazing Grace Global in Aba, Nigeria. Grade A quality, nationwide delivery, all categories. WhatsApp 08035239489.");
  }, []);

  return (
    <SEOPageLayout
      breadcrumb="Wholesale Okirika"
      category="SEO"
      h1="Wholesale Okirika — Buy Quality Thrift Bales in Bulk from Aba"
    >
      <p className="text-white/70 text-[15px] leading-relaxed mb-6">
        If you are looking for a reliable <strong className="text-white">wholesale okirika supplier in Nigeria</strong>, Kay Amazing Grace Global is here for you. Based on Ngwa Road, Aba, Abia State — the heart of Nigeria's okirika trade — we supply Grade A quality thrift bales in all categories to resellers, boutique owners, market traders, and bulk buyers across Nigeria.
      </p>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">What is Wholesale Okirika?</h2>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">
        Wholesale okirika refers to buying second-hand clothing bales in bulk quantities directly from primary suppliers. Rather than purchasing individual clothing items, wholesale buyers purchase full bales containing 40–100+ pieces, then resell them individually at market or boutique prices. This model allows for high profit margins when you buy from a quality supplier at fair wholesale prices.
      </p>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">Why Buy Wholesale Okirika from Kay Amazing Grace Global?</h2>
      <ul className="text-white/70 text-[14px] leading-relaxed mb-6 space-y-2">
        {[
          "Direct Aba supplier — no middlemen, lowest wholesale prices",
          "Grade A quality bales only — consistent stock quality",
          "All major categories always in stock",
          "WhatsApp ordering — order from anywhere in Nigeria",
          "Nationwide delivery across all 36 states",
          "Photos and video of every bale before you pay",
          "Minimum 1 bale — bulk discounts from 3 bales upward",
        ].map(item => (
          <li key={item} className="flex items-start gap-2 list-none"><span className="text-[#B8860B] mt-1">▸</span><span>{item}</span></li>
        ))}
      </ul>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">Wholesale Okirika Bale Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
        {["Mixed Bales", "Korea Bales", "Ladies Wear", "Men's Wear", "Children's Bales", "Corporate Wear", "Shoes Bales", "Bags & Accessories", "Underwear / Nightwear"].map(cat => (
          <div key={cat} className="border border-white/10 px-3 py-2 text-white/60 text-[12px] font-semibold">{cat}</div>
        ))}
      </div>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">How to Place a Wholesale Okirika Order</h2>
      <ol className="text-white/70 text-[14px] leading-relaxed mb-6 space-y-2">
        {[
          "WhatsApp 08035239489 — tell us your bale type, quantity, and budget",
          "Receive photos and video of available stock",
          "Confirm order and delivery address",
          "Pay via bank transfer",
          "Bale delivered to your location nationwide",
        ].map((step, i) => (
          <li key={i} className="flex items-start gap-3 list-none"><span className="text-[#B8860B] font-bold shrink-0">{i + 1}.</span><span>{step}</span></li>
        ))}
      </ol>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">Who Should Buy Wholesale Okirika?</h2>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">
        Wholesale okirika is ideal for: open market traders and stall holders; boutique owners looking for affordable quality stock; WhatsApp and social media clothing sellers; retailers supplying smaller shops and kiosks; and entrepreneurs starting a bale reselling business with limited capital.
      </p>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">Frequently Asked Questions</h2>
      <div className="mt-4 mb-8">
        {[
          { q: "What is the minimum for wholesale okirika orders?", a: "Minimum order is 1 bale. Bulk pricing starts from 3 bales. WhatsApp 08035239489 for current wholesale rates." },
          { q: "Do you sell wholesale okirika to Lagos buyers?", a: "Yes. We deliver wholesale okirika bales to Lagos, Abuja, Port Harcourt, Enugu, Kano, and all other states. Order via WhatsApp." },
          { q: "How is wholesale okirika priced?", a: "Pricing varies by category, source country, and bale weight. Korea bales are priced higher than UK/USA mixed bales. Contact us for current wholesale pricing." },
          { q: "Can I buy wholesale okirika without coming to Aba?", a: "Yes. WhatsApp 08035239489, receive photos, pay by transfer, and we deliver to your state via reliable logistics." },
          { q: "Are your wholesale okirika bales Grade A?", a: "Yes. Kay Amazing Grace Global sells Grade A okirika only. All bales are inspected and sorted at our Aba warehouse before sale." },
        ].map((faq, i) => <FAQItem key={i} {...faq} />)}
      </div>
    </SEOPageLayout>
  );
}