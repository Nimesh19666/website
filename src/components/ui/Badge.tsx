interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={` bg-[#f5f5f5] flex items-center text-black hover:bg-gray-100 hover:shadow-xl !shadow-[inset_0px_1px_0px_#fff] ${className}`}
    >
      {children}
    </span>
  );
}
