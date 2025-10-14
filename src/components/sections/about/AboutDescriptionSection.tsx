// src/components/sections/about/AboutDescriptionSection.tsx

"use client";

import { motion, Variants } from "framer-motion";
import { aboutDescriptionData } from "@/lib/constants";
import Badge from "@/components/ui/Badge";

export default function AboutDescriptionSection() {
  const { badge, text } = aboutDescriptionData;

  const variants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-[#f8f8f8] py-16 sm:py-12">
      <motion.div
        className=" mx-[200px] px-10 sm:px-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={variants}
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Badge on the left */}
          <div className="lg:col-span-1">
            <Badge className="w-fit text-[14px] px-4 py-1 flex items-center !shadow-[inset_0px_3px_0px_#fff] rounded-[30px]">
              {badge}
            </Badge>
          </div>

          {/* Text on the right */}
          <div className="lg:col-span-4">
            <p className="text-xl sm:text-3xl text-gray-700 leading-relaxed">
              {text}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
