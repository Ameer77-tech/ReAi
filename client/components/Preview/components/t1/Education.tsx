import { Card, CardContent, CardTitle } from "@/components/ui/card";
import React from "react";
import E from "./E";

const Education = () => {
  const education = [
    {
      institution: "Aditya Engineering College",
      degree: "B.Tech",
      fieldOfStudy: "Computer Science and Engineering",
      gradYear: "2026",
      location: "Kakinada, Andhra Pradesh",
      honors: "CGPA 8.5",
    },
    {
      institution: "XYZ Polytechnic College",
      degree: "Diploma",
      fieldOfStudy: "Computer Engineering",
      gradYear: "2023",
      location: "Andhra Pradesh",
      honors: null,
    },
    {
      institution: "Sri Chaitanya Junior College",
      degree: "Intermediate",
      fieldOfStudy: "MPC",
      gradYear: "2021",
      location: "Andhra Pradesh",
      honors: "Top 5% Batch Rank",
    },
    {
      institution: "St. Joseph’s High School",
      degree: "SSC",
      fieldOfStudy: "General Education",
      gradYear: "2019",
      location: "Andhra Pradesh",
      honors: null,
    },
  ];

  type eduProps = {
    key: string;
  };

  return (
    <Card className="bg-transparent rounded-none border-0 shadow-none border-b-2 border-black gap-2">
      <CardTitle className="text-black font-extrabold text-2xl uppercase tracking-wide">
        Education
      </CardTitle>
      <CardContent className="text-black">
        {education.map((e, idx) => (
          <E
            key={idx}
            institute={e.institution}
            degree={e.degree}
            fieldOfStudy={e.fieldOfStudy}
            gradYear={e.gradYear}
            location={e.location}
            honors={e.honors}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default Education;
