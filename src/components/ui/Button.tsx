interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "black";
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl transition-all font-medium text-sm sm:text-base";

  const variants = {
    primary: "bg-white text-black hover:bg-gray-100 shadow-lg hover:shadow-xl",
    secondary:
      "bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 shadow-lg hover:shadow-xl",
    black:
      "bg-black text-white hover:bg-gray-800 shadow-[0_8px_12px_-2px_rgba(0,0,0,0.9)] hover:shadow-[0_12px_16px_-2px_rgba(0,0,0,0.6)]",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
