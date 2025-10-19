import type { Metadata } from "next";
import FAQSection from "@/components/sections/shared/FAQSection";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find quick answers to the most common questions about our services, development process, AI solutions, and data security.",
};

export default function FAQPage() {
  return (
    <>
      <FAQSection />
    </>
  );
}
