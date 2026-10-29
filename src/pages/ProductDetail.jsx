import React from "react";
import { supabase } from "@/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { ArrowLeft, Star, Shield, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { getWhatsAppUrl, TAG_LABELS } from "@/lib/constants";

export default function ProductDetail() {
  const slug = window.location.pathname.split("/product/")[1];

  const { data: product, isLoading } = useQuery({
    queryKey: ["product", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("slug", slug)
        .single();

      if (error) {
        console.error(error);
        return null;
      }

      return data;
    },
    enabled: !!slug,
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

        <Link
          to="/shop"
          className="text-accent text-sm underline"
        >
          Back to Shop
        </Link>
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

          {/* Product Image */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative aspect-[3/4] bg-muted overflow-hidden"
          >
            {product.image_url ? (
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-muted-foreground/20 font-heading text-6xl italic">
                  KA
                </span>
              </div>
            )}

            {product.tag && (
              <span className="absolute top-4 left-4 px-4 py-1.5 bg-foreground text-background text-[9px] uppercase tracking-[0.15em] font-medium">
                {TAG_LABELS[product.tag]}
              </span>
            )}
          </motion.div>

          {/* Product Details */}

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
              ₦{Number(product.price).toLocaleString()}
            </p>

            {product.description && (
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>
            )}

            {/* Trust Signals */}

            <div className="space-y-3 mb-8">

              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span className="text-sm text-muted-foreground">
                  Carefully inspected and validated
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Star className="w-4 h-4 text-accent" />
                <span className="text-sm text-muted-foreground">
                  Grade A+ quality guaranteed
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Shield className="w-4 h-4 text-accent" />
                <span className="text-sm text-muted-foreground">
                  Clean, sanitized, and ready to wear
                </span>
              </div>

            </div>

            <div className="gold-hairline mb-8" />

            {/* WhatsApp Button */}

            <a
              href={getWhatsAppUrl(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-[#20BD5A] transition-all duration-300"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
              </svg>

              Order via WhatsApp
            </a>

            <p className="text-[10px] text-center text-muted-foreground mt-3">
              Tap to chat with us directly and place your order.
            </p>

          </motion.div>

        </div>
      </div>
    </div>
  );
}