import type { Metadata } from "next";
import AboutHeroSection from "@/components/sections/about/AboutHeroSection";
import AboutDescriptionSection from "@/components/sections/about/AboutDescriptionSection";
import TestimonialSection from "@/components/sections/shared/TestimonialSection";
import JourneySection from "@/components/sections/about/JourneySection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "We specialize in delivering tailored solutions that drive success across industries like finance, technology, and operations.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutDescriptionSection />
      <JourneySection />
      <TestimonialSection />
    </>
  );
}
