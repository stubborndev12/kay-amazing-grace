import React, { useEffect } from "react";
import SEOPageLayout from "@/components/seo/SEOPageLayout";

export default function ChildrenBales() {
  useEffect(() => {
    document.title = "Children Thrift Bales Nigeria | Wholesale Kids Okirika Bales — Kay Amazing Grace Global";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Buy wholesale children thrift bales and kids okirika bales in Nigeria. Kay Amazing Grace Global supplies quality children wear bales from Aba to resellers nationwide.");
  }, []);

  return (
    <SEOPageLayout
      h1="Children Thrift Bales — Wholesale Kids Okirika Bales in Aba"
      breadcrumb="Children Bales"
      category="Bale Categories"
    >
      <p className="text-white/70 text-base leading-relaxed mb-6">
        Kay Amazing Grace Global supplies quality <strong className="text-white">children thrift bales</strong> and kids okirika bales to resellers, market traders, and boutique owners across Nigeria. Our children wear bales are sourced from the UK, USA, Korea, and Canada — Grade A condition.
      </p>

      <h2 className="text-xl font-bold text-white mt-8 mb-3">What's Inside a Children Thrift Bale?</h2>
      <p className="text-white/60 leading-relaxed mb-4">
        Children okirika bales contain sorted, quality second-hand kids clothing including:
      </p>
      <ul className="text-white/60 leading-relaxed mb-6 space-y-1.5 list-none pl-0">
        {["Baby clothes (0–2 years)", "Toddler wear (2–5 years)", "Girls dresses, skirts, blouses", "Boys shirts, trousers, shorts", "School wear and uniforms", "Children jackets and coats", "Kids nightwear and inner wear"].map(item => (
          <li key={item} className="flex items-start gap-2">
            <span className="text-[#B8860B] shrink-0 mt-1">▸</span> {item}
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-bold text-white mt-8 mb-3">Why Kids Clothing Bales Sell Fast</h2>
      <p className="text-white/60 leading-relaxed mb-6">
        Children grow quickly. Parents in Nigeria constantly need affordable, quality children clothing. Kids thrift bales are among the fastest-moving categories for market traders and boutique owners in cities like Lagos, Aba, Onitsha, Enugu, and Port Harcourt.
      </p>

      <h2 className="text-xl font-bold text-white mt-8 mb-3">Who Buys Children Bales from Us?</h2>
      <p className="text-white/60 leading-relaxed mb-6">
        Our children bale buyers include: market traders in Ariaria, Onitsha, and Lagos, boutique owners selling kids fashion, school clothing suppliers, and new resellers starting small. Minimum order is one bale.
      </p>

      <h2 className="text-xl font-bold text-white mt-8 mb-3">Order Children Thrift Bales from Aba</h2>
      <p className="text-white/60 leading-relaxed mb-4">
        Contact Kay Amazing Grace Global on WhatsApp: <strong className="text-[#B8860B]">08035239489</strong>. State "children bale" and your preferred size range. We will send photos, pricing, and availability. Nationwide delivery available.
      </p>
      <p className="text-white/50 text-sm leading-relaxed">
        We are located at <strong className="text-white/70">97/98 Ndoki by East off Ngwa Road, Aba, Abia State, Nigeria</strong>. Walk-in buyers are also welcome Monday to Saturday, 8am–6pm.
      </p>
    </SEOPageLayout>
  );
}