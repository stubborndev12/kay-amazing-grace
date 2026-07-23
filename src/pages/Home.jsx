import React from "react";
import { useQuery } from "@tanstack/react-query";

import HeroSection from "../components/home/HeroSection";
import BaleCategories from "../components/home/BaleCategories";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ReviewsSection from "../components/home/ReviewsSection";
import CTABanner from "../components/home/CTABanner";
import SocialProofSection from "../components/home/SocialProofSection";
import SEOLinksSection from "../components/home/SEOLinksSection";

import { ReviewService } from "@/services/ReviewService";

export default function Home() {
  const { data: reviews = [] } = useQuery({
    queryKey: ["reviews"],
    queryFn: () => ReviewService.list(6),
  });

  return (
    <div className="bg-[#080808]">
      <HeroSection />
      <BaleCategories />
      <WhyChooseUs />
      <ReviewsSection reviews={reviews} />
      <SocialProofSection />
      <CTABanner />
      <SEOLinksSection />
    </div>
  );
}