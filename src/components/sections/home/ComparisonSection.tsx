"use client";

import { comparisonSectionData } from "@/lib/constants";
import { motion } from "framer-motion";
import Badge from "../../ui/Badge";
import Button from "../../ui/Button";

export default function ComparisonSection() {
  const { badge, title, description, leftColumn, rightColumn } =
    comparisonSectionData;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const leftCardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const rightCardVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="bg-[#f8f8f8] py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center flex gap-4 flex-col items-center mb-12">
            <div className="inline-block">
              <Badge className="w-full text-[14px] sm:w-auto px-4 py-1 flex items-center !shadow-[inset_0px_3px_0px_#fff] rounded-[30px]">
                {badge}
              </Badge>
            </div>
            <h2 className="font-heading text-3xl font-[satoshi] font-medium sm:text-4xl md:text-5xl py-2 bg-[linear-gradient(0deg,rgb(0,0,0)_60%,rgb(255,255,255)_100%)] bg-clip-text text-transparent">
              {title}
            </h2>
            <p className="text-gray-600 text-sm sm:text-lg max-w-2xl mx-auto">
              {description}
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div
              className="bg-[#f8f8f8] shadow-[inset_0px_3px_0px_#fff,0px_5px_5px_rgba(0,0,0,0.1)] rounded-2xl p-8 flex flex-col"
              variants={leftCardVariants}
            >
              <h3 className="text-2xl font-[satoshi] sm:text-3xl font-[400] text-black mb-6 text-center">
                {leftColumn.heading}
              </h3>

              <div className="border-t-2 border-dotted border-gray-300 mb-6"></div>

              <ul className="space-y-4 flex-1 mb-6">
                {leftColumn.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700 list-none
"
                  >
                    <span className="text-xs sm:text-xs">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant="black" className="w-full py-4 text-xs">
                {leftColumn.ctaText}
              </Button>
            </motion.div>

            <motion.div
              className="bg-[#f8f8f8] h-auto shadow-[inset_0px_3px_0px_#fff,0px_5px_5px_rgba(0,0,0,0.1)] rounded-2xl p-8 flex flex-col"
              variants={rightCardVariants}
            >
              <h3 className="text-2xl font-[satoshi] sm:text-3xl font-[400] text-black mb-6 text-center">
                {rightColumn.heading}
              </h3>

              <div className="border-t-2 border-dotted border-gray-300 mb-6"></div>

              <ul className="space-y-4 flex-1">
                {rightColumn.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-500"
                  >
                    <span className="text-sm sm:text-xs">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
