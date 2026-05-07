import React, { useEffect } from "react";
import SEOPageLayout from "@/components/seo/SEOPageLayout";

export default function ShoesBagsBales() {
  useEffect(() => {
    document.title = "Shoes, Bags & Accessories Bales | Wholesale Okirika Supplier — Kay Amazing Grace Global";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Buy wholesale shoes, bags, and accessories bales in Nigeria from Kay Amazing Grace Global in Aba. Quality okirika footwear and bags bales for resellers nationwide.");
  }, []);

  return (
    <SEOPageLayout h1="Shoes, Bags & Accessories Bales — Wholesale Supplier in Aba" breadcrumb="Shoes & Bags Bales" category="Bale Categories">
      <p className="text-white/70 text-base leading-relaxed mb-6">
        Beyond clothing, Kay Amazing Grace Global supplies quality <strong className="text-white">shoes, bags, and accessories bales</strong> to Nigerian resellers. These are high-turnover categories with strong demand in markets, boutiques, and online stores.
      </p>

      <h2 className="text-xl font-bold text-white mt-8 mb-3">Shoes Bales Available</h2>
      <p className="text-white/60 leading-relaxed mb-6">
        Our shoes bales contain a mix of men's, women's, and children's footwear — including sneakers, heels, flats, sandals, and slippers. Sourced from the UK, USA, and Korea, these are Grade A condition thrift shoes.
      </p>

      <h2 className="text-xl font-bold text-white mt-8 mb-3">Bags & Accessories Bales</h2>
      <p className="text-white/60 leading-relaxed mb-6">
        Bags bales include handbags, shoulder bags, clutches, backpacks, and belts. Perfect for fashion accessories resellers, boutique owners, and market traders in Southeast Nigeria and beyond.
      </p>

      <h2 className="text-xl font-bold text-white mt-8 mb-3">Order Shoes & Bags Bales from Aba</h2>
      <p className="text-white/60 leading-relaxed mb-6">
        WhatsApp: <strong className="text-[#B8860B]">08035239489</strong>. We supply shoes and bags bales wholesale from Aba, Abia State, with delivery across Nigeria.
      </p>
    </SEOPageLayout>
  );
}