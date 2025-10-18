"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

import LegalModal from "../ui/LegalModal";
import { termsAndConditionsData, privacyPolicyData } from "@/lib/constants";
import Button from "../ui/Button";

export default function Footer() {
  const [activeModal, setActiveModal] = useState<"terms" | "privacy" | null>(
    null
  );

  return (
    <>
      <footer className="relative overflow-hidden text-black font-[satoshi]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-20"
        >
          <source src="/videos/footer-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/50 -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex flex-col sm:flex-row justify-between items-center pb-12 border-b border-black/10">
            <h2 className="text-3xl md:text-4xl font-medium mb-6 sm:mb-0 text-center sm:text-left">
              Ready to elevate your business?
            </h2>
            <Link href="/contact">
              <Button
                variant="black"
                className={`text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-3 transition-colors duration-300 border-2 border-transparent`}
              >
                Contact Us
              </Button>
            </Link>
          </div>

          <div className="pt-12 md:pt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
              <div className="md:col-span-1">
                <Link href="/" className="mb-4 inline-block">
                  <Image
                    src="/logo.png"
                    alt="Nuopod Logo"
                    width={96}
                    height={32}
                  />
                </Link>
                <p className="text-neutral-700 max-w-xs">
                  Easily adapt to changes and scale your operations with our
                  flexible infrastructure, designed to support your business
                  growth.
                </p>
              </div>

              <div className="md:col-span-1">
                <h3 className="font-semibold text-black mb-4">Company</h3>
                <nav className="flex flex-col gap-3">
                  <Link
                    href="/about"
                    className="text-neutral-700 hover:text-black transition"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/services"
                    className="text-neutral-700 hover:text-black transition"
                  >
                    Services
                  </Link>
                  <Link
                    href="/faq"
                    className="text-neutral-700 hover:text-black transition"
                  >
                    FAQ
                  </Link>
                  <Link
                    href="#news"
                    className="text-neutral-700 hover:text-black transition"
                  >
                    News
                  </Link>
                </nav>
              </div>

              <div className="md:col-span-1">
                <h3 className="font-semibold text-black mb-4">Get in touch</h3>
                <div className="flex flex-col gap-3 text-neutral-700">
                  <p>
                    Have a project in mind? <br />
                    <a
                      href="mailto:info@nuopod.com"
                      className="font-medium text-black hover:text-neutral-700 underline transition"
                    >
                      info@nuopod.com
                    </a>
                  </p>
                  <p>Mumbai, Maharashtra, India</p>
                </div>
              </div>
            </div>

            <div className="mt-12 md:mt-16 pt-8 border-t border-black/10 flex flex-col-reverse sm:flex-row justify-between items-center gap-6">
              <div className="text-sm text-neutral-600 flex flex-col sm:flex-row items-center gap-x-4 gap-y-2 text-center sm:text-left">
                <span>
                  Nuopod © {new Date().getFullYear()}. Designed by Nuopod.
                </span>
              </div>

              <div className="flex items-center gap-4 text-neutral-700">
                <a
                  href="https://www.instagram.com/nuopod.tech/"
                  className="hover:text-black transition-colors"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://www.facebook.com/61581761844790"
                  className="hover:text-black transition-colors"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF size={20} />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCDqQdxqGdwwF0-Y6j8pLhzQ"
                  className="hover:text-black transition-colors"
                  aria-label="YouTube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube size={20} />
                </a>
              </div>
            </div>
            <div className="flex items-center gap-x-2 justify-center mt-4 text-sm">
              <button
                onClick={() => setActiveModal("terms")}
                className="hover:text-black underline transition cursor-pointer"
              >
                Terms of Service
              </button>
              <span className="text-neutral-400">|</span>
              <button
                onClick={() => setActiveModal("privacy")}
                className="hover:text-black underline transition cursor-pointer"
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
      </footer>

      <LegalModal
        isOpen={activeModal === "terms"}
        onClose={() => setActiveModal(null)}
        title={termsAndConditionsData.title}
        sections={termsAndConditionsData.sections}
      />
      <LegalModal
        isOpen={activeModal === "privacy"}
        onClose={() => setActiveModal(null)}
        title={privacyPolicyData.title}
        sections={privacyPolicyData.sections}
      />
    </>
  );
}
