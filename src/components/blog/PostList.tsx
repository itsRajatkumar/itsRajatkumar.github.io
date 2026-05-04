import Image from 'next/image';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { Image as ImageIcon } from 'lucide-react';
import CategoryLabel from './CategoryLabel';
import { urlFor } from '@/sanity/image';
import { BlogPost } from '@/lib/types';

interface PostListProps {
  post: BlogPost;
  aspect?: 'landscape' | 'square';
  preloadImage?: boolean;
}

export default function PostList({ post, aspect = 'landscape', preloadImage = false }: PostListProps) {
  const imageUrl = post?.mainImage ? urlFor(post.mainImage).url() : null;
  const authorImageUrl = post?.author?.image ? urlFor(post.author.image).url() : null;

  return (
    <div className="cursor-pointer group">
      <div
        className={`relative overflow-hidden transition-all bg-[var(--bg-secondary)] rounded-xl hover:scale-[1.02] duration-300 ${
          aspect === 'landscape' ? 'aspect-video' : 'aspect-square'
        }`}
      >
        <Link href={`/blog/${post.slug.current}`}>
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={post.mainImage?.alt || post.title || 'Thumbnail'}
              fill
              priority={preloadImage}
              className="object-cover transition-all"
            />
          ) : (
            <span className="absolute text-[var(--text-muted)] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <ImageIcon className="w-16 h-16 opacity-50" />
            </span>
          )}
        </Link>
      </div>

      <CategoryLabel categories={post.categories} />

      <h2 className="mt-2 text-xl font-bold tracking-normal text-[var(--text-primary)]">
        <Link href={`/blog/${post.slug.current}`}>
          <span
            className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent)] 
            bg-[length:0px_2px]
            bg-left-bottom
            bg-no-repeat
            transition-[background-size]
            duration-500
            hover:bg-[length:100%_2px] group-hover:bg-[length:100%_2px]"
          >
            {post.title}
          </span>
        </Link>
      </h2>

      {post.excerpt && (
        <p className="mt-3 text-sm text-[var(--text-secondary)] line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>
      )}

      <div className="flex items-center mt-5 space-x-3 text-[var(--text-secondary)]">
        {post?.author?.slug?.current ? (
          <Link href={`/blog/author/${post.author.slug.current}`} className="flex items-center gap-3 group/author">
            <div className="relative flex-shrink-0 w-6 h-6 overflow-hidden rounded-full border border-[var(--border-color)] group-hover/author:border-[var(--accent)] transition-colors">
              {authorImageUrl ? (
                <Image
                  src={authorImageUrl}
                  alt={post.author?.name || 'Author'}
                  fill
                  sizes="30px"
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-[var(--bg-card)]" />
              )}
            </div>
            <span className="text-sm font-medium text-[var(--text-primary)] group-hover/author:text-[var(--accent)] transition-colors">{post?.author?.name}</span>
          </Link>
        ) : (
          <div className="flex items-center gap-3">
            <div className="relative flex-shrink-0 w-6 h-6 overflow-hidden rounded-full border border-[var(--border-color)]">
              {authorImageUrl ? (
                <Image
                  src={authorImageUrl}
                  alt={post.author?.name || 'Author'}
                  fill
                  sizes="30px"
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-[var(--bg-card)]" />
              )}
            </div>
            <span className="text-sm font-medium text-[var(--text-primary)]">{post?.author?.name}</span>
          </div>
        )}
        <span className="text-xs text-[var(--text-muted)]">&bull;</span>
        <time className="text-sm" dateTime={post?.publishedAt}>
          {post?.publishedAt ? format(parseISO(post.publishedAt), 'MMMM dd, yyyy') : ''}
        </time>
      </div>
    </div>
  );
}
