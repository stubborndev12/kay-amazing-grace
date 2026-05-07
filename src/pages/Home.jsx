import React from "react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import HeroSection from "../components/home/HeroSection";
import BaleCategories from "../components/home/BaleCategories";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ReviewsSection from "../components/home/ReviewsSection";
import CTABanner from "../components/home/CTABanner";

export default function Home() {
  const { data: reviews } = useQuery({
    queryKey: ["reviews"],
    queryFn: () => base44.entities.Review.list("-created_date", 6),
    initialData: [],
  });

  return (
    <div className="bg-[#080808]">
      <HeroSection />
      <BaleCategories />
      <WhyChooseUs />
      <ReviewsSection reviews={reviews} />
      <CTABanner />
    </div>
  );
}