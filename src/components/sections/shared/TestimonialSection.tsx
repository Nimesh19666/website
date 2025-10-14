// src/components/sections/about/TestimonialSection.tsx

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { aboutTestimonialsData } from "@/lib/constants";
import Badge from "@/components/ui/Badge";

export default function TestimonialSection() {
  const { badge, testimonials } = aboutTestimonialsData;
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="bg-white py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {/* Image */}
                <div className="relative w-82 h-82 rounded-2xl overflow-hidden mb-8">
                  <Image
                    src={activeTestimonial.imageUrl}
                    alt={activeTestimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Quote */}
                <blockquote className="text-2xl sm:text-3xl text-left font-light text-gray-800 leading-snug">
                  &ldquo;{activeTestimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="mt-8 text-left">
                  <p className="text-lg font-semibold font-[satoshi] text-black">
                    {activeTestimonial.name}
                  </p>
                  <p className="text-gray-500">{activeTestimonial.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-start items-start gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
