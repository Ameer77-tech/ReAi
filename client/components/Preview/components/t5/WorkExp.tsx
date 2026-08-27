import { Card, CardContent, CardTitle } from "@/components/ui/card";
import React from "react";
import type { WorkExperienceItem } from "@/types/preview";

type WorkExpProps = {
  data?: WorkExperienceItem[];
};

const defaultWork: WorkExperienceItem[] = [
  {
    job_title: "Software Engineering Intern",
    employer: "TechNova Solutions",
    location: "Hyderabad, India",
    start_date: "Jan 2025",
    end_date: "Jun 2025",
    achievements: [
      "Built REST APIs using Node.js and Express",
      "Implemented JWT-based authentication",
      "Collaborated with frontend team on React integration",
    ],
  },
];

const WorkExp = ({ data }: WorkExpProps) => {
  const workExperience = data && data.length > 0 ? data : defaultWork;

  return (
    <Card className="bg-transparent rounded-none border-0 shadow-none p-0 mb-2">
      <CardTitle className="text-black font-bold text-base uppercase tracking-wide border-b border-black pb-0.5 mb-1.5">
        Work Experience
      </CardTitle>

      <CardContent className="p-0 text-black">
        {workExperience.map((w, idx) => (
          <div key={idx} className="mb-2.5">
            {/* Header row */}
            <div className="flex justify-between items-baseline gap-2">
              <div>
                <p className="font-bold text-xs leading-tight text-black">
                  {w.job_title}
                </p>
                {w.employer && (
                  <p className="text-xs font-semibold text-black/80">{w.employer}</p>
                )}
                {w.location && <p className="text-[11px] text-black/60">{w.location}</p>}
              </div>

              <p className="text-xs whitespace-nowrap text-right text-black/70">
                {w.start_date} – {w.end_date}
              </p>
            </div>

            {/* Achievements */}
            {w.achievements && w.achievements.length > 0 && (
              <ul className="mt-1 ml-4 list-disc text-xs text-black/80 leading-relaxed space-y-0.5">
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
