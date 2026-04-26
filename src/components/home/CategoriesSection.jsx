import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";

const categories = [
  { id: "mens_wear", label: "Men's Wear", short: "MEN" },
  { id: "ladies_wear", label: "Ladies Wear", short: "LADIES" },
  { id: "childrens_wear", label: "Children's Wear", short: "KIDS" },
  { id: "corporate_wear", label: "Corporate Wear", short: "CORP" },
  { id: "casual_wear", label: "Casual Wear", short: "CASUAL" },
  { id: "sportswear", label: "Sportswear", short: "SPORT" },
  { id: "shoes_slippers", label: "Shoes & Slippers", short: "SHOES" },
  { id: "bags_accessories", label: "Bags & Accessories", short: "BAGS" },
  { id: "underwear_nightwear", label: "Underwear & Nightwear", short: "INTIMATE" },
];

export default function CategoriesSection({ categoryImages }) {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 max-w-7xl mx-auto">
      <SectionHeader
        label="Curated Collections"
        title="Shop by Category"
        subtitle="Every piece hand-selected for quality, style, and value"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className={`${i === 0 || i === 4 ? "md:col-span-2 md:row-span-2" : ""}`}
          >
            <Link
              to={`/shop?category=${cat.id}`}
              className="group relative block overflow-hidden bg-muted aspect-square"
            >
              {categoryImages?.[cat.id] ? (
                <img
                  src={categoryImages[cat.id]}
                  alt={cat.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-muted to-secondary" />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 flex items-end justify-between">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-accent mb-1">
                    {cat.short}
                  </p>
                  <h3 className="text-white text-sm md:text-lg font-medium">
                    {cat.label}
                  </h3>
                </div>
                <ArrowUpRight className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}