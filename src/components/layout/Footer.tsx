// components/layout/Footer.tsx (or wherever your file is)

"use client";

import { useState } from "react"; // 1. Import useState
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import TermsModal from "../ui/TermsModal"; // 2. Import the new modal

export default function Footer() {
  // 3. Add state to control the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer className="relative overflow-hidden text-black font-[satoshi]">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-20"
        >
          <source src="/videos/footer-bg.mp4" type="video/mp4" />
        </video>
        {/* Light Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-white/50 -z-10"></div>

        {/* Main Container */}
        <div className="mx-[200px] px-4 sm:px-6 py-12 sm:py-16">
          {/* --- TOP SECTION --- */}
          <div className="flex flex-col sm:flex-row justify-between items-center pb-12 border-b border-black/10">
            <h2 className="text-3xl md:text-4xl font-medium mb-4 sm:mb-0 text-center sm:text-left">
              Ready to elevate your business?
            </h2>
            <Link href="/contact">
              <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-neutral-800 transition-colors">
                Contact us
              </button>
            </Link>
          </div>

          {/* --- 3-COLUMN DESIGN --- */}
          <div className="pt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Column 1: Logo & Description */}
              <div>
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

              {/* Column 2: Company Links */}
              <div>
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
                    href="#theprocess"
                    className="text-neutral-700 hover:text-black transition"
                  >
                    The Process
                  </Link>
                  <Link
                    href="#news"
                    className="text-neutral-700 hover:text-black transition"
                  >
                    News
                  </Link>
                </nav>
              </div>

              {/* Column 3: Contact Info */}
              <div>
                <h3 className="font-semibold text-black mb-4">Get in touch</h3>
                <div className="flex flex-col gap-3 text-neutral-700">
                  <p>
                    Have a project in mind? <br />
                    <a
                      href="mailto:hello@nuopod.com"
                      className="font-medium text-black hover:text-neutral-700 underline transition"
                    >
                      hello@nuopod.com
                    </a>
                  </p>
                  <p>Mumbai, Maharashtra, India</p>
                </div>
              </div>
            </div>

            {/* Bottom Bar: Copyright & Socials */}
            <div className="mt-16 pt-8 border-t border-black/10 flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
              <div className="text-sm text-neutral-600 flex gap-4">
                <span>
                  Nuopod © {new Date().getFullYear()}. Designed by Nuopod.
                </span>
                {/* 4. Add the button to open the modal */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="hover:text-black underline transition"
                >
                  Terms & Conditions
                </button>
              </div>
              <div className="flex items-center gap-4 text-neutral-700">
                <a href="#" className="hover:text-black transition-colors">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="hover:text-black transition-colors">
                  <FaFacebookF size={20} />
                </a>
                <a href="#" className="hover:text-black transition-colors">
                  <FaLinkedinIn size={20} />
                </a>
                <a href="#" className="hover:text-black transition-colors">
                  <FaXTwitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* 5. Render the modal component */}
      <TermsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
