"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { servicesGridData } from "@/lib/constants";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function ServicesGrid() {
  const { badge, title, services } = servicesGridData;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="bg-black text-white py-20 sm:py-28"
      data-header-theme="dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Badge className="!text-black text-xs w-max mb-4 !shadow-[inset_0px_3px_0px_#fff] border border-white/30 px-2 py-1 rounded-full">
          {badge}
        </Badge>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light font-[satoshi] mb-12 lg:pr-72">
          {title}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-[40%_1fr] gap-12 items-start">
          <div className="lg:sticky lg:top-28">
            <div className="space-y-2 border-t border-neutral-800">
              {services.map((service, index) => (
                <button
                  key={service.title}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left py-4 border-b border-neutral-800 transition-colors duration-300 ${
                    activeIndex === index
                      ? "text-white"
                      : "text-neutral-500 hover:text-white"
                  }`}
                >
                  <h3 className="text-xl sm:text-2xl font-light cursor-pointer">
                    {service.title}
                  </h3>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.p
                key={activeIndex}
                className="text-neutral-300 mt-8 mb-6 min-h-[6rem]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {services[activeIndex].description}
              </motion.p>
            </AnimatePresence>

            <Button
              variant="secondary"
              className="mt-2 !text-white !bg-white/10 !border-white/20 hover:!bg-white/20"
            >
              Learn more
            </Button>
          </div>

          <div className="w-full h-[30rem] sm:h-[40rem] lg:h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="relative w-full h-full rounded-2xl overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="relative w-full h-full"
                  initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
                  animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                  transition={{
                    duration: 1.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <motion.div
                    initial={{ filter: "blur(20px)", scale: 1.05 }}
                    animate={{ filter: "blur(0px)", scale: 1 }}
                    transition={{
                      duration: 1.8,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="w-full h-full"
                  >
                    <Image
                      src={services[activeIndex].imageUrl}
                      alt={services[activeIndex].title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
