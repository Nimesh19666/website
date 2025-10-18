"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";

const MotionLink = motion(Link);

export default function Header() {
  const [hoveredLink, setHoveredLink] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const darkSections = document.querySelectorAll(
      '[data-header-theme="dark"]'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        let anyDarkSectionVisible = false;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anyDarkSectionVisible = true;
          }
        });
        setIsDarkTheme(anyDarkSectionVisible);
      },
      {
        rootMargin: "-100px 0px -90% 0px",
        threshold: 0,
      }
    );

    darkSections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [pathname]);

  const headerContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const desktopItemVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.2, duration: 0.9 },
    },
  };

  return (
    <>
      <motion.header
        className={`hidden lg:block fixed top-0 w-full backdrop-blur-[5px] z-50 border-b-2 font-[satoshi] transition-all duration-300 ${
          isDarkTheme
            ? "bg-black/60 border-white/10"
            : "bg-[rgba(245,245,245,0.2)] border-white/30"
        }`}
        variants={headerContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-22 py-3 sm:py-4 flex items-center justify-between">
          <MotionLink
            href="/"
            className="flex items-center gap-2"
            variants={desktopItemVariants}
          >
            <Image
              src={isDarkTheme ? "/white-logo.png" : "/logo.png"}
              alt="Logo"
              width={80}
              height={32}
              className="w-20 sm:w-24 md:w-[100px] h-auto"
            />
          </MotionLink>

          <motion.div
            className="flex items-center gap-6 xl:gap-10 text-sm font-medium"
            variants={desktopItemVariants}
            onMouseLeave={() => setHoveredLink("")}
          >
            {[
              { href: "/about", text: "About Us" },
              { href: "/services", text: "Services" },
              { href: "/faq", text: "FAQ" },
              { href: "#news", text: "News" },
            ].map((link) => (
              <MotionLink
                key={link.href}
                href={link.href}
                className={`relative transition-colors duration-300 px-3 py-1.5 ${
                  isDarkTheme
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-black"
                }`}
                onMouseEnter={() => setHoveredLink(link.href)}
              >
                {link.text}
                {hoveredLink === link.href && (
                  <motion.div
                    className={`absolute inset-0 rounded-md -z-10 transition-colors duration-300 ${
                      isDarkTheme
                        ? "bg-white/10"
                        : "bg-white shadow-[inset_0px_2px_4px_rgba(0,0,0,0.06)]"
                    }`}
                    layoutId="hover-background"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </MotionLink>
            ))}
          </motion.div>

          <motion.div variants={desktopItemVariants}>
            <Link href="/contact">
              <Button
                variant={isDarkTheme ? "secondary" : "black"}
                className={`text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-3 transition-colors duration-300 border-2 ${
                  isDarkTheme
                    ? "!bg-white !text-black border-white"
                    : "border-transparent"
                }`}
              >
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </nav>
      </motion.header>

      <motion.div
        className={`lg:hidden fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] z-50 backdrop-blur-md rounded-2xl shadow-lg border overflow-hidden transition-all duration-300 ${
          isDarkTheme
            ? "bg-black/80 border-white/10"
            : "bg-white/90 border-gray-100"
        }`}
        animate={{ height: isMenuOpen ? "auto" : "auto" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex items-center justify-between px-5 py-4">
          <Link href="/">
            <Image
              src={isDarkTheme ? "/white-logo.png" : "/logo.png"}
              alt="Logo"
              width={70}
              height={28}
              className="w-[70px] h-auto"
            />
          </Link>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
            {isMenuOpen ? (
              <X
                className={`w-6 h-6 transition-colors duration-300 ${
                  isDarkTheme ? "text-white" : "text-black"
                }`}
              />
            ) : (
              <div className="w-6 h-6 flex flex-col items-center justify-center gap-[5px]">
                <div
                  className={`w-6 h-[2px] rounded-full transition-colors duration-300 ${
                    isDarkTheme ? "bg-white" : "bg-black"
                  }`}
                />
                <div
                  className={`w-6 h-[2px] rounded-full transition-colors duration-300 ${
                    isDarkTheme ? "bg-white" : "bg-black"
                  }`}
                />
                <div
                  className={`w-6 h-[2px] rounded-full transition-colors duration-300 ${
                    isDarkTheme ? "bg-white" : "bg-black"
                  }`}
                />
              </div>
            )}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div
                className={`border-t ${
                  isDarkTheme ? "border-white/10" : "border-gray-100"
                }`}
              />
              <div className="px-6 py-6 flex flex-col gap-6">
                <Link
                  href="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-[400] transition-colors duration-300 ${
                    isDarkTheme
                      ? "text-white hover:text-gray-300"
                      : "text-black hover:text-gray-600"
                  }`}
                >
                  About Us
                </Link>
                <Link
                  href="/services"
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-[400] transition-colors duration-300 ${
                    isDarkTheme
                      ? "text-white hover:text-gray-300"
                      : "text-black hover:text-gray-600"
                  }`}
                >
                  Services
                </Link>
                <Link
                  href="/faq"
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-[400] transition-colors duration-300 ${
                    isDarkTheme
                      ? "text-white hover:text-gray-300"
                      : "text-black hover:text-gray-600"
                  }`}
                >
                  FAQ
                </Link>
                <Link
                  href="#news"
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-[400] transition-colors duration-300 ${
                    isDarkTheme
                      ? "text-white hover:text-gray-300"
                      : "text-black hover:text-gray-600"
                  }`}
                >
                  News
                </Link>

                <div className="pt-2">
                  <Link href="/contact" className="block w-full">
                    <Button
                      variant={isDarkTheme ? "secondary" : "black"}
                      className={`w-full py-3.5 text-base transition-colors duration-300 ${
                        isDarkTheme
                          ? "!bg-white !text-black hover:!bg-gray-100"
                          : ""
                      }`}
                    >
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
