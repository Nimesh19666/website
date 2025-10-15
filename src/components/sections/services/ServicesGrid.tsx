// src/components/sections/services/ServicesGrid.tsx

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
      <div className="mx-[230px] px-4 sm:px-6">
        <Badge className="!bg-white/10 !text-white w-max !shadow-none border border-white/30 px-5 py-2 rounded-full mb-6">
          {badge}
        </Badge>
        <h2 className="text-4xl pr-[20rem] sm:text-6xl font-light font-[satoshi] mb-12">
          {title}
        </h2>
        <div className="grid grid-cols-[40%_60%] gap-12 items-start">
          {/* Left Column: Text Content and Service List */}
          <div className="lg:sticky top-28">
            {/* Service Tabs/List */}
            <div className="space-y-4 border-t border-neutral-800">
              {services.map((service, index) => (
                <button
                  key={service.title}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left py-4 border-b border-neutral-800 transition-colors duration-300 ${
                    activeIndex === index ? "text-white" : "text-neutral-500"
                  }`}
                >
                  <h3 className="text-2xl font-light cursor-pointer">
                    {service.title}
                  </h3>
                </button>
              ))}
            </div>

            {/* Description that changes based on active service */}
            <AnimatePresence mode="wait">
              <motion.p
                key={activeIndex}
                className="text-white mt-8 mb-6"
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

          {/* Right Column: Image with curtain drop animation */}
          <div className="w-full h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="relative w-full h-full rounded-2xl overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Curtain drop animation wrapper */}
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
