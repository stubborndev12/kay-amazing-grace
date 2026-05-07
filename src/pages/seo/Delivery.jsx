import React, { useEffect } from "react";
import SEOPageLayout from "@/components/seo/SEOPageLayout";

export default function Delivery() {
  useEffect(() => {
    document.title = "Nationwide Okirika Bale Delivery in Nigeria | Kay Amazing Grace Global";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Kay Amazing Grace Global delivers wholesale okirika and thrift bales nationwide across Nigeria. Order from Aba, delivered to your state. WhatsApp: 08035239489.");
  }, []);

  return (
    <SEOPageLayout h1="Nationwide Okirika Bale Delivery Across Nigeria" breadcrumb="Delivery" category="Logistics">
      <p className="text-white/70 text-base leading-relaxed mb-6">
        Kay Amazing Grace Global provides <strong className="text-white">nationwide bale delivery</strong> to resellers and buyers across Nigeria. No matter where you are — Lagos, Abuja, Port Harcourt, Enugu, Kano, or any other state — we can supply and deliver your okirika bales.
      </p>

      <h2 className="text-xl font-bold text-white mt-8 mb-3">How Delivery Works</h2>
      <ol className="list-decimal list-inside text-white/60 space-y-2 mb-6">
        <li>Send a WhatsApp message to 08035239489 to place your order</li>
        <li>Confirm bale type, quantity, and your delivery location</li>
        <li>Receive pricing and make payment</li>
        <li>We package and dispatch your bales from Aba</li>
        <li>Track your delivery via our logistics partner</li>
      </ol>

      <h2 className="text-xl font-bold text-white mt-8 mb-3">States We Deliver To</h2>
      <p className="text-white/60 leading-relaxed mb-6">
        We deliver okirika bales to all 36 states in Nigeria including: Lagos, Abuja (FCT), Rivers, Enugu, Anambra, Imo, Delta, Edo, Oyo, Ogun, Kano, Kaduna, Katsina, Sokoto, Borno, and all other states. Contact us for delivery rates to your location.
      </p>

      <h2 className="text-xl font-bold text-white mt-8 mb-3">Pick Up in Aba</h2>
      <p className="text-white/60 leading-relaxed mb-6">
        If you are in or near Aba, Abia State, you can pick up your bales directly from our warehouse at <strong className="text-white">97/98 Ndoki by East off Ngwa Road, Aba</strong>. Call or WhatsApp ahead to confirm availability before visiting.
      </p>
    </SEOPageLayout>
  );
}