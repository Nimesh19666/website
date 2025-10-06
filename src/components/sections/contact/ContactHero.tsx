"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { Mail, CalendarDays } from "lucide-react";

export default function ContactHero() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
    <section className="bg-[#f8f8f8] py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block mb-4">
              <Badge className="w-full text-[14px] sm:w-auto px-4 py-1 flex items-center !shadow-[inset_0px_3px_0px_#fff] rounded-[30px]">
                CONTACT
              </Badge>
            </div>
            <h1 className="font-heading text-3xl font-medium sm:text-4xl md:text-5xl mb-4 bg-[linear-gradient(0deg,rgb(0,0,0)_0%,rgb(255,255,255)_170%)] bg-clip-text text-transparent">
              Reach Us At Anytime
            </h1>
            <p className="text-gray-600 text-sm sm:text-lg max-w-2xl mx-auto">
              Have questions or need any help? Were here to help you with that
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="space-y-6">
              <motion.div
                className="bg-[#f8f8f8] shadow-[inset_0px_3px_0px_#fff,0px_5px_5px_rgba(0,0,0,0.1)] rounded-2xl p-8"
                variants={itemVariants}
              >
                <div className="w-14 h-14 bg-[linear-gradient(180deg,rgb(0,0,0)_0%,rgb(255,255,255)_170%)] rounded-2xl mb-6 flex items-center justify-center">
                  <Mail className="h-7 w-7 text-white" />
                </div>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  Feel free to email me if you have any questions or need more
                  details!
                </p>
                <a
                  href="mailto:noupod@gmail.com"
                  className="text-black font-[400] underline hover:text-gray-700 transition-colors"
                >
                  noupod@gmail.com
                </a>
              </motion.div>

              <motion.div
                className="bg-[#f8f8f8] shadow-[inset_0px_3px_0px_#fff,0px_5px_5px_rgba(0,0,0,0.1)] rounded-2xl p-8"
                variants={itemVariants}
              >
                <div className="w-14 h-14 bg-[linear-gradient(180deg,rgb(0,0,0)_0%,rgb(255,255,255)_170%)] rounded-2xl mb-6 flex items-center justify-center">
                  <CalendarDays className="h-7 w-7 text-white" />
                </div>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  Feel free to book a call if thats more convenient and easier
                  for you
                </p>
                <a
                  href="#"
                  className="text-black font-[400] underline hover:text-gray-700 transition-colors"
                >
                  Book a call
                </a>
              </motion.div>
            </div>

            <motion.div
              className="bg-[#f8f8f8] shadow-[inset_0px_3px_0px_#fff,0px_5px_5px_rgba(0,0,0,0.1)] rounded-2xl p-8"
              variants={itemVariants}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-[400] text-black mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all text-gray-600 placeholder:text-gray-400"
                    placeholder="Ikta Sollork"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-[400] text-black mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all text-gray-600 placeholder:text-gray-400"
                    placeholder="noupod@gmail.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-[400] text-black mb-2"
                  >
                    Subject Of Interest
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all text-gray-600 placeholder:text-gray-400"
                    placeholder="Regarding Project"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-[400] text-black mb-2"
                  >
                    How may we assist you?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all resize-none text-gray-600 placeholder:text-gray-400"
                    placeholder="Give us more info.."
                  />
                </div>

                <Button variant="black" className="w-full py-4" type="submit">
                  Send Your Message
                </Button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
