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
  degree: string;
  field_of_study: string;
  institution: string;
  graduation_year: string;
};

const Education = () => {
  const step = useResumeStore((s) => s.step);
  const setStep = useResumeStore((s) => s.setStep);
  const setEducation = useResumeStore((s) => s.setEducation);
  const storedEducation = useResumeStore((s) => s.education);
  const removeEducation = useResumeStore((s) => s.removeEducation);

  const [education, setEducationState] = useState(() => {
    if (storedEducation && storedEducation.length > 0) {
      return storedEducation;
    }
    return [
      {
        degree: "",
        field_of_study: "",
        institution: "",
        location: "",
        graduation_year: "",
        honors: [""],
      },
    ];
  });

  const [errors, setErrors] = useState<Record<number, Partial<ErrorObj>>>({});

  const validate = () => {
    const newErrors: Record<number, Partial<ErrorObj>> = {};

    education.forEach((edu, idx) => {
      const e: Partial<ErrorObj> = {};

      if (!edu.degree.trim()) e.degree = "Required";
      if (!edu.field_of_study?.trim()) e.field_of_study = "Required";
      if (!edu.institution.trim()) e.institution = "Required";
      if (!edu.graduation_year?.trim()) e.graduation_year = "Required";

      if (Object.keys(e).length > 0) newErrors[idx] = e;
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const addEducation = () => {
    setEducationState([
      ...education,
      {
        degree: "",
        field_of_study: "",
        institution: "",
        location: "",
        graduation_year: "",
        honors: [""],
      },
    ]);
  };

  const updateField = (index: number, field: string, value: any) => {
    const updated = [...education];
    updated[index] = { ...updated[index], [field]: value };
    setEducationState(updated);
  };

  const updateHonor = (eduIndex: number, honorIndex: number, value: string) => {
    const updated = [...education];
    if (!updated[eduIndex]) return;
    if (!updated[eduIndex].honors) updated[eduIndex].honors = [""];
    updated[eduIndex].honors![honorIndex] = value;
    setEducationState(updated);
  };

  const addHonor = (index: number) => {
    const updated = [...education];
    if (!updated[index]) return;
    if (!updated[index].honors) updated[index].honors = [""];
    else updated[index].honors.push("");
    setEducationState(updated);
  };

  return (
    <div className="h-full flex flex-col bg-background text-foreground">
      {/* TITLE */}
      <div className="px-10 pt-10">
        <h1 className="text-3xl font-semibold tracking-tight">Education</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Add your educational background. Keep it concise.
        </p>
      </div>

      {/* CONTENT */}
      <div className="flex-1 overflow-y-auto lg:px-10 py-8">
        <div className="space-y-10 max-w-4xl">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-border p-6 bg-secondary/30 space-y-6"
            >
              <div className="flex justify-end">
                <Button
                  onClick={() => {
                    removeEducation(idx);
                    const copy = [...education];
                    copy.splice(idx, 1);
                    setEducationState(
                      copy.length
                        ? copy
                        : [
                            {
                              degree: "",
                              field_of_study: "",
                              institution: "",
                              location: "",
                              graduation_year: "",
                              honors: [""],
                            },
                          ]
                    );
                  }}
                  size="icon"
                  variant="destructive"
                >
                  <TrashIcon className="w-4 h-4" />
                </Button>
              </div>

              {/* MAIN */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label>Degree *</Label>
                  <Input
                    placeholder="B.Tech / Diploma"
                    value={edu.degree}
                    onChange={(e) => updateField(idx, "degree", e.target.value)}
                  />
                  {errors[idx]?.degree && (
                    <p className="text-xs text-red-500">
                      {errors[idx]?.degree}
                    </p>
                  )}
                </div>

                <div className="space-y-1">
                  <Label>Field of Study *</Label>
                  <Input
                    placeholder="Computer Science"
                    value={edu.field_of_study}
                    onChange={(e) =>
                      updateField(idx, "field_of_study", e.target.value)
                    }
                  />
                  {errors[idx]?.field_of_study && (
                    <p className="text-xs text-red-500">
                      {errors[idx]?.field_of_study}
                    </p>
                  )}
                </div>

                <div className="space-y-1">
                  <Label>Institution *</Label>
                  <Input
                    placeholder="XYZ University / College"
                    value={edu.institution}
                    onChange={(e) =>
                      updateField(idx, "institution", e.target.value)
                    }
                  />
                  {errors[idx]?.institution && (
                    <p className="text-xs text-red-500">
                      {errors[idx]?.institution}
                    </p>
                  )}
                </div>

                <div className="space-y-1">
                  <Label>Location (optional)</Label>
                  <Input
                    placeholder="Hyderabad, India"
                    value={edu.location}
                    onChange={(e) =>
                      updateField(idx, "location", e.target.value)
                    }
                  />
                </div>

                <div className="space-y-1 md:col-span-2">
                  <Label>Graduation Year *</Label>
                  <Input
                    placeholder="2026"
                    value={edu.graduation_year}
                    onChange={(e) =>
                      updateField(idx, "graduation_year", e.target.value)
                    }
                  />
                  {errors[idx]?.graduation_year && (
                    <p className="text-xs text-red-500">
                      {errors[idx]?.graduation_year}
                    </p>
                  )}
                </div>
              </div>

              {/* HONORS */}
              <div className="space-y-3">
                <Label>Honors / Achievements (optional)</Label>
                {edu.honors?.map((honor, hIdx) => (
                  <Input
                    key={hIdx}
                    placeholder="First Class with Distinction"
                    value={honor}
                    onChange={(e) => updateHonor(idx, hIdx, e.target.value)}
                  />
                ))}

                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => addHonor(idx)}
                  className="flex gap-2 w-fit"
                >
                  <PlusIcon className="w-4 " />
                  Add Honor
                </Button>
              </div>
            </div>
          ))}

          <Button variant="outline" onClick={addEducation} className="gap-2">
            <PlusIcon className="h-4 w-4" /> Add Education
          </Button>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="px-10 py-6 border-t flex justify-between">
        <Button
          variant="secondary"
          onClick={() => {
            setEducation(education);
            if (step > 1) setStep(step - 1);
          }}
        >
          <ArrowLeftIcon className="h-4 w-4" /> Previous
        </Button>

        <Button
          onClick={() => {
            if (!validate()) return;
            setEducation(education);
            if (step < 7) setStep(step + 1);
          }}
          className="bg-primary text-primary-foreground gap-2"
        >
          Next
          <ArrowRightIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Education;
