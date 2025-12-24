import { Card, CardContent, CardTitle } from "@/components/ui/card";
import React from "react";

const WorkExp = () => {
  const workExperience = [
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
    {
      job_title: "Web Developer Intern",
      employer: "CodeCraft Labs",
      location: "Remote",
      start_date: "Jun 2024",
      end_date: "Dec 2024",
      achievements: [
        "Developed responsive UI using React and Tailwind CSS",
        "Optimized API calls reducing load time by 30%",
      ],
    },
  ];

  return (
    <Card className="bg-transparent rounded-none border-0 shadow-none border-b-2 border-black gap-2">
      <CardTitle className="text-black font-extrabold text-2xl uppercase tracking-wide">
        Work Experience
      </CardTitle>

      <CardContent className="p-0 text-black">
        {workExperience.map((w, idx) => (
          <div key={idx} className="mb-5">
            {/* Header row */}
            <div className="grid grid-cols-[1fr_auto] gap-2 items-start">
              <div>
                <p className="font-semibold text-sm leading-tight">
                  {w.job_title}
                </p>

                <p className="text-sm">
                  {w.employer}
                </p>

                <p className="text-xs text-muted-foreground">
                  {w.location}
                </p>
              </div>

              <p className="text-xs whitespace-nowrap">
                {w.start_date} – {w.end_date}
              </p>
            </div>

            {/* Achievements */}
            {w.achievements.length > 0 && (
              <ul className="mt-1 ml-4 list-disc text-xs text-muted-foreground">
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
