import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import SkillBadge from '@/components/SkillBadge';
import Hero from '@/components/Hero';
import PostList from '@/components/blog/PostList';
import ExperienceCard from '@/components/ExperienceCard';
import { sanityClient } from '@/sanity/client';
import { allProjectsQuery, allSkillsQuery, siteSettingsQuery, featuredPostsQuery, allExperiencesQuery } from '@/sanity/queries';
import { SiteSettings, Stat, BlogPost, Experience } from '@/lib/types';

export const revalidate = 60; // Faster revalidation for debugging

interface Project {
  title: string;
  slug: { current: string };
  thumbnail?: unknown;
  excerpt?: string;
  tags?: string[];
  liveUrl?: string;
  repoUrl?: string;
}

interface Skill {
  category: string;
  skillName: string;
  icon?: string;
  svgIcon?: string;
}

const defaultStats: Stat[] = [
  { value: '2+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Built' },
  { value: '5+', label: 'Technologies' },
  { value: '∞', label: 'Lines of Code' },
];

export async function generateMetadata(): Promise<Metadata> {
  const settings: SiteSettings = await sanityClient.fetch(siteSettingsQuery);
  return {
    title: settings?.seoTitle || 'Rajat Kumar | Portfolio',
    description: settings?.seoDescription || 'Professional Full-Stack Developer Portfolio',
  };
}

