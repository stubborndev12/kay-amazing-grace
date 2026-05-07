import React, { useEffect } from "react";
import SEOPageLayout from "@/components/seo/SEOPageLayout";

export default function OkirikaBalesAba() {
  useEffect(() => {
    document.title = "Okirika Bale Supplier in Aba | Kay Amazing Grace Global";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Buy quality okirika bales in Aba, Nigeria from Kay Amazing Grace Global. Trusted wholesale okirika supplier on Ngwa Road, Aba, Abia State. Supply all over Nigeria.");
  }, []);

  return (
    <SEOPageLayout
      h1="Okirika Bale Supplier in Aba, Nigeria"
      breadcrumb="Okirika Bales Aba"
      category="Bale Categories"
    >
      <p className="text-white/70 text-base leading-relaxed mb-6">
        Looking to buy <strong className="text-white">okirika bales in Aba</strong>? Kay Amazing Grace Global is one of Aba's most trusted wholesale okirika and thrift bale suppliers. Located on Ngwa Road, Aba, Abia State, we supply quality Grade A okirika bales to resellers, boutique owners, and bulk buyers across Nigeria.
      </p>

      <h2 className="text-xl font-bold text-white mt-8 mb-3">What Are Okirika Bales?</h2>
      <p className="text-white/60 leading-relaxed mb-6">
        Okirika bales are compressed bundles of carefully selected second-hand clothing sourced from the UK, USA, Korea, Canada, and other countries. They are sold wholesale to Nigerian resellers who sort and retail them at markets, boutiques, and online stores across the country.
      </p>

      <h2 className="text-xl font-bold text-white mt-8 mb-3">Okirika Bale Categories Available in Aba</h2>
      <ul className="list-disc list-inside text-white/60 space-y-2 mb-6">
        <li>Mixed clothing bales — variety of categories in one bale</li>
        <li>Korea bales — premium quality Korean-sourced clothing</li>
        <li>Ladies wear bales — dresses, skirts, blouses, and more</li>
        <li>Men's wear bales — trousers, shirts, jackets, corporate wear</li>
        <li>Children's wear bales — quality kids clothing for resellers</li>
        <li>Shoes and slippers bales — men's, ladies, and children's footwear</li>
        <li>Bags and accessories bales — handbags, belts, and fashion accessories</li>
        <li>Underwear and nightwear bales — for intimate wear resellers</li>
      </ul>

      <h2 className="text-xl font-bold text-white mt-8 mb-3">Why Buy Okirika Bales from Kay Amazing Grace Global?</h2>
      <ul className="list-disc list-inside text-white/60 space-y-2 mb-6">
        <li>Grade A+ quality — carefully inspected before every sale</li>
        <li>Wholesale pricing — competitive rates for all bale categories</li>
        <li>Nationwide delivery — we supply across all 36 states in Nigeria</li>
        <li>Trusted Aba supplier — located at 97/98 Ndoki by East off Ngwa Road, Aba</li>
        <li>Reseller friendly — new resellers welcome, guidance provided</li>
      </ul>

      <h2 className="text-xl font-bold text-white mt-8 mb-3">Where Is Kay Amazing Grace Global in Aba?</h2>
      <p className="text-white/60 leading-relaxed mb-6">
        We are located at <strong className="text-white">97/98 Ndoki by East off Ngwa Road, Aba, Abia State, Nigeria</strong>. You can visit in person or contact us via WhatsApp: <strong className="text-[#B8860B]">08035239489</strong>. We are open Monday to Saturday, 8am–6pm.
      </p>

      <h2 className="text-xl font-bold text-white mt-8 mb-3">How to Order Okirika Bales in Aba</h2>
      <ol className="list-decimal list-inside text-white/60 space-y-2 mb-6">
        <li>Send a WhatsApp message to 08035239489</li>
        <li>State the bale type and quantity you need</li>
        <li>We send you current pricing and availability</li>
        <li>Make payment and confirm delivery arrangement</li>
        <li>Your bales are dispatched or ready for pickup in Aba</li>
      </ol>
    </SEOPageLayout>
  );
}