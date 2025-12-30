import { Card, CardContent, CardTitle } from "@/components/ui/card";
import React from "react";
import type { KeySkills } from "@/types/preview";

type SkillsProps = {
  data?: KeySkills;
};

const defaultSkills: KeySkills = {
  marketing: ["Digital Marketing", "SEO & SEM", "Content Strategy"],
  analytics: ["Google Analytics", "Data Interpretation"],
  tools: ["Google Ads", "Meta Ads Manager"],
  soft_skills: ["Communication", "Problem Solving"],
};

const Skills = ({ data }: SkillsProps) => {
  const skills = data ?? defaultSkills;

  return (
    <Card className="bg-transparent rounded-none border-0 shadow-none border-black gap-2">
      <CardTitle className="text-black font-extrabold text-2xl uppercase tracking-wide">
        Skills
      </CardTitle>

      <CardContent className="p-0 text-black space-y-2 text-sm">
        {/* Marketing */}
        <div className="grid grid-cols-[140px_1fr] gap-2">
          <p className="font-semibold">Marketing</p>
          <p>{(skills.marketing ?? []).join(", ")}</p>
        </div>

        {/* Analytics */}
        <div className="grid grid-cols-[140px_1fr] gap-2">
          <p className="font-semibold">Analytics</p>
          <p>{(skills.analytics ?? []).join(", ")}</p>
        </div>

        {/* Tools */}
        <div className="grid grid-cols-[140px_1fr] gap-2">
          <p className="font-semibold">Tools</p>
          <p>{(skills.tools ?? []).join(", ")}</p>
        </div>

        {/* Soft Skills */}
        <div className="grid grid-cols-[140px_1fr] gap-2">
          <p className="font-semibold">Soft Skills</p>
          <p>{(skills.soft_skills ?? []).join(", ")}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Skills;
