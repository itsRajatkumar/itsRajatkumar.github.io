import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { sanityClient } from '@/sanity/client';
import { postsByCategoryQuery, categoryBySlugQuery, siteSettingsQuery } from '@/sanity/queries';
import { BlogPost, SiteSettings } from '@/lib/types';
import PostList from '@/components/blog/PostList';
import SectionHeading from '@/components/SectionHeading';
import AnimatedSection from '@/components/AnimatedSection';

export const revalidate = 3600;

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const category = await sanityClient.fetch(categoryBySlugQuery, { slug: params.slug });
  const settings: SiteSettings | null = await sanityClient.fetch(siteSettingsQuery).catch(() => null);

  if (!category) return { title: 'Category Not Found' };

  return {
    title: `${category.title} Posts | ${settings?.name || 'Blog'}`,
    description: category.description || `Read all posts in the ${category.title} category.`,
  };
}

export default async function CategoryPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  
  const [category, posts] = await Promise.all([
    sanityClient.fetch(categoryBySlugQuery, { slug: params.slug }),
    sanityClient.fetch(postsByCategoryQuery, { categorySlug: params.slug }) as Promise<BlogPost[]>
  ]);

  if (!category) {
    notFound();
  }

  return (
    <div className="section-padding bg-[var(--bg-primary)] min-h-screen">
      <div className="section-container pt-32 lg:pt-40">
        <SectionHeading 
          title={`Category: ${category.title}`} 
          subtitle="FILTERED POSTS" 
        />
        {category.description && (
          <div className="text-center mb-10">
            <p className="text-lg text-[var(--text-secondary)]">
              {category.description}
            </p>
          </div>
        )}
        
        <AnimatedSection delay={0.1}>
          {posts && posts.length > 0 ? (
            <div className="grid gap-10 mt-12 lg:gap-10 md:grid-cols-2">
              {posts.map((post) => (
                <PostList
                  key={post.slug.current}
                  post={post}
                  aspect="landscape"
                />
              ))}
            </div>
          ) : (
            <div className="text-center mt-12 p-10 bg-[var(--bg-card)] rounded-2xl border border-[var(--border-color)]">
              <h3 className="text-xl font-bold text-[var(--text-primary)]">No posts found</h3>
              <p className="mt-2 text-[var(--text-secondary)]">Check back later for updates in this category.</p>
            </div>
          )}
        </AnimatedSection>
      </div>
    </div>
  );
}
