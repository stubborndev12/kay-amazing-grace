import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { GalleryService } from "@/services/GalleryService";
import { StorageService } from "@/services/StorageService";
import { Plus, Trash2, Star, Play } from "lucide-react";

const GALLERY_TYPES = [
  { value: "warehouse", label: "Warehouse" },
  { value: "bale_opening", label: "Bale Opening" },
  { value: "sorting", label: "Sorting Process" },
  { value: "new_arrivals", label: "New Arrivals" },
  { value: "customer_proof", label: "Customer Proof" },
];

const EMPTY = { title: "", image_url: "", youtube_url: "", gallery_type: "warehouse", media_type: "image", is_featured: false };

function GalleryForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState(initial);
  const [uploading, setUploading] = useState(false);
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleImage = async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  try {
    setUploading(true);

    // Delete old image if replacing one
    if (form.image_url) {
      try {
        await StorageService.deleteProductImage(form.image_url);
      } catch (err) {
        console.warn("Could not delete previous image:", err);
      }
    }

    const imageUrl =
      await StorageService.uploadProductImage(file);

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
      <h3 className="text-white font-bold text-[13px] uppercase tracking-wider">Add Media</h3>
      <div className="flex gap-4 mb-2">
        {["image","video"].map(t => (
          <label key={t} className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="media_type" value={t} checked={form.media_type === t} onChange={() => set("media_type", t)} className="accent-[#B8860B]" />
            <span className="text-white/70 text-[11px] uppercase font-bold tracking-wider">{t}</span>
          </label>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="admin-label">Title</label>
          <input className="admin-input" value={form.title} onChange={e => set("title", e.target.value)} placeholder="e.g. Warehouse stock — May 2026" />
        </div>
        <div>
          <label className="admin-label">Gallery Section</label>
          <select className="admin-input" value={form.gallery_type} onChange={e => set("gallery_type", e.target.value)}>
            {GALLERY_TYPES.map(g => <option key={g.value} value={g.value}>{g.label}</option>)}
          </select>
        </div>
      </div>
      {form.media_type === "image" && (
        <div>
          <label className="admin-label">Image</label>
          {form.image_url && <img src={form.image_url} alt="" className="h-24 object-cover mb-2 border border-white/10" />}
          <input type="file" accept="image/*" onChange={handleImage} className="text-white/60 text-sm" />
          {uploading && <p className="text-[#B8860B] text-xs mt-1">Uploading...</p>}
          <p className="text-white/30 text-[10px] mt-2">Or paste URL:</p>
          <input className="admin-input mt-1" value={form.image_url} onChange={e => set("image_url", e.target.value)} placeholder="https://..." />
        </div>
      )}
      {form.media_type === "video" && (
        <div>
          <label className="admin-label">YouTube Video URL</label>
          <input className="admin-input" value={form.youtube_url} onChange={e => set("youtube_url", e.target.value)} placeholder="https://youtube.com/watch?v=..." />
        </div>
      )}
      <label className="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" checked={form.is_featured} onChange={e => set("is_featured", e.target.checked)} className="accent-[#B8860B]" />
        <span className="text-white/70 text-[11px] uppercase tracking-wider font-semibold">Feature this item</span>
      </label>
      <div className="flex gap-3 pt-2">
        <button onClick={() => onSave(form)} className="px-6 py-2.5 bg-[#B8860B] text-black text-[11px] font-black uppercase tracking-widest hover:bg-[#D4A017] transition-colors">
          Save
        </button>
        <button onClick={onCancel} className="px-6 py-2.5 border border-white/15 text-white/60 text-[11px] font-bold uppercase tracking-widest hover:border-white/30 transition-colors">
          Cancel
        </button>
      </div>
    </div>
  );
}

function getYouTubeId(url) {
  const match = url?.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
  return match ? match[1] : null;
}

export default function Gallery() {
  const qc = useQueryClient();
  const [showForm, setShowForm] = useState(false);
  const [filterType, setFilterType] = useState("all");

  const { data: gallery = [], isLoading } = useQuery({
  queryKey: ["gallery"],
  queryFn: () => GalleryService.list(),
});

  const save = useMutation({
  mutationFn: (form) => GalleryService.create(form),

  onSuccess: () => {
    qc.invalidateQueries({
      queryKey: ["gallery"],
    });

    setShowForm(false);
  },
});

 const remove = useMutation({
  mutationFn: async (item) => {
    if (item.image_url) {
      await StorageService.deleteProductImage(item.image_url);
    }

    return GalleryService.delete(item.id);
  },

  onSuccess: () => {
    qc.invalidateQueries({
      queryKey: ["gallery"],
    });
  },
});

  const toggleFeatured = useMutation({
  mutationFn: ({ id, is_featured }) =>
    GalleryService.update(id, {
      is_featured: !is_featured,
    }),

  onSuccess: () => {
    qc.invalidateQueries({
      queryKey: ["gallery"],
    });
  },
});

  const filtered = filterType === "all" ? gallery : gallery.filter(g => g.gallery_type === filterType);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="h-px w-5 bg-[#B8860B]" />
            <span className="text-[#B8860B] text-[10px] font-bold uppercase tracking-[0.3em]">Manage</span>
          </div>
          <h1 className="text-white font-black text-2xl uppercase tracking-tight">Gallery & Media</h1>
        </div>
        <button onClick={() => setShowForm(true)} className="flex items-center gap-2 px-5 py-2.5 bg-[#B8860B] text-black text-[11px] font-black uppercase tracking-widest hover:bg-[#D4A017] transition-colors">
          <Plus className="w-4 h-4" /> Add Media
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {["all", ...GALLERY_TYPES.map(g => g.value)].map(t => (
          <button key={t} onClick={() => setFilterType(t)}
            className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider border transition-all ${filterType === t ? "bg-[#B8860B] border-[#B8860B] text-black" : "border-white/15 text-white/50 hover:border-[#B8860B]/40"}`}>
            {t.replace(/_/g, " ")}
          </button>
        ))}
      </div>

      {showForm && (
        <GalleryForm initial={EMPTY} onSave={(f) => save.mutate(f)} onCancel={() => setShowForm(false)} />
      )}

      {isLoading ? (
        <div className="text-white/40 text-sm py-12 text-center">Loading...</div>
      ) : filtered.length === 0 ? (
        <div className="bg-[#111] border border-white/8 py-16 text-center text-white/30">No media in this section.</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {filtered.map(item => {
            const ytId = getYouTubeId(item.youtube_url);
            return (
              <div key={item.id} className="group relative bg-[#111] border border-white/8 overflow-hidden">
                <div className="aspect-square relative">
                  {item.media_type === "video" && ytId ? (
                    <img src={`https://img.youtube.com/vi/${ytId}/hqdefault.jpg`} alt={item.title} className="w-full h-full object-cover" />
                  ) : item.image_url ? (
                    <img src={item.image_url} alt={item.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-white/5" />
                  )}
                  {item.media_type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <Play className="w-8 h-8 text-white fill-white" />
                    </div>
                  )}
                  {item.is_featured && (
                    <span className="absolute top-2 left-2 px-1.5 py-0.5 bg-[#B8860B] text-black text-[7px] font-black uppercase">Featured</span>
                  )}
                </div>
                <div className="p-2.5">
                  <p className="text-white text-[11px] font-semibold truncate">{item.title}</p>
                  <p className="text-white/30 text-[9px] uppercase tracking-wider">{item.gallery_type?.replace(/_/g, " ")}</p>
                  <div className="flex gap-1 mt-2">
                    <button onClick={() => toggleFeatured.mutate({ id: item.id, is_featured: item.is_featured })} className="p-1 text-white/30 hover:text-[#B8860B] transition-colors">
                      <Star className="w-3.5 h-3.5" fill={item.is_featured ? "currentColor" : "none"} />
                    </button>
                    <button onClick={() => { if (confirm("Delete?")) remove.mutate(item); }} className="p-1 text-white/30 hover:text-red-400 transition-colors">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}