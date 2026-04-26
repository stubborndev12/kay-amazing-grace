import React from "react";
import { motion } from "framer-motion";

export default function SectionHeader({ label, title, subtitle, align = "center" }) {
  const alignClass = align === "left" ? "text-left" : "text-center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-10 md:mb-14 ${alignClass}`}
    >
      {label && (
        <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-3">
          {label}
        </p>
      )}
      <h2 className="text-3xl md:text-5xl font-heading font-light italic text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}