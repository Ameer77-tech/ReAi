import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import type { WorkExperienceItem } from "@/types/preview";

type WorkExpProps = {
  data?: WorkExperienceItem[];
};

const WorkExp = ({ data }: WorkExpProps) => {
  if (!data || data.length === 0) return null;

  return (
    <Card className="bg-transparent rounded-none border-0 shadow-none mt-4 gap-0 p-0 pb-3">
      {/* Section header */}
      <div className="flex items-center mb-3 gap-5">
        <h2 className="text-sm font-semibold text-black">Experience</h2>
        <div className="w-full h-px bg-black/30" />
      </div>

      <CardContent className="p-0 text-black space-y-6">
        {data.map((w, idx) => (
          <div
            key={idx}
            className="grid grid-cols-[260px_1fr] gap-6 items-start"
          >
            {/* LEFT COLUMN */}
            <div className="text-sm">
              <p className="font-semibold">
                {w.employer}
                {w.location ? ` | ${w.location}` : ""}
              </p>
              <p className="italic">{w.job_title}</p>
              <p className="text-xs text-black/70">
                {w.start_date} – {w.end_date}
              </p>
            </div>

            {/* RIGHT COLUMN */}
            {w.achievements && w.achievements.length > 0 && (
              <ul className="list-disc text-sm space-y-1">
                {w.achievements.map((point, pIdx) => (
                  <li key={pIdx}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default WorkExp;
