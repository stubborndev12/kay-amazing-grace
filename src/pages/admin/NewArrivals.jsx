import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { NewArrivalService } from "@/services/NewArrivalService";
import { StorageService } from "@/services/StorageService";
import { Plus, Pencil, Trash2, Eye, EyeOff, Star } from "lucide-react";

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
  { value: "mixed", label: "Mixed Bale" },
  { value: "korea", label: "Korea Bale" },
  { value: "special", label: "Special / Coded" },
];

const EMPTY = { title: "", category: "mixed", description: "", image_url: "", youtube_url: "", is_active: true, is_featured: false, whatsapp_message: "" };

function ArrivalForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState(initial);
  const [uploading, setUploading] = useState(false);
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleImage = async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  try {
    setUploading(true);

    if (form.image_url) {
      try {
        await StorageService.deleteProductImage(form.image_url);
      } catch (err) {
        console.warn(err);
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
        {initial.id ? "Edit Arrival" : "Post New Arrival"}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="admin-label">Title</label>
          <input className="admin-input" value={form.title} onChange={e => set("title", e.target.value)} placeholder="e.g. New Korea Mix — Just Landed" />
        </div>
        <div>
          <label className="admin-label">Category</label>
          <select className="admin-input" value={form.category} onChange={e => set("category", e.target.value)}>
            {CATEGORIES.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label className="admin-label">Description</label>
        <textarea className="admin-input min-h-[80px]" value={form.description} onChange={e => set("description", e.target.value)} placeholder="Tell buyers what's in this arrival..." />
      </div>
      <div>
        <label className="admin-label">Image</label>
        {form.image_url && <img src={form.image_url} alt="" className="h-24 object-cover mb-2 border border-white/10" />}
        <input type="file" accept="image/*" onChange={handleImage} className="text-white/60 text-sm" />
        {uploading && <p className="text-[#B8860B] text-xs mt-1">Uploading...</p>}
        <p className="text-white/30 text-[10px] mt-1">Or paste image URL:</p>
        <input className="admin-input mt-1" value={form.image_url} onChange={e => set("image_url", e.target.value)} placeholder="https://..." />
      </div>
      <div>
        <label className="admin-label">YouTube Video Link (optional)</label>
        <input className="admin-input" value={form.youtube_url} onChange={e => set("youtube_url", e.target.value)} placeholder="https://youtube.com/watch?v=..." />
      </div>
      <div>
        <label className="admin-label">Custom WhatsApp Message (optional)</label>
        <input className="admin-input" value={form.whatsapp_message} onChange={e => set("whatsapp_message", e.target.value)} placeholder="I'm interested in this new arrival..." />
      </div>
      <div className="flex gap-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={form.is_active} onChange={e => set("is_active", e.target.checked)} className="accent-[#B8860B]" />
          <span className="text-white/70 text-[11px] uppercase tracking-wider font-semibold">Active (visible on site)</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={form.is_featured} onChange={e => set("is_featured", e.target.checked)} className="accent-[#B8860B]" />
          <span className="text-white/70 text-[11px] uppercase tracking-wider font-semibold">Feature on Homepage</span>
        </label>
      </div>
      <div className="flex gap-3 pt-2">
        <button onClick={() => onSave(form)} className="px-6 py-2.5 bg-[#B8860B] text-black text-[11px] font-black uppercase tracking-widest hover:bg-[#D4A017] transition-colors">
          {initial.id ? "Update" : "Post Arrival"}
        </button>
        <button onClick={onCancel} className="px-6 py-2.5 border border-white/15 text-white/60 text-[11px] font-bold uppercase tracking-widest hover:border-white/30 transition-colors">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default function NewArrivals() {
  const qc = useQueryClient();
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);

  const { data: arrivals = [], isLoading } = useQuery({
    queryKey: ["arrivals"],
    queryFn: () => NewArrivalService.list(),
  });

  const save = useMutation({
  mutationFn: (form) =>
    form.id
      ? NewArrivalService.update(form.id, form)
      : NewArrivalService.create(form),

  onSuccess: () => {
    qc.invalidateQueries({
      queryKey: ["arrivals"],
    });

    setShowForm(false);
    setEditing(null);
  },
});

  const remove = useMutation({
  mutationFn: async (arrival) => {
    if (arrival.image_url) {
      await StorageService.deleteProductImage(arrival.image_url);
    }

    return NewArrivalService.delete(arrival.id);
  },

  onSuccess: () => {
    qc.invalidateQueries({
      queryKey: ["arrivals"],
    });
  },
});

  const toggle = useMutation({
  mutationFn: ({ id, is_active }) =>
    NewArrivalService.update(id, {
      is_active: !is_active,
    }),

  onSuccess: () => {
    qc.invalidateQueries({
      queryKey: ["arrivals"],
    });
  },
});

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="h-px w-5 bg-[#B8860B]" />
            <span className="text-[#B8860B] text-[10px] font-bold uppercase tracking-[0.3em]">Manage</span>
          </div>
          <h1 className="text-white font-black text-2xl uppercase tracking-tight">New Arrivals</h1>
        </div>
        <button onClick={() => { setEditing(null); setShowForm(true); }} className="flex items-center gap-2 px-5 py-2.5 bg-[#B8860B] text-black text-[11px] font-black uppercase tracking-widest hover:bg-[#D4A017] transition-colors">
          <Plus className="w-4 h-4" /> Post Arrival
        </button>
      </div>

      {(showForm || editing) && (
        <ArrivalForm initial={editing || EMPTY} onSave={(f) => save.mutate(f)} onCancel={() => { setShowForm(false); setEditing(null); }} />
      )}

      {isLoading ? (
        <div className="text-white/40 text-sm py-12 text-center">Loading...</div>
      ) : arrivals.length === 0 ? (
        <div className="bg-[#111] border border-white/8 py-16 text-center text-white/30">No arrivals yet.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {arrivals.map(arr => (
            <div key={arr.id} className="bg-[#111] border border-white/8 overflow-hidden group">
              <div className="aspect-video relative overflow-hidden bg-white/5">
                {arr.image_url && <img src={arr.image_url} alt={arr.title} className="w-full h-full object-cover" />}
                {arr.is_featured && (
                  <span className="absolute top-2 left-2 px-2 py-0.5 bg-[#B8860B] text-black text-[8px] font-black uppercase">Featured</span>
                )}
                {!arr.is_active && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <span className="text-white/60 text-[11px] font-bold uppercase tracking-wider">Hidden</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <p className="text-[#B8860B] text-[9px] font-bold uppercase tracking-wider mb-1">{arr.category?.replace(/_/g, " ")}</p>
                <p className="text-white font-bold text-sm leading-tight mb-1">{arr.title}</p>
                {arr.description && <p className="text-white/40 text-[11px] line-clamp-2">{arr.description}</p>}
                {arr.youtube_url && <p className="text-[#B8860B]/60 text-[10px] mt-1">▶ YouTube video attached</p>}
                <div className="flex items-center gap-2 mt-3">
                  <button onClick={() => toggle.mutate({ id: arr.id, is_active: arr.is_active })} className="p-1.5 text-white/30 hover:text-white transition-colors" title="Toggle visibility">
                    {arr.is_active ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </button>
                  <button onClick={() => setEditing(arr)} className="p-1.5 text-white/30 hover:text-white transition-colors"><Pencil className="w-4 h-4" /></button>
                  <button onClick={() => { if (confirm("Delete?")) remove.mutate(arr); }} className="p-1.5 text-white/30 hover:text-red-400 transition-colors"><Trash2 className="w-4 h-4" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}