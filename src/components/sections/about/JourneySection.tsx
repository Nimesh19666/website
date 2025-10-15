"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { journeyData } from "@/lib/constants";
import Badge from "@/components/ui/Badge";

export default function JourneySection() {
  const { badge, title, subtitle, events } = journeyData;
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // NEW LOGIC: More precise thresholds with offset
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const numEvents = events.length;

    // Calculate which segment we're in
    // Divide the progress into segments, each centered on a dot
    const segmentSize = 1 / (numEvents - 1);

    // Find the closest dot based on current scroll position
    let closestIndex = 0;
    let minDistance = Math.abs(latest - 0);

    for (let i = 0; i < numEvents; i++) {
      const dotPosition = i / (numEvents - 1);
      const distance = Math.abs(latest - dotPosition);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    }

    setActiveIndex(closestIndex);
  });

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-black">
      <div
        className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
        data-header-theme="dark"
      >
        <section className="w-full text-white py-20">
          <div className="container mx-auto px-4 sm:px-6">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <Badge className="!bg-white !text-black !shadow-[inset_0px_3px_0px_#fff] border border-white/30 px-5 py-2 rounded-full">
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
            <div className="relative max-w-[85rem] mx-auto">
              <div className="absolute top-2/2 -translate-y-1/2 left-0 w-full h-0.5 bg-neutral-700" />
              <motion.div
                className="absolute top-2/2 -translate-y-1/2 left-0 h-0.5 bg-blue-500"
                style={{ width: lineWidth }}
              />
              <div className="relative flex justify-between items-center">
                {events.map((event, index) => {
                  const isActive = index === activeIndex;
                  const isPassed = index < activeIndex;

                  return (
                    <div key={event.year} className="relative text-center">
                      <motion.span
                        className="text-5xl sm:text-7xl font-light font-[satoshi] block mb-8"
                        animate={{
                          color: isPassed || isActive ? "#3b82f6" : "#6b7280",
                          scale: isActive ? 1.05 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {event.year}
                      </motion.span>
                      <div className="absolute left-1/2 -translate-x-1/2 top-[calc(100%-0.3rem)] w-3 h-3 rounded-full">
                        <motion.div
                          className="w-full h-full rounded-full"
                          animate={{
                            backgroundColor:
                              isPassed || isActive ? "#3b82f6" : "#404040",
                            scale: isActive ? 1.8 : 1,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Description text below timeline */}
            <div className="mt-24 text-center max-w-2xl mx-auto h-20 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeIndex}
                  className="text-neutral-300 text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {events[activeIndex].description}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
