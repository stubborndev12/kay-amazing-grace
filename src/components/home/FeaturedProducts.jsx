import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";
import ProductCard from "../shared/ProductCard";

export default function FeaturedProducts({ products }) {
  if (!products || products.length === 0) return null;

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 max-w-7xl mx-auto bg-card">
      <SectionHeader
        label="The Vault"
        title="Featured Pieces"
        subtitle="Hand-picked for quality and style"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
        {products.slice(0, 8).map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            featured={i === 0}
          />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 px-8 py-3.5 border border-foreground text-foreground text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-foreground hover:text-background transition-all duration-300"
        >
          View Full Collection
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
}