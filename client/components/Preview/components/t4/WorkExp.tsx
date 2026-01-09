import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import type { WorkExperienceItem } from "@/types/preview";

type WorkExpProps = {
  data?: WorkExperienceItem[];
};

const WorkExp = ({ data }: WorkExpProps) => {
  if (!data || data.length === 0) return null;

  return (
    <Card className="bg-transparent border-0 shadow-none rounded-none mt-4 p-0 gap-2">
      {/* SECTION HEADER */}
      <div className="border-b border-black">
        <h2 className="text-lg font-bold uppercase text-black">
          Professional Experience
        </h2>
      </div>

      <CardContent className="p-0 space-y-5 text-black">
        {data.map((w, idx) => (
          <div key={idx} className="space-y-1">
            {/* TOP ROW: ROLE + DATE */}
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold text-sm">
                  {w.job_title}
                  {w.employer ? `, ${w.employer}` : ""}
                </p>
              </div>

              <p className="text-sm whitespace-nowrap">
                {w.start_date} – {w.end_date}
              </p>
            </div>

            {/* BULLETS */}
            {w.achievements && w.achievements.length > 0 && (
              <ul className="list-disc ml-5 text-sm space-y-1">
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