export default async function Home() {
  let projects: Project[] = [];
  let skills: Skill[] = [];
  let settings: SiteSettings = {};
  let featuredPosts: BlogPost[] = [];
  let experiences: Experience[] = [];

  try {
    const [projectData, skillData, settingsData, featuredPostsData, experienceData] = await Promise.all([
      sanityClient.fetch(allProjectsQuery),
      sanityClient.fetch(allSkillsQuery),
      sanityClient.fetch(siteSettingsQuery),
      sanityClient.fetch(featuredPostsQuery),
      sanityClient.fetch(allExperiencesQuery),
    ]);
    if (featuredPostsData) featuredPosts = featuredPostsData;
    if (projectData) projects = projectData;
    if (skillData) skills = skillData;
    if (settingsData) settings = settingsData;
    if (experienceData) experiences = experienceData;
  } catch (error) {
    console.error('Error fetching home page data:', error);
  }

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  // JSON-LD Schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": settings.name || "Rajat Kumar Prajapati",
    "url": settings.siteUrl || "https://rajatkumar.tech",
    "jobTitle": settings.heroSubtitle || "MERN Stack Expert",
    "worksFor": experiences[0] ? {
      "@type": "Organization",
      "name": experiences[0].company
    } : undefined,
    "alumniOf": settings.college ? {
      "@type": "CollegeOrUniversity",
      "name": settings.college
    } : undefined,
    "sameAs": [
      ...(settings.socialLinks?.filter(l => l.enabled !== false).map(l => l.url) || []),
      `mailto:${settings.contactEmail || 'contact@rajatkumar.tech'}`
    ],
    "knowsAbout": skills.map(s => s.skillName).slice(0, 10)
  };

  return (
    <div className="bg-[var(--bg-primary)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      {/* ═══ Hero Section ═══ */}
      <Hero settings={settings} />

      {/* ═══ Featured Projects ═══ */}
      {settings.showHomeProjects !== false && (
        <section id="portfolio" className="section-padding">
          <div className="section-container">
            <SectionHeading
              subtitle={settings.projectsSubheading || "VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"}
              title={settings.projectsHeading || "My Portfolio"}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {projects.length > 0 ? (
                projects.slice(0, 3).map((project, i) => (
                  <ProjectCard key={project.slug.current} {...project} index={i} />
                ))
              ) : (
                <div className="col-span-full py-20 text-center inbio-card">
                  <p className="text-[var(--text-secondary)] text-lg italic">
                    No projects found. Please ensure your projects are published in Sanity.
                  </p>
                </div>
              )}
            </div>
            <div className="text-center mt-16">
              <Link
                href="/projects"
                className="inbio-button !px-10 !py-4"
              >
                VIEW ALL PROJECTS <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="section-container">
            <div className="w-full h-[1px] bg-[var(--border-color)] mt-24" />
          </div>
        </section>
      )}

      {/* ═══ Skills Section ═══ */}
      {settings.showHomeSkills !== false && (
        <section id="features" className="section-padding">
          <div className="section-container">
            <SectionHeading
              subtitle={settings.skillsSubheading || "FEATURES"}
              title={settings.skillsHeading || "What I Do"}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(groupedSkills).map(([category, categorySkills], i) => (
                <AnimatedSection key={category} delay={i * 0.1} className="inbio-card h-full flex flex-col group">
                  <h3 className="text-2xl font-bold mb-6 text-[var(--accent)] group-hover:text-[var(--text-primary)] transition-colors">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-3 mt-auto">
                    {categorySkills.map((skill) => (
                      <SkillBadge
                        key={skill.skillName}
                        skillName={skill.skillName}
                        icon={skill.icon}
                        svgIcon={skill.svgIcon}
                      />
                    ))}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
          <div className="section-container">
            <div className="w-full h-[1px] bg-[var(--border-color)] mt-24" />
          </div>
        </section>
      )}

      {/* ═══ Experience Section ═══ */}
      {settings.showHomeExperience !== false && experiences.length > 0 && (
        <section id="resume" className="section-padding">
          <div className="section-container">
            <SectionHeading
              subtitle={settings.experienceSubheading || "2022 - PRESENT"}
              title={settings.experienceHeading || "My Resume"}
            />
            
            <div className="max-w-5xl mx-auto">
              <div className="relative pl-8 border-l-4 border-[var(--bg-secondary)] border-opacity-50 flex flex-col gap-12">
                {experiences.slice(0, 3).map((exp, i) => (
                  <ExperienceCard key={`${exp.company}-${i}`} {...exp} index={i} />
                ))}
              </div>
              
              <div className="text-center mt-16">
                <Link
                  href="/experience"
                  className="inbio-button !px-10 !py-4"
                >
                  VIEW FULL RESUME <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
          <div className="section-container">
            <div className="w-full h-[1px] bg-[var(--border-color)] mt-24" />
          </div>
        </section>
      )}

      {/* ═══ Featured Blogs Section ═══ */}
      {featuredPosts && featuredPosts.length > 0 && (
        <section className="section-padding">
          <div className="section-container relative z-10">
            <SectionHeading
              subtitle="LATEST WRITING"
              title="Featured Blogs"
            />
            
            <div className="grid gap-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 mt-12">
              {featuredPosts.map((post, index) => (
                <AnimatedSection key={post.slug.current} delay={0.1 * (index + 1)}>
                  <PostList post={post} aspect="square" />
                </AnimatedSection>
              ))}
            </div>

            <div className="text-center mt-16">
              <Link
                href="/blog"
                className="inbio-button !px-10 !py-4"
              >
                VIEW ALL POSTS <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="section-container">
            <div className="w-full h-[1px] bg-[var(--border-color)] mt-24" />
          </div>
        </section>
      )}

      {/* ═══ Stats Section ═══ */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {(settings.stats?.length ? settings.stats : defaultStats).map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1} className="inbio-card text-center !p-10">
                <p className="text-5xl font-black text-[var(--accent)] mb-4">
                  {stat.value}
                </p>
                <p className="text-xs font-bold tracking-[2px] uppercase text-[var(--text-secondary)]">
                  {stat.label}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA Section ═══ */}
      <section className="section-padding bg-[var(--bg-secondary)]/50">
        <div className="section-container text-center">
          <AnimatedSection className="inbio-card !py-20 !px-10 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)]">
              Let&apos;s Build Something <span className="text-[var(--accent)]">Extraordinary</span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto leading-relaxed">
              I am available for freelance work. Connect with me via {settings.showPhone !== false ? `phone: ${settings.phone || '+91 XXXXX XXXXX'} or ` : ''}email: {settings.contactEmail || 'rajat@example.com'}
            </p>
            <Link
              href="/contact"
              className="inbio-button !px-12 !py-5 text-lg"
            >
              HIRE ME NOW
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
