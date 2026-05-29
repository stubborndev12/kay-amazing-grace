import React, { useEffect, useState } from "react";
import SEOPageLayout from "@/components/seo/SEOPageLayout";
import { Link } from "react-router-dom";
import { WA_URL, WA_PRICING_URL } from "@/lib/seo";

const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

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

export default function OkirikainAba() {
  useEffect(() => {
    document.title = "Okirika in Aba | Buy Wholesale Okirika Bales in Aba Nigeria — Kay Amazing Grace Global";
    const m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute("content", "Looking for okirika in Aba? Kay Amazing Grace Global is a trusted wholesale okirika supplier on Ngwa Road, Aba, Abia State. Buy quality thrift bales for resellers. Nationwide delivery.");
  }, []);

  return (
    <SEOPageLayout
      breadcrumb="Okirika in Aba"
      category="SEO"
      h1="Okirika in Aba — Wholesale Thrift Bales from Ngwa Road"
    >
      <p className="text-white/70 text-[15px] leading-relaxed mb-6">
        Aba, Abia State is Nigeria's undisputed capital for okirika — second-hand and thrift clothing traded in bales. Whether you are a first-time reseller looking to start a bale business or an experienced trader sourcing stock for your market stall, Aba offers some of the best wholesale okirika prices in all of West Africa. <strong className="text-white">Kay Amazing Grace Global</strong> is located at 97/98 Ndoki by East off Ngwa Road, Aba — one of the most active okirika trading corridors in Abia State.
      </p>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">What is Okirika?</h2>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">
        "Okirika" is the Nigerian term for second-hand or used clothing, typically imported from the United Kingdom, United States, Canada, and Korea. These items are packed into bales of various sizes and categories — ladies wear, men's wear, children's wear, shoes, bags, corporate wear, and more. Okirika bales arrive at Nigerian ports and are then distributed to wholesale markets like Aba's Ariaria and Ngwa Road.
      </p>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">
        The quality of okirika varies. Grade A bales contain clothing in excellent condition — minimal wear, no major damage, and often with original brand tags still attached. Kay Amazing Grace Global supplies only Grade A okirika bales, carefully inspected and sorted at our Aba warehouse before any sale.
      </p>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">Why Buy Okirika in Aba?</h2>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">
        Aba has been a wholesale hub for okirika since the 1980s. The city's Ariaria International Market — one of the largest markets in Africa — is a primary distribution point for thrift clothing entering Nigeria. Buying okirika directly in Aba means:
      </p>
      <ul className="text-white/70 text-[14px] leading-relaxed mb-6 space-y-2 list-none">
        {["Lower prices — no middlemen, direct from source", "Wider variety of bale categories available at any time", "Ability to inspect bales before purchase (walk-in buyers)", "Established wholesale networks and trusted suppliers", "Faster turnover — bales arrive frequently from ports"].map(item => (
          <li key={item} className="flex items-start gap-2"><span className="text-[#B8860B] mt-1">▸</span><span>{item}</span></li>
        ))}
      </ul>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">Kay Amazing Grace Global — Your Okirika Partner in Aba</h2>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">
        Kay Amazing Grace Global has been serving resellers, boutique owners, and wholesale buyers from our base on Ngwa Road, Aba. We supply:
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
        {["Mixed Bales", "Korea Bales", "Ladies Wear Bales", "Men's Wear Bales", "Children's Bales", "Corporate Wear", "Shoes Bales", "Bags & Accessories", "Underwear & Nightwear"].map(cat => (
          <div key={cat} className="border border-white/10 px-3 py-2 text-white/60 text-[12px] font-semibold">{cat}</div>
        ))}
      </div>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">Bale Categories Available in Aba</h2>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">
        <strong className="text-white">Mixed Bales:</strong> Ideal for market traders and new resellers. Contains an assortment of ladies, men's, and children's clothing. Good variety and consistent demand.
      </p>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">
        <strong className="text-white">Korea Bales:</strong> Premium quality, fashion-forward clothing from South Korea. Best for boutique owners targeting fashion-conscious customers in Lagos, Abuja, Port Harcourt, and Enugu.
      </p>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">
        <strong className="text-white">Ladies Wear Bales:</strong> Consistently the highest-demand category in Nigeria. Dresses, tops, blouses, skirts, trousers, and jackets — Grade A quality from UK and USA sources.
      </p>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">
        <strong className="text-white">Children's Bales:</strong> Baby clothing, toddler wear, school wear, kids' jackets, and sleepwear. Popular with market stall traders across Southeast and Southwest Nigeria.
      </p>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">
        <strong className="text-white">Shoes Bales:</strong> Men's, women's, and children's footwear including sneakers, heels, sandals, and boots. Sourced from UK, USA, and Korea.
      </p>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">How to Order Okirika from Aba Without Travelling</h2>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">
        Many of our customers are in Lagos, Abuja, Enugu, Port Harcourt, Benin City, Kano, Ibadan, and other Nigerian cities. You do not need to travel to Aba to buy from us. Our WhatsApp ordering process is simple:
      </p>
      <ol className="text-white/70 text-[14px] leading-relaxed mb-6 space-y-2">
        {[
          "WhatsApp 08035239489 and state the bale type and quantity",
          "We send photos and/or video of available stock",
          "Agree on price and confirm your delivery address",
          "Make payment via bank transfer",
          "We arrange delivery via reliable courier to your state",
        ].map((step, i) => (
          <li key={i} className="flex items-start gap-3"><span className="text-[#B8860B] font-bold shrink-0">{i + 1}.</span><span>{step}</span></li>
        ))}
      </ol>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">Okirika Pricing in Aba</h2>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">
        Okirika bale prices in Aba vary depending on the category, grade, weight, and source country. Korea bales generally command a premium over standard UK/USA mixed bales. Prices fluctuate with supply and demand, port clearance costs, and exchange rates.
      </p>
      <p className="text-white/70 text-[14px] leading-relaxed mb-6">
        For current pricing on all bale categories, WhatsApp 08035239489. We provide transparent pricing with no hidden charges. Bulk discounts available for 3+ bales.
      </p>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">Who Buys Okirika in Aba?</h2>
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">
        Our customers include: open market traders in Ariaria, Onitsha, and Balogun Market; boutique owners across Lagos, Abuja, and Port Harcourt; WhatsApp and Instagram clothing resellers; market stall traders in Southeast Nigeria; and bulk buyers supplying smaller retailers in their localities.
      </p>
      <p className="text-white/70 text-[14px] leading-relaxed mb-6">
        Whether you are buying your first bale or your hundredth, Kay Amazing Grace Global welcomes you. We supply from 1 bale upwards. Minimum order is one bale.
      </p>

      <h2 className="text-white font-bold text-xl mt-8 mb-3">Frequently Asked Questions — Okirika in Aba</h2>
      <div className="mt-4 mb-8">
        {[
          { q: "Where is the best place to buy okirika in Aba?", a: "Ngwa Road and the Ariaria International Market area are the main okirika wholesale zones in Aba. Kay Amazing Grace Global is located at 97/98 Ndoki by East off Ngwa Road, Aba, Abia State." },
          { q: "Can I buy okirika from Aba without visiting in person?", a: "Yes. Kay Amazing Grace Global processes WhatsApp orders nationwide. Send a message to 08035239489 with your bale requirements, receive photos, confirm payment, and we arrange delivery to your state." },
          { q: "What grades of okirika are available in Aba?", a: "Kay Amazing Grace Global supplies Grade A okirika bales only — the highest quality category. Grade A items are in excellent condition with minimal wear." },
          { q: "What is the minimum order for okirika bales from Aba?", a: "Our minimum order is one bale. Wholesale pricing improves significantly with orders of 3 or more bales." },
          { q: "Does Kay Amazing Grace Global deliver outside Aba?", a: "Yes. We deliver to all 36 states across Nigeria via trusted logistics partners. Delivery costs are confirmed at the time of ordering." },
          { q: "What bale categories are available in Aba?", a: "We stock mixed bales, Korea bales, ladies wear, men's wear, children's bales, corporate wear, shoes, bags, and underwear/nightwear bales." },
        ].map((faq, i) => <FAQItem key={i} {...faq} />)}
      </div>

      <div className="p-5 border border-[#B8860B]/20 bg-[#B8860B]/5 mt-4">
        <p className="text-white/70 text-[13px] leading-relaxed">
          <strong className="text-white">📍 Address:</strong> 97/98 Ndoki by East off Ngwa Road, Aba, Abia State, Nigeria<br />
          <strong className="text-white">📞 WhatsApp:</strong> 08035239489<br />
          <strong className="text-white">🕐 Hours:</strong> Monday – Saturday, 8am – 6pm
        </p>
      </div>
    </SEOPageLayout>
  );
}