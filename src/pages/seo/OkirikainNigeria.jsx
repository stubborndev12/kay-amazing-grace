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

export default function OkirikainNigeria() {
  useEffect(() => {
    document.title = "Okirika in Nigeria | Wholesale Thrift Bale Supplier — Kay Amazing Grace Global";
    const m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute("content", "Find quality okirika in Nigeria. Kay Amazing Grace Global supplies Grade A thrift bales to resellers and boutique owners across all 36 Nigerian states from Aba, Abia State.");
  }, []);

  return (
    <SEOPageLayout
      breadcrumb="Okirika in Nigeria"
      category="SEO"
      h1="Okirika in Nigeria — Trusted Wholesale Bale Supplier"
    >
      <p className="text-white/70 text-[15px] leading-relaxed mb-6">
        Okirika — Nigeria's beloved term for high-quality second-hand clothing — is one of the most active and profitable trade sectors in the country. From Lagos Island to Onitsha Main Market, Ariaria in Aba to Kano's Kantin Kwari, okirika bales feed a massive retail ecosystem that employs millions of Nigerians. <strong className="text-white">Kay Amazing Grace Global</strong>, based in Aba, Abia State, is a primary wholesale supplier of okirika bales for resellers, boutique owners, and bulk traders across Nigeria.
      </p>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">The Okirika Industry in Nigeria</h2>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">
        Nigeria is one of the world's largest importers of second-hand clothing. Each year, millions of kilograms of okirika arrive at Lagos and Apapa ports, destined for markets across all six geopolitical zones. The industry provides affordable clothing access for everyday Nigerians and business opportunities for hundreds of thousands of resellers and traders.
      </p>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">
        Aba, Abia State — particularly Ngwa Road and the Ariaria International Market — is the wholesale heartbeat of Nigeria's okirika trade. Bale suppliers in Aba receive direct shipments and supply secondary wholesalers and retailers across the country.
      </p>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">Okirika Bale Categories Available Nationwide</h2>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">Kay Amazing Grace Global ships the following bale categories to all 36 Nigerian states:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {[
          ["Mixed Okirika Bales", "Variety of ladies, men's, and children's clothing. Best for open market traders and new resellers."],
          ["Korea Bales", "Premium South Korean fashion for boutiques. Modern styles, excellent condition."],
          ["Ladies Wear Bales", "Dresses, tops, blouses, skirts, trousers — Grade A from UK and USA."],
          ["Men's Wear Bales", "Shirts, trousers, jeans, suits, corporate and casual — Grade A quality."],
          ["Children's Bales", "Baby to teens clothing, school wear, kids jackets and sleepwear."],
          ["Shoes Bales", "All types of footwear for men, women, and children from UK, USA, Korea."],
          ["Bags & Accessories", "Handbags, backpacks, belts, scarves and more."],
          ["Corporate Wear", "Office suits, blazers, formal shirts, dress trousers — premium condition."],
        ].map(([title, desc]) => (
          <div key={title} className="border border-white/10 p-3">
            <p className="text-white font-bold text-[13px] mb-1">{title}</p>
            <p className="text-white/50 text-[12px]">{desc}</p>
          </div>
        ))}
      </div>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">Why Resellers Across Nigeria Choose Kay Amazing Grace Global</h2>
      <ul className="text-white/70 text-[14px] leading-relaxed mb-6 space-y-2 list-none">
        {[
          "Grade A quality only — no mixed-grade surprises",
          "Transparent pricing — what you see is what you pay",
          "Photos and video sent before every order",
          "WhatsApp ordering — no need to travel to Aba",
          "Nationwide delivery to all 36 states",
          "Minimum 1 bale order — beginners welcome",
          "Trusted by hundreds of resellers and boutique owners",
        ].map(item => (
          <li key={item} className="flex items-start gap-2"><span className="text-[#B8860B] mt-1">▸</span><span>{item}</span></li>
        ))}
      </ul>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">Popular Okirika Markets in Nigeria</h2>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">
        Nigeria's top okirika markets include: <strong className="text-white">Ariaria International Market, Aba</strong> (the largest); <strong className="text-white">Onitsha Main Market, Anambra</strong>; <strong className="text-white">Balogun Market, Lagos</strong>; <strong className="text-white">Wuse Market, Abuja</strong>; <strong className="text-white">Ogbete Market, Enugu</strong>; and <strong className="text-white">Mile 1 Market, Port Harcourt</strong>. Traders in all these markets source their wholesale bales from Aba suppliers like Kay Amazing Grace Global.
      </p>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">Okirika Bale Prices in Nigeria</h2>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">
        Bale prices fluctuate based on source country, bale category, weight, and current exchange rates. Korea bales command higher prices than standard UK/USA mixed bales. For current pricing across all categories, WhatsApp 08035239489.
      </p>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">Frequently Asked Questions</h2>
      <div className="mt-4 mb-8">
        {[
          { q: "What does okirika mean in Nigeria?", a: "Okirika is the Nigerian term for second-hand or used clothing, typically imported from the UK, USA, Canada, or Korea in large bales for wholesale distribution and retail sale." },
          { q: "Who is the best okirika supplier in Nigeria?", a: "Kay Amazing Grace Global on Ngwa Road, Aba is one of Nigeria's most trusted Grade A okirika bale suppliers. We have served hundreds of resellers and boutique owners nationwide." },
          { q: "Can I order okirika bales from outside Lagos or Aba?", a: "Yes. Kay Amazing Grace Global accepts WhatsApp orders from anywhere in Nigeria and delivers via courier to all 36 states. No need to visit Aba." },
          { q: "Are okirika bales worth buying for resale?", a: "Absolutely. Grade A okirika bales offer profit margins of 30–100% or more. Korea bales and ladies bales typically yield the highest resale value per item." },
          { q: "How do I know the quality before buying?", a: "We send clear photos and videos of available bales via WhatsApp before any payment is made. All our bales are Grade A — inspected at our Aba warehouse." },
        ].map((faq, i) => <FAQItem key={i} {...faq} />)}
      </div>

      <div className="p-5 border border-[#B8860B]/20 bg-[#B8860B]/5 mt-4">
        <p className="text-white/70 text-[13px] leading-relaxed">
          <strong className="text-white">📍 Address:</strong> 97/98 Ndoki by East off Ngwa Road, Aba, Abia State<br />
          <strong className="text-white">📞 WhatsApp:</strong> 08035239489 | <strong className="text-white">🕐 Hours:</strong> Mon–Sat, 8am–6pm
        </p>
      </div>
    </SEOPageLayout>
  );
}