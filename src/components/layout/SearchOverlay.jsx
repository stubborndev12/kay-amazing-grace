import React, { useState, useEffect, useRef } from "react";
import { X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function SearchOverlay({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
    setQuery("");
  }, [isOpen]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/shop?search=${encodeURIComponent(query.trim())}`);
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl flex items-start justify-center pt-32"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-foreground/50 hover:text-foreground transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="w-full max-w-2xl px-6"
          >
            <p className="text-[11px] uppercase tracking-[0.25em] text-accent mb-6 text-center">
              Search Our Collection
            </p>
            <form onSubmit={handleSearch} className="relative">
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="What are you looking for?"
                className="w-full bg-transparent border-b-2 border-foreground/10 focus:border-accent text-2xl md:text-4xl font-heading font-light text-center py-4 outline-none transition-colors placeholder:text-foreground/20"
              />
              <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2">
                <Search className="w-5 h-5 text-foreground/30" />
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}