"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Badge from "@/components/ui/Badge";

export default function AboutHeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const gridVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageTopVariants: Variants = {
    hidden: { opacity: 0, y: -50, scaleY: 0.8, originY: 0 },
    visible: {
      opacity: 1,
      y: 0,
      scaleY: 1,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 100,
      },
    },
  };

  const imageBottomVariants: Variants = {
    hidden: { opacity: 0, y: 50, scaleY: 0.8, originY: 1 },
    visible: {
      opacity: 1,
      y: 0,
      scaleY: 1,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="about-hero-section"
      data-header-theme="dark"
      className="bg-black text-white py-28 md:py-28"
    >
      <motion.div
        className="mx-auto max-w-7xl px-4 sm:px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="inline-block mb-6">
          <Badge className=" !text-black text-xs !shadow-[inset_0px_3px_0px_#fff] border border-white/30 px-2 py-1 rounded-full">
            About Us
          </Badge>
        </motion.div>
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-7xl font-[400] tracking-tight font-[satoshi] max-w-5xl mx-auto"
        >
          Your strategic partner for business success
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-base text-neutral-300 mt-6 max-w-2xl mx-auto"
        >
          With years of experience across various industries, our dedicated team
          is committed to driving growth and operational excellence.
        </motion.p>

        <motion.div
          variants={gridVariants}
          className="mt-16 lg:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <motion.div
            variants={imageTopVariants}
            className="relative h-96 sm:h-116 w-full rounded-2xl overflow-hidden"
          >
            <Image
              src="/images/about/about-hero-1.png"
              alt="Professional team member with a tablet"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            variants={imageBottomVariants}
            className="relative h-96 sm:h-116 w-full rounded-2xl overflow-hidden"
          >
            <Image
              src="/images/about/about-hero-2.png"
              alt="Team collaborating in a meeting"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            variants={imageTopVariants}
            className="relative h-96 sm:h-116 w-full rounded-2xl overflow-hidden sm:col-span-2 lg:col-span-1"
          >
            <Image
              src="/images/about/about-hero-3.png"
              alt="Specialist in a work vest"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
