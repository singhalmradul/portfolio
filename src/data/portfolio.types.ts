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
  id: number;
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

// Types for skills
export interface Skills {
  backend: string[];
  cloud: string[];
  frontend: string[];
  databases: string[];
  tools: string[];
  other: string[];
}

// Types for projects
export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  isFeatured: boolean;
  githubLink?: string;
}

// Types for blog data
export interface BlogTopic {
  id: number;
  title: string;
  emoji: string;
  category: string;
}

export interface BlogPost {
  id: number;
  title: string;
  description: string;
  content: string;
  date: string;
  category: string;
  tags: string[];
  readTime: number;
  slug: string;
  url: string; // External URL to the actual blog post
}

export interface BlogData {
  isComingSoon: boolean;
  title: string;
  description: string;
  comingSoonMessage: string;
  upcomingTopics: BlogTopic[];
  posts: BlogPost[];
}
