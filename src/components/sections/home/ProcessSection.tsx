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

export default function ProcessSection() {
  const { badge, title, description, steps } = processSectionData;

  const itemVariantsUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const variantsFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const variantsFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="bg-[#f8f8f8] py-16 sm:py-24 overflow-hidden">
      {" "}
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="md:col-span-2"
              variants={itemVariantsUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="text-center mb-8 sm:mb-0">
                <div className="inline-block mb-4">
                  <Badge className="w-full text-[14px] sm:w-auto px-4 py-1 flex items-center !shadow-[inset_0px_3px_0px_#fff] rounded-[30px]">
                    {badge}
                  </Badge>
                </div>
                <h2 className="font-heading font-[satoshi] text-3xl font-medium sm:text-4xl md:text-5xl mb-4 bg-[linear-gradient(0deg,rgb(0,0,0)_0%,rgb(255,255,255)_170%)] bg-clip-text text-transparent">
                  {title}
                </h2>
                <p className="text-gray-600 text-sm sm:text-lg max-w-2xl mx-auto">
                  {description}
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-[#f8f8f8] p-8 shadow-[inset_0px_3px_0px_#fff,0px_5px_5px_rgba(0,0,0,0.1)] rounded-2xl overflow-hidden md:row-span-2 flex flex-col"
              variants={variantsFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="">
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 bg-[linear-gradient(180deg,rgb(0,0,0)_0%,rgb(255,255,255)_170%)] rounded-xl flex items-center justify-center">
                    {(() => {
                      const Icon = iconMap[steps[0].iconName];
                      return <Icon className="w-6 h-6 text-white" />;
                    })()}
                  </div>
                  <h3 className="text-xl font-[satoshi] font-[400] text-black">
                    {steps[0].title}
                  </h3>
                  <p className="text-gray-600">{steps[0].description}</p>
                  <hr className="border-t border-gray-200" />
                </div>
                <div className="flex items-center justify-between my-4">
                  <span className="text-black font-light text-5xl font-[poppins]">
                    {steps[0].number}
                  </span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="relative w-full flex-1 bg-gray-100 min-h-[200px]">
                <Image
                  src={steps[0].imageUrl}
                  alt={steps[0].title}
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </motion.div>

            <motion.div
              className="bg-[#f8f8f8] p-8 shadow-[inset_0px_3px_0px_#fff,0px_5px_5px_rgba(0,0,0,0.1)] rounded-2xl overflow-hidden"
              variants={variantsFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-[linear-gradient(180deg,rgb(0,0,0)_0%,rgb(255,255,255)_170%)] rounded-xl flex items-center justify-center">
                  {(() => {
                    const Icon = iconMap[steps[1].iconName];
                    return <Icon className="w-6 h-6 text-white" />;
                  })()}
                </div>
                <h3 className="text-xl font-[satoshi] font-[400] text-black">
                  {steps[1].title}
                </h3>
                <p className="text-gray-600">{steps[1].description}</p>
                <hr className="border-t border-gray-200" />
              </div>
              <div className="flex items-center justify-between my-4">
                <span className="text-black font-light text-5xl font-[poppins]">
                  {steps[1].number}
                </span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                </div>
              </div>
              <div className="relative w-full h-56 bg-gray-100">
                <Image
                  src={steps[1].imageUrl}
                  alt={steps[1].title}
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </motion.div>

            <motion.div
              className="bg-[#f8f8f8] p-8 shadow-[inset_0px_3px_0px_#fff,0px_5px_5px_rgba(0,0,0,0.1)] rounded-2xl overflow-hidden"
              variants={variantsFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-[linear-gradient(180deg,rgb(0,0,0)_0%,rgb(255,255,255)_170%)] rounded-xl flex items-center justify-center">
                  {(() => {
                    const Icon = iconMap[steps[2].iconName];
                    return <Icon className="w-6 h-6 text-white" />;
                  })()}
                </div>
                <h3 className="text-xl font-[satoshi] font-[400] text-black">
                  {steps[2].title}
                </h3>
                <p className="text-gray-600">{steps[2].description}</p>
                <hr className="border-t border-gray-200" />
              </div>
              <div className="flex items-center justify-between my-4">
                <span className="text-black font-light text-5xl font-[poppins]">
                  {steps[2].number}
                </span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                </div>
              </div>
              <div className="relative w-full h-56 bg-gray-100">
                <Image
                  src={steps[2].imageUrl}
                  alt={steps[2].title}
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
