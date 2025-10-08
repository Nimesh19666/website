"use client";

import { servicesSectionData } from "@/lib/constants";
import { motion } from "framer-motion";
import Badge from "../../ui/Badge";

// A simple presentational component for the placeholder UI
const UIPill = ({
  className = "",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => (
  <div
    className={`bg-white/50 backdrop-blur-sm rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.05)] ${className}`}
  >
    {children}
  </div>
);

export default function ServicesSection() {
  const { badge, title, description, services } = servicesSectionData;

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
    <section className="bg-[#f8f8f8] py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={itemVariants}
          >
            <div className="inline-block mb-4">
              <Badge className="w-full text-[14px] sm:w-auto px-4 py-1 !shadow-[inset_0px_3px_0px_#fff] rounded-[30px]">
                {badge}
              </Badge>
            </div>
            <h2 className="font-heading font-[satoshi] text-3xl font-medium sm:text-4xl md:text-5xl mb-4 bg-[linear-gradient(0deg,rgb(0,0,0)_0%,rgb(255,255,255)_170%)] bg-clip-text text-transparent">
              {title}
            </h2>
            <p className="text-gray-600 text-sm sm:text-lg max-w-2xl mx-auto">
              {description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Card 1 */}
            <motion.div
              className="bg-white p-8 shadow-[0px_5px_15px_rgba(0,0,0,0.05)] rounded-2xl md:col-span-2"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="h-48 bg-gray-100 rounded-lg p-4 flex justify-between items-start mb-6">
                <UIPill className="w-1/3 h-12" />
                <div className="flex flex-col items-end gap-2">
                  <UIPill className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-[satoshi] font-[400] text-black mb-2">
                {services[0].title}
              </h3>
              <p className="text-gray-600">{services[0].description}</p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="bg-white p-8 shadow-[0px_5px_15px_rgba(0,0,0,0.05)] rounded-2xl md:col-span-3"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="h-48 bg-gray-100 rounded-lg p-4 flex flex-col justify-between mb-6">
                <div className="flex justify-between items-start">
                  <UIPill className="w-8 h-8 rounded-full" />
                  <UIPill className="w-24 h-8 !bg-gray-200" />
                </div>
                <UIPill className="w-full h-20" />
              </div>
              <h3 className="text-xl font-[satoshi] font-[400] text-black mb-2">
                {services[1].title}
              </h3>
              <p className="text-gray-600">{services[1].description}</p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="bg-white p-8 shadow-[0px_5px_15px_rgba(0,0,0,0.05)] rounded-2xl md:col-span-3"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="h-48 bg-gray-100 rounded-lg p-4 flex flex-col justify-between mb-6">
                <div className="flex justify-between items-start">
                  <UIPill className="w-24 h-6" />
                  <div className="flex gap-2">
                    <UIPill className="w-6 h-6 rounded-full" />
                    <UIPill className="w-6 h-6 rounded-full" />
                  </div>
                </div>
                <UIPill className="w-full h-12" />
              </div>
              <h3 className="text-xl font-[satoshi] font-[400] text-black mb-2">
                {services[2].title}
              </h3>
              <p className="text-gray-600">{services[2].description}</p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              className="bg-white p-8 shadow-[0px_5px_15px_rgba(0,0,0,0.05)] rounded-2xl md:col-span-2"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="h-48 bg-gray-100 rounded-lg p-4 grid grid-cols-3 grid-rows-3 gap-2 mb-6">
                <UIPill className="col-start-2 row-start-1" />
                <UIPill className="col-start-1 row-start-2 w-12 h-12 flex items-center justify-center"></UIPill>
                <UIPill className="col-start-3 row-start-2" />
                <UIPill className="col-start-2 row-start-3" />
              </div>
              <h3 className="text-xl font-[satoshi] font-[400] text-black mb-2">
                {services[3].title}
              </h3>
              <p className="text-gray-600">{services[3].description}</p>
            </motion.div>

            {/* Card 5 - NEW */}
            <motion.div
              className="bg-white p-8 shadow-[0px_5px_15px_rgba(0,0,0,0.05)] rounded-2xl md:col-span-2"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="h-48 bg-gray-100 rounded-lg p-4 flex flex-col items-center justify-center gap-2 mb-6">
                <UIPill className="w-3/4 h-8" />
                <UIPill className="w-1/2 h-8" />
                <UIPill className="w-3/4 h-8" />
              </div>
              <h3 className="text-xl font-[satoshi] font-[400] text-black mb-2">
                {services[4].title}
              </h3>
              <p className="text-gray-600">{services[4].description}</p>
            </motion.div>

            {/* Card 6 - NEW */}
            <motion.div
              className="bg-white p-8 shadow-[0px_5px_15px_rgba(0,0,0,0.05)] rounded-2xl md:col-span-3"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="h-48 bg-gray-100 rounded-lg p-4 flex items-end justify-between gap-2 mb-6">
                <UIPill className="w-1/4 h-3/4" />
                <UIPill className="w-1/4 h-1/2" />
                <UIPill className="w-1/4 h-full" />
              </div>
              <h3 className="text-xl font-[satoshi] font-[400] text-black mb-2">
                {services[5].title}
              </h3>
              <p className="text-gray-600">{services[5].description}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
