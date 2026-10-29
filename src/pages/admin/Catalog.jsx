import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Plus, Pencil, Trash2, Star } from "lucide-react";

import { ProductService } from "@/services/ProductService";
import { StorageService } from "@/services/StorageService";

const CATEGORIES = [
  { value: "mens_wear", label: "Men's Wear" },
  { value: "ladies_wear", label: "Ladies Wear" },
  { value: "childrens_wear", label: "Children's Wear" },
  { value: "corporate_wear", label: "Corporate Wear" },
  { value: "casual_wear", label: "Casual Wear" },
  { value: "sportswear", label: "Sportswear" },
  { value: "shoes_slippers", label: "Shoes & Slippers" },
  { value: "bags_accessories", label: "Bags & Accessories" },
  { value: "underwear_nightwear", label: "Underwear & Nightwear" },
];

const TAGS = [
  { value: "new_drop", label: "New Drop" },
  { value: "best_seller", label: "Best Seller" },
  { value: "grade_a", label: "Grade A" },
  { value: "rare_find", label: "Rare Find" },
  { value: "available", label: "Available" },
];

const EMPTY = {
  name: "",
  category: "mens_wear",
  description: "",
  tag: "available",
  is_available: true,
  is_featured: false,
  image_url: "",
  price: "",
};

function ProductForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState(initial);
  const [uploading, setUploading] = useState(false);

  const set = (key, value) =>
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));

 const handleImage = async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  try {
    setUploading(true);

    // Delete previous image if editing
    if (form.image_url) {
      try {
        await StorageService.deleteProductImage(form.image_url);
      } catch (err) {
        console.warn("Could not delete previous image:", err);
      }
    }

    const imageUrl = await StorageService.uploadProductImage(file);

    set("image_url", imageUrl);
  } catch (err) {
    console.error(err);
    alert("Image upload failed.");
  } finally {
    setUploading(false);
  }
};

  return (
    <div className="bg-[#111] border border-[#B8860B]/30 p-6 space-y-4">

      <h3 className="text-white font-bold text-[13px] uppercase tracking-wider">
        {initial.id ? "Edit Product" : "Add Product"}
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        <div>
          <label className="admin-label">Bale Name</label>

          <input
            className="admin-input"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
          />
        </div>

        <div>

          <label className="admin-label">
            Category
          </label>

          <select
            className="admin-input"
            value={form.category}
            onChange={(e) => set("category", e.target.value)}
          >
            {CATEGORIES.map((c) => (
              <option
                key={c.value}
                value={c.value}
              >
                {c.label}
              </option>
            ))}
          </select>

        </div>

        <div>

          <label className="admin-label">
            Tag
          </label>

          <select
            className="admin-input"
            value={form.tag}
            onChange={(e) => set("tag", e.target.value)}
          >
            {TAGS.map((t) => (
              <option
                key={t.value}
                value={t.value}
              >
                {t.label}
              </option>
            ))}
          </select>

        </div>

        <div>

          <label className="admin-label">
  Order Information
</label>

<input
  className="admin-input"
  value={form.price}
  onChange={(e) => set("price", e.target.value)}
  placeholder="Contact us on WhatsApp for pricing"
/>

        </div>

      </div>

      <div>

        <label className="admin-label">
          Description
        </label>

        <textarea
          className="admin-input min-h-[100px]"
          value={form.description}
          onChange={(e) => set("description", e.target.value)}
        />

      </div>

      <div>

        <label className="admin-label">
          Product Image
        </label>

        {form.image_url && (
          <img
            src={form.image_url}
            alt={form.name}
            className="h-24 mb-3 object-cover rounded"
          />
        )}

        <input
          type="file"
          accept="image/*"
          onChange={handleImage}
        />

        {uploading && (
          <p className="text-[#B8860B] text-xs mt-2">
            Uploading...
          </p>
        )}

        <p className="text-white/30 text-[10px] mt-2">
          Or paste image URL
        </p>

        <input
          className="admin-input mt-1"
          value={form.image_url}
          onChange={(e) => set("image_url", e.target.value)}
        />

      </div>

      <div className="flex gap-6">

        <label className="flex items-center gap-2">

          <input
            type="checkbox"
            checked={form.is_featured}
            onChange={(e) =>
              set("is_featured", e.target.checked)
            }
          />

          Featured

        </label>

        <label className="flex items-center gap-2">

          <input
            type="checkbox"
            checked={form.is_available}
            onChange={(e) =>
              set("is_available", e.target.checked)
            }
          />

          Available

        </label>

      </div>

      <div className="flex gap-3">

        <button
          onClick={() => onSave(form)}
          className="px-6 py-2.5 bg-[#B8860B] text-black font-bold"
        >
          {initial.id ? "Update Product" : "Create Product"}
        </button>

        <button
          onClick={onCancel}
          className="px-6 py-2.5 border border-white/20 text-white"
        >
          Cancel
        </button>

      </div>

    </div>
  );
}
export default function Catalog() {
  const qc = useQueryClient();

  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);

  const {
    data: products = [],
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => ProductService.list(),
  });

