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
    <Card className="bg-transparent rounded-none border-0 shadow-none p-0 mb-2">
      <CardTitle className="text-black font-bold text-base uppercase tracking-wide border-b border-black pb-0.5 mb-1.5">
        Skills
      </CardTitle>

      <CardContent className="p-0 text-black space-y-1 text-xs">
        {/* Marketing */}
        {(skills?.marketing ?? []).length > 0 && (
          <div className="grid grid-cols-[120px_1fr] gap-2">
            <p className="font-semibold text-black">Marketing</p>
            <p className="text-black/80 font-medium">{(skills.marketing ?? []).join(", ")}</p>
          </div>
        )}

        {/* Analytics */}
        {(skills.analytics ?? []).length > 0 && (
          <div className="grid grid-cols-[120px_1fr] gap-2">
            <p className="font-semibold text-black">Analytics</p>
            <p className="text-black/80 font-medium">{(skills.analytics ?? []).join(", ")}</p>
          </div>
        )}

        {/* Tools */}
        {(skills.tools ?? []).length > 0 && (
          <div className="grid grid-cols-[120px_1fr] gap-2">
            <p className="font-semibold text-black">Tools</p>
            <p className="text-black/80 font-medium">{(skills.tools ?? []).join(", ")}</p>
          </div>
        )}

        {/* Soft Skills */}
        {(skills.soft_skills ?? []).length > 0 && (
          <div className="grid grid-cols-[120px_1fr] gap-2">
            <p className="font-semibold text-black">Soft Skills</p>
            <p className="text-black/80 font-medium">{(skills.soft_skills ?? []).join(", ")}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Skills;
