import { Metadata } from 'next';
import { sanityClient } from '@/sanity/client';
import { siteSettingsQuery, allProjectsQuery } from '@/sanity/queries';
import { SiteSettings } from '@/lib/types';
import ProjectsContent from '@/components/ProjectsContent';

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  let settings: SiteSettings | null = null;
  try {
    settings = await sanityClient.fetch(siteSettingsQuery);
  } catch {}

  const name = settings?.name || 'Rajat Kumar';

  return {
    title: 'Projects',
    description: `Explore the project portfolio of ${name} — web applications, APIs, and digital commerce solutions built with modern technologies.`,
  };
}

export default async function ProjectsPage() {
  const projects = await sanityClient.fetch(allProjectsQuery);
  return <ProjectsContent initialProjects={projects || []} />;
}
