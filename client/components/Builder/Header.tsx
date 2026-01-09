"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { useResumeStore } from "@/app/store/store";
import { ContactInformation, HeaderSchema } from "@/types/preview";

const emailRegex = /\S+@\S+\.\S+/;
const phoneRegex = /^[0-9+\-\s]{8,15}$/;
const urlRegex = /^https?:\/\/[\w.-]+/i;

const Header = () => {
  const step = useResumeStore((s) => s.step);
  const setStep = useResumeStore((s) => s.setStep);

  const storedHeader = useResumeStore((s) => s.header);
  const storedContact = useResumeStore((s) => s.contact_information);
  const setHeader = useResumeStore((s) => s.setHeader);
  const setContactInformation = useResumeStore((s) => s.setContact);

  const [headerState, setHeaderState] = useState<HeaderSchema>({
    full_name: storedHeader?.full_name || "",
    professional_title: storedHeader?.professional_title || "",
  });

  const [contactState, setContactState] = useState<ContactInformation>({
    phone: storedContact?.phone || "",
    email: storedContact?.email || "",
    location: storedContact?.location || "",
    linkedin: storedContact?.linkedin || "",
    website: storedContact?.website || "",
    github: storedContact?.github || "",
  });

  const [errors, setErrors] = useState({
    full_name: "",
    email: "",
    phone: "",
    linkedin: "",
    website: "",
    github: "",
    location: "",
  });

  const validate = () => {
    const newErrors: any = {};

    if (!headerState.full_name.trim()) {
      newErrors.full_name = "Full name is required.";
    }
    if (!contactState.phone?.trim()) {
      newErrors.phone = "Phone Number required.";
    }
    if (!contactState.email?.trim()) {
      newErrors.email = "Email is required.";
    }
    if (!contactState.location?.trim()) {
      newErrors.location = "Location is required.";
    }
    if (contactState.email && !emailRegex.test(contactState.email)) {
      newErrors.email = "Enter a valid email.";
    }

    if (contactState.phone && !phoneRegex.test(contactState.phone)) {
      newErrors.phone = "Phone number looks invalid.";
    }

    if (contactState.linkedin && !urlRegex.test(contactState.linkedin)) {
      newErrors.linkedin = "Invalid URL.";
    }

    if (contactState.website && !urlRegex.test(contactState.website)) {
      newErrors.website = "Invalid URL.";
    }

    if (contactState.github && !urlRegex.test(contactState.github)) {
      newErrors.github = "Invalid URL.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const commitState = () => {
    setHeader(headerState);
    setContactInformation(contactState);
  };

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
          {/* FULL NAME */}
          <div className="space-y-2">
            <Label>Full Name</Label>
            <Input
              placeholder="John Doe"
              value={headerState.full_name}
              onChange={(e) =>
                setHeaderState({ ...headerState, full_name: e.target.value })
              }
            />
            {errors.full_name && (
              <p className="text-xs text-red-500">{errors.full_name}</p>
            )}
          </div>

          {/* TITLE */}
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

          {/* PHONE */}
          <div className="space-y-2">
            <Label>Phone</Label>
            <Input
              placeholder="+91 98765 43210"
              value={contactState.phone}
              onChange={(e) =>
                setContactState({ ...contactState, phone: e.target.value })
              }
            />
            {errors.phone && (
              <p className="text-xs text-red-500">{errors.phone}</p>
            )}
          </div>

          {/* EMAIL */}
          <div className="space-y-2">
            <Label>Email</Label>
            <Input
              placeholder="john@email.com"
              value={contactState.email}
              onChange={(e) =>
                setContactState({ ...contactState, email: e.target.value })
              }
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email}</p>
            )}
          </div>

          {/* LOCATION */}
          <div className="space-y-2">
            <Label>Location</Label>
            <Input
              placeholder="Hyderabad, India"
              value={contactState.location}
              onChange={(e) =>
                setContactState({ ...contactState, location: e.target.value })
              }
            />
            {errors.location && (
              <p className="text-xs text-red-500">{errors.location}</p>
            )}
          </div>

          {/* LINKEDIN */}
          <div className="space-y-2">
            <Label>LinkedIn (optional)</Label>
            <Input
              placeholder="https://linkedin.com/in/john"
              value={contactState.linkedin}
              onChange={(e) =>
                setContactState({ ...contactState, linkedin: e.target.value })
              }
            />
            {errors.linkedin && (
              <p className="text-xs text-red-500">{errors.linkedin}</p>
            )}
          </div>

          {/* WEBSITE */}
          <div className="space-y-2">
            <Label>Website (optional)</Label>
            <Input
              placeholder="https://portfolio.com"
              value={contactState.website}
              onChange={(e) =>
                setContactState({ ...contactState, website: e.target.value })
              }
            />
            {errors.website && (
              <p className="text-xs text-red-500">{errors.website}</p>
            )}
          </div>

          {/* GITHUB */}
          <div className="space-y-2">
            <Label>GitHub (optional)</Label>
            <Input
              placeholder="https://github.com/john"
              value={contactState.github}
              onChange={(e) =>
                setContactState({ ...contactState, github: e.target.value })
              }
            />
            {errors.github && (
              <p className="text-xs text-red-500">{errors.github}</p>
            )}
          </div>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="px-10 py-6 border-t border-border flex justify-between">
        <Button
          variant="secondary"
          onClick={() => {
            commitState();
            if (step > 1) setStep(step - 1);
          }}
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Previous
        </Button>

        <Button
          onClick={() => {
            if (!validate()) return;
            commitState();
            if (step < 7) setStep(step + 1);
          }}
          className="bg-primary text-primary-foreground hover:bg-primary/90 flex gap-2"
        >
          Next
          <ArrowRightIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Header;
