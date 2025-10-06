"use client";

import { whyChooseUsData } from "@/lib/constants";
import { LineChart, TrendingUp, RefreshCw, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import Badge from "../../ui/Badge";

const iconMap: Record<string, LucideIcon> = {
  LineChart,
  TrendingUp,
  RefreshCw,
};

const UIPill = ({
  className = "",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => (
  <div
    className={`bg-white/50 backdrop-blur-sm rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.05)] ${className}`}
  >
    {children}
  </div>
);

export default function WhyChooseUs() {
  const { badge, title, description, benefits, features } = whyChooseUsData;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const marqueeVariants = {
    animate: {
      x: [0, "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
  } as const;

  return (
    <section className="bg-[#f8f8f8] py-16 sm:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div className="md:col-span-6" variants={itemVariants}>
              <div className="text-center mb-8">
                {" "}
                <div className="inline-block mb-4">
                  <Badge className="w-full text-[14px] sm:w-auto px-4 py-1 flex items-center !shadow-[inset_0px_3px_0px_#fff] rounded-[30px]">
                    {badge}
                  </Badge>
                </div>
                <h2 className="font-heading text-3xl font-[satoshi] font-medium sm:text-4xl md:text-5xl mb-4 bg-[linear-gradient(0deg,rgb(0,0,0)_0%,rgb(255,255,255)_170%)] bg-clip-text text-transparent">
                  {title}
                </h2>
                <p className="text-gray-600 text-sm sm:text-lg max-w-2xl mx-auto">
                  {description}
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-[#f8f8f8] shadow-[inset_0px_3px_0px_#fff,0px_5px_5px_rgba(0,0,0,0.1)] p-8 rounded-2xl md:col-span-2"
              variants={itemVariants}
            >
              <div className="h-48 bg-gray-100 rounded-lg p-4 flex justify-between items-start mb-6">
                <UIPill className="w-1/3 h-12" />
                <div className="flex flex-col items-end gap-2">
                  <UIPill className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-[400] text-black mb-2">
                {benefits[0].title}
              </h3>
              <p className="text-gray-600">{benefits[0].description}</p>
            </motion.div>

            <motion.div
              className="bg-[#f8f8f8] shadow-[inset_0px_3px_0px_#fff,0px_5px_5px_rgba(0,0,0,0.1)] p-8 rounded-2xl md:col-span-2"
              variants={itemVariants}
            >
              <div className="h-48 bg-gray-100 rounded-lg p-4 flex flex-col justify-between mb-6">
                <div className="flex justify-between items-start">
                  <UIPill className="w-8 h-8 rounded-full" />
                  <UIPill className="w-24 h-8 !bg-gray-200" />
                </div>
                <UIPill className="w-full h-20" />
              </div>
              <h3 className="text-xl font-[400] text-black mb-2">
                {benefits[1].title}
              </h3>
              <p className="text-gray-600">{benefits[1].description}</p>
            </motion.div>

            <motion.div
              className="bg-[#f8f8f8] shadow-[inset_0px_3px_0px_#fff,0px_5px_5px_rgba(0,0,0,0.1)] p-8 rounded-2xl md:col-span-2"
              variants={itemVariants}
            >
              <div className="h-48 bg-gray-100 rounded-lg p-4 grid grid-cols-3 grid-rows-3 gap-2 mb-6">
                <UIPill className="col-start-2 row-start-1" />
                <UIPill className="col-start-1 row-start-2 w-12 h-12 flex items-center justify-center"></UIPill>
                <UIPill className="col-start-3 row-start-2" />
                <UIPill className="col-start-2 row-start-3" />
              </div>
              <h3 className="text-xl font-[400] text-black mb-2">
                {benefits[2].title}
              </h3>
              <p className="text-gray-600">{benefits[2].description}</p>
            </motion.div>
          </motion.div>

          <div className="relative w-full py-[10px] overflow-hidden">
            <motion.div
              className="flex flex-nowrap min-w-full shrink-0 gap-6"
              variants={marqueeVariants}
              animate="animate"
            >
              {features.concat(features).map((feature, index) => (
                <span
                  key={index}
                  className="bg-[#f8f8f8] px-6 py-3 rounded-full shadow-[inset_0px_3px_0px_#fff,0px_5px_5px_rgba(0,0,0,0.1)] text-sm font-light text-black whitespace-nowrap"
                >
                  {feature}
                </span>
              ))}
            </motion.div>

            <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-[#f8f8f8] to-transparent"></div>
            <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-[#f8f8f8] to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
