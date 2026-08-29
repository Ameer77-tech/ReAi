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
    <div className="mb-3">
      {/* Header row */}
      <div className="flex flex-col gap-0.5">
        <p className="text-xs whitespace-nowrap text-gray-600 italic font-semibold">
          {gradYear}
        </p>
        <div>
          <p className="text-xs font-bold leading-snug text-black">
            {degree} {fieldOfStudy ? `in ${fieldOfStudy}` : ""}
          </p>
          <p className="text-xs text-gray-700 leading-tight">{institute}</p>
          {location && <p className="text-[11px] text-black/60">{location}</p>}
        </div>
      </div>

      {/* Honors */}
      {honors.length > 0 && (
        <ul className="mt-0.5 ml-3 list-disc text-[11px] font-medium text-gray-600 space-y-0.5">
          {honors.map((honor, idx) => (
            <li key={idx}>{honor}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
