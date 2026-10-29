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

export default function ChildrenClothingBaleSupplier() {
  useEffect(() => {
    document.title = "Children Clothing Bale Supplier Nigeria | Kids Okirika Bales — Kay Amazing Grace Global";
    const m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute("content", "Buy wholesale children clothing okirika bales from Kay Amazing Grace Global in Aba. Grade A kids wear bales for resellers and market traders. Nationwide delivery. WhatsApp 08035239489.");
  }, []);

  return (
    <SEOPageLayout
      breadcrumb="Children Clothing Bale Supplier"
      category="SEO"
      h1="Children Clothing Bale Supplier Nigeria — Kids Okirika from Aba"
    >
      <p className="text-white/70 text-[15px] leading-relaxed mb-6">
        Children's clothing is one of the most steady-demand okirika categories in Nigeria. Parents constantly need affordable, quality clothing for growing children — making children's okirika bales a reliable business for resellers and market traders. <strong className="text-white">Kay Amazing Grace Global</strong> is a wholesale children clothing bale supplier based in Aba, serving buyers nationwide from Abia State.
      </p>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">What's in a Children's Okirika Bale?</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
        {["Baby Clothes (0–2yrs)", "Toddler Wear (2–4yrs)", "Girls Clothing", "Boys Clothing", "School Wear", "Kids Jackets & Coats", "Children's Sleepwear", "School Uniforms", "Kids Party Wear"].map(cat => (
          <div key={cat} className="border border-white/10 px-3 py-2 text-white/60 text-[12px] font-semibold">{cat}</div>
        ))}
      </div>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">Why Children's Bales Are a Smart Business</h2>
      <ul className="text-white/70 text-[14px] leading-relaxed mb-6 space-y-2 list-none">
        {[
          "Children grow fast — parents need to buy new clothing frequently",
          "Budget-conscious families seek affordable okirika over new clothing",
          "School resumption seasons create demand spikes",
          "Quality brand children's okirika (e.g. Next, M&S) sells at premium",
          "Steady year-round sales — children's clothing never goes out of style",
        ].map(item => (
          <li key={item} className="flex items-start gap-2"><span className="text-[#B8860B] mt-1">▸</span><span>{item}</span></li>
        ))}
      </ul>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">Best Markets for Children's Okirika</h2>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">
        Children's okirika sells strongly at local markets in every state, school supply markets during back-to-school periods, WhatsApp mummy groups and parenting communities, and in markets near densely populated residential neighborhoods.
      </p>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">Ages Covered in Children's Bales</h2>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">
        Our children's bales cover a wide age range — from newborn (0 months) to pre-teen (12 years). You can specify when ordering if you prefer bales focused on a particular age group (e.g., baby bales only, or school-age children bales). Contact us for availability.
      </p>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">Frequently Asked Questions</h2>
      <div className="mt-4 mb-8">
        {[
          { q: "Who sells children clothing bales in Nigeria?", a: "Kay Amazing Grace Global in Aba is a trusted wholesale supplier of Grade A children's okirika bales. We deliver to all 36 Nigerian states." },
          { q: "What ages are covered in children's okirika bales?", a: "Our children's bales typically cover 0–12 years, including baby, toddler, and school-age clothing. Specify your preference when ordering." },
          { q: "Are children's bales profitable?", a: "Yes. Children's okirika bales have consistent demand and parents frequently replace growing children's wardrobes. Brand-name children's okirika from UK sources can command strong retail prices." },
          { q: "How do I order children's bales from Aba?", a: "WhatsApp 08035239489 and request children's bales. We send photos, confirm pricing, and deliver to your state." },
        ].map((faq, i) => <FAQItem key={i} {...faq} />)}
      </div>
    </SEOPageLayout>
  );
}