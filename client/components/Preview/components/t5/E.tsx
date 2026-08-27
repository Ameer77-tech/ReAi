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
    <div className="mb-2">
      {/* Header row */}
      <div className="flex justify-between items-baseline gap-2">
        <div>
          <p className="font-bold text-xs leading-tight text-black">
            {degree} {fieldOfStudy ? `in ${fieldOfStudy}` : ""}
          </p>
          <p className="font-semibold text-xs text-black/85">{institute}</p>
          {location && <p className="text-[11px] text-black/60">{location}</p>}
        </div>

        <p className="text-xs font-semibold whitespace-nowrap text-right text-black/70">
          {gradYear}
        </p>
      </div>

      {/* Honors */}
      {honors.length > 0 && (
        <ul className="mt-0.5 ml-4 list-disc text-[11px] text-black/75 space-y-0.5">
          {honors.map((honor, idx) => (
            <li key={idx}>{honor}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
