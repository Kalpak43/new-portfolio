import Image from "next/image";
import React from "react";

export default function VolunteeringCard({
  duration,
  role,
  organization,
  description,
  badge,
}: {
  duration: string;
  role: string;
  organization: string;
  description: string;
  badge: string;
}) {
  return (
    <div className="rounded-xl border-2 border-accent p-4 space-y-2 card transtion-all duration-200">
      <div className="flex items-center justify-between gap-x-4">
        <div>
          <p className="text-sm text-secondary">{duration}</p>
          <h5 className="font-semibold">{role}</h5>
          <h6 className="text-sm">{organization}</h6>
        </div>
        <Image
          src={badge}
          width={300}
          height={300}
          alt="Core Team Badge"
          className="rounded-full max-w-16 aspect-square object-contain"
        />
      </div>
      <div>
        <p className="text-sm text-secondary">{description}</p>
      </div>
    </div>
  );
}
