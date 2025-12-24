import { Card, CardContent, CardTitle } from "@/components/ui/card";
import React from "react";

const Skills = () => {
  const skills: KeySkills = {
    marketing: [
      "Digital Marketing",
      "SEO & SEM",
      "Content Strategy",
      "Campaign Management",
    ],
    analytics: [
      "Google Analytics",
      "Data Interpretation",
      "A/B Testing",
      "Performance Reporting",
    ],
    tools: ["Google Ads", "Meta Ads Manager", "HubSpot", "Excel", "PowerPoint"],
    soft_skills: [
      "Communication",
      "Problem Solving",
      "Time Management",
      "Team Collaboration",
    ],
  };

  return (
    <Card className="bg-transparent rounded-none border-0 shadow-none border-black gap-2">
      <CardTitle className="text-black font-extrabold text-2xl uppercase tracking-wide">
        Skills
      </CardTitle>

      <CardContent className="p-0 text-black space-y-2 text-sm">
        {/* Marketing */}
        <div className="grid grid-cols-[140px_1fr] gap-2">
          <p className="font-semibold">Marketing</p>
          <p>{skills.marketing.join(", ")}</p>
        </div>

        {/* Analytics */}
        <div className="grid grid-cols-[140px_1fr] gap-2">
          <p className="font-semibold">Analytics</p>
          <p>{skills.analytics.join(", ")}</p>
        </div>

        {/* Tools */}
        <div className="grid grid-cols-[140px_1fr] gap-2">
          <p className="font-semibold">Tools</p>
          <p>{skills.tools.join(", ")}</p>
        </div>

        {/* Soft Skills */}
        <div className="grid grid-cols-[140px_1fr] gap-2">
          <p className="font-semibold">Soft Skills</p>
          <p>{skills.soft_skills.join(", ")}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Skills;
