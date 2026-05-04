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
    title: 'Archive | ' + (settings?.name || 'Blog'),
    description: 'See all posts we have ever written.',
  };
}

export default async function BlogArchivePage() {
  let posts: BlogPost[] = [];
  try {
    posts = await sanityClient.fetch(allPostsQuery);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
  }

  return (
    <div className="section-padding bg-[var(--bg-primary)] min-h-screen">
      <div className="section-container pt-32 lg:pt-40">
        <SectionHeading title="Archive" subtitle="All Posts" />
        <div className="text-center">
          <p className="mt-2 text-lg text-[var(--text-secondary)]">
            See all posts we have ever written.
          </p>
        </div>
        
        <AnimatedSection delay={0.1}>
          <div className="grid gap-10 mt-12 lg:gap-10 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post) => (
              <PostList
                key={post.slug.current}
                post={post}
                aspect="square"
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
