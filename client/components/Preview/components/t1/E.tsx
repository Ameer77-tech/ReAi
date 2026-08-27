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
    <div className="mb-4">
      {/* Header row */}
      <div className="grid grid-cols-[1fr_auto] gap-2 items-baseline">
        <div>
          <p className="text-sm font-bold leading-tight">
            {degree} {fieldOfStudy ? `in ${fieldOfStudy}` : ""}
          </p>
          <p className="font-semibold text-xs text-black/80">{institute}</p>
          {location && <p className="text-xs text-black/70 italic">{location}</p>}
        </div>

        <p className="text-xs font-semibold whitespace-nowrap text-right">
          {gradYear}
        </p>
      </div>

      {/* Honors */}
      {honors.length > 0 && (
        <ul className="mt-1 ml-4 list-disc text-xs font-medium space-y-0.5">
          {honors.map((honor, idx) => (
            <li key={idx}>{honor}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
