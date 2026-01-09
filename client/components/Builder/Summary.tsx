"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { useResumeStore } from "@/app/store/store";

const Summary = () => {
  const step = useResumeStore((s) => s.step);
  const setStep = useResumeStore((s) => s.setStep);

  const [message, setMessage] = useState({
    required: false,
    text: "",
  });

  const storedSummary = useResumeStore((s) => s.professional_summary);
  const setSummary = useResumeStore((s) => s.setSummary);
  const [summary, setSummaryState] = useState(() => storedSummary || "");

  return (
    <div className="h-full flex flex-col bg-background text-foreground">
      {/* TITLE */}
      <div className="px-10 pt-10">
        <h1 className="lg:text-3xl md:text-3xl text-2xl font-semibold tracking-tight">
          Professional Summary
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Write a short introduction about yourself and your work.
        </p>
      </div>

      {/* CONTENT */}
      <div className="flex-1 overflow-y-auto px-10 py-8">
        <div className="space-y-6 max-w-3xl">
          <div className="space-y-2">
            <Label>Summary</Label>
            <Textarea
              placeholder="I am a passionate software developer with experience in building full-stack applications..."
              className="min-h-40 resize-none"
              value={summary}
              onChange={(e) => setSummaryState(e.target.value)}
            />
            {message.required && (
              <p className="text-xs text-red-500">{message.text}</p>
            )}
          </div>

          <div className="rounded-lg border border-border bg-secondary/40 p-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Don’t worry about grammar or wording mistakes. Our AI will
              automatically refine and improve this summary during generation.
            </p>
          </div>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="px-10 py-6 border-t border-border flex justify-between">
        <Button
          variant="secondary"
          onClick={() => {
            setSummary(summary);
            if (step > 1) {
              setStep(step - 1);
            }
          }}
          className="flex items-center gap-2"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Previous
        </Button>

        <Button
          onClick={() => {
            if (summary.length < 1 || summary === "") {
              setMessage({
                required: true,
                text: "Summary is Required",
              });
              return;
            }
            if (summary.length < 20 || summary === "") {
              setMessage({
                required: true,
                text: "Too Short...",
              });
              return;
            }
            setSummary(summary);
            if (step < 7) {
              setStep(step + 1);
            }
          }}
          className="flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Next
          <ArrowRightIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Summary;
