"use client";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function HeroSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  } as const;

  const videoVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 1.5,
        ease: "easeIn",
      },
    },
  } as const;

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10 filter brightness-[0.69] grayscale invert scale-120 -translate-y-22"
        variants={videoVariants}
        initial="hidden"
        animate="visible"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </motion.video>

      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,#fff0_0%,var(--token-d4c0a0e6-8fba-45bc-8f6f-215e608cd0df,#fff)_100%)]"></div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={contentVariants}
          className="inline-block mb-6 sm:mb-8"
        >
          <Badge className="w-full text-sm sm:w-auto px-8 py-3 !shadow-[inset_0px_3px_0px_#fff] rounded-xl ">
            Nuopod Tech for Business
          </Badge>
        </motion.div>

        <motion.div
          variants={contentVariants}
          className="flex items-center justify-center gap-3 sm:gap-6 mb-6 sm:mb-8"
        >
          <h1 className="text-3xl leading-tight sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-[linear-gradient(0deg,rgb(0,0,0)_0%,rgb(255,255,255)_170%)] bg-clip-text text-transparent drop-shadow-lg px-4 font-[satoshi]">
            Intelligent Technology for <br></br>
            <span className=" bg-[linear-gradient(0deg,rgb(8,102,255)_0%,rgb(255,255,255)_170%)] bg-clip-text text-transparent">
              Ambitious Brands
            </span>{" "}
          </h1>
        </motion.div>

        <motion.p
          variants={contentVariants}
          className="text-sm sm:text-sm md:text-sm lg:text-base text-black mb-8 sm:mb-12 max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto font-light drop-shadow-md px-4"
        >
          We deliver custom websites, AI-powered automation, and data-driven
          marketing strategies to help you build, grow, and stand out from the
          competition.
        </motion.p>

        <motion.div
          variants={contentVariants}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
        >
          <Button
            variant="black"
            className="w-full text-sm font-light sm:w-auto px-8 sm:px-10 py-3 cursor-pointer"
          >
            Book A Call
          </Button>
          <Button
            variant="primary"
            className="w-full text-sm font-light sm:w-auto px-8 hadow-[inset_0px_3px_0px_#fff,0px_5px_5px_rgba(0,0,0,0.1)] py-3 cursor-pointer"
          >
            Our Process
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
