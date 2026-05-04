import { Metadata } from 'next';
import { sanityClient } from '@/sanity/client';
import { allPostsQuery, siteSettingsQuery } from '@/sanity/queries';
import { SiteSettings, BlogPost } from '@/lib/types';
import PostList from '@/components/blog/PostList';
import SectionHeading from '@/components/SectionHeading';
import AnimatedSection from '@/components/AnimatedSection';

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  let settings: SiteSettings | null = null;
  try {
    settings = await sanityClient.fetch(siteSettingsQuery);
  } catch {
    // fallback
  }

  return {
    title: 'Blog | ' + (settings?.name || 'Portfolio'),
    description: 'Read the latest thoughts and articles.',
  };
}

export default async function BlogPage() {
  let posts: BlogPost[] = [];
  try {
    posts = await sanityClient.fetch(allPostsQuery);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
  }

  return (
    <div className="section-padding bg-[var(--bg-primary)] min-h-screen">
      <div className="section-container pt-32 lg:pt-40">
        <SectionHeading title="Blog" subtitle="Latest Articles" />
        
        <AnimatedSection delay={0.1}>
          <div className="grid gap-10 lg:gap-12 md:grid-cols-2 mt-12">
            {posts.map((post, index) => (
              <PostList
                key={post.slug.current}
                post={post}
                aspect="landscape"
                preloadImage={index < 2}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
