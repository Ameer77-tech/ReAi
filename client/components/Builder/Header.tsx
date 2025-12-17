"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { useResumeStore } from "@/app/store/store";

const Header = () => {
  const step = useResumeStore((s) => s.step);
  const setStep = useResumeStore((s) => s.setStep);

  const storedHeader = useResumeStore((s) => s.header);
  const storedContact = useResumeStore((s) => s.contact_information);
  const setHeader = useResumeStore((s) => s.setHeader);
  const setContactInformation = useResumeStore((s) => s.setContact);

  // hydrate local state once
  const [headerState, setHeaderState] = useState(() => ({
    full_name: storedHeader?.full_name || "",
    professional_title: storedHeader?.professional_title || "",
  }));

  const [contactState, setContactState] = useState(() => ({
    phone: storedContact?.phone || "",
    email: storedContact?.email || "",
    location: storedContact?.location || "",
    linkedin: storedContact?.linkedin || "",
    website: storedContact?.website || "",
    github: storedContact?.github || "",
  }));

  return (
    <div className="h-full flex flex-col bg-background text-foreground">
      {/* TITLE */}
      <div className="px-10 pt-10">
        <h1 className="text-3xl font-semibold tracking-tight">
          Personal Information
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          This information appears at the top of your resume.
        </p>
      </div>

      {/* FORM */}
      <div className="flex-1 overflow-y-auto px-10 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>Full Name</Label>
            <Input
              placeholder="John Doe"
              value={headerState.full_name}
              onChange={(e) =>
                setHeaderState({
                  ...headerState,
                  full_name: e.target.value,
                })
              }
            />
          </div>

          <div className="space-y-2">
            <Label>Professional Title</Label>
            <Input
              placeholder="Software Developer"
              value={headerState.professional_title}
              onChange={(e) =>
                setHeaderState({
                  ...headerState,
                  professional_title: e.target.value,
                })
              }
            />
          </div>

          <div className="space-y-2">
            <Label>Phone</Label>
            <Input
              placeholder="+91 98765 43210"
              value={contactState.phone}
              onChange={(e) =>
                setContactState({
                  ...contactState,
                  phone: e.target.value,
                })
              }
            />
          </div>

          <div className="space-y-2">
            <Label>Email</Label>
            <Input
              placeholder="john@email.com"
              value={contactState.email}
              onChange={(e) =>
                setContactState({
                  ...contactState,
                  email: e.target.value,
                })
              }
            />
          </div>

          <div className="space-y-2">
            <Label>Location</Label>
            <Input
              placeholder="Hyderabad, India"
              value={contactState.location}
              onChange={(e) =>
                setContactState({
                  ...contactState,
                  location: e.target.value,
                })
              }
            />
          </div>

          <div className="space-y-2">
            <Label>
              LinkedIn <span className="text-muted-foreground">(optional)</span>
            </Label>
            <Input
              placeholder="linkedin.com/in/john"
              value={contactState.linkedin}
              onChange={(e) =>
                setContactState({
                  ...contactState,
                  linkedin: e.target.value,
                })
              }
            />
          </div>

          <div className="space-y-2">
            <Label>
              Website <span className="text-muted-foreground">(optional)</span>
            </Label>
            <Input
              placeholder="https://portfolio.com"
              value={contactState.website}
              onChange={(e) =>
                setContactState({
                  ...contactState,
                  website: e.target.value,
                })
              }
            />
          </div>

          <div className="space-y-2">
            <Label>
              GitHub <span className="text-muted-foreground">(optional)</span>
            </Label>
            <Input
              placeholder="github.com/john"
              value={contactState.github}
              onChange={(e) =>
                setContactState({
                  ...contactState,
                  github: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="px-10 py-6 border-t border-border flex justify-between">
        <Button
          variant="secondary"
          onClick={() => {
            setHeader(headerState);
            setContactInformation(contactState);
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
            setHeader(headerState);
            setContactInformation(contactState);
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

export default Header;
