import { Card, CardContent, CardTitle } from "@/components/ui/card";
import React from "react";
import type { KeySkills } from "@/types/preview";

type SkillsProps = {
  data?: KeySkills;
};

const defaultSkills: string[] = [
  "Digital Marketing",
  "SEO & SEM",
  "Content Strategy",
  "Google Analytics",
  "Data Interpretation",
  "Google Ads",
  "Meta Ads Manager",
  "Communication",
  "Problem Solving",
];

const Skills = ({ data }: SkillsProps) => {
  const skills: string[] = data
    ? Object.values(data).flat().filter(Boolean)
    : defaultSkills;

  return (
    <Card className="bg-transparent rounded-none shadow-none border-0 gap-2 p-0 mt-5">
      <CardTitle className="text-xl tracking-wide text-cyan-900">
        Skills
      </CardTitle>

      <CardContent className="p-0 text-black font-medium space-y-1 text-sm">
        {skills.slice(0,10).map((skill, index) => (
          <p key={index} className="leading-snug">
            • {skill}
          </p>
        ))}
      </CardContent>
    </Card>
  );
};

export default Skills;
