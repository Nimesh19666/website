// src/app/about/page.tsx

import AboutHeroSection from "@/components/sections/about/AboutHeroSection";
import AboutDescriptionSection from "@/components/sections/about/AboutDescriptionSection";
// import AboutTeamSection from "@/components/sections/about/AboutTeamSection";
import TestimonialSection from "@/components/sections/shared/TestimonialSection";
import JourneySection from "@/components/sections/about/JourneySection";
export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutDescriptionSection />
      {/* <AboutTeamSection /> */}
      <JourneySection />
      <TestimonialSection />
    </>
  );
}
