import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Header() {
  return (
    <header className="fixed top-0 w-full backdrop-blur-[5px] bg-[rgba(245,245,245,0.2)] z-50 border-b-2 border-white/30">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-22 py-3 sm:py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={80}
            height={32}
            className="w-20 sm:w-24 md:w-[100px] h-auto"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-6 xl:gap-10 text-sm font-medium">
          <Link
            href="#about"
            className="text-gray-600 hover:text-black transition"
          >
            About Us
          </Link>
          <Link
            href="#services"
            className="text-gray-600 hover:text-black transition"
          >
            Services
          </Link>
          <Link
            href="#theprocess"
            className="text-gray-600 hover:text-black transition"
          >
            The Process
          </Link>
          <Link
            href="#news"
            className="text-gray-600 hover:text-black transition"
          >
            News
          </Link>
        </div>

        <Button
          variant="black"
          className="text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-3"
        >
          Get Started
        </Button>
      </nav>
    </header>
  );
}
