// src/components/sections/services/ServicesHeroSection.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { servicesHeroData } from "@/lib/constants";
import Button from "@/components/ui/Button";
import { useState } from "react";

export default function ServicesHeroSection() {
  const { imageUrl } = servicesHeroData;
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

  return (
    <section className="bg-[#f8f8f8] py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[600px] rounded-2xl overflow-hidden"
          >
            {/* Image Container */}
            <motion.div
              className="relative w-full h-full bg-transparent"
              initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
              animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{
                duration: 4,
                ease: [0.16, 1, 0.3, 1], // Custom ease that slows down at the end
                delay: 0.2,
              }}
            >
              <motion.div
                initial={{ filter: "blur(20px)", scale: 1.05 }}
                animate={{ filter: "blur(0px)", scale: 1 }}
                transition={{
                  duration: 1.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.4,
                }}
                className="w-full h-full"
              >
                <Image
                  src={imageUrl}
                  alt="A team collaborating on a project"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 sm:p-10 rounded-2xl shadow-[0px_10px_30px_rgba(0,0,0,0.08)]"
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
                  placeholder="Dropdown of all services"
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
                  rows={4}
                  className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all resize-none text-gray-600 placeholder:text-gray-400"
                  placeholder="Give us more info.."
                />
              </div>

              <Button variant="black" className="w-full py-4" type="submit">
                Send Your Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
