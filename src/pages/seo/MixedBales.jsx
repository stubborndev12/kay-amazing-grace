import React, { useEffect } from "react";
import SEOPageLayout from "@/components/seo/SEOPageLayout";

export default function MixedBales() {
  useEffect(() => {
    document.title = "Mixed Clothing Bales for Resellers | Kay Amazing Grace Global";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Buy mixed clothing bales from Kay Amazing Grace Global in Aba, Nigeria. Ideal for market resellers and open stalls. Wholesale pricing, Grade A quality, nationwide delivery.");
  }, []);

  return (
    <SEOPageLayout h1="Mixed Clothing Bales for Resellers in Nigeria" breadcrumb="Mixed Bales" category="Bale Categories">
      <p className="text-white/70 text-base leading-relaxed mb-6">
        <strong className="text-white">Mixed clothing bales</strong> are the most versatile bale type in the Nigerian wholesale thrift market. They contain a diverse mix of clothing categories — making them perfect for open market resellers, roadside stalls, and traders who serve a broad customer base.
      </p>

      <h2 className="text-xl font-bold text-white mt-8 mb-3">What's Inside a Mixed Bale?</h2>
      <p className="text-white/60 leading-relaxed mb-6">
        A mixed bale typically contains shirts, tops, blouses, trousers, dresses, shorts, and jackets for men, women, and sometimes children. The variety makes it easy to sell across different customer types in busy markets like Ariaria in Aba, Trade Fair in Lagos, or Wuse Market in Abuja.
      </p>

      <h2 className="text-xl font-bold text-white mt-8 mb-3">Benefits of Mixed Bales</h2>
      <ul className="list-disc list-inside text-white/60 space-y-2 mb-6">
        <li>Wide variety attracts more customers at your stall</li>
        <li>Lower entry cost compared to specialty bales</li>
        <li>Fast turnover — something for everyone</li>
        <li>Ideal for resellers new to the okirika business</li>
        <li>Grade A quality from Kay Amazing Grace Global</li>
      </ul>

      <h2 className="text-xl font-bold text-white mt-8 mb-3">Order Mixed Bales in Nigeria</h2>
      <p className="text-white/60 leading-relaxed mb-6">
        Kay Amazing Grace Global supplies quality mixed bales from Aba to all parts of Nigeria. Contact us on WhatsApp: <strong className="text-[#B8860B]">08035239489</strong> for current pricing and availability.
      </p>
    </SEOPageLayout>
  );
}