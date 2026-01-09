"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { useResumeStore } from "@/app/store/store";

type ErrorObj = {
  job_title?: string;
  employer?: string;
  location?: string;
  start_date?: string;
  end_date?: string;
  achievements?: string;
};

const Experience = () => {
  const step = useResumeStore((s) => s.step);
  const setStep = useResumeStore((s) => s.setStep);

  const storedExperience = useResumeStore((s) => s.work_experience);
  const setExperience = useResumeStore((s) => s.setExperience);
  const removeExperience = useResumeStore((s) => s.removeExperience);

  const [experience, setExperienceState] = useState(() => {
    return storedExperience?.length
      ? storedExperience
      : [
          {
            job_title: "",
            employer: "",
            location: "",
            start_date: "",
            end_date: "",
            achievements: [""],
          },
        ];
  });

  const [errors, setErrors] = useState<Record<number, ErrorObj>>({});

  const validate = () => {
    const newErrors: Record<number, ErrorObj> = {};

    experience.forEach((exp, idx) => {
      const err: ErrorObj = {};

      if (!exp.job_title.trim()) err.job_title = "Required";
      if (!exp.employer.trim()) err.employer = "Required";
      if (!exp.location?.trim()) err.location = "Required";
      if (!exp.start_date?.trim()) err.start_date = "Required";
      if (!exp.end_date?.trim()) err.end_date = "Required";

      const hasAchievement = exp.achievements?.some((a) => a.trim() !== "");
      if (!hasAchievement) err.achievements = "Add at least one achievement";

      if (Object.keys(err).length) newErrors[idx] = err;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const addExperience = () => {
    setExperienceState((prev) => [
      ...prev,
      {
        job_title: "",
        employer: "",
        location: "",
        start_date: "",
        end_date: "",
        achievements: [""],
      },
    ]);
  };

  const updateField = (idx: number, field: string, value: string) => {
    const updated = [...experience];
    updated[idx] = { ...updated[idx], [field]: value };
    setExperienceState(updated);
  };

  const addAchievement = (idx: number) => {
    const updated = [...experience];
    if (!updated[idx]) return;
    if (!updated[idx].achievements) updated[idx].achievements = [""];
    else updated[idx].achievements.push("");
    setExperienceState(updated);
  };

  const updateAchievement = (expIdx: number, achIdx: number, value: string) => {
    const updated = [...experience];
    if (!updated[expIdx]) return;
    if (!updated[expIdx].achievements) updated[expIdx].achievements = [""];
    updated[expIdx].achievements![achIdx] = value;
    setExperienceState(updated);
  };

  return (
    <div className="h-full flex flex-col bg-background text-foreground">
      {/* TITLE */}
      <div className="px-10 pt-10">
        <h1 className="lg:text-3xl md:text-3xl text-2xl font-semibold tracking-tight">
          Professional Experience
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Add roles that highlight your real impact.
        </p>
      </div>

      {/* CONTENT */}
      <div className="flex-1 overflow-y-auto lg:px-10 py-8">
        <div className="space-y-10 max-w-4xl">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-border p-6 bg-secondary/30 space-y-6"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-medium">Experience #{idx + 1}</h2>

                <Button
                  size="icon"
                  variant="destructive"
                  onClick={() => {
                    removeExperience(idx);
                    const copy = [...experience];
                    copy.splice(idx, 1);
                    setExperienceState(
                      copy.length
                        ? copy
                        : [
                            {
                              job_title: "",
                              employer: "",
                              location: "",
                              start_date: "",
                              end_date: "",
                              achievements: [""],
                            },
                          ]
                    );
                  }}
                >
                  <TrashIcon className="w-4 h-4" />
                </Button>
              </div>

              {/* Fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label>Job Title *</Label>
                  <Input
                    value={exp.job_title}
                    onChange={(e) =>
                      updateField(idx, "job_title", e.target.value)
                    }
                    placeholder="Software Developer"
                  />
                  {errors[idx]?.job_title && (
                    <p className="text-xs text-red-500">
                      {errors[idx]?.job_title}
                    </p>
                  )}
                </div>

                <div className="space-y-1">
                  <Label>Employer *</Label>
                  <Input
                    value={exp.employer}
                    onChange={(e) =>
                      updateField(idx, "employer", e.target.value)
                    }
                    placeholder="Company Name"
                  />
                  {errors[idx]?.employer && (
                    <p className="text-xs text-red-500">
                      {errors[idx]?.employer}
                    </p>
                  )}
                </div>

                <div className="space-y-1">
                  <Label>Location *</Label>
                  <Input
                    value={exp.location}
                    onChange={(e) =>
                      updateField(idx, "location", e.target.value)
                    }
                    placeholder="Hyderabad, India"
                  />
                  {errors[idx]?.location && (
                    <p className="text-xs text-red-500">
                      {errors[idx]?.location}
                    </p>
                  )}
                </div>

                <div className="space-y-1">
                  <Label>Start Date *</Label>
                  <Input
                    value={exp.start_date}
                    onChange={(e) =>
                      updateField(idx, "start_date", e.target.value)
                    }
                    placeholder="Jan 2023"
                  />
                  {errors[idx]?.start_date && (
                    <p className="text-xs text-red-500">
                      {errors[idx]?.start_date}
                    </p>
                  )}
                </div>

                <div className="space-y-1 md:col-span-2">
                  <Label>End Date *</Label>
                  <Input
                    value={exp.end_date}
                    onChange={(e) =>
                      updateField(idx, "end_date", e.target.value)
                    }
                    placeholder="Present / Aug 2024"
                  />
                  {errors[idx]?.end_date && (
                    <p className="text-xs text-red-500">
                      {errors[idx]?.end_date}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <Label>Achievements *</Label>

                {(exp.achievements || []).map((ach, aIdx) => (
                  <Input
                    key={aIdx}
                    value={ach}
                    onChange={(e) =>
                      updateAchievement(idx, aIdx, e.target.value)
                    }
                    placeholder="Implemented feature improving performance"
                  />
                ))}

                {errors[idx]?.achievements && (
                  <p className="text-xs text-red-500">
                    {errors[idx]?.achievements}
                  </p>
                )}

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => addAchievement(idx)}
                  className="gap-2"
                >
                  <PlusIcon className="w-4 h-4" />
                  Add Achievement
                </Button>
              </div>
            </div>
          ))}

          <Button variant="outline" onClick={addExperience} className="gap-2">
            <PlusIcon className="h-4 w-4" />
            Add Another Experience
          </Button>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="px-10 py-6 border-t flex justify-between">
        <Button
          variant="secondary"
          onClick={() => {
            if (validate()) {
              setExperience(experience);
              if (step > 1) setStep(step - 1);
            }
          }}
        >
          <ArrowLeftIcon className="w-4 h-4" /> Previous
        </Button>

        <Button
          onClick={() => {
            if (!validate()) return;
            setExperience(experience);
            if (step < 7) setStep(step + 1);
          }}
        >
          Next
          <ArrowRightIcon className="w-4 h-4 inline-block" />
        </Button>
      </div>
    </div>
  );
};

export default Experience;
