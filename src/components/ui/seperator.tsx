import { cn } from "@/lib/utils";

function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "mb-4 w-full h-px bg-gradient-to-r from-primary to-secondary rounded-full",
        className
      )}
    />
  );
}

export default Separator;
