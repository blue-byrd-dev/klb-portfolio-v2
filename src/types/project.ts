

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  featured: boolean;
  role: string;
  year: string;
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  highlights: string[];
  href: string;
};
