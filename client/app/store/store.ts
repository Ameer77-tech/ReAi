import { create } from "zustand";
import { persist } from "zustand/middleware";

/* ========= INITIAL STATE ========= */

const initialState = {
  templateId: 0,
  step: 1,

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

  education: [],
  work_experience: [],

  key_skills: {
    marketing: [],
    analytics: [],
    tools: [],
    soft_skills: [],
  },

  projects: [],
  certifications: [],
};

/* ========= TYPES ========= */
import type {
  HeaderSchema,
  ContactInformation,
  WorkExperienceItem,
  EducationItem,
  KeySkills,
  ProjectItem,
  Certification,
} from "@/types/preview";

export interface ResumeStore {
  templateId: number;
  step: number;

  header: HeaderSchema;
  contact_information: ContactInformation;
  professional_summary: string;

  work_experience: WorkExperienceItem[];
  education: EducationItem[];
  key_skills: KeySkills;
  projects: ProjectItem[];
  certifications: Certification[];

  // setters
  setHeader: (data: Partial<HeaderSchema>) => void;
  setContact: (data: Partial<ContactInformation>) => void;
  setSummary: (value: string) => void;

  setExperience: (value: WorkExperienceItem[]) => void;
  setEducation: (value: EducationItem[]) => void;
  setProjects: (value: ProjectItem[]) => void;
  setCertifications: (value: Certification[]) => void;

  removeExperience: (index: number) => void;
  removeEducation: (index: number) => void;
  removeProject: (index: number) => void;
  removeCertification: (index: number) => void;

  setSkills: (value: Partial<KeySkills>) => void;

  setTemplate: (id: number) => void;
  setStep: (s: number) => void;

  reset: () => void;
}

/* ========= STORE ========= */

export const useResumeStore = create<ResumeStore>()(
  persist(
    (set, get) => ({
      ...initialState,

      /* HEADER */
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

      setSummary: (value) => set({ professional_summary: value }),

      /* EXPERIENCE */
      setExperience: (value) => set({ work_experience: value }),
      removeExperience: (index) =>
        set((state) => ({
          work_experience: state.work_experience.filter(
            (_, i) => i !== index
          ),
        })),

      /* EDUCATION */
      setEducation: (value) => set({ education: value }),
      removeEducation: (index) =>
        set((state) => ({
          education: state.education.filter((_, i) => i !== index),
        })),

      /* PROJECTS */
      setProjects: (value) => set({ projects: value }),
      removeProject: (index) =>
        set((state) => ({
          projects: state.projects.filter((_, i) => i !== index),
        })),

      /* CERTIFICATIONS */
      setCertifications: (value) => set({ certifications: value }),
      removeCertification: (index) =>
        set((state) => ({
          certifications: state.certifications.filter(
            (_, i) => i !== index
          ),
        })),

      /* SKILLS (partial merge) */
      setSkills: (value) =>
        set((state) => ({
          key_skills: { ...state.key_skills, ...value },
        })),

      /* MISC */
      setTemplate: (id) => set({ templateId: id }),
      setStep: (s) => set({ step: s }),

      /* FULL RESET */
      reset: () => {
        set(initialState);                  // reset in-memory
        useResumeStore.persist.clearStorage(); // reset localStorage
      },
    }),
    {
      name: "resume-builder-storage",
    }
  )
);
