import React from "react";
import { motion } from "framer-motion";
import { Gem, BadgeCheck, MessageCircle, MapPin } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";

const reasons = [
  {
    icon: Gem,
    title: "Carefully Selected Pieces",
    description: "Every item is hand-inspected for quality, style, and durability before it reaches you."
  },
  {
    icon: BadgeCheck,
    title: "Affordable Quality",
    description: "Premium fashion doesn't have to be expensive. Get designer-level style at thrift prices."
  },
  {
    icon: MessageCircle,
    title: "Easy WhatsApp Ordering",
    description: "No complicated checkout. Simply tap, chat, and order directly through WhatsApp."
  },
  {
    icon: MapPin,
    title: "Trusted Aba-Based Store",
    description: "Rooted in Aba's thriving fashion hub with years of trusted customer relationships."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 max-w-7xl mx-auto">
      <SectionHeader
        label="The Promise"
        title="Why Customers Choose Us"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {reasons.map((reason, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center group"
          >
            <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center border border-accent/20 group-hover:border-accent group-hover:bg-accent/5 transition-all duration-300">
              <reason.icon className="w-5 h-5 text-accent" />
            </div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-2">
              {reason.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {reason.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}