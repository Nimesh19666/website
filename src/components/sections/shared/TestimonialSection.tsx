"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { aboutTestimonialsData } from "@/lib/constants";

export default function TestimonialSection() {
  const { testimonials } = aboutTestimonialsData;
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] md:gap-12 lg:gap-20 items-center">
          <div className="relative w-40 h-40 md:w-full md:h-[260px] rounded-2xl overflow-hidden mb-8 md:mb-0 mx-auto md:mx-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <Image
                  src={activeTestimonial.imageUrl}
                  alt={activeTestimonial.name}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative text-center md:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <blockquote className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-800 leading-snug">
                  &ldquo;{activeTestimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-8">
                  <p className="text-lg font-semibold font-[satoshi] text-black">
                    {activeTestimonial.name}
                  </p>
                  <p className="text-gray-500">{activeTestimonial.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center md:justify-start items-center gap-4 mt-8">
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
      </div>
    </section>
  );
}
