import React, { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import { Save, RefreshCw, Globe, Phone, Megaphone, Image, Share2, Search } from "lucide-react";

const SETTING_GROUPS = [
  {
    icon: Globe,
    title: "Homepage Content",
    description: "Text that appears on your homepage hero section",
    fields: [
      { key: "hero_headline", label: "Main Headline", value: "Quality Okirika & Thrift Bales", type: "text" },
      { key: "hero_subtext", label: "Subheading", value: "Available for Resellers & Bulk Buyers", type: "text" },
      { key: "hero_body", label: "Body Text", value: "Contact us on WhatsApp for current bale availability and pricing. We supply across Nigeria from Aba.", type: "textarea" },
    ]
  },
  {
    icon: Image,
    title: "Images & Media",
    description: "Update hero background and warehouse images. Paste a direct image URL.",
    fields: [
      { key: "hero_image_url", label: "Hero Background Image URL", value: "", type: "image" },
      { key: "warehouse_image_url", label: "Warehouse / Right Panel Image URL", value: "", type: "image" },
    ]
  },
  {
    icon: Phone,
    title: "Contact & WhatsApp",
    description: "Your WhatsApp number and business contact info",
    fields: [
      { key: "whatsapp_number", label: "WhatsApp Number (digits only, no +)", value: "2348035239489", type: "whatsapp" },
      { key: "phone_number", label: "Phone Number (display)", value: "08035239489", type: "text" },
      { key: "business_address", label: "Business Address", value: "97/98 Ndoki by East off Ngwa Road, Aba, Abia State", type: "textarea" },
      { key: "business_hours", label: "Business Hours", value: "Monday – Saturday: 8am – 6pm", type: "text" },
      { key: "business_email", label: "Email Address", value: "kayamazingraceglobal@gmail.com", type: "text" },
    ]
  },
  {
    icon: Share2,
    title: "Social Media Links",
    description: "Links to your social media pages",
    fields: [
      { key: "instagram_url", label: "Instagram URL", value: "https://www.instagram.com/kayamazingthrift", type: "url" },
      { key: "tiktok_url", label: "TikTok URL", value: "https://tiktok.com/@kay.amazingthrift", type: "url" },
      { key: "facebook_url", label: "Facebook URL", value: "https://www.facebook.com/profile.php?id=61565261921559", type: "url" },
    ]
  },
  {
    icon: Megaphone,
    title: "Announcement Banner",
    description: "Show a banner message at the top of your website. Leave empty to hide it.",
    fields: [
      { key: "announcement_banner", label: "Banner Message", value: "", type: "textarea" },
    ]
  },
  {
    icon: Search,
    title: "SEO Settings",
    description: "Help Google find your website. These settings appear in search results.",
    fields: [
      { key: "seo_title", label: "Page Title (shown in Google)", value: "Kay Amazing Grace Global | Quality Okirika & Thrift Bale Supplier in Aba", type: "text" },
      { key: "seo_description", label: "Meta Description (shown under title in Google)", value: "Kay Amazing Grace Global is a trusted wholesale okirika and thrift bale supplier in Aba, Nigeria. We supply quality thrift clothing bales for resellers, boutique owners, and bulk buyers.", type: "textarea" },
      { key: "seo_keywords", label: "Keywords (comma-separated)", value: "okirika bale supplier Aba, thrift bale Nigeria, Korea bale Nigeria, mixed bale supplier Aba", type: "textarea" },
    ]
  },
];

// Flatten for DB operations
const ALL_FIELDS = SETTING_GROUPS.flatMap(g => g.fields);

export default function Settings() {
  const qc = useQueryClient();
  const [localValues, setLocalValues] = useState({});
  const [saved, setSaved] = useState(false);

  const { data: settings = [], isLoading } = useQuery({
    queryKey: ["site_settings"],
    queryFn: () => base44.entities.SiteSettings.list(),
  });

  // Sync DB values into local state once loaded
  useEffect(() => {
    if (settings.length > 0) {
      const vals = {};
      settings.forEach(s => { vals[s.key] = s.value; });
      setLocalValues(vals);
    }
  }, [settings]);

  const getValue = (key, defaultVal) => {
    if (localValues[key] !== undefined) return localValues[key];
    const s = settings.find(s => s.key === key);
    return s ? s.value : (defaultVal || "");
  };

  const set = (key, val) => setLocalValues(v => ({ ...v, [key]: val }));

  const saveAll = useMutation({
    mutationFn: async () => {
      for (const field of ALL_FIELDS) {
        const existing = settings.find(s => s.key === field.key);
        const value = localValues[field.key] ?? field.value;
        if (existing) {
          await base44.entities.SiteSettings.update(existing.id, { value });
        } else {
          await base44.entities.SiteSettings.create({ key: field.key, value, label: field.label, setting_type: field.type });
        }
      }
    },
    onSuccess: () => {
      qc.invalidateQueries(["site_settings"]);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    },
  });

  if (isLoading) return <div className="text-white/40 text-sm py-12 text-center">Loading settings...</div>;

  return (
    <div className="space-y-8 max-w-2xl">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <div className="h-px w-5 bg-[#B8860B]" />
          <span className="text-[#B8860B] text-[10px] font-bold uppercase tracking-[0.3em]">Manage</span>
        </div>
        <h1 className="text-white font-black text-2xl uppercase tracking-tight">Site Settings</h1>
        <p className="text-white/40 text-sm mt-1">Update your website without touching any code.</p>
      </div>

      {/* Setting Groups */}
      {SETTING_GROUPS.map(group => {
        const GroupIcon = group.icon;
        return (
          <div key={group.title} className="border border-white/8 bg-[#0f0f0f]">
            <div className="flex items-start gap-3 px-5 py-4 border-b border-white/8">
              <GroupIcon className="w-4 h-4 text-[#B8860B] mt-0.5 shrink-0" />
              <div>
                <p className="text-white font-bold text-sm">{group.title}</p>
                <p className="text-white/35 text-[11px] mt-0.5">{group.description}</p>
              </div>
            </div>
            <div className="p-5 space-y-4">
              {group.fields.map(field => (
                <div key={field.key}>
                  <label className="admin-label">{field.label}</label>
                  {field.type === "textarea" ? (
                    <textarea
                      className="admin-input min-h-[70px]"
                      value={getValue(field.key, field.value)}
                      onChange={e => set(field.key, e.target.value)}
                      placeholder={field.value || `Enter ${field.label.toLowerCase()}...`}
                    />
                  ) : (
                    <input
                      className="admin-input"
                      type={field.type === "url" ? "url" : "text"}
                      value={getValue(field.key, field.value)}
                      onChange={e => set(field.key, e.target.value)}
                      placeholder={field.value || `Enter ${field.label.toLowerCase()}...`}
                    />
                  )}
                  {field.type === "whatsapp" && (
                    <p className="text-white/30 text-[10px] mt-1">Digits only — no + sign. e.g. 2348035239489</p>
                  )}
                  {field.type === "image" && getValue(field.key, field.value) && (
                    <img src={getValue(field.key, field.value)} alt="" className="h-20 mt-2 border border-white/10 object-cover" />
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {/* Save Button */}
      <button
        onClick={() => saveAll.mutate()}
        disabled={saveAll.isPending}
        className="flex items-center gap-2 px-8 py-3 bg-[#B8860B] text-black text-[11px] font-black uppercase tracking-widest hover:bg-[#D4A017] transition-colors disabled:opacity-60"
      >
        {saveAll.isPending ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
        {saved ? "Saved!" : "Save All Settings"}
      </button>

      {saved && <p className="text-green-400 text-sm font-semibold">✓ Settings saved successfully.</p>}
    </div>
  );
}