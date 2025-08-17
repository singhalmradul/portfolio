// Types for personal information
export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  about: string;
  email: string;
  linkedin: string;
  github: string;
  blogUrl: string;
  resumeUrl: string;
}

// Types for experience
export interface Experience {
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

// Types for skills
export interface SkillCategory {
  title: string;
  values: string[];
}

export type Skills = SkillCategory[];

// Types for projects
export interface Project {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  githubLink?: string;
}

// Types for blog data
export interface BlogTopic {
  title: string;
  emoji: string;
  category: string;
}

export interface BlogPost {
  title: string;
  description: string;
  content: string;
  date: string;
  category: string;
  tags: string[];
  readTime: number;
  url: string; // External URL to the actual blog post
}

export interface BlogData {
  isComingSoon: boolean;
  title: string;
  description: string;
  upcomingTopics: BlogTopic[];
  posts: BlogPost[];
}
