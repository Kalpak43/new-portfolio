"use client";

import React, { useEffect, useRef } from "react";

export default function ProficienctLine({
  name,
  proficiency,
}: {
  name: String;
  proficiency: number;
}) {
  const lineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (lineRef.current) {
      lineRef.current.style.width = `${proficiency}%`;
    }
  }, [proficiency]);

  return (
    <div className="space-y-1">
      <p className="text-sm">{name}</p>
      <div className="flex rounded-full overflow-hidden">
        <div className={`h-1 bg-gradient-blue`} ref={lineRef}></div>
        <div className="h-1 bg-accent flex-1"></div>
      </div>
    </div>
  );
}
