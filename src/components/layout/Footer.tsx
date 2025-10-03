import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative py-12 sm:py-16 min-h-[60vh] sm:min-h-[70vh] flex flex-col items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center justify-center gap-4 sm:gap-6 mb-3 sm:mb-4">
            <Image
              src="/logo.png"
              alt="Logo"
              width={200}
              height={96}
              className="w-40 sm:w-52 md:w-[250px] h-auto"
            />
          </div>
          <p className="text-black text-sm sm:text-base md:text-lg font-light px-4">
            Next-gen AI systems, built for tomorrow`s innovators
          </p>
        </div>

        <div className="mb-6 sm:mb-8">
          <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-[10px] hover:bg-gray-800 transition-all font-medium text-sm sm:text-base shadow-[rgba(158,158,158,0.69)_0px_0.706592px_0.706592px_-0.583333px,rgba(158,158,158,0.68)_0px_1.80656px_1.80656px_-1.16667px,rgba(158,158,158,0.65)_0px_3.62176px_3.62176px_-1.75px,rgba(158,158,158,0.61)_0px_6.8656px_6.8656px_-2.33333px,rgba(158,158,158,0.52)_0px_13.6468px_13.6468px_-2.91667px,rgba(158,158,158,0.3)_0px_30px_30px_-3.5px,rgb(255,255,255)_0px_3px_1px_0px_inset]">
            Get Started
          </button>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 px-4">
          <Link
            href="#about"
            className="text-black hover:text-gray-700 transition font-medium underline text-sm sm:text-base"
          >
            About Us
          </Link>
          <Link
            href="#services"
            className="text-black hover:text-gray-700 transition font-medium underline text-sm sm:text-base"
          >
            Services
          </Link>
          <Link
            href="#theprocess"
            className="text-black hover:text-gray-700 transition font-medium underline text-sm sm:text-base"
          >
            The Process
          </Link>
          <Link
            href="#news"
            className="text-black hover:text-gray-700 transition font-medium underline text-sm sm:text-base"
          >
            News
          </Link>
        </nav>

        <p className="text-gray-700 text-xs sm:text-sm px-4">
          Nuopod © 2025. Designed by{" "}
          <Link
            href="https://nuopod.com/"
            target="_blank"
            className="text-black hover:text-gray-800 underline transition font-medium"
          >
            Nuopod
          </Link>
        </p>
      </div>
    </footer>
  );
}
