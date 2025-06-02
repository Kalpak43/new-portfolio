import { cn } from "@/lib/utils";
import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

function Container({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "w-full py-6 px-4 md:px-8 rounded-2xl space-x-4 bg-radial-[at_0_0] from-[#4a526640] from-0% to-[#ffffff0a] backdrop-blur-30 border border-white/10 shadow-container",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Container;
