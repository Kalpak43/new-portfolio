import React from "react";

export default function Heading({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2 lg:hidden">
      <div className="h-px bg-info flex-1 rotate-180"></div>
      <h2 className="font-semibold uppercase block text-2xl">{title}</h2>
      <div className="h-px bg-info flex-1"></div>
    </div>
  );
}
