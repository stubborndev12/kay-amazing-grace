import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { BLOG_POSTS, WA_URL } from "@/lib/seo";

const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const CATEGORY_COLORS = {
  "Buyer Guide": "bg-blue-900/30 text-blue-400",
  "Business Tips": "bg-[#B8860B]/20 text-[#B8860B]",
  "Product Guide": "bg-green-900/30 text-green-400",
  "Market Insights": "bg-purple-900/30 text-purple-400",
};

export default function Blog() {
  useEffect(() => {
    document.title = "Blog | Okirika Bale Tips & Business Guides — Kay Amazing Grace Global";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Read expert guides on buying okirika bales, starting a thrift bale business in Nigeria, Korea bale vs mixed bale, and more from Kay Amazing Grace Global in Aba.");
  }, []);

  return (
    <div className="pt-[70px] min-h-screen bg-[#080808] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">

        {/* Header */}
        <div className="mb-10">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#B8860B] mb-2">Knowledge Base</p>
          <h1 className="text-3xl sm:text-4xl font-heading font-light italic text-white mb-3">
            Okirika Bale Business Guides
          </h1>
          <div className="h-px w-16 bg-[#B8860B] mb-4" />
          <p className="text-white/50 text-sm max-w-xl">
            Expert guides for resellers, boutique owners, and bulk buyers across Nigeria. Learn how to buy quality okirika bales, start your bale business, and maximise your profits.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group block p-5 border border-white/8 hover:border-[#B8860B]/40 bg-[#0d0d0d] transition-all duration-200"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className={`px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded-sm ${CATEGORY_COLORS[post.category] || "bg-white/10 text-white/40"}`}>
                  {post.category}
                </span>
                <span className="text-[10px] text-white/30">{post.readTime} read</span>
              </div>
              <h2 className="text-white font-bold text-[15px] leading-snug mb-2 group-hover:text-[#B8860B] transition-colors">
                {post.title}
              </h2>
              <p className="text-white/40 text-[12px] leading-relaxed line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center gap-1 mt-4 text-[#B8860B] text-[10px] font-bold uppercase tracking-wider">
                Read Article <ChevronRight className="w-3 h-3" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="p-6 border border-[#B8860B]/20 bg-[#B8860B]/5 text-center">
          <h3 className="text-white font-bold text-lg mb-2">Ready to Order Bales?</h3>
          <p className="text-white/40 text-sm mb-4">Contact Kay Amazing Grace Global for wholesale pricing and availability.</p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#B8860B] text-black text-[11px] font-black uppercase tracking-widest hover:bg-[#D4A017] transition-colors"
          >
            <WaIcon />
            Order via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}