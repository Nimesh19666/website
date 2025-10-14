// src/components/sections/about/JourneySection.tsx

"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { journeyData } from "@/lib/constants";
import Badge from "@/components/ui/Badge";
import { useState } from "react";

export default function JourneySection() {
  const { badge, title, subtitle, events } = journeyData;
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track scroll progress through the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform scroll progress to line width (0% to 100%)
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Update active index based on scroll progress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const newIndex = Math.min(
      events.length - 1,
      Math.floor(latest * events.length)
    );
    setActiveIndex(newIndex);
  });

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-black">
      {/* Sticky container that stays fixed while scrolling */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <section className="w-full text-white py-20">
          <div className="container mx-auto px-4 sm:px-6">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <Badge className="!bg-white !text-balck !shadow-[inset_0px_3px_0px_#fff] border border-white/30 px-5 py-2 rounded-full">
                  {badge}
                </Badge>
              </div>
              <h2 className="text-5xl sm:text-5xl font-light font-[satoshi]">
                {title}
              </h2>
              <p className="text-neutral-400 mt-4 max-w-xl mx-auto">
                {subtitle}
              </p>
            </div>

            {/* Timeline */}
            <div className="relative max-w-[80rem] mx-auto">
              {/* Grey background line */}
              <div className="absolute top-4/4 -translate-y-1/2 left-0 w-full h-0.5 bg-neutral-700" />

              {/* Animated blue progress line */}
              <motion.div
                className="absolute top-4/4 -translate-y-1/2 left-0 h-0.5 bg-blue-500"
                style={{ width: lineWidth }}
              />

              {/* Years and dots */}
              <div className="relative flex justify-between items-center">
                {events.map((event, index) => {
                  const isActive = index === activeIndex;
                  const isPassed = index < activeIndex;

                  return (
                    <div key={event.year} className="relative text-center">
                      {/* Year label */}
                      <motion.span
                        className="text-3xl sm:text-7xl font-light font-[satoshi] block mb-8"
                        animate={{
                          color: isPassed || isActive ? "#3b82f6" : "#6b7280",
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {event.year}
                      </motion.span>

                      {/* Dot */}
                      <div className="absolute left-1/2 -translate-x-1/2 top-[calc(100%-0.3rem)] w-3 h-3 rounded-full">
                        <motion.div
                          className="w-full h-full rounded-full"
                          animate={{
                            backgroundColor:
                              isPassed || isActive ? "#3b82f6" : "#404040",
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Description text below timeline */}
            <motion.div className="mt-24 text-center max-w-2xl mx-auto">
              <motion.p
                key={activeIndex}
                className="text-neutral-300 text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {events[activeIndex].description}
              </motion.p>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
