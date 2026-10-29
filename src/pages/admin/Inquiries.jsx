import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { InquiryService } from "@/services/InquiryService";
import { Plus, Pencil, Trash2, Phone } from "lucide-react";

const STATUSES = ["new", "contacted", "negotiating", "paid", "delivered", "lost"];

const STATUS_STYLES = {
  new: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  contacted: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
  negotiating: "bg-orange-500/15 text-orange-400 border-orange-500/30",
  paid: "bg-green-500/15 text-green-400 border-green-500/30",
  delivered: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  lost: "bg-red-500/15 text-red-400 border-red-500/30",
};

const EMPTY = {
  customer_name: "",
  phone_number: "",
  product_requested: "",
  status: "new",
  notes: "",
  source: "",
};

function InquiryForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState(initial);

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  return (
    <div className="bg-[#111] border border-[#B8860B]/30 p-6 space-y-4">
      <h3 className="text-white font-bold text-[13px] uppercase tracking-wider">
        {initial.id ? "Edit Inquiry" : "Add Inquiry"}
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="admin-label">Customer Name</label>
          <input
            className="admin-input"
            value={form.customer_name}
            onChange={(e) => set("customer_name", e.target.value)}
          />
        </div>

        <div>
          <label className="admin-label">Phone Number</label>
          <input
            className="admin-input"
            value={form.phone_number}
            onChange={(e) => set("phone_number", e.target.value)}
          />
        </div>

        <div>
          <label className="admin-label">Product Requested</label>
          <input
            className="admin-input"
            value={form.product_requested}
            onChange={(e) => set("product_requested", e.target.value)}
          />
        </div>

        <div>
          <label className="admin-label">Status</label>
          <select
            className="admin-input"
            value={form.status}
            onChange={(e) => set("status", e.target.value)}
          >
            {STATUSES.map((s) => (
              <option key={s} value={s}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="admin-label">Source</label>
          <input
            className="admin-input"
            value={form.source}
            onChange={(e) => set("source", e.target.value)}
          />
        </div>
      </div>

      <div>
        <label className="admin-label">Notes</label>
        <textarea
          className="admin-input min-h-[80px]"
          value={form.notes}
          onChange={(e) => set("notes", e.target.value)}
        />
      </div>

      <div className="flex gap-3 pt-2">
        <button
          onClick={() => onSave(form)}
          className="px-6 py-2.5 bg-[#B8860B] text-black text-[11px] font-black uppercase tracking-widest"
        >
          {initial.id ? "Update" : "Add Inquiry"}
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

export default function Inquiries() {
  const qc = useQueryClient();

  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);
  const [filterStatus, setFilterStatus] = useState("all");

  const { data: inquiries = [], isLoading } = useQuery({
    queryKey: ["inquiries"],
    queryFn: () => InquiryService.list(),
  });

  const save = useMutation({
    mutationFn: (form) =>
      form.id
        ? InquiryService.update(form.id, form)
        : InquiryService.create(form),

    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ["inquiries"],
      });

      setShowForm(false);
      setEditing(null);
    },
  });

  const remove = useMutation({
    mutationFn: (id) => InquiryService.delete(id),

    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ["inquiries"],
      });
    },
  });

  const updateStatus = useMutation({
    mutationFn: ({ id, status }) =>
      InquiryService.update(id, { status }),

    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ["inquiries"],
      });
    },
  });

  const filtered =
    filterStatus === "all"
      ? inquiries
      : inquiries.filter((i) => i.status === filterStatus);

  return (
    <div className="space-y-6">
      {/* Keep the remainder of your JSX exactly as it already is */}
    </div>
  );
}