import { Card, CardContent, CardTitle } from "@/components/ui/card";
import React from "react";
import E from "./E";
import type { EducationItem } from "@/types/preview";

type EducationProps = {
  data?: EducationItem[];
};

const defaultEducation: EducationItem[] = [
  {
    institution: "Aditya Engineering College",
    degree: "B.Tech",
    field_of_study: "Computer Science and Engineering",
    graduation_year: "2026",
    location: "Kakinada, Andhra Pradesh",
    honors: ["CGPA 8.5", "Merit Scholarship Recipient"],
  },
  {
    institution: "XYZ Polytechnic College",
    degree: "Diploma",
    field_of_study: "Computer Engineering",
    graduation_year: "2023",
    location: "Andhra Pradesh",
    honors: [],
  },
];

const Education = ({ data }: EducationProps) => {
  const education = data && data.length > 0 ? data : defaultEducation;

  return (
    <Card className="bg-transparent rounded-none border-0 shadow-none p-0 mb-2">
      <CardTitle className="text-black font-bold text-base uppercase tracking-wide border-b border-black pb-0.5 mb-1.5">
        Education
      </CardTitle>
      <CardContent className="text-black grid grid-cols-1 p-0">
        {education.map((e, idx) => (
          <E
            key={idx}
            institute={e.institution}
            degree={e.degree}
            fieldOfStudy={e.field_of_study ?? ""}
            gradYear={e.graduation_year ?? ""}
            location={e.location ?? ""}
            honors={e.honors ?? []}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default Education;
