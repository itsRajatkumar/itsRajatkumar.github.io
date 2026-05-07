import { MetadataRoute } from 'next';
import { sanityClient } from '@/sanity/client';
import { projectSlugsQuery, postSlugsQuery, categorySlugsQuery, authorSlugsQuery, siteSettingsQuery } from '@/sanity/queries';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let baseUrl = 'https://www.rajatkumar.tech';

  let dynamicPages: MetadataRoute.Sitemap = [];
  
  try {
    const [settings, projectSlugs, postSlugs, categorySlugs, authorSlugs] = await Promise.all([
      sanityClient.fetch<{ siteUrl?: string }>(siteSettingsQuery),
      sanityClient.fetch<{ slug: string, _updatedAt?: string }[]>(projectSlugsQuery),
      sanityClient.fetch<{ slug: string, _updatedAt?: string }[]>(postSlugsQuery),
      sanityClient.fetch<{ slug: string, _updatedAt?: string }[]>(categorySlugsQuery),
      sanityClient.fetch<{ slug: string, _updatedAt?: string }[]>(authorSlugsQuery),
    ]);

    if (settings?.siteUrl) {
      baseUrl = settings.siteUrl.endsWith('/') ? settings.siteUrl.slice(0, -1) : settings.siteUrl;
    }

    const projects = (projectSlugs || []).map((s) => ({
      url: `${baseUrl}/projects/${s.slug}`,
      lastModified: s._updatedAt ? new Date(s._updatedAt) : new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

    const posts = (postSlugs || []).map((s) => ({
      url: `${baseUrl}/blog/${s.slug}`,
      lastModified: s._updatedAt ? new Date(s._updatedAt) : new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }));

    const categories = (categorySlugs || []).map((s) => ({
      url: `${baseUrl}/blog/category/${s.slug}`,
      lastModified: s._updatedAt ? new Date(s._updatedAt) : new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

    const authors = (authorSlugs || []).map((s) => ({
      url: `${baseUrl}/blog/author/${s.slug}`,
      lastModified: s._updatedAt ? new Date(s._updatedAt) : new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

    dynamicPages = [...projects, ...posts, ...categories, ...authors];
  } catch (error) {
    console.error('Failed to fetch slugs for sitemap:', error);
  }

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/experience`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/projects`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/blog/archive`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.7 },
  ];

  return [...staticPages, ...dynamicPages];
}
