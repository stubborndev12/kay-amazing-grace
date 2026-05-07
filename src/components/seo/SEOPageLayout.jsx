import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle, ExternalLink, ChevronRight } from "lucide-react";
import { WA_URL, WA_PRICING_URL } from "@/lib/seo";
import { SOCIAL_LINKS, InstagramIcon, TikTokIcon } from "@/lib/social.jsx";

const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function SEOPageLayout({ title, metaDescription, h1, breadcrumb, children, category }) {
  return (
    <div className="pt-[70px] min-h-screen bg-[#080808] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-[10px] text-white/30 uppercase tracking-widest mb-8" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-[#B8860B] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          {category && (
            <>
              <span className="text-white/30">{category}</span>
              <ChevronRight className="w-3 h-3" />
            </>
          )}
          <span className="text-[#B8860B]">{breadcrumb}</span>
        </nav>

        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl font-heading font-light italic text-white mb-4 leading-snug">
          {h1}
        </h1>

        {/* Gold line */}
        <div className="h-px w-16 bg-[#B8860B] mb-8" />

        {/* Content */}
        <div className="prose prose-invert prose-sm max-w-none">
          {children}
        </div>

        {/* CTA Block */}
        <div className="mt-12 p-6 border border-[#B8860B]/20 bg-[#B8860B]/5">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#B8860B] mb-2">Wholesale Inquiries</p>
          <h3 className="text-white font-bold text-lg mb-4">
            Ready to Order? Contact Kay Amazing Grace Global
          </h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#B8860B] text-black text-[11px] font-black uppercase tracking-widest hover:bg-[#D4A017] transition-colors"
            >
              <WaIcon />
              Order via WhatsApp
            </a>
            <a
              href={WA_PRICING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#B8860B]/40 text-[#B8860B] text-[11px] font-bold uppercase tracking-widest hover:border-[#B8860B] transition-colors"
            >
              Request Current Pricing
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-2 mt-5">
            {["Wholesale Only", "Grade A+ Quality", "Nationwide Delivery", "Trusted Aba Supplier", "Bulk Orders"].map(t => (
              <span key={t} className="px-2.5 py-1 border border-white/10 text-white/40 text-[9px] font-bold uppercase tracking-wider">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Social Follow */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">Follow for new arrivals:</p>
          <div className="flex gap-3">
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 border border-white/10 text-white/40 hover:text-[#E1306C] hover:border-[#E1306C]/40 transition-all text-[10px] font-bold uppercase tracking-widest">
              <InstagramIcon className="w-3.5 h-3.5" /> Instagram
            </a>
            <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all text-[10px] font-bold uppercase tracking-widest">
              <TikTokIcon className="w-3.5 h-3.5" /> TikTok
            </a>
          </div>
        </div>

        {/* Internal links */}
        <div className="mt-10 pt-8 border-t border-white/8">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-4">Explore More</p>
          <div className="flex flex-wrap gap-3">
            {[
              { to: "/shop", label: "All Bale Categories" },
              { to: "/seo/okirika-bales-aba", label: "Okirika Bales in Aba" },
              { to: "/seo/korea-bales", label: "Korea Bales" },
              { to: "/seo/mixed-bales", label: "Mixed Bales" },
              { to: "/seo/ladies-bales", label: "Ladies Bales" },
              { to: "/seo/men-bales", label: "Men's Bales" },
              { to: "/faq", label: "FAQs" },
              { to: "/blog", label: "Blog" },
            ].map(({ to, label }) => (
              <Link key={to} to={to}
                className="text-[11px] text-white/30 hover:text-[#B8860B] underline underline-offset-2 transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}