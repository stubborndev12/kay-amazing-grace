import React from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { getWhatsAppGeneralUrl } from "@/lib/constants";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={getWhatsAppGeneralUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="w-5 h-5" />
      <span className="text-sm font-medium hidden sm:inline">Order Now</span>
    </motion.a>
  );
}