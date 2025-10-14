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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about-hero-section"
      data-header-theme="dark"
      className="bg-black text-white py-20 sm:py-28"
    >
      <motion.div
        className="mx-55 mt-10 px-4 sm:px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="inline-block mb-6">
          <Badge className=" !text-black !shadow-[inset_0px_3px_0px_#fff] border border-white/30 px-4 py-1 rounded-full">
            About Us
          </Badge>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-8xl font-[400] tracking-tight font-[satoshi] max-w-5xl mx-auto"
        >
          Your strategic partner for business success
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-[16px] text-neutral-300 mt-6 max-w-[32.25rem] mx-auto"
        >
          With years of experience across various industries, our dedicated team
          is committed to driving growth and operational excellence.
        </motion.p>

        {/* Image Grid */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6"
        >
          {/* Image 1 */}
          <div className="relative h-116 w-full rounded-2xl overflow-hidden">
            <Image
              src="/images/about-img2.png"
              alt="Professional team member with a tablet"
              fill
              className="object-cover"
            />
          </div>

          {/* Image 2 */}
          <div className="relative h-116 w-full rounded-2xl overflow-hidden">
            <Image
              src="/images/about-img1.png"
              alt="Team collaborating in a meeting"
              fill
              className="object-cover"
            />
          </div>

          {/* Image 3 */}
          <div className="relative h-116 w-full rounded-2xl overflow-hidden sm:col-span-2 lg:col-span-1">
            <Image
              src="/images/about-img3.png"
              alt="Specialist in a work vest"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
