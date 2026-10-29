import React, { useEffect } from "react";
import SEOPageLayout from "@/components/seo/SEOPageLayout";

export default function BoutiqueReseller() {
  useEffect(() => {
    document.title = "Boutique Reseller Bale Supplier Nigeria | Wholesale Okirika for Boutiques — Kay Amazing Grace Global";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Kay Amazing Grace Global is a trusted wholesale okirika bale supplier for boutique owners in Nigeria. Buy quality thrift bales from Aba for your boutique stock.");
  }, []);

  return (
    <SEOPageLayout
      h1="Wholesale Okirika Bales for Boutique Owners in Nigeria"
      breadcrumb="Boutique Reseller Supply"
      category="For Resellers"
    >
      <p className="text-white/70 text-base leading-relaxed mb-6">
        Running a boutique in Nigeria? Kay Amazing Grace Global is your trusted <strong className="text-white">wholesale okirika bale supplier for boutique owners</strong>. We supply Grade A quality thrift bales that help boutiques offer affordable fashion with excellent resale margins.
      </p>

      <h2 className="text-xl font-bold text-white mt-8 mb-3">Best Bale Categories for Boutiques</h2>
      <p className="text-white/60 leading-relaxed mb-4">
        Boutique owners across Nigeria consistently order these bale types from us:
      </p>
      <ul className="text-white/60 leading-relaxed mb-6 space-y-1.5 list-none pl-0">
        {[
          "Korea bales — premium quality, fashion-forward pieces",
          "Ladies wear bales — dresses, tops, skirts, jeans",
          "Corporate wear bales — suits, blazers, formal shirts",
          "Mixed bales — variety for general boutique stock",
          "Bags & accessories bales — handbags, belts, clutches",
          "Shoes bales — heels, flats, sneakers"
        ].map(item => (
          <li key={item} className="flex items-start gap-2">
            <span className="text-[#B8860B] shrink-0 mt-1">▸</span> {item}
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-bold text-white mt-8 mb-3">Why Boutique Owners Trust Kay Amazing Grace Global</h2>
      <p className="text-white/60 leading-relaxed mb-6">
        We have supplied boutique owners in Lagos, Abuja, Enugu, Onitsha, Port Harcourt, and across Nigeria. Our bales are:
      </p>
      <ul className="text-white/60 leading-relaxed mb-6 space-y-1.5 list-none pl-0">
        {[
          "Grade A quality — carefully sorted at our Aba warehouse",
          "Clean and ready to display in your boutique",
          "Fairly priced for good profit margins",
          "Photographed before delivery so you see what you're buying",
          "Available with nationwide delivery"
        ].map(item => (
          <li key={item} className="flex items-start gap-2">
            <span className="text-[#B8860B] shrink-0 mt-1">✓</span> {item}
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-bold text-white mt-8 mb-3">How Boutique Owners Place Orders</h2>
      <ol className="text-white/60 leading-relaxed mb-6 space-y-2 list-none pl-0">
        {[
          "Send a WhatsApp message to 08035239489",
          "Tell us what bale type and quantity you need",
          "We send photos and current pricing",
          "Confirm your order and make payment",
          "We arrange delivery to your boutique location"
        ].map((step, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-[#B8860B] font-bold shrink-0">{i + 1}.</span> {step}
          </li>
        ))}
      </ol>

      <h2 className="text-xl font-bold text-white mt-8 mb-3">Boutique Stock Questions?</h2>
      <p className="text-white/60 leading-relaxed mb-4">
        WhatsApp us at <strong className="text-[#B8860B]">08035239489</strong> and tell us about your boutique. We'll recommend the best bale types for your specific customer base and location. New boutique owners are always welcome.
      </p>
      <p className="text-white/50 text-sm">
        Based in <strong className="text-white/70">Aba, Abia State, Nigeria</strong>. Supplying boutiques nationwide since establishment.
      </p>
    </SEOPageLayout>
  );
}