// Shared TypeScript interfaces for Sanity data

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter' | 'instagram' | 'facebook' | 'youtube' | 'email' | 'website';
  url: string;
  enabled?: boolean;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SiteSettings {
  name?: string;
  logo?: unknown;
  phone?: string;
  showPhone?: boolean;
  // SEO
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  seoOgImage?: { asset: { url: string } };
  siteUrl?: string;
  // Hero
  heroTitle?: string;
  heroSubtitle?: string;
  heroDescription?: string;
  heroTaglines?: string[];
  heroImage?: unknown;
  resumeUrl?: string;
  availableForWork?: boolean;
  // About
  aboutBio?: string;
  education?: string;
  college?: string;
  focusAreas?: string[];
  interests?: string[];
  location?: string;
  locationSubtext?: string;
  philosophyQuote?: string;
  philosophyAttribution?: string;
  // Contact
  contactEmail?: string;
  contactLocation?: string;
  contactResponseTime?: string;
  contactHeading?: string;
  contactSubheading?: string;
  experienceHeading?: string;
  experienceSubheading?: string;
  projectsHeading?: string;
  projectsSubheading?: string;
  skillsHeading?: string;
  skillsSubheading?: string;
  // Social
  socialLinks?: SocialLink[];
  // Stats
  stats?: Stat[];
  // Footer
  footerTagline?: string;
  // Theme
  theme?: string;
  githubUsername?: string;
  showHomeProjects?: boolean;
  showHomeSkills?: boolean;
  showHomeExperience?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  companyUrl?: string;
  startDate: string;
  endDate?: string;
  description?: string[];
}

export interface BlogPost {
  title: string;
  slug: { current: string };
  excerpt?: string;
  mainImage?: { alt?: string; [key: string]: any };
  publishedAt?: string;
  categories?: { title: string; slug: { current: string }; color: string }[];
  author?: { name: string; image?: any; slug?: { current: string }; bio?: unknown; social?: unknown[] };
  body?: unknown;
}
