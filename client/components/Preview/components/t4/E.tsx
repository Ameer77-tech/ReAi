import React from "react";

type EProps = {
  degree: string;
  fieldOfStudy?: string;
  institute: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  honors?: string[];
};

const E = ({
  degree,
  fieldOfStudy,
  institute,
  location,
  startDate,
  endDate,
  honors = [],
}: EProps) => {
  return (
    <div className="space-y-1 text-black">
      {/* TOP ROW: DEGREE + DATE */}
      <div className="flex justify-between items-start">
        <p className="font-semibold text-sm">
          {degree}
          {fieldOfStudy ? ` in ${fieldOfStudy}` : ""}
        </p>

        {(startDate || endDate) && (
          <p className="text-sm whitespace-nowrap">
          {endDate}
          </p>
        )}
      </div>

      {/* INSTITUTE */}
      <p className="text-sm">
        {institute}
        {location ? `, ${location}` : ""}
      </p>

      {/* BULLETS */}
      {honors.length > 0 && (
        <ul className="list-disc ml-5 text-sm space-y-1">
          {honors.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default E;
