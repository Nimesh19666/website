"use client";

import { testimonialsSectionData } from "@/lib/constants";
import { motion, Variants } from "framer-motion";
import Badge from "../../ui/Badge";
import Image from "next/image";

type AnimatedWordsProps = {
  segments: {
    text: string;
    className?: string;
  }[];
  containerClassName?: string;
};

const textContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const wordVariants = {
  hidden: {
    opacity: 0.2,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
} as const;

const AnimatedWords = ({
  segments,
  containerClassName,
}: AnimatedWordsProps) => {
  return (
    <motion.p className={containerClassName} variants={textContainerVariants}>
      {segments.map((segment, segmentIndex) => (
        <span key={segmentIndex} className={segment.className}>
          {segment.text.split(" ").map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block">
              <motion.span variants={wordVariants} className="inline-block">
                {word}
              </motion.span>
              <span className="inline-block">&nbsp;</span>
            </span>
          ))}
        </span>
      ))}
    </motion.p>
  );
};

export default function TestimonialsSection() {
  const { badge, title, description, featured, testimonials, stats } =
    testimonialsSectionData;

  const featuredQuote = [
    { text: "Their" },
    { text: "AI-driven", className: "text-gray-400 font-light" },
    { text: "approach helped us reach the right audience and" },
    { text: "grow faster", className: "text-gray-400 font-light" },
    {
      text: "with smarter insights—streamlining our strategy, improving engagement, and",
    },
    { text: "delivering results", className: "text-gray-400 font-light" },
    { text: "we couldn`t achieve before." },
  ];

  const itemVariantsUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const variantsFromLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };
  const variantsFromRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      className="bg-black py-16 sm:py-24 overflow-hidden"
      data-header-theme="dark"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            variants={itemVariantsUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="inline-block mb-4">
              <Badge className="w-full text-[14px] sm:w-auto px-4 py-1 flex items-center !shadow-[inset_0px_3px_0px_#fff] rounded-[30px]">
                {badge}
              </Badge>
            </div>
            <h2 className="font-heading text-3xl font-[satoshi] font-medium sm:text-4xl md:text-5xl mb-4 bg-[linear-gradient(0deg,rgb(255,255,255)_0%,rgb(0,0,0)_190%)]  bg-clip-text text-transparent">
              {title}
            </h2>
            <p className="text-white text-sm sm:text-lg max-w-2xl mx-auto">
              {description}
            </p>
          </motion.div>

          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <motion.div
                className="bg-[#f8f8f8] shadow-[inset_0px_3px_0px_#fff,0px_5px_5px_rgba(0,0,0,0.1)] rounded-2xl p-8 flex flex-col justify-center"
                variants={variantsFromLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                <AnimatedWords
                  segments={featuredQuote}
                  containerClassName="text-lg sm:text-xl text-black leading-relaxed"
                />
              </motion.div>

              <motion.div
                className="relative p-8 h-80 md:h-auto bg-gray-100 rounded-2xl overflow-hidden shadow-[inset_0px_3px_0px_#fff,0px_5px_5px_rgba(0,0,0,0.1)]"
                variants={variantsFromRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                <Image
                  src={featured.imageUrl}
                  alt="Featured testimonial"
                  fill
                  className="object-cover bg-center"
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-[#f8f8f8] shadow-[inset_0px_3px_0px_#fff,0px_5px_5px_rgba(0,0,0,0.1)] rounded-2xl p-8"
                  variants={itemVariantsUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-black font-[400] text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500 text-xs">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={itemVariantsUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <h3 className="text-4xl font-[satoshi] sm:text-2xl font-light text-white mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-white text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
