import React from "react";

type EProps = {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  gradYear: string;
  location: string;
  honors: string | null;
};

export default function E({
  institution,
  degree,
  fieldOfStudy,
  gradYear,
  location,
  honors,
}: EProps) {
  return (
    <div className="mb-4">
      <p className="font-semibold">{institution}</p>
      <p className="text-sm">
        {degree} — {fieldOfStudy}
      </p>
      <p className="text-xs">
        {gradYear} • {location}
      </p>
      {honors && <p className="text-xs italic">Honors: {honors}</p>}
    </div>
  );
}
