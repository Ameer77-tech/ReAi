import React from "react";

type EProps = {
  institute: string;
  degree: string;
  fieldOfStudy: string;
  gradYear: string;
  location: string;
  honors: string[];
};

export default function E({
  institute,
  degree,
  fieldOfStudy,
  gradYear,
  location,
  honors,
}: EProps) {
  return (
    <div className="mb-5">
      {/* Header row */}
      <div className="grid grid-cols-1 gap-2 items-start">
        <p className="text-sm whitespace-nowrap text-gray-600 italic">
          {gradYear}
        </p>
        <div>
          <p className="text-sm">
            {degree} in {fieldOfStudy}
          </p>
          <p className="font-semibold text-sm leading-tight">{institute}</p>
          <p className="text-sm text-black/70">{location}</p>
        </div>
      </div>

      {/* Honors */}
      {honors.length > 0 && (
        <ul className="mt-1 ml-4 list-disc text-sm font-medium">
          {honors.map((honor, idx) => (
            <li key={idx}>{honor}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
