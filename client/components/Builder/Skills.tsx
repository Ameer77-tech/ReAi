"use client";

import React, { useState } from "react";
import { useResumeStore } from "@/app/store/store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

const Skills = () => {
  const step = useResumeStore((s) => s.step);
  const setStep = useResumeStore((s) => s.setStep);

  const storedSkills = useResumeStore((s) => s.key_skills);
  const setSkills = useResumeStore((s) => s.setSkills);

  const [skills, setSkillsState] = useState(() => {
    return (
      storedSkills || {
        marketing: [""],
        analytics: [""],
        tools: [""],
        soft_skills: [""],
      }
    );
  });

  const addSkill = (category: keyof typeof skills) => {
    const updated = { ...skills };
    updated[category].push("");
    setSkillsState(updated);
  };

  const updateSkill = (
    category: keyof typeof skills,
    idx: number,
    value: string
  ) => {
    const updated = { ...skills };
    updated[category][idx] = value;
    setSkillsState(updated);
  };

  const removeSkill = (category: keyof typeof skills, idx: number) => {
    const updated = { ...skills };
    updated[category].splice(idx, 1);
    if (updated[category].length === 0) updated[category].push("");
    setSkillsState(updated);
  };

  const categories = [
    { key: "marketing", label: "Marketing Skills" },
    { key: "analytics", label: "Analytics Skills" },
    { key: "tools", label: "Tools & Software" },
    { key: "soft_skills", label: "Soft Skills" },
  ] as const;

  return (
    <div className="h-full flex flex-col bg-background text-foreground">
      {/* TITLE */}
      <div className="px-10 pt-10">
        <h1 className="text-3xl font-semibold tracking-tight">Skills</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Add strengths that represent your capabilities.
        </p>
      </div>

      {/* CONTENT */}
      <div className="flex-1 overflow-y-auto px-10 py-8">
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl">
          {categories.map((cat) => (
            <div
              key={cat.key}
              className="rounded-xl border border-border p-6 bg-secondary/30 space-y-4"
            >
              <Label className="text-base font-medium">{cat.label}</Label>

              {skills[cat.key].map((item, idx) => (
                <div key={idx} className="flex gap-2">
                  <Input
                    value={item}
                    placeholder="Add skill"
                    onChange={(e) => updateSkill(cat.key, idx, e.target.value)}
                  />
                  <Button
                    size="icon"
                    variant="destructive"
                    onClick={() => removeSkill(cat.key, idx)}
                  >
                    <TrashIcon className="w-4 h-4" />
                  </Button>
                </div>
              ))}

              <Button
                variant="outline"
                size="sm"
                onClick={() => addSkill(cat.key)}
                className="flex gap-2 w-fit"
              >
                <PlusIcon className="w-4 h-4" /> Add {cat.label}
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* ACTIONS */}
      <div className="px-10 py-6 border-t flex justify-between">
        <Button
          variant="secondary"
          onClick={() => {
            setSkills(skills);
            if (step > 1) setStep(step - 1);
          }}
          className="flex items-center gap-2"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Previous
        </Button>

        <Button
          onClick={() => {
            setSkills(skills);
            if (step < 7) setStep(step + 1);
          }}
          className="flex items-center gap-2 bg-primary text-primary-foreground"
        >
          Next
          <ArrowRightIcon className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default Skills;
