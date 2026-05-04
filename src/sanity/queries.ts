// GROQ queries for fetching data from Sanity

// ── Site Settings (full) ──
export const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  name,
  logo,
  phone,
  showPhone,
  // SEO
  seoTitle,
  seoDescription,
  seoKeywords,
  seoOgImage,
  siteUrl,
  // Hero
  heroTitle,
  heroSubtitle,
  heroDescription,
  heroTaglines,
  heroImage,
  resumeUrl,
  availableForWork,
  // About
  aboutBio,
  education,
  college,
  focusAreas,
  interests,
  location,
  locationSubtext,
  philosophyQuote,
  philosophyAttribution,
  // Contact
  contactEmail,
  contactLocation,
  contactResponseTime,
  contactHeading,
  contactSubheading,
  experienceHeading,
  experienceSubheading,
  projectsHeading,
  projectsSubheading,
  skillsHeading,
  skillsSubheading,
  // Social
  socialLinks[] {
    platform,
    url,
    enabled
  },
  // Stats
  stats[] {
    value,
    label
  },
  // Footer
  footerTagline,
  // Theme
  theme,
  githubUsername,
  showHomeProjects,
  showHomeSkills
}`;

// ── Projects ──
export const allProjectsQuery = `*[_type == "project"] | order(_createdAt desc) {
  title,
  slug,
  thumbnail,
  excerpt,
  tags,
  liveUrl,
  repoUrl
}`;

export const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0] {
  title,
  slug,
  thumbnail,
  excerpt,
  tags,
  liveUrl,
  repoUrl,
  content
}`;

export const projectSlugsQuery = `*[_type == "project" && defined(slug.current)] {
  "slug": slug.current
}`;

// ── Experience ──
export const allExperiencesQuery = `*[_type == "experience"] | order(startDate desc) {
  company,
  role,
  companyUrl,
  startDate,
  endDate,
  description
}`;

// ── Skills (only enabled) ──
export const allSkillsQuery = `*[_type == "skill" && enabled != false] | order(category asc, skillName asc) {
  category,
  skillName,
  icon
}`;
