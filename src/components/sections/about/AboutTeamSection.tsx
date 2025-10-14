// src/components/sections/about/AboutTeamSection.tsx

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { aboutTeamData } from "@/lib/constants"; // <-- IMPORTING DATA
import Badge from "@/components/ui/Badge";

export default function AboutTeamSection() {
  const { badge, title, members } = aboutTeamData; // <-- Using data from constants

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="bg-[#f8f8f8] py-16 sm:py-12">
      <motion.div
        className="mx-30 px-4 sm:px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="inline-block mb-4">
          <Badge className="w-full text-sm sm:w-auto px-4 py-1 !shadow-[inset_0px_3px_0px_#fff] rounded-[30px]">
            {badge}
          </Badge>
        </motion.div>
        <motion.h2
          variants={itemVariants}
          className="font-[satoshi] text-4xl font-medium sm:text-5xl mb-16 bg-[linear-gradient(0deg,rgb(0,0,0)_0%,rgb(255,255,255)_170%)] bg-clip-text text-transparent"
        >
          {title}
        </motion.h2>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto">
          {members.map((member, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="relative w-full h-100 rounded-3xl  overflow-hidden group">
                <Image
                  src={member.imageUrl}
                  alt={`Photo of ${member.name}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute text-left inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-xl font-medium text-white font-[satoshi]">
                    {member.name}
                  </h3>
                  <p className="text-s text-[#BFBEBE]">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
