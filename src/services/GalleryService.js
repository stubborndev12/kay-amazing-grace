import { supabase } from "@/supabase/client";

export const GalleryService = {
  async list() {
    const { data, error } = await supabase
      .from("gallery")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;
    return data;
  },

  async create(item) {
    const { data, error } = await supabase
      .from("gallery")
      .insert(item)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async update(id, updates) {
    const { data, error } = await supabase
      .from("gallery")
      .update(updates)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async delete(id) {
    const { error } = await supabase
      .from("gallery")
      .delete()
      .eq("id", id);

    if (error) throw error;
  },
};