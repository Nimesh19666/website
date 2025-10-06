"use client";

import { useState } from "react";
import { faqSectionData } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import Badge from "../../ui/Badge";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const { badge, title, description, faqs, contact } = faqSectionData;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

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
    <section className="bg-[#f8f8f8] py-16 rounded-b-4xl shadow-[inset_0px_3px_0px_#fff,0px_5px_5px_rgba(0,0,0,0.1)] sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-[30rem] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-6">
            <div className="inline-block mb-4">
              <Badge className="w-full text-[14px] sm:w-auto px-4 py-1 flex items-center !shadow-[inset_0px_3px_0px_#fff] rounded-[30px]">
                {badge}
              </Badge>
            </div>
            <h2 className="font-heading font-[satoshi] text-3xl font-medium sm:text-4xl md:text-4xl mb-4 bg-[linear-gradient(0deg,rgb(0,0,0)_0%,rgb(255,255,255)_170%)] bg-clip-text text-transparent">
              {title}
            </h2>
            <p className="text-gray-600 text-sm sm:text-sm max-w-2xl mx-auto">
              {description}
            </p>
          </div>

          {/* FAQ Items */}
          <motion.div
            className="space-y-4 mb-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-[#f8f8f8]  p-3  shadow-[inset_0px_3px_0px_#fff,0px_5px_5px_rgba(0,0,0,0.1)] rounded-2xl overflow-hidden"
                variants={itemVariants}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left hover:bg-white/30 transition-colors"
                >
                  <span className="text-base sm:text-xs font-[400] text-black pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-black flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="">
                        <p className="text-gray-600 text-sm sm:text-xs leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Footer */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-gray-600 text-sm sm:text-xs">
              {contact.text}{" "}
              <a
                href={`mailto:${contact.email}`}
                className="text-black underline font-[400] hover:text-gray-700 transition-colors"
              >
                {contact.email}
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
