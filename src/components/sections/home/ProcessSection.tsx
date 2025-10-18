"use client";

import { processSectionData } from "@/lib/constants";
import { motion } from "framer-motion";
import Badge from "../../ui/Badge";
import Image from "next/image";
import { Search, Rocket, Settings, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Search,
  Rocket,
  Settings,
};

const StepCard = ({
  step,
  growClass,
}: {
  step: (typeof processSectionData)["steps"][0];
  growClass: string;
}) => {
  const Icon = iconMap[step.iconName];

  const activeIndex = parseInt(step.number, 10) - 1;
  const totalDots = 4;

  return (
    <motion.div
      className={`bg-white p-8 shadow-[0px_5px_15px_rgba(0,0,0,0.05)] rounded-2xl overflow-hidden flex flex-col ${growClass}`}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
    >
      <div className="flex flex-col gap-4">
        <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
          {Icon && <Icon className="w-6 h-6 text-white" />}
        </div>
        <h3 className="text-xl font-[satoshi] font-[400] text-black">
          {step.title}
        </h3>
        <p className="text-gray-600">{step.description}</p>
        <hr className="border-t border-gray-200" />
      </div>
      <div className="flex items-center justify-between my-4">
        <span className="text-[#0866ff] font-light text-5xl font-[poppins]">
          {step.number}
        </span>

        <div className="flex gap-1.5">
          {[...Array(totalDots)].map((_, index) => (
            <div
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === activeIndex ? "bg-[#0866ff]" : "bg-gray-200"
              }`}
            ></div>
          ))}
        </div>
      </div>
      <div className="relative w-full h-56 mt-auto bg-gray-100">
        <Image
          src={step.imageUrl}
          alt={step.title}
          fill
          className="object-cover rounded-xl"
        />
      </div>
    </motion.div>
  );
};

export default function ProcessSection() {
  const { badge, title, description, steps } = processSectionData;

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const variantsFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    },
  };

  const variantsFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      className="bg-black py-16 sm:py-24 overflow-hidden"
      data-header-theme="dark"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-6 flex gap-4 flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={titleVariants}
          >
            <div className="inline-block">
              <Badge className="w-full text-[14px] sm:w-auto px-4 py-1 flex items-center !shadow-[inset_0px_3px_0px_#fff] rounded-[30px]">
                {badge}
              </Badge>
            </div>
            <h2 className="font-heading font-[satoshi] text-3xl py-2 font-medium sm:text-4xl md:text-5xl bg-[linear-gradient(0deg,rgb(255,255,255)_60%,rgb(0,0,0)_100%)] b bg-clip-text text-transparent">
              {title}
            </h2>
            <p className="text-white text-sm sm:text-lg max-w-2xl mx-auto">
              {description}
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div
              className="flex flex-col gap-8 w-full md:w-1/2"
              variants={variantsFromLeft}
            >
              {steps[0] && <StepCard step={steps[0]} growClass="h-[55%]" />}
              {steps[1] && <StepCard step={steps[1]} growClass="h-[45%]" />}
            </motion.div>

            <motion.div
              className="flex flex-col gap-8 w-full md:w-1/2"
              variants={variantsFromRight}
            >
              {steps[2] && <StepCard step={steps[2]} growClass="h-[45%]" />}
              {steps[3] && <StepCard step={steps[3]} growClass="h-[55%]" />}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
