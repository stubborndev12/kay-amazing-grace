import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import { Plus, Pencil, Trash2, Star, Eye, EyeOff } from "lucide-react";

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

const EMPTY = { name: "", category: "mens_wear", description: "", tag: "available", is_available: true, is_featured: false, image_url: "", price: "" };

function ProductForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState(initial);
  const [uploading, setUploading] = useState(false);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleImage = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    const { file_url } = await base44.integrations.Core.UploadFile({ file });
    set("image_url", file_url);
    setUploading(false);
  };

  return (
    <div className="bg-[#111] border border-[#B8860B]/30 p-6 space-y-4">
      <h3 className="text-white font-bold text-[13px] uppercase tracking-wider">
        {initial.id ? "Edit Product" : "Add New Product"}
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="admin-label">Bale Name</label>
          <input className="admin-input" value={form.name} onChange={e => set("name", e.target.value)} placeholder="e.g. Mixed Ladies Bale" />
        </div>
        <div>
          <label className="admin-label">Category</label>
          <select className="admin-input" value={form.category} onChange={e => set("category", e.target.value)}>
            {CATEGORIES.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
          </select>
        </div>
        <div>
          <label className="admin-label">Tag / Status</label>
          <select className="admin-input" value={form.tag} onChange={e => set("tag", e.target.value)}>
            {TAGS.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
          </select>
        </div>
        <div>
          <label className="admin-label">Min. Order Note</label>
          <input className="admin-input" value={form.price} onChange={e => set("price", e.target.value)} placeholder="e.g. 1 bale minimum" />
        </div>
      </div>

      <div>
        <label className="admin-label">Description</label>
        <textarea className="admin-input min-h-[80px]" value={form.description} onChange={e => set("description", e.target.value)} placeholder="Describe this bale..." />
      </div>

      <div>
        <label className="admin-label">Product Image</label>
        {form.image_url && <img src={form.image_url} alt="" className="h-24 object-cover mb-2 border border-white/10" />}
        <input type="file" accept="image/*" onChange={handleImage} className="text-white/60 text-sm" />
        {uploading && <p className="text-[#B8860B] text-xs mt-1">Uploading...</p>}
        <p className="text-white/30 text-[10px] mt-1">Or paste URL:</p>
        <input className="admin-input mt-1" value={form.image_url} onChange={e => set("image_url", e.target.value)} placeholder="https://..." />
      </div>

      <div className="flex gap-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={form.is_featured} onChange={e => set("is_featured", e.target.checked)} className="accent-[#B8860B]" />
          <span className="text-white/70 text-[11px] uppercase tracking-wider font-semibold">Featured on Homepage</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={form.is_available} onChange={e => set("is_available", e.target.checked)} className="accent-[#B8860B]" />
          <span className="text-white/70 text-[11px] uppercase tracking-wider font-semibold">Available / In Stock</span>
        </label>
      </div>

      <div className="flex gap-3 pt-2">
        <button onClick={() => onSave(form)} className="px-6 py-2.5 bg-[#B8860B] text-black text-[11px] font-black uppercase tracking-widest hover:bg-[#D4A017] transition-colors">
          {initial.id ? "Update" : "Add Product"}
        </button>
        <button onClick={onCancel} className="px-6 py-2.5 border border-white/15 text-white/60 text-[11px] font-bold uppercase tracking-widest hover:border-white/30 transition-colors">
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

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => base44.entities.Product.list("-created_date"),
  });

  const save = useMutation({
    mutationFn: (form) => {
      const data = { ...form, price: parseFloat(form.price) || 0 };
      return form.id ? base44.entities.Product.update(form.id, data) : base44.entities.Product.create(data);
    },
    onSuccess: () => { qc.invalidateQueries(["products"]); setShowForm(false); setEditing(null); },
  });

  const remove = useMutation({
    mutationFn: (id) => base44.entities.Product.delete(id),
    onSuccess: () => qc.invalidateQueries(["products"]),
  });

  const toggleFeatured = useMutation({
    mutationFn: ({ id, is_featured }) => base44.entities.Product.update(id, { is_featured: !is_featured }),
    onSuccess: () => qc.invalidateQueries(["products"]),
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="h-px w-5 bg-[#B8860B]" />
            <span className="text-[#B8860B] text-[10px] font-bold uppercase tracking-[0.3em]">Manage</span>
          </div>
          <h1 className="text-white font-black text-2xl uppercase tracking-tight">Bale Catalog</h1>
        </div>
        <button
          onClick={() => { setEditing(null); setShowForm(true); }}
          className="flex items-center gap-2 px-5 py-2.5 bg-[#B8860B] text-black text-[11px] font-black uppercase tracking-widest hover:bg-[#D4A017] transition-colors"
        >
          <Plus className="w-4 h-4" /> Add Product
        </button>
      </div>

      {(showForm || editing) && (
        <ProductForm
          initial={editing || EMPTY}
          onSave={(form) => save.mutate(form)}
          onCancel={() => { setShowForm(false); setEditing(null); }}
        />
      )}

      {isLoading ? (
        <div className="text-white/40 text-sm py-12 text-center">Loading...</div>
      ) : products.length === 0 ? (
        <div className="bg-[#111] border border-white/8 py-16 text-center text-white/30">No products yet. Add your first bale product above.</div>
      ) : (
        <div className="bg-[#111] border border-white/8 overflow-hidden">
          {products.map((p, i) => (
            <div key={p.id} className={`flex items-center gap-4 px-5 py-4 ${i > 0 ? "border-t border-white/5" : ""}`}>
              <div className="w-12 h-12 shrink-0 overflow-hidden bg-white/5">
                {p.image_url ? <img src={p.image_url} alt={p.name} className="w-full h-full object-cover" /> : <div className="w-full h-full" />}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold text-sm truncate">{p.name}</p>
                <p className="text-white/40 text-[11px]">{p.category?.replace(/_/g, " ")} · {p.tag}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {p.is_featured && <span className="px-2 py-0.5 bg-[#B8860B]/20 text-[#B8860B] text-[8px] font-bold uppercase tracking-wider">Featured</span>}
                {p.is_available ? (
                  <span className="px-2 py-0.5 bg-green-500/15 text-green-400 text-[8px] font-bold uppercase">Active</span>
                ) : (
                  <span className="px-2 py-0.5 bg-red-500/15 text-red-400 text-[8px] font-bold uppercase">Inactive</span>
                )}
                <button onClick={() => toggleFeatured.mutate({ id: p.id, is_featured: p.is_featured })} className="p-1.5 text-white/30 hover:text-[#B8860B] transition-colors" title="Toggle featured">
                  <Star className="w-4 h-4" fill={p.is_featured ? "currentColor" : "none"} />
                </button>
                <button onClick={() => { setEditing(p); setShowForm(false); }} className="p-1.5 text-white/30 hover:text-white transition-colors">
                  <Pencil className="w-4 h-4" />
                </button>
                <button onClick={() => { if (confirm("Delete this product?")) remove.mutate(p.id); }} className="p-1.5 text-white/30 hover:text-red-400 transition-colors">
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