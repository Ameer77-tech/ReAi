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
  RocketLaunchIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import SubmitData from "@/lib/Submit";
import { useRouter } from "next/navigation";

type ErrorObj = {
  name?: string;
  description?: string;
  tools_used?: string;
};

const Projects = () => {
  const step = useResumeStore((s) => s.step);
  const setStep = useResumeStore((s) => s.setStep);

  const router = useRouter();

  const stored = useResumeStore((s) => s.projects);
  const setProject = useResumeStore((s) => s.setProjects);
  const removeProject = useResumeStore((s) => s.removeProject);

  const [pending, setPending] = useState(false);
  const [errors, setErrors] = useState<Record<number, ErrorObj>>({});

  const [projects, setProjectsState] = useState(() => {
    return stored?.length
      ? stored
      : [
          {
            name: "",
            description: "",
            outcomes: [""],
            tools_used: [""],
            link: "",
          },
        ];
  });

  const validate = () => {
    const newErrors: Record<number, ErrorObj> = {};

    projects.forEach((proj, idx) => {
      const err: ErrorObj = {};

      if (!proj.name.trim()) err.name = "Required";
      if (!proj.description.trim()) err.description = "Required";

      const hasTool = proj.tools_used.some((t) => t.trim() !== "");
      if (!hasTool) err.tools_used = "At least 1 required";

      if (Object.keys(err).length) newErrors[idx] = err;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const addProject = () => {
    setProjectsState((prev) => [
      ...prev,
      {
        name: "",
        description: "",
        outcomes: [""],
        tools_used: [""],
        link: "",
      },
    ]);
  };

  const updateField = (
    idx: number,
    field: keyof (typeof projects)[0],
    value: string
  ) => {
    const updated = [...projects];
    updated[idx] = { ...updated[idx], [field]: value };
    setProjectsState(updated);
  };

  const addOutcome = (idx: number) => {
    const updated = [...projects];
    updated[idx].outcomes.push("");
    setProjectsState(updated);
  };

  const updateOutcome = (
    projIdx: number,
    outcomeIdx: number,
    value: string
  ) => {
    const updated = [...projects];
    updated[projIdx].outcomes[outcomeIdx] = value;
    setProjectsState(updated);
  };

  const addTool = (idx: number) => {
    const updated = [...projects];
    updated[idx].tools_used.push("");
    setProjectsState(updated);
  };

  const updateTool = (projIdx: number, toolIdx: number, value: string) => {
    const updated = [...projects];
    updated[projIdx].tools_used[toolIdx] = value;
    setProjectsState(updated);
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setPending(true);
    setProject(projects);

    const state = useResumeStore.getState();
    try {
      const res = await SubmitData(state);
      if (res.ok) {
        alert(res.reply);
        router.replace("/");
      } else {
        alert(res.reply);
      }
    } catch (err) {
      console.log(err);
    }

    setPending(false);
  };

  return (
    <div className="h-full flex flex-col bg-background text-foreground">
      {/* TITLE */}
      <div className="px-10 pt-10">
        <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Highlight work that demonstrates your technical strength.
        </p>
      </div>

      {/* CONTENT */}
      <div className="flex-1 overflow-y-auto lg:px-10 py-8">
        <div className="space-y-10 max-w-4xl">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-border p-6 bg-secondary/30 space-y-6"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-medium">Project #{idx + 1}</h2>

                <Button
                  size="icon"
                  variant="destructive"
                  onClick={() => {
                    removeProject(idx);
                    const copy = [...projects];
                    copy.splice(idx, 1);
                    setProjectsState(
                      copy.length
                        ? copy
                        : [
                            {
                              name: "",
                              description: "",
                              outcomes: [""],
                              tools_used: [""],
                              link: "",
                            },
                          ]
                    );
                  }}
                >
                  <TrashIcon className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <Label>Project Name *</Label>
                  <Input
                    placeholder="E-commerce App"
                    value={proj.name}
                    onChange={(e) => updateField(idx, "name", e.target.value)}
                  />
                  {errors[idx]?.name && (
                    <p className="text-xs text-red-500">{errors[idx]?.name}</p>
                  )}
                </div>

                <div className="space-y-1">
                  <Label>Description *</Label>
                  <Input
                    placeholder="A MERN web app supporting payments…"
                    value={proj.description}
                    onChange={(e) =>
                      updateField(idx, "description", e.target.value)
                    }
                  />
                  {errors[idx]?.description && (
                    <p className="text-xs text-red-500">
                      {errors[idx]?.description}
                    </p>
                  )}
                </div>

                {/* Project Link stays optional */}
                <div className="space-y-2">
                  <Label>Project Link (optional)</Label>
                  <Input
                    placeholder="https://github.com/username/project"
                    value={proj.link}
                    onChange={(e) => updateField(idx, "link", e.target.value)}
                  />
                </div>
              </div>

              {/* OUTCOMES — OPTIONAL */}
              <div className="space-y-3">
                <Label>Outcomes (optional)</Label>
                {proj.outcomes.map((out, oIdx) => (
                  <Input
                    key={oIdx}
                    placeholder="Improved performance by 40%"
                    value={out}
                    onChange={(e) => updateOutcome(idx, oIdx, e.target.value)}
                  />
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => addOutcome(idx)}
                  className="flex gap-2 w-fit"
                >
                  <PlusIcon className="w-4 h-4" /> Add Outcome
                </Button>
              </div>

              {/* TOOLS REQUIRED */}
              <div className="space-y-3">
                <Label>Tools Used *</Label>
                {proj.tools_used.map((tool, tIdx) => (
                  <Input
                    key={tIdx}
                    placeholder="React, Tailwind, MongoDB"
                    value={tool}
                    onChange={(e) => updateTool(idx, tIdx, e.target.value)}
                  />
                ))}

                {errors[idx]?.tools_used && (
                  <p className="text-xs text-red-500">
                    {errors[idx]?.tools_used}
                  </p>
                )}

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => addTool(idx)}
                  className="flex gap-2 w-fit"
                >
                  <PlusIcon className="w-4 h-4" /> Add Tool
                </Button>
              </div>
            </div>
          ))}

          <Button variant="outline" onClick={addProject} className="gap-2">
            <PlusIcon className="w-4 h-4" /> Add Another Project
          </Button>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="px-10 py-6 border-t flex justify-between">
        <Button
          variant="secondary"
          onClick={() => {
            setProject(projects);
            if (step > 1) setStep(step - 1);
          }}
        >
          <ArrowLeftIcon className="w-4 h-4" /> Previous
        </Button>

        <Button
          disabled={pending}
          onClick={handleSubmit}
          className="bg-primary text-primary-foreground gap-2"
        >
          {pending ? "Submitting..." : "Submit Details"}
          {!pending && <RocketLaunchIcon className="w-4 h-4" />}
        </Button>
      </div>
    </div>
  );
};

export default Projects;
