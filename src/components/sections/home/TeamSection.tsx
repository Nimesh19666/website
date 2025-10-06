"use client";

import { teamSectionData } from "@/lib/constants";
import { motion } from "framer-motion";
import Badge from "../../ui/Badge";
import TeamCarousel from "./TeamCarousel";

export default function TeamSection() {
  const { badge, title, description, members } = teamSectionData;

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

  return (
    <section className="bg-[#f8f8f8] py-16 sm:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12 sm:mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div className="inline-block mb-4" variants={itemVariants}>
              <Badge className="w-full text-[14px] sm:w-auto px-4 py-1 flex items-center !shadow-[inset_0px_3px_0px_#fff] rounded-[30px]">
                {badge}
              </Badge>
            </motion.div>
            <motion.h2
              className="font-heading font-[satoshi] text-3xl font-medium sm:text-4xl md:text-5xl mb-4 bg-[linear-gradient(0deg,rgb(0,0,0)_0%,rgb(255,255,255)_170%)] bg-clip-text text-transparent"
              variants={itemVariants}
            >
              {title}
            </motion.h2>
            <motion.p
              className="text-gray-600 text-sm sm:text-lg max-w-2xl mx-auto"
              variants={itemVariants}
            >
              {description}
            </motion.p>
          </motion.div>

          {/* Team Carousel */}
          <TeamCarousel members={members} />
        </div>
      </div>
    </section>
  );
}
