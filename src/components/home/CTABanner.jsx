import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getWhatsAppGeneralUrl } from "@/lib/constants";

export default function CTABanner() {
  return (
    <section className="relative py-20 md:py-28 bg-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-heading italic text-background whitespace-nowrap select-none">
          KA
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 text-center px-4 max-w-3xl mx-auto"
      >
        <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-4">
          Start Shopping
        </p>
        <h2 className="text-3xl md:text-5xl font-heading font-light italic text-background mb-4">
          Your Next Favourite Piece Awaits
        </h2>
        <p className="text-sm text-background/50 mb-8 max-w-md mx-auto">
          Browse our curated collection or chat with us directly on WhatsApp for a personalized shopping experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/shop"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent text-foreground text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-accent/80 transition-colors"
          >
            Browse Collection
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <a
            href={getWhatsAppGeneralUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-background/20 text-background text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-background/10 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Chat on WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}