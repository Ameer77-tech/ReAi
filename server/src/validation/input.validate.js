import { z } from "zod";

// --- Personal Information ---
const PersonalInfoSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.email("Invalid email"),
  phone: z.string().optional(),
  linkedin: z.url().optional(),
  github: z.url().optional(),
  website: z.url().optional(),
  location: z.string().optional(),
  picture: z.string().optional(),
});

// --- Experience ---
const ExperienceSchema = z.object({
  title: z.string().min(1, "Job title is required"),
  company: z.string().min(1, "Company name is required"),
  location: z.string().optional(),
  dates: z.string().min(1, "Dates are required"),
  responsibilities: z
    .array(z.string().min(1))
    .min(1, "At least one responsibility is required"),
});

// --- Education ---
const EducationSchema = z.object({
  degree: z.string().min(1, "Degree is required"),
  university: z.string().min(1, "University name is required"),
  location: z.string().optional(),
  dates: z.string().min(1, "Dates are required"),
  gpa: z.string().optional(),
  honors: z.string().optional(),
  coursework: z.array(z.string()).optional(),
});

// --- Projects ---
const ProjectSchema = z.object({
  name: z.string().min(1, "Project name is required"),
  description: z.string().min(1, "Project description is required"),
  link: z.string().url().optional(),
  technologies: z.array(z.string()).optional(),
});

// --- Awards / Certifications ---
const AwardSchema = z.object({
  name: z.string().min(1, "Award/Certification name is required"),
  organization: z.string().optional(),
  date: z.string().optional(),
});

// --- Resume Schema ---
export const ResumeSchema = z.object({
  personal_information: PersonalInfoSchema,
  summary: z.string().min(10, "Summary is required"),
  experience: z
    .array(ExperienceSchema)
    .min(1, "At least one experience is required"),
  education: z
    .array(EducationSchema)
    .min(1, "At least one education entry is required"),
  skills: z.array(z.string().min(1)).min(1, "At least one skill is required"),
  projects: z.array(ProjectSchema).optional(),
  awards: z.array(AwardSchema).optional(),
  certifications: z.array(AwardSchema).optional(),
  languages: z.array(z.string()).optional(),
  interests: z.array(z.string()).optional(),
  volunteer: z
    .array(
      z.object({
        organization: z.string().min(1),
        role: z.string().min(1),
        dates: z.string().optional(),
        description: z.string().optional(),
      })
    )
    .optional(),
});
