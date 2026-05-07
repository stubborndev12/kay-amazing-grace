import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import { Save, RefreshCw } from "lucide-react";

const DEFAULT_SETTINGS = [
  { key: "hero_headline", label: "Hero Headline", value: "Premium Okirika & Thrift Bale Supplier", setting_type: "text" },
  { key: "hero_subtext", label: "Hero Subtext", value: "We supply carefully selected thrift clothing bales for resellers, retailers, and wholesale buyers across Nigeria.", setting_type: "text" },
  { key: "whatsapp_number", label: "WhatsApp Number", value: "2348035239489", setting_type: "whatsapp" },
  { key: "announcement_banner", label: "Announcement Banner (leave empty to hide)", value: "", setting_type: "text" },
  { key: "hero_image_url", label: "Hero Background Image URL", value: "", setting_type: "image" },
];

export default function Settings() {
  const qc = useQueryClient();
  const [localValues, setLocalValues] = useState({});
  const [saved, setSaved] = useState(false);

  const { data: settings = [], isLoading } = useQuery({
    queryKey: ["site_settings"],
    queryFn: () => base44.entities.SiteSettings.list(),
    onSuccess: (data) => {
      const vals = {};
      data.forEach(s => { vals[s.key] = s.value; });
      setLocalValues(vals);
    }
  });

  const getSettingValue = (key) => {
    if (localValues[key] !== undefined) return localValues[key];
    const s = settings.find(s => s.key === key);
    return s ? s.value : (DEFAULT_SETTINGS.find(d => d.key === key)?.value || "");
  };

  const saveAll = useMutation({
    mutationFn: async () => {
      for (const def of DEFAULT_SETTINGS) {
        const existing = settings.find(s => s.key === def.key);
        const value = localValues[def.key] ?? def.value;
        if (existing) {
          await base44.entities.SiteSettings.update(existing.id, { value });
        } else {
          await base44.entities.SiteSettings.create({ key: def.key, value, label: def.label, setting_type: def.setting_type });
        }
      }
    },
    onSuccess: () => {
      qc.invalidateQueries(["site_settings"]);
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    },
  });

  if (isLoading) return <div className="text-white/40 text-sm py-12 text-center">Loading...</div>;

  return (
    <div className="space-y-7 max-w-2xl">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <div className="h-px w-5 bg-[#B8860B]" />
          <span className="text-[#B8860B] text-[10px] font-bold uppercase tracking-[0.3em]">Manage</span>
        </div>
        <h1 className="text-white font-black text-2xl uppercase tracking-tight">Site Settings</h1>
        <p className="text-white/40 text-sm mt-1">Update your website content without touching any code.</p>
      </div>

      <div className="space-y-5">
        {DEFAULT_SETTINGS.map(def => (
          <div key={def.key}>
            <label className="admin-label">{def.label}</label>
            {def.key === "hero_subtext" || def.key === "announcement_banner" ? (
              <textarea
                className="admin-input min-h-[80px]"
                value={getSettingValue(def.key)}
                onChange={e => setLocalValues(v => ({ ...v, [def.key]: e.target.value }))}
                placeholder={def.value || `Enter ${def.label.toLowerCase()}...`}
              />
            ) : (
              <input
                className="admin-input"
                value={getSettingValue(def.key)}
                onChange={e => setLocalValues(v => ({ ...v, [def.key]: e.target.value }))}
                placeholder={def.value || `Enter ${def.label.toLowerCase()}...`}
              />
            )}
            {def.setting_type === "whatsapp" && (
              <p className="text-white/30 text-[10px] mt-1">Enter digits only — no + sign. e.g. 2348035239489</p>
            )}
            {def.setting_type === "image" && getSettingValue(def.key) && (
              <img src={getSettingValue(def.key)} alt="" className="h-20 mt-2 border border-white/10 object-cover" />
            )}
          </div>
        ))}
      </div>

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