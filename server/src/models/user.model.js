import mongoose from "mongoose";

/* ---------------- HEADER ---------------- */
const headerSchema = new mongoose.Schema(
  {
    full_name: { type: String, required: true },
    professional_title: { type: String, required: true },
  },
  { _id: false }
);

/* ---------------- CONTACT ---------------- */
const contactSchema = new mongoose.Schema(
  {
    phone: String,
    email: String,
    location: String,
    linkedin: String,
    website: String,
    github: String,
  },
  { _id: false }
);

/* ---------------- EXPERIENCE ---------------- */
const experienceSchema = new mongoose.Schema(
  {
    job_title: { type: String, required: true },
    employer: { type: String, required: true },
    location: String,
    start_date: String,
    end_date: String,
    achievements: { type: [String], required: true },
  },
  { _id: false }
);

/* ---------------- EDUCATION ---------------- */
const educationSchema = new mongoose.Schema(
  {
    degree: { type: String, required: true },
    field_of_study: String,
    institution: { type: String, required: true },
    location: String,
    graduation_year: String,
    honors: [String],
  },
  { _id: false }
);

/* ---------------- SKILLS ---------------- */
const skillsSchema = new mongoose.Schema(
  {
    marketing: [String],
    analytics: [String],
    tools: [String],
    soft_skills: [String],
  },
  { _id: false }
);

/* ---------------- PROJECTS ---------------- */
const projectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    outcomes: [String],
    tools_used: [String],
    link: String,
  },
  { _id: false }
);

/* ---------------- CERTIFICATIONS ---------------- */
const certificationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    organization: String,
    date_obtained: String,
  },
  { _id: false }
);

/* ---------------- MAIN SCHEMA ---------------- */
const userDetailsSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },

    header: { type: headerSchema, required: true },
    contact_information: { type: contactSchema, required: true },

    professional_summary: { type: String, required: true },

    work_experience: { type: [experienceSchema], required: true },
    education: { type: [educationSchema], required: true },

    key_skills: { type: skillsSchema, required: true },

    projects: [projectSchema],
    certifications: [certificationSchema],

    /* TTL — auto delete after 5 minutes */
    expiresAt: {
      type: Date,
      default: () => new Date(Date.now() + 5 * 60 * 1000),
      index: { expires: "5m" },
    },
  },
  { timestamps: true }
);

export const UserDetails =
  mongoose.models.UserDetails ||
  mongoose.model("UserDetails", userDetailsSchema);
