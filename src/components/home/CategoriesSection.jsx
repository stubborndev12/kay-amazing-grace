import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const categories = [
  { id: "clothing_bales", label: "Clothing Bales", badge: "BULK", highlight: true },
  { id: "ladies_wear", label: "Ladies Wear", badge: "LADIES" },
  { id: "mens_wear", label: "Men's Wear", badge: "MEN" },
  { id: "childrens_wear", label: "Children's Wear", badge: "KIDS" },
  { id: "corporate_wear", label: "Corporate Wear", badge: "CORP" },
  { id: "casual_wear", label: "Casual Wear", badge: "CASUAL" },
  { id: "sportswear", label: "Sportswear", badge: "SPORT" },
  { id: "shoes_slippers", label: "Shoes & Slippers", badge: "SHOES" },
  { id: "bags_accessories", label: "Bags & Accessories", badge: "BAGS" },
];

const BALE_IMAGE = "https://media.base44.com/images/public/69edd82e4a975eaa5f121f62/744c46cc8_generated_image.png";

const CATEGORY_IMAGES = {
  ladies_wear: "https://media.base44.com/images/public/69edd82e4a975eaa5f121f62/69f3bca7f_generated_image.png",
  mens_wear: "https://media.base44.com/images/public/69edd82e4a975eaa5f121f62/c9ba54fce_generated_image.png",
  childrens_wear: "https://media.base44.com/images/public/69edd82e4a975eaa5f121f62/57a244710_generated_image.png",
  corporate_wear: "https://media.base44.com/images/public/69edd82e4a975eaa5f121f62/cd715a1f6_generated_image.png",
  casual_wear: "https://media.base44.com/images/public/69edd82e4a975eaa5f121f62/fc57b5d83_generated_image.png",
  sportswear: "https://media.base44.com/images/public/69edd82e4a975eaa5f121f62/2a75d63e9_generated_image.png",
  shoes_slippers: "https://media.base44.com/images/public/69edd82e4a975eaa5f121f62/a57573194_generated_image.png",
  bags_accessories: "https://media.base44.com/images/public/69edd82e4a975eaa5f121f62/7c4a5a230_generated_image.png",
};

export default function CategoriesSection({ categoryImages }) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-12"
        >
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#B8860B] font-semibold mb-2">
            Shop by Category
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What We Sell
            </h2>
            <Link
              to="/shop"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#B8860B] hover:underline"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="mt-2 text-sm text-gray-500 max-w-lg">
            Available for retail buyers and bulk resellers. Every category carefully sourced.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {categories.map((cat, i) => {
            const isBale = cat.id === "clothing_bales";
            const imgSrc = isBale ? BALE_IMAGE : (categoryImages?.[cat.id] || CATEGORY_IMAGES[cat.id]);

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={isBale ? "col-span-2 row-span-2" : ""}
              >
                <Link
                  to={`/shop?category=${cat.id}`}
                  className={`group relative block overflow-hidden bg-gray-100 ${
                    isBale ? "aspect-square sm:aspect-auto sm:h-full min-h-[220px]" : "aspect-square"
                  }`}
                >
                  {imgSrc ? (
                    <img
                      src={imgSrc}
                      alt={cat.label}
                      className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                  {/* Badge */}
                  {cat.highlight && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#B8860B] text-white text-[9px] font-bold uppercase tracking-wider">
                      ★ POPULAR
                    </span>
                  )}

                  {/* Label */}
                  <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 flex items-end justify-between">
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-[#B8860B] font-semibold mb-0.5">
                        {cat.badge}
                      </p>
                      <h3 className={`text-white font-bold leading-tight ${isBale ? "text-base md:text-xl" : "text-sm"}`}>
                        {cat.label}
                      </h3>
                      {isBale && (
                        <p className="text-white/60 text-xs mt-0.5">Retail & Wholesale</p>
                      )}
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/60 opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-200 shrink-0" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}