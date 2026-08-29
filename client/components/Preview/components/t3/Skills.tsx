import { Card, CardContent, CardTitle } from "@/components/ui/card";
import React from "react";
import type { KeySkills } from "@/types/preview";

type SkillsProps = {
  data?: KeySkills;
};

const defaultSkills: string[] = [
  "React.js",
  "Next.js",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "Git",
  "GitHub",
];

const Skills = ({ data }: SkillsProps) => {
  const skills: string[] = data
    ? Object.values(data).flat().filter(Boolean)
    : defaultSkills;

  return (
    <Card className="bg-transparent rounded-none shadow-none border-0 p-0">
      <CardTitle className="text-base tracking-wide text-cyan-900 font-bold mb-1">
        Skills
      </CardTitle>

      <CardContent className="p-0 text-black font-medium space-y-0.5 text-xs">
        {skills.slice(0, 10).map((skill, index) => (
          <p key={index} className="leading-snug">
            • {skill}
          </p>
        ))}
      </CardContent>
    </Card>
  );
};

export default Skills;
