// src/app/services/page.tsx

import ServicesHeroSection from "@/components/sections/services/ServicesHeroSection";
import ServicesGrid from "@/components/sections/services/ServicesGrid"; // <-- IMPORT IT
import TestimonialsSection from "@/components/sections/shared/TestimonialSection";
export default function ServicesPage() {
  return (
    <>
      <ServicesHeroSection />
      <ServicesGrid /> {/* <-- ADD IT HERE */}
      <TestimonialsSection />
    </>
  );
}
