import { supabase } from "@/supabase/client";

export const StorageService = {
  async uploadProductImage(file) {
    try {
      console.log("========== UPLOAD START ==========");
      console.log("Selected file:", file);

      const extension = file.name.split(".").pop();

      const filename = `${Date.now()}-${Math.random()
        .toString(36)
        .substring(2)}.${extension}`;

      console.log("Generated filename:", filename);

      const uploadResult = await supabase.storage
        .from("products")
        .upload(filename, file);

      console.log("Upload response:", uploadResult);

      if (uploadResult.error) {
        console.error("UPLOAD ERROR:", uploadResult.error);
        throw uploadResult.error;
      }

      const { data } = supabase.storage
        .from("products")
        .getPublicUrl(filename);

      console.log("Public URL:", data.publicUrl);
      console.log("========== UPLOAD SUCCESS ==========");

      return data.publicUrl;
    } catch (err) {
      console.error("StorageService upload failed:", err);
      throw err;
    }
  },

  async deleteProductImage(url) {
    try {
      if (!url) return;

      const filename = url.split("/products/")[1];

      if (!filename) return;

      const { data, error } = await supabase.storage
        .from("products")
        .remove([filename]);

      console.log("Delete response:", data);

      if (error) {
        console.error("Delete error:", error);
        throw error;
      }
    } catch (err) {
      console.error("StorageService delete failed:", err);
      throw err;
    }
  },
};