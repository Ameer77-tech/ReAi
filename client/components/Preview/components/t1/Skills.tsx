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
    <Card className="bg-transparent rounded-none shadow-none border-0 gap-2 p-0">
      <CardTitle className="text-black italic text-sm bg-stone-300 rounded-full py-1 px-5 uppercase tracking-wide">
        Skills
      </CardTitle>

      <CardContent className="p-0 text-black font-medium space-y-2 text-sm">
        {/* Marketing */}
        {(skills?.marketing ?? []).length > 0 && (
          <div className="grid grid-cols-[140px_1fr] gap-2">
            <p className="font-semibold">Marketing</p>
            <p>{(skills.marketing ?? []).join(", ")}</p>
          </div>
        )}

        {/* Analytics */}
        {(skills.analytics ?? []).length > 0 && (
          <div className="grid grid-cols-[140px_1fr] gap-2">
            <p className="font-semibold">Analytics</p>
            <p>{(skills.analytics ?? []).join(", ")}</p>
          </div>
        )}

        {/* Tools */}
        {(skills.tools ?? []).length > 0 && (
          <div className="grid grid-cols-[140px_1fr] gap-2">
            <p className="font-semibold">Tools</p>
            <p>{(skills.tools ?? []).join(", ")}</p>
          </div>
        )}

        {/* Soft Skills */}
        {(skills.tools ?? []).length > 0 && (
          <div className="grid grid-cols-[140px_1fr] gap-2">
            <p className="font-semibold">Soft Skills</p>
            <p>{(skills.soft_skills ?? []).join(", ")}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Skills;
