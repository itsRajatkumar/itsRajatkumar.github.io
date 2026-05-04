import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { sanityClient } from '@/sanity/client';
import { postsByAuthorQuery, authorBySlugQuery, siteSettingsQuery } from '@/sanity/queries';
import { BlogPost, SiteSettings } from '@/lib/types';
import PostList from '@/components/blog/PostList';
import SectionHeading from '@/components/SectionHeading';
import AnimatedSection from '@/components/AnimatedSection';
import { urlFor } from '@/sanity/image';
import PortableTextRenderer from '@/components/blog/PortableTextRenderer';

export const revalidate = 3600;

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const author = await sanityClient.fetch(authorBySlugQuery, { slug: params.slug });
  const settings: SiteSettings | null = await sanityClient.fetch(siteSettingsQuery).catch(() => null);

  if (!author) return { title: 'Author Not Found' };

  return {
    title: `Posts by ${author.name} | ${settings?.name || 'Blog'}`,
    description: `Read all posts authored by ${author.name}.`,
  };
}

export default async function AuthorPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  
  const [author, posts] = await Promise.all([
    sanityClient.fetch(authorBySlugQuery, { slug: params.slug }),
    sanityClient.fetch(postsByAuthorQuery, { authorSlug: params.slug }) as Promise<BlogPost[]>
  ]);

  if (!author) {
    notFound();
  }

  const imageUrl = author.image ? urlFor(author.image).url() : null;

  return (
    <div className="section-padding bg-[var(--bg-primary)] min-h-screen">
      <div className="section-container pt-32 lg:pt-40">
        
        {/* Author Bio Section */}
        <AnimatedSection>
          <div className="bg-[var(--bg-card)] p-8 md:p-12 rounded-3xl border border-[var(--border-color)] shadow-xl mb-16 flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0 overflow-hidden rounded-full border-4 border-[var(--border-color)]">
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt={author.name}
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-[var(--bg-secondary)]" />
              )}
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
                {author.name}
              </h1>
              {author.bio && (
                <div className="text-[var(--text-secondary)] text-sm md:text-base leading-relaxed">
                  <PortableTextRenderer value={author.bio} />
                </div>
              )}
            </div>
          </div>
        </AnimatedSection>

        <SectionHeading 
          title="Articles" 
          subtitle={`POSTS BY ${author.name.toUpperCase()}`} 
        />
        
        <AnimatedSection delay={0.2}>
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
              <p className="mt-2 text-[var(--text-secondary)]">Check back later for new articles by this author.</p>
            </div>
          )}
        </AnimatedSection>
      </div>
    </div>
  );
}
