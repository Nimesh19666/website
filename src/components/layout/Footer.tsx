import Link from "next/link";
import Image from "next/image";
// Import the icons for the new layout
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    // Your original footer with relative positioning to contain the video
    <footer className="relative py-12 sm:py-16 overflow-hidden">
      {/* Your original video background setup */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/videos/footer-bg.mp4" type="video/mp4" />
      </video>

      {/* Main container with z-index and text color set to black */}
      <div className="mx-[150px] px-4 sm:px-6 relative z-10 text-black">
        {/* Top Section: "Ready to elevate..." & Contact button */}
        <div className="flex flex-col sm:flex-row justify-between items-center pb-12 border-b border-gray-300">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 sm:mb-0 text-center sm:text-left">
            Ready to elevate your business?
          </h2>
          <Link href="/contact">
            {/* Swapped button colors for better contrast with black text theme */}
            <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Contact us
            </button>
          </Link>
        </div>

        {/* Middle Section: Large Logo */}
        <div className="flex justify-center my-16 sm:my-24">
          <Image
            src="/logo.png"
            alt="Nuopod Logo"
            width={1200}
            height={0}
            className="h-[50%]"
          />
        </div>

        {/* Bottom Section: Grid for description, links, and socials */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Description & Socials */}
          <div className="md:col-span-1">
            <p className="text-gray-700 mb-6">
              Easily adapt to changes and scale your operations with our
              flexible infrastructure, designed to support your business growth.
            </p>
            <div className="flex items-center gap-4">
              {/* Changed icon colors to be dark gray, turning black on hover */}
              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors"
              >
                <FaXTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Spacer Column (for layout on larger screens) */}
          <div className="hidden md:block"></div>

          {/* Column 2 & 3: Navigation Links */}
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <nav className="flex flex-col gap-2">
                {/* Changed link colors to dark gray, turning black on hover */}
                <Link
                  href="#about"
                  className="text-gray-700 hover:text-black transition"
                >
                  About Us
                </Link>
                <Link
                  href="#services"
                  className="text-gray-700 hover:text-black transition"
                >
                  Services
                </Link>
                <Link
                  href="#theprocess"
                  className="text-gray-700 hover:text-black transition"
                >
                  The Process
                </Link>
                <Link
                  href="#news"
                  className="text-gray-700 hover:text-black transition"
                >
                  News
                </Link>
              </nav>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Case Studies</h4>
              <nav className="flex flex-col gap-2">
                <Link
                  href="/studies/1"
                  className="text-gray-700 hover:text-black transition"
                >
                  Study V1
                </Link>
                <Link
                  href="/studies/2"
                  className="text-gray-700 hover:text-black transition"
                >
                  Study V2
                </Link>
              </nav>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <nav className="flex flex-col gap-2">
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-black transition"
                >
                  Contact V1
                </Link>
                <Link
                  href="/support"
                  className="text-gray-700 hover:text-black transition"
                >
                  Support
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Copyright notice with updated colors */}
        <div className="text-center text-gray-600 text-sm mt-12 pt-8 border-t border-gray-300">
          <p>
            Nuopod © 2025. Designed by{" "}
            <Link
              href="https://nuopod.com/"
              target="_blank"
              className="text-black hover:text-gray-700 underline transition font-medium"
            >
              Nuopod
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
