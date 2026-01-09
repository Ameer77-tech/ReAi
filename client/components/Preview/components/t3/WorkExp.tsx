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
    <Card className="bg-transparent rounded-none border-0 shadow-none gap-2 mt-4 p-0">
      <CardTitle className="text-cyan-900 text-lg tracking-wide">
        Experience
      </CardTitle>

      <CardContent className="p-0 text-black">
        {workExperience.map((w, idx) => (
          <div key={idx} className="mb-5">
            {/* Header row */}
            <div className="grid grid-cols-1 items-start">
              <div>
                <p className="text-lg leading-tight font-bold">{w.job_title}</p>
              </div>

              <p className="text-sm whitespace-nowrap italic text-gray-600">
                {w.start_date} – {w.end_date}
              </p>
            </div>

            {/* Achievements */}
            {w.achievements && w.achievements.length > 0 && (
              <ul className="mt-1 ml-4 list-disc text-sm italic text-gray-600">
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
