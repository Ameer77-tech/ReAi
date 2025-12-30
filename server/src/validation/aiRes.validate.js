import { z } from "zod";
import { OptionalUrl } from "./input.validate.js";

/* ---------------- HEADER ---------------- */
const HeaderSchema = z.object({
  full_name: z.string().min(2, "Full name is required"),
  professional_title: z.string().min(2, "Professional title is required"),
});

/* ---------------- CONTACT ---------------- */
const ContactSchema = z.object({
  phone: z.string().optional(),
  email: z.email("Invalid email"),
  location: z.string().optional(),
  linkedin: OptionalUrl,
  website: OptionalUrl,
  github: OptionalUrl,
});

/* ---------------- EXPERIENCE ---------------- */
const ExperienceSchema = z.object({
  job_title: z.string().min(1, "Job title is required"),
  employer: z.string().min(1, "Employer name is required"),
  location: z.string().optional(),
  start_date: z.string().min(4, "Start date is required"),
  end_date: z.string().optional(),
  achievements: z
    .array(z.string().min(5))
    .min(1, "At least one achievement is required"),
});

/* ---------------- EDUCATION ---------------- */
const EducationSchema = z.object({
  degree: z.string().min(1, "Degree is required"),
  field_of_study: z.string().optional(),
  institution: z.string().min(1, "Institution is required"),
  location: z.string().optional(),
  graduation_year: z
    .string()
    .min(4, "Enter at least 4 characters")
    .refine((v) => /\d{4}/.test(v), "Must contain a 4-digit year"),
  honors: z.array(z.string()).optional(),
});

/* ---------------- SKILLS ---------------- */
const SkillsSchema = z.object({
  marketing: z.array(z.string()).optional(),
  analytics: z.array(z.string()).optional(),
  tools: z.array(z.string()).optional(),
  soft_skills: z.array(z.string()).optional(),
});

/* ---------------- PROJECTS ---------------- */
const ProjectSchema = z.object({
  name: z.string().min(1, "Project name is required"),
  description: z.string().min(5),
  outcomes: z.array(z.string()).optional(),
  tools_used: z.array(z.string()).optional(),
  link: OptionalUrl,
});

/* ---------------- CERTIFICATIONS ---------------- */
const CertificationSchema = z.object({
  name: z.string().min(1, "Certification name is required"),
  organization: z.string().optional(),
  date_obtained: z.string().optional(),
});

/* ---------------- MAIN RESUME SCHEMA ---------------- */
export const ResumeSchema = z.object({
  header: HeaderSchema,
  contact_information: ContactSchema,

  professional_summary: z
    .string()
    .min(20, "Professional summary must be at least 20 characters"),

  work_experience: z
    .array(ExperienceSchema)
    .min(1, "At least one work experience is required"),

  education: z
    .array(EducationSchema)
    .min(1, "At least one education entry is required"),

  key_skills: SkillsSchema,

  projects: z.array(ProjectSchema).optional(),
  certifications: z.array(CertificationSchema).optional(),
});
