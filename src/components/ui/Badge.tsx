interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`bg-[#E0E5EC] text-black backdrop-blur-sm px-4 sm:px-6 md:px-10 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm md:text-base font-medium shadow-lg border border-gray-200 ${className}`}
    >
      {children}
    </span>
  );
}
