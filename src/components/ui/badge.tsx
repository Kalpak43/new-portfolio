import { cn } from "@/lib/utils";
import React from "react";

function Badge({ children, className }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "inline-flex items-center space-x-2 px-4 py-1 border border-secondary/40 bg-primary/10 rounded-full text-xs md:text-sm text-gray-600 shadow-[0px_0px_1px_rgba(0,0,0,0.36),0px_0px_4px_rgba(44,44,44,0.21)]",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Badge;
