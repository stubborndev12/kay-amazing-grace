import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
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

const EMPTY = { customer_name: "", phone_number: "", product_requested: "", status: "new", notes: "", source: "" };

function InquiryForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState(initial);
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  return (
    <div className="bg-[#111] border border-[#B8860B]/30 p-6 space-y-4">
      <h3 className="text-white font-bold text-[13px] uppercase tracking-wider">
        {initial.id ? "Edit Inquiry" : "Add Inquiry"}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="admin-label">Customer Name</label>
          <input className="admin-input" value={form.customer_name} onChange={e => set("customer_name", e.target.value)} placeholder="Full name" />
        </div>
        <div>
          <label className="admin-label">Phone Number</label>
          <input className="admin-input" value={form.phone_number} onChange={e => set("phone_number", e.target.value)} placeholder="+234..." />
        </div>
        <div>
          <label className="admin-label">Bale / Product Requested</label>
          <input className="admin-input" value={form.product_requested} onChange={e => set("product_requested", e.target.value)} placeholder="e.g. Mixed Ladies Bale" />
        </div>
        <div>
          <label className="admin-label">Status</label>
          <select className="admin-input" value={form.status} onChange={e => set("status", e.target.value)}>
            {STATUSES.map(s => <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>)}
          </select>
        </div>
        <div>
          <label className="admin-label">Source</label>
          <input className="admin-input" value={form.source} onChange={e => set("source", e.target.value)} placeholder="WhatsApp, Website, etc." />
        </div>
      </div>
      <div>
        <label className="admin-label">Notes</label>
        <textarea className="admin-input min-h-[80px]" value={form.notes} onChange={e => set("notes", e.target.value)} placeholder="Internal notes..." />
      </div>
      <div className="flex gap-3 pt-2">
        <button onClick={() => onSave(form)} className="px-6 py-2.5 bg-[#B8860B] text-black text-[11px] font-black uppercase tracking-widest hover:bg-[#D4A017] transition-colors">
          {initial.id ? "Update" : "Add Inquiry"}
        </button>
        <button onClick={onCancel} className="px-6 py-2.5 border border-white/15 text-white/60 text-[11px] font-bold uppercase tracking-widest hover:border-white/30 transition-colors">
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
    queryFn: () => base44.entities.Inquiry.list("-created_date"),
  });

  const save = useMutation({
    mutationFn: (form) => form.id ? base44.entities.Inquiry.update(form.id, form) : base44.entities.Inquiry.create(form),
    onSuccess: () => { qc.invalidateQueries(["inquiries"]); setShowForm(false); setEditing(null); },
  });

  const remove = useMutation({
    mutationFn: (id) => base44.entities.Inquiry.delete(id),
    onSuccess: () => qc.invalidateQueries(["inquiries"]),
  });

  const updateStatus = useMutation({
    mutationFn: ({ id, status }) => base44.entities.Inquiry.update(id, { status }),
    onSuccess: () => qc.invalidateQueries(["inquiries"]),
  });

  const filtered = filterStatus === "all" ? inquiries : inquiries.filter(i => i.status === filterStatus);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="h-px w-5 bg-[#B8860B]" />
            <span className="text-[#B8860B] text-[10px] font-bold uppercase tracking-[0.3em]">CRM</span>
          </div>
          <h1 className="text-white font-black text-2xl uppercase tracking-tight">Inquiries</h1>
        </div>
        <button onClick={() => { setEditing(null); setShowForm(true); }} className="flex items-center gap-2 px-5 py-2.5 bg-[#B8860B] text-black text-[11px] font-black uppercase tracking-widest hover:bg-[#D4A017] transition-colors">
          <Plus className="w-4 h-4" /> Add Inquiry
        </button>
      </div>

      {/* Status filters */}
      <div className="flex flex-wrap gap-2">
        {["all", ...STATUSES].map(s => (
          <button key={s} onClick={() => setFilterStatus(s)}
            className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider border transition-all ${filterStatus === s ? "bg-[#B8860B] border-[#B8860B] text-black" : "border-white/15 text-white/50 hover:border-[#B8860B]/40"}`}>
            {s} {s !== "all" && `(${inquiries.filter(i => i.status === s).length})`}
          </button>
        ))}
      </div>

      {(showForm || editing) && (
        <InquiryForm initial={editing || EMPTY} onSave={(f) => save.mutate(f)} onCancel={() => { setShowForm(false); setEditing(null); }} />
      )}

      {isLoading ? (
        <div className="text-white/40 text-sm py-12 text-center">Loading...</div>
      ) : filtered.length === 0 ? (
        <div className="bg-[#111] border border-white/8 py-16 text-center text-white/30">No inquiries found.</div>
      ) : (
        <div className="space-y-2">
          {filtered.map(inq => (
            <div key={inq.id} className="bg-[#111] border border-white/8 hover:border-white/15 transition-all px-5 py-4">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <p className="text-white font-bold text-sm">{inq.customer_name}</p>
                    <span className={`px-2 py-0.5 border text-[9px] font-bold uppercase tracking-wider ${STATUS_STYLES[inq.status]}`}>
                      {inq.status}
                    </span>
                  </div>
                  <p className="text-white/50 text-[12px]">
                    <Phone className="w-3 h-3 inline mr-1" />{inq.phone_number}
                    {inq.product_requested && <> · {inq.product_requested}</>}
                  </p>
                  {inq.notes && <p className="text-white/30 text-[11px] mt-1 italic">{inq.notes}</p>}
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <select
                    value={inq.status}
                    onChange={e => updateStatus.mutate({ id: inq.id, status: e.target.value })}
                    className="bg-[#1a1a1a] border border-white/10 text-white/70 text-[10px] px-2 py-1.5 uppercase font-bold"
                  >
                    {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <button onClick={() => setEditing(inq)} className="p-1.5 text-white/30 hover:text-white transition-colors"><Pencil className="w-4 h-4" /></button>
                  <button onClick={() => { if (confirm("Delete?")) remove.mutate(inq.id); }} className="p-1.5 text-white/30 hover:text-red-400 transition-colors"><Trash2 className="w-4 h-4" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}