import React from "react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { MessageCircle, ArrowLeft, Star, Shield, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { getWhatsAppUrl, TAG_LABELS } from "@/lib/constants";

export default function ProductDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = window.location.pathname.split("/product/")[1];

  const { data: product, isLoading } = useQuery({
    queryKey: ["product", productId],
    queryFn: async () => {
      const products = await base44.entities.Product.filter({ id: productId });
      return products[0] || null;
    },
    enabled: !!productId,
  });

  if (isLoading) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="pt-24 min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-muted-foreground">Product not found</p>
        <Link to="/shop" className="text-accent text-sm underline">Back to Shop</Link>
      </div>
    );
  }

  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      <div className="px-4 sm:px-6 max-w-7xl mx-auto py-6">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Collection
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative aspect-[3/4] bg-muted overflow-hidden"
          >
            {product.image_url ? (
              <img src={product.image_url} alt={product.name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-muted-foreground/20 font-heading text-6xl italic">KA</span>
              </div>
            )}
            {product.tag && (
              <span className="absolute top-4 left-4 px-4 py-1.5 bg-foreground text-background text-[9px] uppercase tracking-[0.15em] font-medium">
                {TAG_LABELS[product.tag]}
              </span>
            )}
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-2">
              {product.category?.replace(/_/g, " ")}
            </p>
            <h1 className="text-3xl md:text-4xl font-heading font-light italic mb-4">
              {product.name}
            </h1>
            <p className="text-2xl font-medium mb-6">
              ₦{product.price?.toLocaleString()}
            </p>

            {product.description && (
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>
            )}

            {/* Trust signals */}
            <div className="space-y-3 mb-8">
              {[
                { icon: CheckCircle, text: "Carefully inspected and validated" },
                { icon: Star, text: "Grade A+ quality guaranteed" },
                { icon: Shield, text: "Clean, sanitized, and ready to wear" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <item.icon className="w-4 h-4 text-accent" />
                  <span className="text-sm text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="gold-hairline mb-8" />

            {/* CTA */}
            <a
              href={getWhatsAppUrl(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-[#20BD5A] transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Order via WhatsApp
            </a>

            <p className="text-[10px] text-center text-muted-foreground mt-3">
              Tap to chat with us directly and place your order
            </p>

            {/* Social CTA */}
            <div className="mt-6 pt-5 border-t border-white/8">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 text-center mb-3">
                See more videos on TikTok &amp; Instagram
              </p>
              <div className="flex gap-2">
                <a
                  href="https://tiktok.com/@kay.amazingthrift"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-white/10 text-white/50 text-[10px] font-bold uppercase tracking-widest hover:border-white/30 hover:text-white transition-all"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
                  </svg>
                  Watch on TikTok
                </a>
                <a
                  href="https://www.instagram.com/kayamazingthrift?igsh=MTVoenZ5aDlkbW5wMg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-[#E1306C]/20 text-[#E1306C]/60 text-[10px] font-bold uppercase tracking-widest hover:border-[#E1306C]/50 hover:text-[#E1306C] transition-all"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                  View on Instagram
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}