import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageCircle, ArrowRight } from "lucide-react";
import { getWhatsAppGeneralUrl } from "@/lib/constants";

export default function HeroSection({ heroImage }) {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden bg-foreground">
      {/* Background image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src={heroImage}
          alt="Kay Amazing Grace Global Fashion"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/40 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-accent mb-4 md:mb-6">
            COLLECTION 2024
          </p>

          <h1 className="text-background">
            <span className="block text-4xl md:text-7xl lg:text-8xl font-body font-bold uppercase tracking-tight leading-[0.9]">
              Quality Thrift
            </span>
            <span className="block text-3xl md:text-6xl lg:text-7xl font-heading font-light italic mt-1 md:mt-2 text-accent">
              Carefully Selected
            </span>
          </h1>

          <p className="mt-4 md:mt-6 text-sm md:text-base text-background/60 max-w-lg leading-relaxed">
            Shop stylish, affordable, and durable thrift fashion from
            Kay Amazing Grace Global — available in Aba and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-background text-foreground text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-accent hover:text-foreground transition-all duration-300"
            >
              Shop Now
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href={getWhatsAppGeneralUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-accent/40 text-accent text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-accent hover:text-foreground transition-all duration-300"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Order on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}