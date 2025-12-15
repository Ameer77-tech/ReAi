import { create } from "zustand";
import { persist } from "zustand/middleware";

/* ───────────── TYPES ───────────── */

interface Header {
  full_name: string;
  professional_title: string;
}

interface ContactInformation {
  phone: string;
  email: string;
  location: string;
  linkedin: string;
  website: string;
  github: string;
}

interface WorkExperience {
  job_title: string;
  employer: string;
  location: string;
  start_date: string;
  end_date: string;
  achievements: string[];
}

interface Education {
  degree: string;
  field_of_study: string;
  institution: string;
  location: string;
  graduation_year: string;
  honors: string[];
}

interface KeySkills {
  marketing: string[];
  analytics: string[];
  tools: string[];
  soft_skills: string[];
}

interface Project {
  name: string;
  description: string;
  outcomes: string[];
  tools_used: string[];
  link: string;
}

interface Certification {
  name: string;
  organization: string;
  date_obtained: string;
}

/* ───────────── STORE TYPE ───────────── */

interface ResumeStore {
  templateId: number;
  step : number,
  header: Header;
  contact_information: ContactInformation;
  professional_summary: string;

  work_experience: WorkExperience[];
  education: Education[];
  key_skills: KeySkills;
  projects: Project[];
  certifications: Certification[];

  // basic setters
  setHeader: (data: Partial<Header>) => void;
  setContact: (data: Partial<ContactInformation>) => void;
  setSummary: (value: string) => void;

  // arrays – replace
  setExperience: (value: WorkExperience[]) => void;
  setEducation: (value: Education[]) => void;
  setProjects: (value: Project[]) => void;
  setCertifications: (value: Certification[]) => void;

  // arrays – delete
  removeExperience: (index: number) => void;
  removeEducation: (index: number) => void;
  removeProject: (index: number) => void;
  removeCertification: (index: number) => void;

  // skills
  setSkills: (value: Partial<KeySkills>) => void;

  setTemplate: (id: number) => void;
  setStep : (s : number) => void
}

/* ───────────── STORE ───────────── */

export const useResumeStore = create<ResumeStore>()(
  persist(
    (set) => ({
      templateId: 1,
      step : 1,
      header: {
        full_name: "",
        professional_title: "",
      },

      contact_information: {
        phone: "",
        email: "",
        location: "",
        linkedin: "",
        website: "",
        github: "",
      },

      professional_summary: "",

      work_experience: [],
      education: [],

      key_skills: {
        marketing: [],
        analytics: [],
        tools: [],
        soft_skills: [],
      },

      projects: [],
      certifications: [],

      /* ───────── ACTIONS ───────── */

      setHeader: (data) =>
        set((state) => ({
          header: { ...state.header, ...data },
        })),

      setContact: (data) =>
        set((state) => ({
          contact_information: {
            ...state.contact_information,
            ...data,
          },
        })),

      setSummary: (value) =>
        set({ professional_summary: value }),

      /* ───────── EXPERIENCE ───────── */

      setExperience: (value) =>
        set({ work_experience: value }),

      removeExperience: (index) =>
        set((state) => ({
          work_experience: state.work_experience.filter(
            (_, i) => i !== index
          ),
        })),

      /* ───────── EDUCATION ───────── */

      setEducation: (value) =>
        set({ education: value }),

      removeEducation: (index) =>
        set((state) => ({
          education: state.education.filter(
            (_, i) => i !== index
          ),
        })),

      /* ───────── PROJECTS ───────── */

      setProjects: (value) =>
        set({ projects: value }),

      removeProject: (index) =>
        set((state) => ({
          projects: state.projects.filter(
            (_, i) => i !== index
          ),
        })),

      /* ───────── CERTIFICATIONS ───────── */

      setCertifications: (value) =>
        set({ certifications: value }),

      removeCertification: (index) =>
        set((state) => ({
          certifications: state.certifications.filter(
            (_, i) => i !== index
          ),
        })),

      /* ───────── SKILLS ───────── */

      setSkills: (value) =>
        set((state) => ({
          key_skills: { ...state.key_skills, ...value },
        })),

      setTemplate: (id) =>
        set({ templateId: id }),

      setStep : (s) => set({ step : s })
    }),
    {
      name: "resume-builder-storage",
    }
  )
);
