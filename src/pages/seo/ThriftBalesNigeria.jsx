import React, { useEffect } from "react";
import SEOPageLayout from "@/components/seo/SEOPageLayout";

export default function ThriftBalesNigeria() {
  useEffect(() => {
    document.title = "Thrift Bale Supplier in Nigeria | Wholesale Clothing Bales — Kay Amazing Grace Global";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Kay Amazing Grace Global supplies wholesale thrift clothing bales across Nigeria. Mixed bales, Korea bales, ladies, men, children, shoes. Order from Aba, deliver nationwide.");
  }, []);

  return (
    <SEOPageLayout
      h1="Wholesale Thrift Bale Supplier in Nigeria"
      breadcrumb="Thrift Bales Nigeria"
      category="Bale Categories"
    >
      <p className="text-white/70 text-base leading-relaxed mb-6">
        Kay Amazing Grace Global is a leading <strong className="text-white">wholesale thrift bale supplier in Nigeria</strong>. Based in Aba, Abia State, we supply quality clothing bales to resellers, boutique owners, and bulk buyers across all 36 states of Nigeria.
      </p>

      <h2 className="text-xl font-bold text-white mt-8 mb-3">Thrift Bales for Resellers Across Nigeria</h2>
      <p className="text-white/60 leading-relaxed mb-6">
        Whether you are in Lagos, Abuja, Port Harcourt, Enugu, Kano, or anywhere in Nigeria, Kay Amazing Grace Global can supply you with quality thrift clothing bales at competitive wholesale prices. We work with resellers of all sizes — from first-time buyers to large bulk buyers.
      </p>

      <h2 className="text-xl font-bold text-white mt-8 mb-3">Available Thrift Bale Types</h2>
      <ul className="list-disc list-inside text-white/60 space-y-2 mb-6">
        <li>Mixed thrift bales — best for open market resellers</li>
        <li>Korea bales — premium grade for boutique owners</li>
        <li>Ladies wear bales — high-turnover for fashion resellers</li>
        <li>Men's wear bales — shirts, trousers, jackets</li>
        <li>Children's wear bales — quality kids' clothing</li>
        <li>Corporate wear bales — office and formal clothing</li>
        <li>Shoes and bags bales — accessories and footwear</li>
      </ul>

      <h2 className="text-xl font-bold text-white mt-8 mb-3">Nationwide Delivery from Aba</h2>
      <p className="text-white/60 leading-relaxed mb-6">
        We arrange delivery of bales to any location in Nigeria. Once you confirm your order via WhatsApp and make payment, your bales are dispatched promptly. We work with reliable logistics partners to ensure safe delivery across Southeast Nigeria, Southwest Nigeria, and beyond.
      </p>

      <h2 className="text-xl font-bold text-white mt-8 mb-3">Why Resellers Trust Kay Amazing Grace Global</h2>
      <ul className="list-disc list-inside text-white/60 space-y-2 mb-6">
        <li>Consistent Grade A+ quality across all bale types</li>
        <li>Transparent pricing — no hidden charges</li>
        <li>Fast and reliable supply for repeat buyers</li>
        <li>Active on WhatsApp, Instagram, and TikTok for updates</li>
        <li>Based in Aba — Nigeria's wholesale clothing hub</li>
      </ul>
    </SEOPageLayout>
  );
}