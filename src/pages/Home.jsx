import React from "react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import HeroSection from "../components/home/HeroSection";
import CategoriesSection from "../components/home/CategoriesSection";
import FeaturedProducts from "../components/home/FeaturedProducts";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ReviewsSection from "../components/home/ReviewsSection";
import CTABanner from "../components/home/CTABanner";

const HERO_IMAGE = "https://media.base44.com/images/public/69edd82e4a975eaa5f121f62/9a0a334ce_generated_image.png";

const CATEGORY_IMAGES = {
  mens_wear: "https://media.base44.com/images/public/69edd82e4a975eaa5f121f62/2fd0d0773_generated_69834796.png",
  ladies_wear: "https://media.base44.com/images/public/69edd82e4a975eaa5f121f62/eafc86937_generated_a6ca36d9.png",
  childrens_wear: "https://media.base44.com/images/public/69edd82e4a975eaa5f121f62/b0cb5c505_generated_8c2dd06d.png",
  corporate_wear: "https://media.base44.com/images/public/69edd82e4a975eaa5f121f62/ad10a51a2_generated_cd6e5205.png",
  casual_wear: "https://media.base44.com/images/public/69edd82e4a975eaa5f121f62/af50153c1_generated_7c63b1f4.png",
  sportswear: "https://media.base44.com/images/public/69edd82e4a975eaa5f121f62/42b710f2d_generated_ebd768b7.png",
  shoes_slippers: "https://media.base44.com/images/public/69edd82e4a975eaa5f121f62/3c6548004_generated_4762442a.png",
  bags_accessories: "https://media.base44.com/images/public/69edd82e4a975eaa5f121f62/13cc15067_generated_11236227.png",
  underwear_nightwear: "https://media.base44.com/images/public/69edd82e4a975eaa5f121f62/293ae9123_generated_dce2d5df.png",
};

export default function Home() {
  const { data: products } = useQuery({
    queryKey: ["featured-products"],
    queryFn: () => base44.entities.Product.filter({ is_featured: true }, "-created_date", 8),
    initialData: [],
  });

  const { data: reviews } = useQuery({
    queryKey: ["reviews"],
    queryFn: () => base44.entities.Review.list("-created_date", 6),
    initialData: [],
  });

  return (
    <div>
      <HeroSection heroImage={HERO_IMAGE} />
      <CategoriesSection categoryImages={CATEGORY_IMAGES} />
      <FeaturedProducts products={products} />
      <WhyChooseUs />
      <ReviewsSection reviews={reviews} />
      <CTABanner />
    </div>
  );
}