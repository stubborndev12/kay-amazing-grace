import React from "react";
import { motion } from "framer-motion";
import { Gem, Users, Globe, Heart } from "lucide-react";
import { LOGO_URL } from "@/lib/constants";
import CTABanner from "../components/home/CTABanner";

const values = [
  { icon: Gem, title: "Quality First", desc: "Every piece is hand-inspected for quality, ensuring you get the best thrift fashion available." },
  { icon: Users, title: "Customer Focused", desc: "We build lasting relationships with our customers through trust, honesty, and exceptional service." },
  { icon: Globe, title: "Aba to the World", desc: "Rooted in Aba's famous fashion hub, we bring the best of Nigerian thrift fashion to everyone." },
  { icon: Heart, title: "Sustainable Fashion", desc: "By choosing thrift, you're making an eco-friendly choice that's good for your wallet and the planet." },
];

export default function About() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-4">Our Story</p>
          <h1 className="text-4xl md:text-6xl font-heading font-light italic mb-6">
            Redefining Thrift Fashion
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Kay Amazing Grace Global was born from a simple belief: everyone deserves access to
            quality fashion without breaking the bank. Based in the heart of Aba, Abia State —
            Nigeria's bustling fashion capital — we carefully curate premium thrift wear that
            combines style, durability, and incredible value.
          </p>
        </motion.div>
      </section>

      <div className="gold-hairline max-w-7xl mx-auto" />

      {/* Values */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-4">The Promise</p>
            <h2 className="text-3xl md:text-4xl font-heading font-light italic mb-6">
              Quality, Style & Value
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Each item in our collection goes through a rigorous selection process.
              We inspect every garment for fabric quality, stitching integrity, and
              overall condition — ensuring that what reaches you is nothing short of excellent.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              From men's corporate wear to children's casual outfits, from ladies'
              silk blouses to premium sportswear — our range covers every fashion need
              at prices that make quality accessible to all.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 border border-border"
              >
                <v.icon className="w-5 h-5 text-accent mb-3" />
                <h3 className="text-sm font-medium mb-2">{v.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand */}
      <section className="bg-foreground py-16 md:py-24">
        <div className="px-4 sm:px-6 max-w-3xl mx-auto text-center">
          <img
            src={LOGO_URL}
            alt="Kay Amazing Grace Global"
            className="h-20 w-auto object-contain mx-auto brightness-0 invert mb-8"
          />
          <blockquote className="text-xl md:text-2xl font-heading italic text-background/80 leading-relaxed">
            "We don't just sell thrift clothes — we curate wardrobes.
            Every piece tells a story of quality, style, and value."
          </blockquote>
          <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-accent">
            Kay Amazing Grace Global
          </p>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}