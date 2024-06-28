import React from "react";

export default function ExperienceCard({
  duration,
  title,
  company,
  description,
}: {
  duration: string;
  title: string;
  company: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border-2 border-accent p-4 card transition-all duration-200">
      <p className="text-sm text-secondary">{duration}</p>
      <h5 className="font-[600]">{title}</h5>
      <h6 className="text-sm">{company}</h6>
      <p className="text-sm text-secondary">{description}</p>
    </div>
  );
}
