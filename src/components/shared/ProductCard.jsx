import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TAG_LABELS } from "@/lib/constants";

const getWAUrl = (name) =>
  `https://wa.me/2348035239489?text=Hello%20Kay%20Amazing%20Grace%20Global%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(name)}%20%E2%80%94%20is%20it%20still%20available%3F`;

const CATEGORY_FALLBACKS = {
  mens_wear: "https://media.base44.com/images/public/69edd82e4a975eaa5f121f62/c9ba54fce_generated_image.png",
  ladies_wear: "https://media.base44.com/images/public/69edd82e4a975eaa5f121f62/69f3bca7f_generated_image.png",
  childrens_wear: "https://media.base44.com/images/public/69edd82e4a975eaa5f121f62/57a244710_generated_image.png",
  corporate_wear: "https://media.base44.com/images/public/69edd82e4a975eaa5f121f62/cd715a1f6_generated_image.png",
  casual_wear: "https://media.base44.com/images/public/69edd82e4a975eaa5f121f62/fc57b5d83_generated_image.png",
  sportswear: "https://media.base44.com/images/public/69edd82e4a975eaa5f121f62/2a75d63e9_generated_image.png",
  shoes_slippers: "https://media.base44.com/images/public/69edd82e4a975eaa5f121f62/a57573194_generated_image.png",
  bags_accessories: "https://media.base44.com/images/public/69edd82e4a975eaa5f121f62/7c4a5a230_generated_image.png",
  underwear_nightwear: "https://media.base44.com/images/public/69edd82e4a975eaa5f121f62/6680c1def_generated_image.png",
};

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
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-[#111]">
          {(product.image_url || CATEGORY_FALLBACKS[product.category]) ? (
            <img
              src={product.image_url || CATEGORY_FALLBACKS[product.category]}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d]">
              <img
                src="https://media.base44.com/images/public/69edd82e4a975eaa5f121f62/a7966e01b_generated_image.png"
                alt={product.name}
                className="w-full h-full object-cover opacity-60"
              />
            </div>
          )}

          {product.tag && (
            <span
              className={`absolute top-3 left-3 px-3 py-1 text-[9px] font-medium uppercase tracking-[0.15em] ${
                tagStyles[product.tag] || tagStyles.available
              }`}
            >
              {TAG_LABELS[product.tag] || "AVAILABLE"}
            </span>
          )}

          <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <a
              href={getWAUrl(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#25D366] text-white text-[10px] uppercase tracking-[0.12em] font-bold hover:bg-[#20BD5A] transition-colors"
            >
              Order via WhatsApp
            </a>
          </div>
        </div>

        <div className="pt-3 pb-1">
          <p className="text-[10px] uppercase tracking-[0.15em] text-accent mb-1">
            {product.category?.replace(/_/g, " ")}
          </p>

          <h3 className="text-sm font-medium text-foreground leading-tight">
            {product.name}
          </h3>

          <p className="text-sm font-medium mt-1">
            ₦{Number(product.price).toLocaleString()}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}