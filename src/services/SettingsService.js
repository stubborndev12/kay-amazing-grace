import { supabase } from "@/supabase/client";

const TABLE = "site_settings";

export const SettingsService = {
  async get() {
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .limit(1)
    .maybeSingle();

  console.log("SITE SETTINGS DATA:", data);
  console.log("SITE SETTINGS ERROR:", error);

  if (error) {
    console.error(error);
  }

  return data;
},
  async save(settings) {
    // Check if a row already exists
    const { data: existing, error: existingError } = await supabase
  .from(TABLE)
  .select("id")
  .limit(1)
  .maybeSingle();

if (existingError) throw existingError;

    if (existing) {
      const { data, error } = await supabase
        .from(TABLE)
        .update({
          ...settings,
          updated_at: new Date().toISOString(),
        })
        .eq("id", existing.id)
        .select()
        .single();

      if (error) throw error;

      return data;
    }

    const { data, error } = await supabase
      .from(TABLE)
      .insert({
        ...settings,
      })
      .select()
      .single();

    if (error) throw error;

    return data;
  },
};