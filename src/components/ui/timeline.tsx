import { cn } from "@/lib/utils";
import React from "react";

interface TimelineProps extends React.ComponentProps<"div"> {
  children: React.ReactNode;
}

function Timeline({ children }: TimelineProps) {
  return (
    <div className="relative" data-slot="timeline">
      <div className="relative">
        {React.Children.map(children, (child, index) => {
          if (
            React.isValidElement(child) &&
            (child.type as any)?.displayName === "TimelineItem"
          ) {
            return (
              <div key={index} className="flex items-center relative pb-6">
                <div className="absolute top-0 left-0 h-full before:w-1 before:h-full before:bg-primary before:absolute before:inset-x-0 before:mx-auto before:-z-1 before:my-1 before:rounded-full before:shadow-[0px_0px_1px_rgba(0,0,0,0.56),0px_0px_3px_rgba(44,44,44,0.61)]">
                  <div className="h-3 w-3 border-2 border-primary bg-secondary shadow-[0px_0px_2px_rgba(0,0,0,0.56),0px_0px_6px_rgba(44,44,44,0.61)] rounded-full z-10"></div>
                </div>
                <div className="ml-6 w-full">{child}</div>
              </div>
            );
          }

          return child;
        })}
      </div>
    </div>
  );
}

function TimelineItem({ children, className }: React.ComponentProps<"div">) {
  return (
    <div className={cn("w-full", className)} data-slot="timeline-item">
      {children}
    </div>
  );
}

TimelineItem.displayName = "TimelineItem";

export { Timeline, TimelineItem };

// Timeline.Item.displayName = "TimelineItem";
