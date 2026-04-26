import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl, TAG_LABELS } from "@/lib/constants";
import { Link } from "react-router-dom";

const tagStyles = {
  new_drop: "bg-accent text-foreground",
  best_seller: "bg-foreground text-background",
  grade_a: "bg-accent/20 text-accent border border-accent/30",
  rare_find: "bg-destructive/10 text-destructive",
  available: "bg-muted text-muted-foreground",
};

export default function ProductCard({ product, featured = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`group relative ${featured ? "md:col-span-2 md:row-span-2" : ""}`}
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
          {product.image_url ? (
            <img
              src={product.image_url}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-muted-foreground/30 font-heading text-2xl italic">
                KA
              </span>
            </div>
          )}

          {/* Tag */}
          {product.tag && (
            <span
              className={`absolute top-3 left-3 px-3 py-1 text-[9px] font-medium uppercase tracking-[0.15em] ${
                tagStyles[product.tag] || tagStyles.available
              }`}
            >
              {TAG_LABELS[product.tag] || "AVAILABLE"}
            </span>
          )}

          {/* WhatsApp CTA overlay */}
          <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <a
              href={getWhatsAppUrl(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-foreground text-background text-[10px] uppercase tracking-[0.15em] font-medium hover:bg-accent transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Request via WhatsApp
            </a>
          </div>
        </div>

        {/* Info */}
        <div className="pt-3 pb-1">
          <p className="text-[10px] uppercase tracking-[0.15em] text-accent mb-1">
            {product.category?.replace(/_/g, " ")}
          </p>
          <h3 className="text-sm font-medium text-foreground leading-tight">
            {product.name}
          </h3>
          <p className="text-sm font-medium mt-1">
            ₦{product.price?.toLocaleString()}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}