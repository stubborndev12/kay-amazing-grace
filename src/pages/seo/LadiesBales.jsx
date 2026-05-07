import React, { useEffect } from "react";
import SEOPageLayout from "@/components/seo/SEOPageLayout";

export default function LadiesBales() {
  useEffect(() => {
    document.title = "Ladies Thrift Bales in Nigeria | Wholesale Ladies Wear Bales — Kay Amazing Grace Global";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Buy wholesale ladies thrift bales in Nigeria from Kay Amazing Grace Global. Quality ladies wear okirika bales for boutiques and resellers. Based in Aba, deliver nationwide.");
  }, []);

  return (
    <SEOPageLayout h1="Ladies Thrift Bales in Nigeria — Wholesale Ladies Wear" breadcrumb="Ladies Bales" category="Bale Categories">
      <p className="text-white/70 text-base leading-relaxed mb-6">
        <strong className="text-white">Ladies thrift bales</strong> are one of the highest-selling categories in Nigerian okirika markets. Kay Amazing Grace Global supplies Grade A ladies wear bales from Aba to resellers and boutique owners across Nigeria.
      </p>

      <h2 className="text-xl font-bold text-white mt-8 mb-3">What's in a Ladies Wear Bale?</h2>
      <p className="text-white/60 leading-relaxed mb-6">
        Our ladies bales contain dresses, blouses, skirts, trousers, tops, jackets, and more — all sorted and graded for quality. Ideal for boutique owners, Instagram fashion sellers, and market traders targeting female customers.
      </p>

      <h2 className="text-xl font-bold text-white mt-8 mb-3">Why Ladies Bales Sell Fast</h2>
      <ul className="list-disc list-inside text-white/60 space-y-2 mb-6">
        <li>High demand for affordable ladies fashion across Nigeria</li>
        <li>Diverse styles attract a wide customer base</li>
        <li>Strong online resale potential on Instagram and Jiji</li>
        <li>Grade A items suitable for boutique display</li>
      </ul>

      <h2 className="text-xl font-bold text-white mt-8 mb-3">Order Ladies Bales from Kay Amazing Grace Global</h2>
      <p className="text-white/60 leading-relaxed mb-6">
        WhatsApp: <strong className="text-[#B8860B]">08035239489</strong>. We supply ladies bales wholesale from Aba to all states in Nigeria.
      </p>
    </SEOPageLayout>
  );
}