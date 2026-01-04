export interface HeaderSchema {
  full_name: string;
  professional_title: string;
}

export interface ContactInformation {
  phone?: string;
  email?: string;
  location?: string;
  linkedin?: string;
  website?: string;
  github?: string;
}

export interface WorkExperienceItem {
  job_title: string;
  employer: string;
  location?: string;
  start_date?: string;
  end_date?: string;
  achievements?: string[];
}

export interface EducationItem {
  degree: string;
  field_of_study?: string;
  institution: string;
  location?: string;
  graduation_year?: string;
  honors?: string[];
}

export interface KeySkills {
  marketing?: string[];
  analytics?: string[];
  tools?: string[];
  soft_skills?: string[];
}

export interface ProjectItem {
  name: string;
  description?: string;
  outcomes?: string[];
  tools_used?: string[];
  link?: string;
}

export interface Certification {
  name: string;
  organization?: string;
  date_obtained?: string;
}

export interface PreviewData {
  header?: HeaderSchema;
  contact_information?: ContactInformation;
  professional_summary?: string;
  work_experience?: WorkExperienceItem[];
  education?: EducationItem[];
  key_skills?: KeySkills;
  projects?: ProjectItem[];
  certifications?: Certification[];
}

export interface TProps {
  data: PreviewData;
}
