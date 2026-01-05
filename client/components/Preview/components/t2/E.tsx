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
    <div className="grid grid-cols-[260px_1fr] gap-6 items-start mb-5">
      {/* LEFT COLUMN */}
      <div className="text-sm">
        <p className="font-semibold">
          {institute}
          {location ? ` | ${location}` : ""}
        </p>

        <p className="italic">
          {degree}
          {fieldOfStudy ? ` in ${fieldOfStudy}` : ""}
        </p>

        {gradYear && <p className="text-xs text-black/70">{gradYear}</p>}
      </div>

      {/* RIGHT COLUMN */}
      {honors.length > 0 && (
        <ul className="list-disc text-sm space-y-1">
          {honors.map((honor, idx) => (
            <li key={idx}>{honor}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
