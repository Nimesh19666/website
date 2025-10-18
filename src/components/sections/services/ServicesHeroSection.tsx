"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { servicesHeroData } from "@/lib/constants";
import Button from "@/components/ui/Button";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ServicesHeroSection() {
  const { imageUrl } = servicesHeroData;
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus(null);

    if (formData.subject === "") {
      setSubmitStatus("error");
      setIsSubmitting(false);
      console.error("Subject is not selected");
      return;
    }

    const data = {
      ...formData,
      access_key: "2f44eb7c-c66a-4fd6-aab8-ed9c815d12d0",
      subject: `New Submission: ${formData.subject}`,
      from_name: `Nuopod Services - ${formData.fullName}`,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        console.log("Form submitted successfully:", result);
        setSubmitStatus("success");
        setFormData({
          fullName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        console.error("Error submitting form:", result.message);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
            className="relative w-full h-[500px] sm:h-[600px] rounded-2xl overflow-hidden"
          >
            <motion.div
              className="relative w-full h-full bg-transparent"
              initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
              animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{
                duration: 4,
                ease: [0.16, 1, 0.3, 1],
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
                  placeholder="info@nuopod.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-[400] text-black mb-2"
                >
                  Subject Of Interest
                </label>
                <div className="relative">
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all text-gray-600 appearance-none pr-12"
                  >
                    <option value="" disabled>
                      Select a service...
                    </option>
                    <option value="Web Development">Web Development</option>
                    <option value="App Development">App Development</option>
                    <option value="AI & Automation Solutions">
                      AI & Automation Solutions
                    </option>
                    <option value="Custom Software Development">
                      Custom Software Development
                    </option>
                    <option value="Cloud & DevOps Services">
                      Cloud & DevOps Services
                    </option>
                    <option value="Data & Analytics">Data & Analytics</option>
                    <option value="All of the above">All of the above</option>
                  </select>
                  <ChevronDown className="absolute top-1/2 -translate-y-1/2 right-4 h-5 w-5 text-gray-500 pointer-events-none" />
                </div>
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
                {isSubmitting ? "Sending..." : "Send Your Message"}
              </Button>

              {submitStatus === "success" && (
                <p className="text-sm text-green-600">
                  Message sent successfully! We will get back to you soon.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-sm text-red-600">
                  Something went wrong. Please check all fields and try again.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
