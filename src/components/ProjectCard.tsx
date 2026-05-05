'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Heart } from 'lucide-react';
import { urlFor } from '@/sanity/image';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  slug: { current: string };
  thumbnail?: unknown;
  excerpt?: string;
  tags?: string[];
  index?: number;
}

export default function ProjectCard({
  title,
  slug,
  thumbnail,
  tags,
  index = 0,
}: ProjectCardProps) {
  return (
    <AnimatedSection delay={index * 0.1}>
      <Link href={`/projects/${slug.current}`} className="group block h-full">
        <div className="inbio-card h-full flex flex-col p-6 rounded-[20px]">
          {/* Thumbnail Container */}
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-6">
            {thumbnail ? (
              <Image
                src={urlFor(thumbnail).width(800).height(600).url()}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-full bg-[var(--bg-secondary)] flex items-center justify-center">
                <span className="text-4xl font-bold opacity-10">PROJECT</span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[var(--accent)] text-xs font-semibold tracking-widest uppercase">
                {tags?.[0] || 'DEVELOPMENT'}
              </span>
              <div className="flex items-center gap-2 text-[var(--text-muted)] text-sm group-hover:text-[var(--accent)] transition-colors">
                <Heart size={14} />
                <span>600</span>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors leading-snug">
              {title}
              <motion.span
                className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                <ArrowUpRight size={20} />
              </motion.span>
            </h3>
          </div>
        </div>
      </Link>
    </AnimatedSection>
  );
}