const save = useMutation({
  mutationFn: async (form) => {
    const data = {
  ...form,
};

    if (form.id) {
      return ProductService.update(form.id, data);
    }

    return ProductService.create(data);
  },

  onSuccess: () => {
    qc.invalidateQueries({
  queryKey: ["products"],
});

    setShowForm(false);
    setEditing(null);
  },
});

 const remove = useMutation({
  mutationFn: async (id) => {
    const product = products.find((p) => p.id === id);

    if (product?.image_url) {
      try {
        await StorageService.deleteProductImage(product.image_url);
      } catch (err) {
        console.error(err);
      }
    }

    return ProductService.delete(id);
  },

  onSuccess: () => {
    qc.invalidateQueries({
      queryKey: ["products"],
    });
  },
});
const toggleFeatured = useMutation({
  mutationFn: ({ id, is_featured }) =>
    ProductService.update(id, {
      is_featured: !is_featured,
    }),

  onSuccess: () => {
    qc.invalidateQueries({
      queryKey: ["products"],
    });
  },
});

  return (
    <div className="space-y-6">

      <div className="flex items-center justify-between">

        <div>

          <div className="flex items-center gap-2 mb-1">
            <div className="h-px w-5 bg-[#B8860B]" />
            <span className="text-[#B8860B] text-[10px] font-bold uppercase tracking-[0.3em]">
              Manage
            </span>
          </div>

          <h1 className="text-white font-black text-2xl uppercase tracking-tight">
            Bale Catalog
          </h1>

        </div>

        <button
          onClick={() => {
            setEditing(null);
            setShowForm(true);
          }}
          className="flex items-center gap-2 px-5 py-2.5 bg-[#B8860B] text-black font-black uppercase tracking-widest"
        >
          <Plus className="w-4 h-4" />
          Add Product
        </button>

      </div>

      {(showForm || editing) && (
        <ProductForm
          initial={editing || EMPTY}
          onSave={(form) => save.mutate(form)}
          onCancel={() => {
            setShowForm(false);
            setEditing(null);
          }}
        />
      )}

      {isLoading ? (
        <div className="text-center py-16 text-white/40">
          Loading products...
        </div>
      ) : products.length === 0 ? (
        <div className="bg-[#111] border border-white/10 py-20 text-center text-white/40">
          No products found.
        </div>
      ) : (
       <div className="bg-[#111] border border-white/10 overflow-hidden">

  {products.map((p, i) => (
            <div
              key={p.id}
              className={`flex items-center gap-4 px-5 py-4 ${
                i > 0 ? "border-t border-white/5" : ""
              }`}
            >
              <div className="w-14 h-14 overflow-hidden rounded bg-white/5 shrink-0">
                {p.image_url ? (
                  <img
                    src={p.image_url}
                    alt={p.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white/20 text-xs">
                    No Image
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-white font-semibold truncate">
                  {p.name}
                </h3>

                <p className="text-white/40 text-xs capitalize">
                  {p.category?.replace(/_/g, " ")}
                </p>

                <div className="flex items-center gap-2 mt-1">

                   <span className="text-[#B8860B] text-sm font-semibold">
  Request Price on WhatsApp
</span>

                  <span className="text-white/30">
                    •
                  </span>

                  <span className="text-white/50 uppercase text-[10px]">
                    {p.tag}
                  </span>

                </div>
              </div>

              <div className="flex items-center gap-2">

                {p.is_featured && (
                  <span className="px-2 py-1 rounded bg-[#B8860B]/20 text-[#B8860B] text-[10px] font-bold uppercase">
                    Featured
                  </span>
                )}

                {p.is_available ? (
                  <span className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-[10px] font-bold uppercase">
                    Active
                  </span>
                ) : (
                  <span className="px-2 py-1 rounded bg-red-500/20 text-red-400 text-[10px] font-bold uppercase">
                    Hidden
                  </span>
                )}

                <button
                  onClick={() =>
                    toggleFeatured.mutate({
                      id: p.id,
                      is_featured: p.is_featured,
                    })
                  }
                  className="p-2 hover:text-[#B8860B] transition"
                  title="Toggle Featured"
                >
                  <Star
                    className="w-4 h-4"
                    fill={p.is_featured ? "currentColor" : "none"}
                  />
                </button>

                <button
                  onClick={() => {
                    setEditing(p);
                    setShowForm(true);
                  }}
                  className="p-2 hover:text-blue-400 transition"
                  title="Edit"
                >
                  <Pencil className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    if (
                      window.confirm(
                        "Delete this product?"
                      )
                    ) {
                      remove.mutate(p.id);
                    }
                  }}
                  className="p-2 hover:text-red-400 transition"
                  title="Delete"
                >
                  <Trash2 className="w-4 h-4" />
                </button>

              </div>
            </div>
          ))}
                  </div>
      )}

    </div>
  );
}