"use client";

import { featuresSectionData } from "@/lib/constants";
import {
  Cpu,
  Workflow,
  BarChartBig,
  MessageSquareHeart,
  LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Badge from "../../ui/Badge";
import Button from "../../ui/Button";

const iconMap: Record<string, LucideIcon> = {
  Cpu,
  Workflow,
  BarChartBig,
  MessageSquareHeart,
};

export default function FeaturesSection() {
  const { badge, title, description, cards } = featuresSectionData;

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

  return (
    <section className="py-16 sm:py-24 bg-[#f8f8f8] overflow-hidden">
      {" "}
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block mb-4">
              <Badge className="w-full text-[14px] sm:w-auto px-4 py-1 flex items-center !shadow-[inset_0px_3px_0px_#fff] rounded-[30px]">
                {badge}
              </Badge>
            </div>
            <h2 className="font-heading font-[satoshi] text-4xl font-medium sm:text-4xl md:text-5xl mb-4 bg-[linear-gradient(0deg,rgb(0,0,0)_0%,rgb(255,255,255)_170%)] bg-clip-text text-transparent">
              {title}
            </h2>
            <p className="text-gray-600 text-sm sm:text-lg max-w-2xl mx-auto">
              {description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-10 gap-8">
            {cards.map((card, index) => {
              const Icon = iconMap[card.iconName];
              const colSpan = [
                "md:col-span-6",
                "md:col-span-4",
                "md:col-span-4",
                "md:col-span-6",
              ][index];

              const cardVariants =
                index % 2 === 0 ? variantsFromLeft : variantsFromRight;

              return (
                <motion.div
                  key={index}
                  className={`bg-[#f8f8f8] p-4 rounded-2xl shadow-[inset_0px_3px_0px_#fff,0px_5px_5px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col ${colSpan}`}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className="flex flex-col sm:flex-row flex-1">
                    {card.imageUrl && index === 0 && (
                      <div className="relative w-full sm:w-2/4 h-48 sm:h-auto">
                        <Image
                          src={card.imageUrl}
                          alt={card.title}
                          fill
                          className="object-cover rounded-2xl"
                        />
                      </div>
                    )}

                    <div className="p-8 flex-1">
                      <div className="w-16 h-16 bg-[linear-gradient(180deg,rgb(0,0,0)_0%,rgb(255,255,255)_170%)] rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-[satoshi] font-medium text-black mb-3">
                        {card.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {card.description}
                      </p>
                    </div>

                    {card.imageUrl && index === 3 && (
                      <div className="relative w-full sm:w-2/4 h-48 sm:h-auto">
                        <Image
                          src={card.imageUrl}
                          alt={card.title}
                          fill
                          className="object-cover rounded-2xl"
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}

            <motion.div
              className="md:col-span-10 flex justify-center items-center gap-4 mt-8"
              variants={itemVariantsUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Button variant="black">Get Started</Button>
              <Button variant="primary">See Our Services</Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
