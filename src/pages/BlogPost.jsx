import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { BLOG_POSTS, BLOG_CONTENT, WA_URL, WA_PRICING_URL } from "@/lib/seo";

const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/8">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-white font-semibold text-[14px] leading-snug">{q}</span>
        <span className="text-[#B8860B] text-lg shrink-0">{open ? "−" : "+"}</span>
      </button>
      {open && <p className="text-white/55 text-[13px] leading-relaxed pb-4 pr-6">{a}</p>}
    </div>
  );
};

export default function BlogPost() {
  const slug = window.location.pathname.split("/blog/")[1];
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const content = BLOG_CONTENT[slug];

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Kay Amazing Grace Global Blog`;

      // Unique meta description per post
      let meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", post.excerpt);

      // Canonical tag — unique per blog post
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = `https://kaygrace.shop/blog/${post.slug}`;

      // Ensure robots allows indexing
      let robots = document.querySelector('meta[name="robots"]');
      if (!robots) {
        robots = document.createElement('meta');
        robots.name = 'robots';
        document.head.appendChild(robots);
      }
      robots.content = 'index, follow';

      // Inject FAQ schema for posts that have FAQs
      if (content?.faqs?.length) {
        const existing = document.getElementById('blog-faq-schema');
        if (existing) existing.remove();
        const script = document.createElement('script');
        script.id = 'blog-faq-schema';
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": content.faqs.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a }
          }))
        });
        document.head.appendChild(script);
      }
    }

    return () => {
      const faqScript = document.getElementById('blog-faq-schema');
      if (faqScript) faqScript.remove();
    };
  }, [post, content]);

  if (!post) {
    return (
      <div className="pt-[70px] min-h-screen bg-[#080808] text-white flex flex-col items-center justify-center gap-4">
        <p className="text-white/40">Article not found</p>
        <Link to="/blog" className="text-[#B8860B] text-sm underline">Back to Blog</Link>
      </div>
    );
  }

  // Related articles
  const relatedPosts = content?.relatedSlugs
    ? BLOG_POSTS.filter(p => content.relatedSlugs.includes(p.slug))
    : BLOG_POSTS.filter(p => p.slug !== slug && p.category === post.category).slice(0, 3);

  return (
    <div className="pt-[70px] min-h-screen bg-[#080808] text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-[10px] text-white/30 uppercase tracking-widest mb-8" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-[#B8860B] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/blog" className="hover:text-[#B8860B] transition-colors">Blog</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#B8860B] truncate max-w-[200px]">{post.title}</span>
        </nav>

        {/* Category + meta */}
        <div className="flex items-center gap-3 mb-4">
          <span className="px-2.5 py-1 bg-[#B8860B]/20 text-[#B8860B] text-[9px] font-bold uppercase tracking-wider">
            {post.category}
          </span>
          <span className="text-white/30 text-[10px]">{post.readTime} read · {post.date}</span>
        </div>

        {/* H1 — unique per post */}
        <h1 className="text-3xl sm:text-4xl font-heading font-light italic text-white mb-4 leading-snug">
          {content?.h1 || post.title}
        </h1>
        <div className="h-px w-16 bg-[#B8860B] mb-8" />

        {/* Content */}
        {content ? (
          <article>
            <p className="text-white/70 text-base leading-relaxed mb-8">{content.intro}</p>

            {content.sections.map((section, i) => (
              <div key={i} className="mb-10">
                <h2 className="text-xl font-bold text-white mb-3">{section.h2}</h2>
                {section.content.split('\n\n').map((para, j) => (
                  <p key={j} className="text-white/60 leading-relaxed mb-3">{para}</p>
                ))}
              </div>
            ))}

            {/* FAQs */}
            {content.faqs?.length > 0 && (
              <div className="mt-10 mb-8">
                <h2 className="text-xl font-bold text-white mb-2">Frequently Asked Questions</h2>
                <div className="h-px w-12 bg-[#B8860B] mb-6" />
                {content.faqs.map((faq, i) => (
                  <FAQItem key={i} q={faq.q} a={faq.a} />
                ))}
              </div>
            )}
          </article>
        ) : (
          <div>
            <p className="text-white/70 text-base leading-relaxed mb-8">{post.excerpt}</p>
            <p className="text-white/50 leading-relaxed mb-6">
              For the full guide and current bale pricing, contact Kay Amazing Grace Global directly via WhatsApp. Our team will provide you with detailed information tailored to your needs.
            </p>
          </div>
        )}

        {/* CTA Block */}
        <div className="mt-10 p-6 border border-[#B8860B]/20 bg-[#B8860B]/5">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#B8860B] mb-2">Ready to Order?</p>
          <h3 className="text-white font-bold text-lg mb-2">Contact Kay Amazing Grace Global</h3>
          <p className="text-white/50 text-[13px] mb-4">
            Looking for quality okirika and thrift bales in Aba or anywhere in Nigeria? Contact Kay Amazing Grace Global today on WhatsApp for current bale availability and wholesale inquiries.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#B8860B] text-black text-[11px] font-black uppercase tracking-widest hover:bg-[#D4A017] transition-colors">
              <WaIcon /> Order via WhatsApp
            </a>
            <a href={WA_PRICING_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#B8860B]/40 text-[#B8860B] text-[11px] font-bold uppercase tracking-widest hover:border-[#B8860B] transition-colors">
              Request Pricing
            </a>
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="mt-10 pt-8 border-t border-white/8">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-4">Related Articles</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedPosts.map(rp => (
                <Link key={rp.slug} to={`/blog/${rp.slug}`}
                  className="group block p-4 border border-white/8 hover:border-[#B8860B]/40 bg-[#0d0d0d] transition-all">
                  <span className="text-[9px] text-[#B8860B] uppercase tracking-wider font-bold">{rp.category}</span>
                  <p className="text-white text-[13px] font-semibold leading-snug mt-1 group-hover:text-[#B8860B] transition-colors line-clamp-2">
                    {rp.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Internal SEO Links */}
        <div className="mt-8 pt-6 border-t border-white/8">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-3">Explore More</p>
          <div className="flex flex-wrap gap-3">
            {[
              { to: "/", label: "Homepage" },
              { to: "/shop", label: "Bale Categories" },
              { to: "/contact", label: "Contact Us" },
              { to: "/okirika-in-aba", label: "Okirika in Aba" },
              { to: "/wholesale-okirika", label: "Wholesale Okirika" },
              { to: "/korea-bale-supplier-nigeria", label: "Korea Bale Supplier" },
              { to: "/best-okirika-supplier", label: "Best Okirika Supplier" },
              { to: "/faq", label: "FAQs" },
              { to: "/blog", label: "All Blog Posts" },
            ].map(({ to, label }) => (
              <Link key={to} to={to}
                className="text-[11px] text-white/30 hover:text-[#B8860B] underline underline-offset-2 transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Back nav */}
        <div className="mt-8 flex items-center justify-between">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/30 hover:text-[#B8860B] transition-colors text-[11px] uppercase tracking-wider">
            <ArrowLeft className="w-3.5 h-3.5" /> All Articles
          </Link>
          <Link to="/faq" className="text-[11px] text-white/30 hover:text-[#B8860B] transition-colors uppercase tracking-wider">
            Read FAQs →
          </Link>
        </div>
      </div>
    </div>
  );
}