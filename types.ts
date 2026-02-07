
export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface Certification {
  name: string;
  organization: string;
  issueDate: string;
  credentialId?: string;
  link?: string;
}

export interface Skill {
  name: string;
  category: string;
}

export interface Project {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  link?: string;
  github?: string;
}
