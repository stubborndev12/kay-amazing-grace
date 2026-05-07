import React from "react";
import { motion } from "framer-motion";
import { SOCIAL_LINKS, InstagramIcon, TikTokIcon } from "@/lib/social.jsx";

const PREVIEW_CARDS = [
  {
    platform: "instagram",
    icon: InstagramIcon,
    color: "#E1306C",
    label: "@kayamazingthrift",
    text: "New bale just landed 🔥 Mixed & Korea bales available now!",
    tag: "NEW ARRIVAL",
    img: "https://media.base44.com/images/public/69edd82e4a975eaa5f121f62/744c46cc8_generated_image.png",
    href: SOCIAL_LINKS.instagram,
  },
  {
    platform: "tiktok",
    icon: TikTokIcon,
    color: "#fff",
    label: "@kay.amazingthrift",
    text: "Watch us open a full ladies bale — see the quality yourself 👀",
    tag: "BALE OPENING",
    img: "https://media.base44.com/images/public/69edd82e4a975eaa5f121f62/a7966e01b_generated_image.png",
    href: SOCIAL_LINKS.tiktok,
  },
  {
    platform: "instagram",
    icon: InstagramIcon,
    color: "#E1306C",
    label: "@kayamazingthrift",
    text: "Wholesale buyers love us — see real reviews and bale quality checks.",
    tag: "CUSTOMER PROOF",
    img: "https://media.base44.com/images/public/69edd82e4a975eaa5f121f62/4056a9b19_generated_image.png",
    href: SOCIAL_LINKS.instagram,
  },
];

export default function SocialProofSection() {
  return (
    <section className="py-16 md:py-20 bg-[#060606] border-t border-[#B8860B]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-10 bg-[#B8860B]" />
            <span className="text-[#B8860B] text-[10px] font-bold uppercase tracking-[0.32em]">
              Live on Social Media
            </span>
            <div className="h-px w-10 bg-[#B8860B]" />
          </div>
          <h2 className="text-white font-black text-2xl md:text-3xl uppercase tracking-tight">
            Follow Our Latest <span className="text-[#B8860B]">Bale Openings</span>
          </h2>
          <p className="text-white/40 text-sm mt-2 max-w-md mx-auto">
            Watch real bale openings, new arrivals, and customer proofs on our social media.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {PREVIEW_CARDS.map((card, i) => (
            <motion.a
              key={i}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden border border-white/8 hover:border-[#B8860B]/40 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={card.img}
                  alt={card.tag}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />

                {/* Platform badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-1 bg-black/60 backdrop-blur-sm border border-white/10">
                  <card.icon className="w-3 h-3" style={{ color: card.color }} />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-white/70">{card.platform}</span>
                </div>

                {/* Tag */}
                <span className="absolute top-3 right-3 px-2 py-0.5 bg-[#B8860B] text-black text-[8px] font-black uppercase tracking-widest">
                  {card.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-4 bg-[#0f0f0f]">
                <p className="text-[#B8860B] text-[10px] font-bold mb-1.5">{card.label}</p>
                <p className="text-white/60 text-[11px] leading-relaxed">{card.text}</p>
                <div className="mt-3 flex items-center gap-1.5 text-[#B8860B] text-[10px] font-bold uppercase tracking-wider">
                  <span>View Post</span>
                  <span>→</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Follow CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#E1306C]/40 text-white/70 text-[10px] font-bold uppercase tracking-widest hover:border-[#E1306C] hover:text-[#E1306C] transition-all"
          >
            <InstagramIcon className="w-3.5 h-3.5" />
            Follow on Instagram
          </a>
          <a
            href={SOCIAL_LINKS.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/15 text-white/70 text-[10px] font-bold uppercase tracking-widest hover:border-white/50 hover:text-white transition-all"
          >
            <TikTokIcon className="w-3.5 h-3.5" />
            Follow on TikTok
          </a>
        </motion.div>
      </div>
    </section>
  );
}