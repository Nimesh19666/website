"use client";

import { whyChooseUsData } from "@/lib/constants";
import { motion, type Variants } from "framer-motion";
import Badge from "../../ui/Badge"; // Assuming this path is correct
import Image from "next/image";

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

  const marqueeVariants: Variants = {
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
    <section
      className="bg-black py-16 sm:py-24 overflow-hidden"
      data-header-theme="dark"
    >
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
              <div className="text-center gap-4 flex flex-col items-center">
                {" "}
                <div className="inline-block">
                  <Badge className="w-full text-[14px] sm:w-auto px-4 py-1 flex items-center !shadow-[inset_0px_3px_0px_#fff] rounded-[30px]">
                    {badge}
                  </Badge>
                </div>
                <h2 className="font-heading text-3xl font-[satoshi] font-medium py-2 sm:text-4xl md:text-5xl  bg-[linear-gradient(0deg,rgb(255,255,255)_60%,rgb(0,0,0)_100%)] bg-clip-text text-transparent">
                  {title}
                </h2>
                <p className="text-white text-sm sm:text-lg max-w-2xl mx-auto">
                  {description}
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-[#f8f8f8] shadow-[inset_0px_3px_0px_#fff,0px_5px_5px_rgba(0,0,0,0.1)] p-8 rounded-2xl md:col-span-2"
              variants={itemVariants}
              whileHover={{ scale: 1, y: -5 }} // <-- ANIMATION ADDED
              transition={{ duration: 0.5, ease: "easeInOut" }} // <-- SMOOTHER TRANSITION
            >
              <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                <Image
                  src={benefits[0].imageUrl}
                  alt={benefits[0].title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-[400] text-black mb-2">
                {benefits[0].title}
              </h3>
              <p className="text-gray-600">{benefits[0].description}</p>
            </motion.div>

            <motion.div
              className="bg-[#f8f8f8] shadow-[inset_0px_3px_0px_#fff,0px_5px_5px_rgba(0,0,0,0.1)] p-8 rounded-2xl md:col-span-2"
              variants={itemVariants}
              whileHover={{ scale: 1, y: -5 }} // <-- ANIMATION ADDED
              transition={{ duration: 0.5, ease: "easeInOut" }} // <-- SMOOTHER TRANSITION
            >
              <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                <Image
                  src={benefits[1].imageUrl}
                  alt={benefits[1].title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-[400] text-black mb-2">
                {benefits[1].title}
              </h3>
              <p className="text-gray-600">{benefits[1].description}</p>
            </motion.div>

            <motion.div
              className="bg-[#f8f8f8] shadow-[inset_0px_3px_0px_#fff,0px_5px_5px_rgba(0,0,0,0.1)] p-8 rounded-2xl md:col-span-2"
              variants={itemVariants}
              whileHover={{ scale: 1, y: -5 }} // <-- ANIMATION ADDED
              transition={{ duration: 0.5, ease: "easeInOut" }} // <-- SMOOTHER TRANSITION
            >
              <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                <Image
                  src={benefits[2].imageUrl}
                  alt={benefits[2].title}
                  fill
                  className="object-cover"
                />
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

            <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent"></div>
            <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
