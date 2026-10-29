import React, { useEffect } from "react";
import SEOPageLayout from "@/components/seo/SEOPageLayout";

export default function CorporateWearBales() {
  useEffect(() => {
    document.title = "Corporate Wear Bales Nigeria | Wholesale Office Clothing Bales — Kay Amazing Grace Global";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Buy wholesale corporate wear bales in Nigeria from Kay Amazing Grace Global, Aba. Quality office clothing, suits, blazers, formal shirts and trousers bales for resellers.");
  }, []);

  return (
    <SEOPageLayout
      h1="Corporate Wear Bales — Wholesale Office Clothing Bales in Aba"
      breadcrumb="Corporate Wear Bales"
      category="Bale Categories"
    >
      <p className="text-white/70 text-base leading-relaxed mb-6">
        Kay Amazing Grace Global supplies <strong className="text-white">wholesale corporate wear bales</strong> — formal office clothing, suits, blazers, and business attire — to resellers across Nigeria. Our corporate okirika bales are Grade A quality, sourced from the UK, USA, and Europe.
      </p>

      <h2 className="text-xl font-bold text-white mt-8 mb-3">What's in a Corporate Wear Bale?</h2>
      <p className="text-white/60 leading-relaxed mb-4">Corporate wear okirika bales typically contain:</p>
      <ul className="text-white/60 leading-relaxed mb-6 space-y-1.5 list-none pl-0">
        {["Men's suits and blazers", "Women's blazers and office jackets", "Formal shirts (men and women)", "Dress trousers and skirts", "Ties and formal accessories", "Corporate dresses", "Court shoes (ladies)"].map(item => (
          <li key={item} className="flex items-start gap-2">
            <span className="text-[#B8860B] shrink-0 mt-1">▸</span> {item}
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-bold text-white mt-8 mb-3">Who Buys Corporate Wear Bales?</h2>
      <p className="text-white/60 leading-relaxed mb-6">
        Corporate wear bales are popular with boutique owners targeting working professionals, tailors and dry-cleaning businesses, fashion resellers in office districts of Lagos, Abuja, and Port Harcourt, and thrift store owners looking for premium stock.
      </p>

      <h2 className="text-xl font-bold text-white mt-8 mb-3">Why Corporate Bales Are High Value</h2>
      <p className="text-white/60 leading-relaxed mb-6">
        Corporate okirika clothing typically has premium fabric quality and is in excellent condition. A good suit or blazer from a UK or USA corporate bale can retail for significantly more than casual clothing — making profit margins higher for experienced resellers.
      </p>

      <h2 className="text-xl font-bold text-white mt-8 mb-3">Order Corporate Wear Bales from Kay Amazing Grace Global</h2>
      <p className="text-white/60 leading-relaxed mb-4">
        Send a WhatsApp message to <strong className="text-[#B8860B]">08035239489</strong>. Tell us "corporate wear bale" and how many you need. We'll send photos and current pricing. We supply nationwide from Aba, Abia State.
      </p>
    </SEOPageLayout>
  );
}