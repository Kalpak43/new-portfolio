import { cn } from "@/lib/utils";

function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "mb-4 w-full h-px bg-gradient-to-r from-[#000428] to-[#0487fa] rounded-full",
        className
      )}
    />
  );
}

export default Separator;
