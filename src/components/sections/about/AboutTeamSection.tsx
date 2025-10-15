"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { aboutTeamData } from "@/lib/constants";
import Badge from "@/components/ui/Badge";

export default function AboutTeamSection() {
  const { badge, title, members } = aboutTeamData;

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="bg-[#f8f8f8] py-16 sm:py-24">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div variants={itemVariants} className="inline-block mb-4">
          <Badge className="w-full text-sm sm:w-auto px-4 py-1 !shadow-[inset_0px_3px_0px_#fff] rounded-[30px]">
            {badge}
          </Badge>
        </motion.div>
        <motion.h2
          variants={itemVariants}
          className="font-[satoshi] text-4xl font-medium sm:text-5xl mb-12 md:mb-16 bg-gradient-to-b from-black to-zinc-700 bg-clip-text text-transparent"
        >
          {title}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {members.map((member, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="relative w-full h-96 md:h-100 rounded-3xl overflow-hidden group">
                <Image
                  src={member.imageUrl}
                  alt={`Photo of ${member.name}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute text-left inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-xl font-medium text-white font-[satoshi]">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[#BFBEBE]">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
