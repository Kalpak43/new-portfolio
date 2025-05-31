import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: "icon" | "md";
  className?: string;
}

function Button({ children, size = "md", className, ...rest }: ButtonProps) {
  const base =
    "text-white inline-flex items-center gap-2 rounded-full text-center relative overflow-hidden shadow-[0px_0px_2px_rgba(0,0,0,0.56),0px_0px_6px_rgba(44,44,44,0.61)] bg-gradient-to-r from-[#000428] via-[#004e92] to-[#000428] bg-[length:200%_auto] hover:bg-[position:100%_center] transition-all duration-500";

  const sizes = {
    icon: "p-3 text-sm",
    md: "py-2 px-6 text-base",
  };

  return (
    <button className={cn(base, sizes[size], className)} {...rest}>
      {children}
    </button>
  );
}

export default Button;
