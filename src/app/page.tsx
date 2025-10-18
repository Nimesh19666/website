import HeroSection from "@/components/sections/home/HeroSection";
import WhyChooseUs from "@/components/sections/home/WhyChooseUs";
import FeaturesSection from "@/components/sections/home/FeaturesSection";
import ServicesSection from "@/components/sections/home/ServicesSection";
import ProcessSection from "@/components/sections/home/ProcessSection";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";
import ComparisonSection from "@/components/sections/home/ComparisonSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <FeaturesSection />

      <div id="process">
        <ProcessSection />
      </div>

      <ServicesSection />
      <TestimonialsSection />
      <ComparisonSection />
    </>
  );
}
