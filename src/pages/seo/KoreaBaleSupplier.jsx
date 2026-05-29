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

export default function KoreaBaleSupplier() {
  useEffect(() => {
    document.title = "Korea Bale Supplier Nigeria | Buy Premium Korea Thrift Bales — Kay Amazing Grace Global";
    const m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute("content", "Looking for a Korea bale supplier in Nigeria? Kay Amazing Grace Global in Aba supplies premium Grade A Korea bales to boutiques and resellers across all 36 Nigerian states.");
  }, []);

  return (
    <SEOPageLayout
      breadcrumb="Korea Bale Supplier Nigeria"
      category="SEO"
      h1="Korea Bale Supplier Nigeria — Premium Quality from Aba"
    >
      <p className="text-white/70 text-[15px] leading-relaxed mb-6">
        Korea bales are among the most sought-after wholesale thrift bales in Nigeria — and for good reason. South Korean fashion is known globally for its quality, modern styling, and excellent garment construction. <strong className="text-white">Kay Amazing Grace Global</strong> is a trusted Korea bale supplier in Nigeria, based in Aba, Abia State, supplying boutique owners and premium resellers nationwide with Grade A Korea bales.
      </p>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">What Are Korea Bales?</h2>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">
        Korea bales contain second-hand clothing originally worn in South Korea. Korean fashion culture values quality fabrics, contemporary cuts, and stylish design — meaning Korea bales typically contain clothing that is in excellent condition, fashionable, and highly sellable in Nigerian boutiques and retail stores.
      </p>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">
        Korea ladies bales contain dresses, tops, blouses, skirts, and jackets with modern Korean fashion aesthetics. Korea men's bales contain shirts, trousers, and casual wear. Korea mixed bales combine multiple categories.
      </p>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">Why Korea Bales Command Premium Prices</h2>
      <ul className="text-white/70 text-[14px] leading-relaxed mb-6 space-y-2 list-none">
        {[
          "Superior garment quality — durable fabrics, clean finishes",
          "Fashion-forward styles — highly desirable for boutique customers",
          "Excellent condition — minimal wear, often near-new",
          "Strong brand representation — recognizable labels frequent",
          "Higher resale value per item than standard UK/USA bales",
        ].map(item => (
          <li key={item} className="flex items-start gap-2"><span className="text-[#B8860B] mt-1">▸</span><span>{item}</span></li>
        ))}
      </ul>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">Korea Bale Categories Available</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
        {["Korea Ladies Bales", "Korea Men's Bales", "Korea Mixed Bales", "Korea Shoes Bales", "Korea Children's Bales", "Korea Corporate Wear"].map(cat => (
          <div key={cat} className="border border-white/10 px-3 py-2 text-white/60 text-[12px] font-semibold">{cat}</div>
        ))}
      </div>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">Who Should Buy Korea Bales?</h2>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">
        Korea bales are best suited for boutique owners targeting urban fashion customers; WhatsApp boutiques and Instagram clothing sellers; traders in upscale markets in Lagos, Abuja, Enugu, and Port Harcourt; and resellers who want to command higher prices per piece.
      </p>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">
        If you sell to market traders in cost-sensitive areas, mixed bales may be more appropriate. Korea bales are ideal when your customers value style and quality over bargain pricing.
      </p>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">Korea Bales vs UK/USA Bales — What's the Difference?</h2>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-[13px] border border-white/10">
          <thead>
            <tr className="bg-white/5">
              <th className="text-left px-4 py-2 text-white/70 font-bold border-b border-white/10">Feature</th>
              <th className="text-left px-4 py-2 text-white/70 font-bold border-b border-white/10">Korea Bales</th>
              <th className="text-left px-4 py-2 text-white/70 font-bold border-b border-white/10">UK/USA Bales</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Fashion Style", "Modern, trendy", "Classic, varied"],
              ["Condition", "Excellent / near-new", "Good to excellent"],
              ["Price", "Higher", "Lower to moderate"],
              ["Best For", "Boutiques", "Open markets"],
              ["Profit Margin", "High per item", "High per volume"],
            ].map(([feat, korea, uk]) => (
              <tr key={feat} className="border-b border-white/5">
                <td className="px-4 py-2 text-white/60">{feat}</td>
                <td className="px-4 py-2 text-[#B8860B]">{korea}</td>
                <td className="px-4 py-2 text-white/60">{uk}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">Frequently Asked Questions</h2>
      <div className="mt-4 mb-8">
        {[
          { q: "Who is the best Korea bale supplier in Nigeria?", a: "Kay Amazing Grace Global on Ngwa Road, Aba is one of Nigeria's most trusted Korea bale suppliers. We supply boutiques and resellers in all 36 states." },
          { q: "Are Korea bales worth the extra cost?", a: "Yes. Korea bales typically yield higher resale prices per item. Boutique owners and online sellers report better customer satisfaction and higher profit margins with Korea bale stock." },
          { q: "How do I order Korea bales from Aba?", a: "WhatsApp 08035239489. State 'Korea bale' and the quantity you need. We send photos, confirm pricing, and arrange delivery to your state." },
          { q: "Do you have Korea ladies bales specifically?", a: "Yes. Korea ladies bales are one of our most popular categories. WhatsApp us to check current stock availability." },
          { q: "What is the price of a Korea bale in Nigeria?", a: "Korea bale prices vary with stock and exchange rates. WhatsApp 08035239489 for current Korea bale pricing. We provide transparent quotes with no hidden costs." },
        ].map((faq, i) => <FAQItem key={i} {...faq} />)}
      </div>
    </SEOPageLayout>
  );
}