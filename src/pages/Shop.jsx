import React, { useState, useMemo } from "react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { Filter, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "../components/shared/ProductCard";
import ShopFilters from "../components/shop/ShopFilters";

export default function Shop() {
  const urlParams = new URLSearchParams(window.location.search);
  const initialCategory = urlParams.get("category") || "";
  const initialFilter = urlParams.get("filter") || "";
  const initialSearch = urlParams.get("search") || "";

  const [category, setCategory] = useState(initialCategory);
  const [tag, setTag] = useState(initialFilter);
  const [search, setSearch] = useState(initialSearch);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const { data: products, isLoading } = useQuery({
    queryKey: ["all-products"],
    queryFn: () => base44.entities.Product.list("-created_date", 200),
    initialData: [],
  });

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = !category || p.category === category;
      const matchesTag = !tag || p.tag === tag;
      const matchesSearch = !search || p.name?.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesTag && matchesSearch;
    });
  }, [products, category, tag, search]);

  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      {/* Header */}
      <div className="px-4 sm:px-6 max-w-7xl mx-auto py-8 md:py-12">
        <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-2">The Collection</p>
        <h1 className="text-3xl md:text-5xl font-heading font-light italic">
          {category ? products.find(p => p.category === category)?.category?.replace(/_/g, " ") || "Shop" : "Shop All"}
        </h1>

        {/* Search bar */}
        <div className="relative mt-6 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2.5 bg-transparent border border-border text-sm focus:border-accent outline-none transition-colors"
          />
          {search && (
            <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2">
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          )}
        </div>
      </div>

      <div className="gold-hairline max-w-7xl mx-auto" />

      <div className="px-4 sm:px-6 max-w-7xl mx-auto py-8">
        {/* Mobile filter toggle */}
        <button
          onClick={() => setShowMobileFilters(!showMobileFilters)}
          className="md:hidden inline-flex items-center gap-2 px-4 py-2 border border-border text-[11px] uppercase tracking-wider mb-6"
        >
          <Filter className="w-3.5 h-3.5" />
          Filters
        </button>

        <div className="flex gap-8 md:gap-12">
          {/* Desktop Filters */}
          <div className="hidden md:block w-56 shrink-0">
            <ShopFilters
              selectedCategory={category}
              selectedTag={tag}
              onCategoryChange={setCategory}
              onTagChange={setTag}
            />
          </div>

          {/* Mobile Filters */}
          <AnimatePresence>
            {showMobileFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden fixed inset-0 z-50 bg-background pt-20 px-6 overflow-y-auto"
              >
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="absolute top-6 right-6"
                >
                  <X className="w-5 h-5" />
                </button>
                <ShopFilters
                  selectedCategory={category}
                  selectedTag={tag}
                  onCategoryChange={(v) => { setCategory(v); setShowMobileFilters(false); }}
                  onTagChange={(v) => { setTag(v); setShowMobileFilters(false); }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Products Grid */}
          <div className="flex-1">
            <p className="text-xs text-muted-foreground mb-6">
              {filteredProducts.length} piece{filteredProducts.length !== 1 ? "s" : ""}
            </p>

            {isLoading ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
                {Array(6).fill(0).map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="aspect-[3/4] bg-muted" />
                    <div className="h-3 bg-muted mt-3 w-2/3" />
                    <div className="h-3 bg-muted mt-2 w-1/3" />
                  </div>
                ))}
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-sm">No products found</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}