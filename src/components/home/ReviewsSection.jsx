import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";

function ReviewCard({ review, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative p-6 md:p-8 bg-card border border-border"
    >
      <Quote className="w-6 h-6 text-accent/30 mb-4" />
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-3.5 h-3.5 ${
              i < review.rating
                ? "fill-accent text-accent"
                : "fill-muted text-muted"
            }`}
          />
        ))}
      </div>
      <p className="text-sm text-foreground/80 leading-relaxed mb-6 italic font-heading text-lg">
        "{review.comment}"
      </p>
      <div>
        <p className="text-sm font-medium">{review.customer_name}</p>
        {review.location && (
          <p className="text-xs text-muted-foreground mt-0.5">{review.location}</p>
        )}
      </div>
    </motion.div>
  );
}

export default function ReviewsSection({ reviews }) {
  if (!reviews || reviews.length === 0) return null;

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 max-w-7xl mx-auto">
      <SectionHeader
        label="Testimonials"
        title="What Our Customers Say"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {reviews.slice(0, 6).map((review, i) => (
          <ReviewCard key={review.id} review={review} index={i} />
        ))}
      </div>
    </section>
  );
}