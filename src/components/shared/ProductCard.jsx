import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { TAG_LABELS } from "@/lib/constants";
import { Link } from "react-router-dom";

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
      <Link to={`/product/${product.id}`} className="block">
        {/* Image */}
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
            href={getWAUrl(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#25D366] text-white text-[10px] uppercase tracking-[0.12em] font-bold hover:bg-[#20BD5A] transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Order via WhatsApp
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