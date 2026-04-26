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
              className="flex items-center justify-center gap-3 w-full py-4 bg-foreground text-background text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-accent hover:text-foreground transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              Request via WhatsApp
            </a>

            <p className="text-[10px] text-center text-muted-foreground mt-3">
              Tap to chat with us directly and place your order
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}