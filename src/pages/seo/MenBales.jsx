import React, { useEffect } from "react";
import SEOPageLayout from "@/components/seo/SEOPageLayout";

export default function MenBales() {
  useEffect(() => {
    document.title = "Men's Thrift Bales in Nigeria | Wholesale Men's Wear Bales — Kay Amazing Grace Global";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Buy wholesale men's thrift bales in Nigeria from Kay Amazing Grace Global. Quality men's wear okirika bales including shirts, trousers, jackets. Based in Aba, deliver nationwide.");
  }, []);

  return (
    <SEOPageLayout h1="Men's Thrift Bales in Nigeria — Wholesale Men's Wear" breadcrumb="Men's Bales" category="Bale Categories">
      <p className="text-white/70 text-base leading-relaxed mb-6">
        <strong className="text-white">Men's thrift bales</strong> are in consistent demand across Nigerian markets. Kay Amazing Grace Global supplies Grade A men's wear okirika bales to resellers and retailers nationwide from our base in Aba, Abia State.
      </p>

      <h2 className="text-xl font-bold text-white mt-8 mb-3">What's in a Men's Wear Bale?</h2>
      <p className="text-white/60 leading-relaxed mb-6">
        Our men's bales typically contain shirts, trousers, polo shirts, shorts, jackets, hoodies, corporate wear, and casual wear. All items are Grade A quality, carefully sorted for resale condition.
      </p>

      <h2 className="text-xl font-bold text-white mt-8 mb-3">Men's Bale Categories Available</h2>
      <ul className="list-disc list-inside text-white/60 space-y-2 mb-6">
        <li>Men's casual wear bales — everyday shirts and trousers</li>
        <li>Men's corporate wear bales — office and formal attire</li>
        <li>Men's sportswear bales — activewear and gym wear</li>
        <li>Men's jacket and hoodie bales — seasonal outerwear</li>
      </ul>

      <h2 className="text-xl font-bold text-white mt-8 mb-3">Order Men's Bales from Aba</h2>
      <p className="text-white/60 leading-relaxed mb-6">
        Contact Kay Amazing Grace Global via WhatsApp: <strong className="text-[#B8860B]">08035239489</strong>. Nationwide delivery available across Nigeria.
      </p>
    </SEOPageLayout>
  );
}