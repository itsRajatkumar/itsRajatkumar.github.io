import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { format, parseISO } from 'date-fns';
import { sanityClient } from '@/sanity/client';
import { postBySlugQuery, siteSettingsQuery } from '@/sanity/queries';
import { urlFor } from '@/sanity/image';
import CategoryLabel from '@/components/blog/CategoryLabel';
import PortableTextRenderer from '@/components/blog/PortableTextRenderer';

export const revalidate = 3600;

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const post = await sanityClient.fetch(postBySlugQuery, { slug: params.slug });
  const settings = await sanityClient.fetch(siteSettingsQuery);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: `${post.title} | ${settings?.name || 'Blog'}`,
    description: post.excerpt || '',
  };
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = await sanityClient.fetch(postBySlugQuery, { slug: params.slug });

  if (!post) {
    notFound();
  }

  const imageUrl = post?.mainImage ? urlFor(post.mainImage).url() : null;
  const authorImageUrl = post?.author?.image ? urlFor(post.author.image).url() : null;

  return (
    <div className="bg-[var(--bg-primary)] min-h-screen section-padding mt-20">
      <div className="section-container">
        <div style={{ maxWidth: '896px', margin: '0 auto' }}>
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-6">
            <CategoryLabel categories={post.categories} center={true} />
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="flex justify-center items-center space-x-3 text-[var(--text-secondary)]">
            {post.author?.slug?.current ? (
              <Link href={`/blog/author/${post.author.slug.current}`} className="flex items-center space-x-3 group/author">
                <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-[var(--border-color)] group-hover/author:border-[var(--accent)] transition-colors">
                  {authorImageUrl ? (
                    <Image
                      src={authorImageUrl}
                      alt={post.author?.name || 'Author'}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-[var(--bg-card)]" />
                  )}
                </div>
                <div className="text-left group-hover/author:opacity-80 transition-opacity">
                  <p className="font-medium text-[var(--text-primary)]">
                    {post.author?.name || 'Anonymous'}
                  </p>
                  <time className="text-sm text-[var(--text-muted)]" dateTime={post.publishedAt}>
                    {post.publishedAt ? format(parseISO(post.publishedAt), 'MMMM dd, yyyy') : ''}
                  </time>
                </div>
              </Link>
            ) : (
              <div className="flex items-center space-x-3">
                <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-[var(--border-color)]">
                  {authorImageUrl ? (
                    <Image
                      src={authorImageUrl}
                      alt={post.author?.name || 'Author'}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-[var(--bg-card)]" />
                  )}
                </div>
                <div className="text-left">
                  <p className="font-medium text-[var(--text-primary)]">
                    {post.author?.name || 'Anonymous'}
                  </p>
                  <time className="text-sm text-[var(--text-muted)]" dateTime={post.publishedAt}>
                    {post.publishedAt ? format(parseISO(post.publishedAt), 'MMMM dd, yyyy') : ''}
                  </time>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Hero Image */}
        {imageUrl && (
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12 shadow-2xl border border-[var(--border-color)]">
            <Image
              src={imageUrl}
              alt={post.mainImage?.alt || post.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="bg-[var(--bg-card)] p-6 md:p-12 rounded-3xl border border-[var(--border-color)] shadow-xl">
          <PortableTextRenderer value={post.body} />
          
          <div className="mt-12 pt-8 border-t border-[var(--border-color)] flex justify-center">
            <Link 
              href="/blog" 
              className="px-6 py-3 text-sm font-semibold rounded-full bg-[var(--accent)] text-white hover:bg-[var(--accent)]/90 transition-colors shadow-[var(--shadow-button)]"
            >
              ← View all posts
            </Link>
          </div>
        </div>

        </div>

      </div>
    </div>
  );
}
