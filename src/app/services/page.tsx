import type { Metadata } from "next";
import ServicesHeroSection from "@/components/sections/services/ServicesHeroSection";
import ServicesGrid from "@/components/sections/services/ServicesGrid";
import TestimonialsSection from "@/components/sections/shared/TestimonialSection";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore our comprehensive services: Web Development, App Development, AI & Automation, Custom Software, Cloud & DevOps, and Data & Analytics.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHeroSection />
      <ServicesGrid />
      <TestimonialsSection />
    </>
  );
}
