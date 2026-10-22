export interface Project {
  id: string;
  title: string;
  subtitle: string;
  githubUrl: string;
  description: string;
  features: string[];
  technologies: string[];
  type: 'ML Application' | 'Full-Stack Platform' | 'Collaborative System';
  diagramType: 'classifier' | 'career-pipeline' | 'genre-flow' | 'college-db';
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
  icon: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  graduationNote: string;
  location: string;
  courseworkHighlights: string[];
}

export interface CertificationItem {
  title: string;
  platform: string;
  date: string;
  description: string;
}

export interface HighlightItem {
  title: string;
  category: string;
  description: string;
  techPreview: string[];
}
