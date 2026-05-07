import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

function ReviewCard({ review, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative p-6 bg-[#111] border border-white/8 hover:border-[#B8860B]/30 transition-all duration-300"
    >
      <Quote className="w-5 h-5 text-[#B8860B]/30 mb-4" />
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-3 h-3 ${i < review.rating ? "fill-[#B8860B] text-[#B8860B]" : "fill-white/10 text-white/10"}`}
          />
        ))}
      </div>
      <p className="text-white/60 text-sm leading-relaxed mb-5 italic">
        "{review.comment}"
      </p>
      <div>
        <p className="text-white text-sm font-bold">{review.customer_name}</p>
        {review.location && (
          <p className="text-[#B8860B]/60 text-[10px] uppercase tracking-wider mt-0.5">{review.location}</p>
        )}
      </div>
    </motion.div>
  );
}

export default function ReviewsSection({ reviews }) {
  if (!reviews || reviews.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="h-px w-8 bg-[#B8860B]" />
            <span className="text-[#B8860B] text-[10px] font-bold uppercase tracking-[0.32em]">
              Testimonials
            </span>
          </div>
          <h2 className="text-white font-black text-3xl md:text-4xl uppercase tracking-tight">
            What Our <span className="text-[#B8860B]">Buyers Say</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reviews.slice(0, 6).map((review, i) => (
            <ReviewCard key={review.id} review={review} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}