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
    <section className="bg-[#f8f8f8] py-16 sm:py-24">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={variants}
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-12 items-start">
          <div className="lg:col-span-1">
            <Badge className="w-fit text-sm px-4 py-1 flex items-center !shadow-[inset_0px_3px_0px_#fff] rounded-[30px]">
              {badge}
            </Badge>
          </div>

          <div className="lg:col-span-4">
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 leading-relaxed">
              {text}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
