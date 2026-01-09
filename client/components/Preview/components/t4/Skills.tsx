import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import type { KeySkills } from "@/types/preview";

type SkillsProps = {
  data?: KeySkills;
};

const Skills = ({ data }: SkillsProps) => {
  if (!data) return null;

  return (
    <Card className="bg-transparent rounded-none border-0 shadow-none gap-1 p-0 mt-4">
      {/* Heading + line */}
      <div className="flex items-center gap-5 border-b border-black">
        <h2 className="text-lg uppercase font-bold text-black ">Skills</h2>
      </div>

      <CardContent className="p-0 text-black text-sm space-y-1">
        {(data.marketing ?? []).length > 0 && (
          <div className="grid grid-cols-[160px_1fr]">
            <p className="font-semibold">Marketing</p>
            <p>{(data.marketing ?? []).join(", ")}</p>
          </div>
        )}

        {(data.analytics ?? []).length > 0 && (
          <div className="grid grid-cols-[160px_1fr]">
            <p className="font-semibold">Analytics</p>
            <p>{(data.analytics ?? []).join(", ")}</p>
          </div>
        )}

        {(data.tools ?? []).length > 0 && (
          <div className="grid grid-cols-[160px_1fr]">
            <p className="font-semibold">Tools</p>
            <p>{(data.tools ?? []).join(", ")}</p>
          </div>
        )}

        {(data.soft_skills ?? []).length > 0 && (
          <div className="grid grid-cols-[160px_1fr]">
            <p className="font-semibold">Soft Skills</p>
            <p>{(data.soft_skills ?? []).join(", ")}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Skills;
