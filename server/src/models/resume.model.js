import mongoose from "mongoose";

// --- Personal Information ---
const personalInfoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    linkedin: { type: String },
    github: { type: String },
    website: { type: String },
    location: { type: String },
    picture: { type: String },
  },
  { _id: false }
);

// --- Experience ---
const experienceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String },
    dates: { type: String, required: true },
    responsibilities: { type: [String], required: true },
  },
  { _id: false }
);

// --- Education ---
const educationSchema = new mongoose.Schema(
  {
    degree: { type: String, required: true },
    university: { type: String, required: true },
    location: { type: String },
    dates: { type: String, required: true },
    gpa: { type: String },
    honors: { type: [String] },
    coursework: { type: [String] },
  },
  { _id: false }
);

// --- Projects ---
const projectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String },
    technologies: { type: [String] },
  },
  { _id: false }
);

// --- Awards / Certifications ---
const awardSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    organization: { type: String },
    date: { type: String },
  },
  { _id: false }
);

// --- Volunteer ---
const volunteerSchema = new mongoose.Schema(
  {
    organization: { type: String, required: true },
    role: { type: String, required: true },
    dates: { type: String },
    description: { type: String },
  },
  { _id: false }
);

const userDetailsSchema = new mongoose.Schema(
  {
    resumeId: { type: String, required: true },
    personal_information: { type: personalInfoSchema, required: true },
    summary: { type: String, required: true },
    experience: { type: [experienceSchema], required: true },
    education: { type: [educationSchema], required: true },
    skills: { type: [String], required: true },
    projects: { type: [projectSchema] },
    awards: { type: [awardSchema] },
    certifications: { type: [awardSchema] },
    languages: { type: [String] },
    interests: { type: [String] },
    volunteer: { type: [volunteerSchema] },
  },
  { timestamps: true }
);

export const Resume = mongoose.model("Resumes", userDetailsSchema);
