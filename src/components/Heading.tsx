import React from "react";

export default function Heading({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2 lg:hidden">
      <div className="h-[1px] bg-gradient-blue flex-1"></div>
      <h2 className="font-[600] uppercase block text-2xl">{title}</h2>
      <div className="h-[1px] bg-gradient-blue flex-1"></div>
    </div>
  );
}
