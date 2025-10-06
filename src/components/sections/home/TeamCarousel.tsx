"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

interface TeamCarouselProps {
  members: TeamMember[];
}

export default function TeamCarousel({ members }: TeamCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + members.length) % members.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % members.length);
  };

  const visibleIndices = [
    currentIndex,
    (currentIndex + 1) % members.length,
    (currentIndex + 2) % members.length,
  ];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  const TeamCard = ({ member }: { member: TeamMember }) => (
    <div className="bg-[#f8f8f8] p-6 shadow-[inset_0px_3px_0px_#fff,0px_5px_5px_rgba(0,0,0,0.1)] rounded-2xl overflow-hidden">
      <div className="pb-4">
        <h3 className="text-xl  font-[400] font-[satoshi] text-black mb-1">
          {member.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4">{member.role}</p>

        <div className="flex gap-2">
          {member.socialLinks.twitter && (
            <a
              href={member.socialLinks.twitter}
              className="w-9 h-9 bg-[#f8f8f8] backdrop-blur-sm rounded-lg shadow-[inset_0px_3px_0px_#fff,0px_5px_5px_rgba(0,0,0,0.1)] flex items-center justify-center hover:bg-white/70 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4 text-gray-700" />
            </a>
          )}
          {member.socialLinks.linkedin && (
            <a
              href={member.socialLinks.linkedin}
              className="w-9 h-9 bg-[#f8f8f8] backdrop-blur-sm rounded-lg shadow-[inset_0px_3px_0px_#fff,0px_5px_5px_rgba(0,0,0,0.1)] flex items-center justify-center hover:bg-white/70 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-gray-700" />
            </a>
          )}
          {member.socialLinks.github && (
            <a
              href={member.socialLinks.github}
              className="w-9 h-9 bg-[#f8f8f8] backdrop-blur-sm rounded-lg shadow-[inset_0px_3px_0px_#fff,0px_5px_5px_rgba(0,0,0,0.1)] flex items-center justify-center hover:bg-white/70 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 text-gray-700" />
            </a>
          )}
        </div>
      </div>

      <div className="relative w-full h-64 bg-gray-100">
        <Image
          src={member.imageUrl}
          alt={member.name}
          fill
          className="object-cover rounded-2xl"
        />
      </div>
    </div>
  );

  return (
    <div className="relative">
      <button
        onClick={handlePrev}
        className="absolute left-0 md:left-15 top-1/2 -translate-y-1/2 translate-x-2 md:-translate-x-4 lg:-translate-x-12 z-10 w-8 h-8 bg-black rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors"
        aria-label="Previous team member"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-0 md:right-15 top-1/2 -translate-y-1/2 -translate-x-2 md:translate-x-4 lg:translate-x-12 z-10 w-8 h-8 bg-black rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors"
        aria-label="Next team member"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>

      <div className="relative overflow-hidden p-[10px]">
        <div className="absolute top-0 left-0 bottom-0 w-24 sm:w-12 bg-gradient-to-r from-[#f8f8f8] to-transparent z-10 pointer-events-none"></div>

        <div className="absolute top-0 right-0 bottom-0 w-24 sm:w-12 bg-gradient-to-l from-[#f8f8f8] to-transparent z-10 pointer-events-none"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mobile: Show only first card */}
          <div className="md:hidden relative h-[420px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={visibleIndices[0]}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full"
              >
                <TeamCard member={members[visibleIndices[0]]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Desktop: Show all 3 cards */}
          <div className="hidden md:contents">
            {visibleIndices.map((memberIndex, position) => (
              <div key={position} className="relative h-[420px]">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={`${memberIndex}-${position}`}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                    className="absolute w-full"
                  >
                    <TeamCard member={members[memberIndex]} />
                  </motion.div>
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
