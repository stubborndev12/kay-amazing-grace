import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Tag, MapPin, MessageCircle, Package, Star } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Carefully Selected Quality",
    description:
      "Every bale and individual piece is hand-inspected before sale. No guesswork — only Grade A+ thrift wear.",
  },
  {
    icon: Tag,
    title: "Prices for Retail & Bulk",
    description:
      "Whether you're buying one outfit or a full bale for resale, our pricing is fair, transparent, and competitive.",
  },
  {
    icon: MapPin,
    title: "Trusted Aba Supply Hub",
    description:
      "We're based in Aba — Nigeria's #1 thrift and textile hub. Real location, real stock, real people.",
  },
  {
    icon: MessageCircle,
    title: "Fast WhatsApp Response",
    description:
      "No complicated forms. Chat with us directly on WhatsApp and get your order confirmed within minutes.",
  },
  {
    icon: Package,
    title: "Bales for Resellers",
    description:
      "We supply Chinese bales, sorted bales, and mixed bags — ideal for market traders and resale businesses.",
  },
  {
    icon: Star,
    title: "Years of Trusted Service",
    description:
      "Built on repeat customers and word-of-mouth referrals. Our reputation speaks for itself.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#B8860B] font-semibold mb-3">
            The Kay Amazing Grace Difference
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Why Buyers Choose Us
          </h2>
          <p className="mt-3 text-sm text-gray-400 max-w-lg mx-auto leading-relaxed">
            Quality thrift wear and bales you can trust — whether you're buying for yourself or for resale.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="group flex gap-4 p-5 md:p-6 bg-white/5 border border-white/8 rounded-sm hover:bg-white/8 hover:border-[#B8860B]/40 transition-all duration-300"
            >
              <div className="shrink-0 w-10 h-10 flex items-center justify-center rounded-sm bg-[#B8860B]/15 group-hover:bg-[#B8860B]/25 transition-colors">
                <reason.icon className="w-5 h-5 text-[#B8860B]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white mb-1.5">{reason.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
        >
          <p className="text-sm text-gray-400">
            Ready to place an order?
          </p>
          <a
            href="https://wa.me/2348035239489?text=Hello%20Kay%20Amazing%20Grace%20Global%2C%20I%27m%20interested%20in%20your%20products"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-[#20BD5A] transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}