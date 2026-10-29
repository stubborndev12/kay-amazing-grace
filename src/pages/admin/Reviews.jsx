import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ReviewService } from "@/services/ReviewService";
import { Plus, Pencil, Trash2, Star } from "lucide-react";

const EMPTY = {
  customer_name: "",
  rating: 5,
  comment: "",
  location: "",
};

function ReviewForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState(initial);

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  return (
    <div className="bg-[#111] border border-[#B8860B]/30 p-6 space-y-4">
      <h3 className="text-white font-bold text-[13px] uppercase tracking-wider">
        {initial.id ? "Edit Review" : "Add Review"}
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="admin-label">Customer Name</label>
          <input
            className="admin-input"
            value={form.customer_name}
            onChange={(e) => set("customer_name", e.target.value)}
            placeholder="e.g. Mama Chidinma"
          />
        </div>

        <div>
          <label className="admin-label">Location</label>
          <input
            className="admin-input"
            value={form.location}
            onChange={(e) => set("location", e.target.value)}
            placeholder="e.g. Lagos, Nigeria"
          />
        </div>

        <div>
          <label className="admin-label">Rating (1–5)</label>

          <div className="flex gap-2 mt-1">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => set("rating", n)}
                className={`text-2xl transition-opacity ${
                  n <= form.rating ? "opacity-100" : "opacity-30"
                }`}
              >
                ⭐
              </button>
            ))}
          </div>
        </div>
      </div>

      <div>
        <label className="admin-label">Review Comment</label>

        <textarea
          className="admin-input min-h-[100px]"
          value={form.comment}
          onChange={(e) => set("comment", e.target.value)}
          placeholder="What did the customer say?"
        />
      </div>

      <div className="flex gap-3 pt-2">
        <button
          onClick={() => onSave(form)}
          className="px-6 py-2.5 bg-[#B8860B] text-black text-[11px] font-black uppercase tracking-widest hover:bg-[#D4A017]"
        >
          {initial.id ? "Update" : "Add Review"}
        </button>

        <button
          onClick={onCancel}
          className="px-6 py-2.5 border border-white/15 text-white/60 text-[11px] font-bold uppercase tracking-widest"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default function Reviews() {
  const qc = useQueryClient();

  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);

  const { data: reviews = [], isLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: () => ReviewService.list(),
  });

  const save = useMutation({
    mutationFn: (form) =>
      form.id
        ? ReviewService.update(form.id, form)
        : ReviewService.create(form),

    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ["reviews"],
      });

      setShowForm(false);
      setEditing(null);
    },
  });

  const remove = useMutation({
    mutationFn: (id) => ReviewService.delete(id),

    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ["reviews"],
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
            Customer Reviews
          </h1>
        </div>

        <button
          onClick={() => {
            setEditing(null);
            setShowForm(true);
          }}
          className="flex items-center gap-2 px-5 py-2.5 bg-[#B8860B] text-black text-[11px] font-black uppercase tracking-widest hover:bg-[#D4A017]"
        >
          <Plus className="w-4 h-4" />
          Add Review
        </button>
      </div>

      {(showForm || editing) && (
        <ReviewForm
          initial={editing || EMPTY}
          onSave={(f) => save.mutate(f)}
          onCancel={() => {
            setShowForm(false);
            setEditing(null);
          }}
        />
      )}

      {isLoading ? (
        <div className="text-white/40 text-sm py-12 text-center">
          Loading...
        </div>
      ) : reviews.length === 0 ? (
        <div className="bg-[#111] border border-white/8 py-16 text-center text-white/30">
          No reviews yet. Add your first testimonial.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#111] border border-white/8 p-5 space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < rev.rating
                          ? "text-[#B8860B] fill-[#B8860B]"
                          : "text-white/20"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex gap-1">
                  <button
                    onClick={() => setEditing(rev)}
                    className="p-1 text-white/30 hover:text-white"
                  >
                    <Pencil className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => {
                      if (confirm("Delete?")) remove.mutate(rev.id);
                    }}
                    className="p-1 text-white/30 hover:text-red-400"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <p className="text-white/80 text-sm leading-relaxed italic">
                "{rev.comment}"
              </p>

              <div>
                <p className="text-white font-bold text-[12px]">
                  {rev.customer_name}
                </p>

                {rev.location && (
                  <p className="text-white/40 text-[10px]">
                    {rev.location}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}