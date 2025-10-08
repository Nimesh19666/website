"use client";

import { useState } from "react";
import { pricingSectionData } from "@/lib/constants";
import { motion } from "framer-motion";
import Badge from "../../ui/Badge";
import Button from "../../ui/Button";

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const { badge, title, description, plans, footerText } = pricingSectionData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="bg-[#f8f8f8] py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block mb-4">
              <Badge className="w-full text-[14px] sm:w-auto px-4 py-1 flex items-center !shadow-[inset_0px_3px_0px_#fff] rounded-[30px]">
                {badge}
              </Badge>
            </div>
            <h2 className="font-heading text-3xl font-[satoshi] font-medium sm:text-4xl md:text-5xl mb-4 bg-[linear-gradient(0deg,rgb(0,0,0)_0%,rgb(255,255,255)_170%)] bg-clip-text text-transparent">
              {title}
            </h2>
            <p className="text-gray-600 text-sm sm:text-lg max-w-2xl mx-auto">
              {description}
            </p>
          </div>

          {/* Monthly/Yearly Toggle */}
          <div className="flex justify-center items-center mb-12">
            <div className="bg-white rounded-full p-1 flex items-center gap-3 shadow-sm">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-6 py-2 text-base font-normal transition-all duration-200 relative ${
                  !isYearly ? "text-gray-900" : "text-gray-400"
                }`}
              >
                Monthly
                {!isYearly && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black rounded-full"></div>
                )}
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-6 py-2 text-base font-normal transition-all duration-200 ${
                  isYearly ? "text-gray-900" : "text-gray-400"
                }`}
              >
                Yearly
              </button>
              <div className="bg-white text-gray-600 text-sm font-normal px-4 py-2 rounded-full border border-gray-200">
                30% off
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                className={`rounded-2xl p-8 flex flex-col h-full ${
                  plan.isPopular
                    ? "bg-black shadow-[0px_5px_5px_rgba(0,0,0,0.2)]"
                    : "bg-[#f8f8f8] shadow-[inset_0px_3px_0px_#fff,0px_5px_5px_rgba(0,0,0,0.1)]"
                }`}
                variants={cardVariants}
              >
                {plan.isPopular && (
                  <div className="text-center mb-4">
                    <span className="bg-white text-black text-xs font-bold px-3 py-1 rounded-full">
                      Popular
                    </span>
                  </div>
                )}

                <h3
                  className={`text-xl font-[satoshi] font-bold mb-2 ${
                    plan.isPopular ? "text-white" : "text-black"
                  }`}
                >
                  {plan.name}
                </h3>

                <p
                  className={`text-4xl sm:text-5xl font-bold mb-4 ${
                    plan.isPopular ? "text-white" : "text-black"
                  }`}
                >
                  ${isYearly ? Math.round(plan.price * 12 * 0.7) : plan.price}
                  <span
                    className={`text-base font-medium ${
                      plan.isPopular ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    /{isYearly ? "year" : "month"}
                  </span>
                </p>

                <p
                  className={`text-sm mb-6 flex-grow ${
                    plan.isPopular ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {plan.description}
                </p>

                <Button
                  variant={plan.isPopular ? "primary" : "black"}
                  className="w-full py-3 mb-8"
                >
                  {plan.ctaText}
                </Button>

                <div
                  className={`border-t mb-6 ${
                    plan.isPopular ? "border-gray-700" : "border-gray-200"
                  }`}
                ></div>

                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className={`flex items-start gap-3 text-sm ${
                        plan.isPopular ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      <span
                        className={
                          plan.isPopular ? "text-gray-500" : "text-gray-400"
                        }
                      >
                        •
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer Text */}
          <div className="text-center">
            <p className="inline-block bg-white text-gray-700 text-sm px-4 py-2 rounded-lg shadow-sm">
              {footerText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
