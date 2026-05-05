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
  "seoOgImage": seoOgImage.asset->url,
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
  showHomeSkills,
  showHomeExperience
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

export const latestExperienceQuery = `*[_type == "experience"] | order(startDate desc)[0] { company }`;

// ── Skills (only enabled) ──
export const allSkillsQuery = `*[_type == "skill" && enabled != false] | order(category asc, skillName asc) {
  category,
  skillName,
  icon
}`;

// ── Blog ──
export const allPostsQuery = `*[_type == "post"] | order(publishedAt desc) {
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  categories[]->{ title, slug, color },
  author->{ name, image, slug }
}`;

export const featuredPostsQuery = `*[_type == "post" && featured == true] | order(publishedAt desc)[0...3] {
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  categories[]->{ title, slug, color },
  author->{ name, image, slug }
}`;

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  title,
  slug,
  mainImage,
  publishedAt,
  body,
  categories[]->{ title, slug, color },
  author->{ name, image, slug, bio, social }
}`;

export const allCategoriesQuery = `*[_type == "category"] | order(title asc) {
  title,
  slug,
  color,
  description
}`;

export const postsByCategoryQuery = `*[_type == "post" && $categorySlug in categories[]->slug.current] | order(publishedAt desc) {
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  categories[]->{ title, slug, color },
  author->{ name, image, slug }
}`;

export const categoryBySlugQuery = `*[_type == "category" && slug.current == $slug][0] {
  title,
  slug,
  color,
  description
}`;

export const postsByAuthorQuery = `*[_type == "post" && author->slug.current == $authorSlug] | order(publishedAt desc) {
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  categories[]->{ title, slug, color },
  author->{ name, image, slug }
}`;

export const authorBySlugQuery = `*[_type == "author" && slug.current == $slug][0] {
  name,
  slug,
  image,
  bio,
  social
}`;

// Sitemap Slugs
export const postSlugsQuery = `*[_type == "post" && defined(slug.current)]{ "slug": slug.current, "_updatedAt": _updatedAt }`;
export const categorySlugsQuery = `*[_type == "category" && defined(slug.current)]{ "slug": slug.current, "_updatedAt": _updatedAt }`;
export const authorSlugsQuery = `*[_type == "author" && defined(slug.current)]{ "slug": slug.current, "_updatedAt": _updatedAt }`;
