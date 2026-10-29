import React from "react";
import { Link } from "react-router-dom";

const SEO_LINKS = [
  { to: "/okirika-in-aba", label: "Okirika in Aba" },
  { to: "/okirika-in-nigeria", label: "Okirika in Nigeria" },
  { to: "/wholesale-okirika", label: "Wholesale Okirika" },
  { to: "/korea-bale-supplier-nigeria", label: "Korea Bale Supplier" },
  { to: "/ladies-bale-supplier", label: "Ladies Bale Supplier" },
  { to: "/mixed-bale-supplier", label: "Mixed Bale Supplier" },
  { to: "/best-okirika-supplier", label: "Best Okirika Supplier" },
  { to: "/boutique-stock-supplier", label: "For Boutique Owners" },
  { to: "/shoe-bale-supplier", label: "Shoe Bale Supplier" },
  { to: "/children-clothing-bale-supplier", label: "Children Bale Supplier" },
  { to: "/okirika-lagos", label: "Okirika — Lagos" },
  { to: "/okirika-abuja", label: "Okirika — Abuja" },
  { to: "/second-hand-clothes-nigeria", label: "Second Hand Clothes" },
  { to: "/grade-a-okirika-nigeria", label: "Grade A Okirika" },
  { to: "/nationwide-delivery-okirika", label: "Nationwide Delivery" },
];

const BLOG_LINKS = [
  { to: "/blog/where-to-buy-quality-okirika-bales-in-aba", label: "Where To Buy Okirika in Aba" },
  { to: "/blog/best-okirika-supplier-in-nigeria", label: "Best Okirika Supplier in Nigeria" },
  { to: "/blog/how-to-start-an-okirika-business-in-nigeria", label: "Start an Okirika Business" },
  { to: "/blog/korea-bale-guide-for-resellers", label: "Korea Bale Guide" },
  { to: "/blog/how-to-make-profit-selling-thrift-clothing", label: "Profit from Thrift Clothing" },
];

export default function SEOLinksSection() {
  return (
    <section className="bg-[#060606] border-t border-white/5 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Supplier Pages */}
          <div>
            <p className="text-[9px] uppercase tracking-[0.3em] text-[#B8860B] font-bold mb-4">Bale Supplier Pages</p>
            <ul className="space-y-1.5">
              {SEO_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-white/35 text-[12px] hover:text-[#B8860B] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog Posts */}
          <div>
            <p className="text-[9px] uppercase tracking-[0.3em] text-[#B8860B] font-bold mb-4">Guides & Resources</p>
            <ul className="space-y-1.5">
              {BLOG_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-white/35 text-[12px] hover:text-[#B8860B] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-white/5">
              <Link to="/blog" className="text-[11px] text-[#B8860B] hover:text-[#D4A017] font-semibold transition-colors">
                View All Articles →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}