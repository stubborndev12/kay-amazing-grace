import React from "react";
import { CATEGORIES, TAG_LABELS } from "@/lib/constants";
import { X } from "lucide-react";

export default function ShopFilters({ selectedCategory, selectedTag, onCategoryChange, onTagChange }) {
  return (
    <div className="space-y-6">
      {/* Active filters */}
      {(selectedCategory || selectedTag) && (
        <div className="flex flex-wrap gap-2 mb-4">
          {selectedCategory && (
            <button
              onClick={() => onCategoryChange("")}
              className="inline-flex items-center gap-1 px-3 py-1 bg-accent/10 text-accent text-[10px] uppercase tracking-wider"
            >
              {CATEGORIES.find(c => c.id === selectedCategory)?.label}
              <X className="w-3 h-3" />
            </button>
          )}
          {selectedTag && (
            <button
              onClick={() => onTagChange("")}
              className="inline-flex items-center gap-1 px-3 py-1 bg-accent/10 text-accent text-[10px] uppercase tracking-wider"
            >
              {TAG_LABELS[selectedTag]}
              <X className="w-3 h-3" />
            </button>
          )}
        </div>
      )}

      {/* Categories */}
      <div>
        <h3 className="text-[10px] uppercase tracking-[0.2em] text-accent mb-4">Categories</h3>
        <div className="flex flex-col gap-1.5">
          <button
            onClick={() => onCategoryChange("")}
            className={`text-left text-sm py-1.5 transition-colors ${!selectedCategory ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"}`}
          >
            All Categories
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`text-left text-sm py-1.5 transition-colors ${selectedCategory === cat.id ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"}`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="gold-hairline" />

      {/* Tags */}
      <div>
        <h3 className="text-[10px] uppercase tracking-[0.2em] text-accent mb-4">Collections</h3>
        <div className="flex flex-col gap-1.5">
          <button
            onClick={() => onTagChange("")}
            className={`text-left text-sm py-1.5 transition-colors ${!selectedTag ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"}`}
          >
            All Items
          </button>
          {Object.entries(TAG_LABELS).map(([key, label]) => (
            <button
              key={key}
              onClick={() => onTagChange(key)}
              className={`text-left text-sm py-1.5 transition-colors ${selectedTag === key ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}