import { MetadataRoute } from 'next';
import { sanityClient } from '@/sanity/client';
import { projectSlugsQuery, postSlugsQuery, categorySlugsQuery, authorSlugsQuery } from '@/sanity/queries';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://rajatkumar.tech';

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/experience`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/projects`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/blog/archive`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.7 },
  ];

  let dynamicPages: MetadataRoute.Sitemap = [];
  
  try {
    const [projectSlugs, postSlugs, categorySlugs, authorSlugs] = await Promise.all([
      sanityClient.fetch<{ slug: string, _updatedAt?: string }[]>(projectSlugsQuery),
      sanityClient.fetch<{ slug: string, _updatedAt?: string }[]>(postSlugsQuery),
      sanityClient.fetch<{ slug: string, _updatedAt?: string }[]>(categorySlugsQuery),
      sanityClient.fetch<{ slug: string, _updatedAt?: string }[]>(authorSlugsQuery),
    ]);

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

  return [...staticPages, ...dynamicPages];
}
