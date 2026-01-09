import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import type { EducationItem } from "@/types/preview";

type EducationProps = {
  data?: EducationItem[];
};

const Education = ({ data }: EducationProps) => {
  if (!data || data.length === 0) return null;

  return (
    <Card className="bg-transparent rounded-none border-0 shadow-none mt-4 p-0 gap-0 py-5">
      {/* Section header */}
      <div className="flex items-center gap-5 mb-3">
        <h2 className="text-sm font-semibold text-black">
          Education and Training
        </h2>
        <div className="flex-1 h-px bg-black/30" />
      </div>

      <CardContent className="p-0 text-black space-y-6">
        {data.map((e, idx) => (
          <div
            key={idx}
            className="grid grid-cols-[260px_1fr] gap-6 items-start"
          >
            {/* LEFT COLUMN */}
            <div className="text-sm">
              <p className="font-semibold">
                {e.institution}
                {e.location ? ` | ${e.location}` : ""}
              </p>
              <p className="italic">
                {e.degree}
                {e.field_of_study ? ` in ${e.field_of_study}` : ""}
              </p>
              {e.graduation_year && (
                <p className="text-xs text-black/70">{e.graduation_year}</p>
              )}
            </div>

            {/* RIGHT COLUMN (Honors / Notes) */}
            {e.honors && e.honors.length > 0 && (
              <ul className="list-disc text-sm space-y-1">
                {e.honors.map((honor, hIdx) => (
                  <li key={hIdx}>{honor}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default Education;
