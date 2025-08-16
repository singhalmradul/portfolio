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
