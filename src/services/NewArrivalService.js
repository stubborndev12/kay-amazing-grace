import { supabase } from "@/supabase/client";

export const NewArrivalService = {
  async list() {
    const { data, error } = await supabase
      .from("new_arrivals")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;
    return data;
  },

  async create(arrival) {
    const { data, error } = await supabase
      .from("new_arrivals")
      .insert(arrival)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async update(id, updates) {
    const { data, error } = await supabase
      .from("new_arrivals")
      .update(updates)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async delete(id) {
    const { error } = await supabase
      .from("new_arrivals")
      .delete()
      .eq("id", id);

    if (error) throw error;
  },
};