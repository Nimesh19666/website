"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

interface Section {
  title: string;
  content: string;
}

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  sections: Section[];
}

export default function LegalModal({
  isOpen,
  onClose,
  title,
  sections,
}: LegalModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.classList.add("lenis-stopped");
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.classList.remove("lenis-stopped");
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 font-[satoshi]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          <div className="fixed inset-0 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-2xl h-[85vh] bg-white rounded-2xl shadow-2xl flex flex-col pointer-events-auto"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-black">{title}</h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full text-gray-400 hover:text-black hover:bg-gray-100 transition-colors"
                  aria-label="Close"
                >
                  <X size={24} />
                </button>
              </div>

              <div
                className="flex-1 overflow-y-auto px-6 py-6"
                data-lenis-prevent
              >
                {sections.map((section, index) => (
                  <div key={index} className="mb-6 last:mb-0">
                    <h3 className="text-lg font-semibold text-black mb-2">
                      {section.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
