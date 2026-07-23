import { supabase } from "@/supabase/client";

export const SettingsService = {
  async list() {
    const { data, error } = await supabase
      .from("site_settings")
      .select("*")
      .order("key");

    if (error) throw error;

    return data;
  },

  async create(setting) {
    const { data, error } = await supabase
      .from("site_settings")
      .insert(setting)
      .select()
      .single();

    if (error) throw error;

    return data;
  },

  async update(id, updates) {
    const { data, error } = await supabase
      .from("site_settings")
      .update(updates)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;

    return data;
  },

  async delete(id) {
    const { error } = await supabase
      .from("site_settings")
      .delete()
      .eq("id", id);

    if (error) throw error;
  },
};