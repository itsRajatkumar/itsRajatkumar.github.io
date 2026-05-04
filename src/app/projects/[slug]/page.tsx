import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { PortableText, PortableTextBlock } from '@portabletext/react';
import { ArrowLeft, ExternalLink, Code2 } from 'lucide-react';
import { sanityClient } from '@/sanity/client';
import { projectBySlugQuery, projectSlugsQuery } from '@/sanity/queries';
import { urlFor } from '@/sanity/image';
import { portableTextComponents } from '@/components/PortableTextComponents';
import AnimatedSection from '@/components/AnimatedSection';
import { notFound } from 'next/navigation';

export const revalidate = 3600;

interface Props { params: Promise<{ slug: string }> }

interface Project {
  title: string;
  slug: { current: string };
  thumbnail?: { asset: unknown };
  excerpt?: string;
  tags?: string[];
  liveUrl?: string;
  repoUrl?: string;
  content?: PortableTextBlock[];
}

export async function generateStaticParams() {
  try {
    const slugs = await sanityClient.fetch(projectSlugsQuery);
    return slugs.map((s: { slug: string }) => ({ slug: s.slug }));
  } catch { return []; }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const p: Project = await sanityClient.fetch(projectBySlugQuery, { slug });
    if (!p) return { title: 'Project Not Found' };
    return {
      title: p.title,
      description: p.excerpt || `${p.title} — by Rajat Kumar`,
      openGraph: {
        title: `${p.title} | Rajat Kumar`,
        description: p.excerpt || '',
        images: p.thumbnail ? [{ url: urlFor(p.thumbnail).width(1200).height(630).url() }] : [],
      },
    };
  } catch { return { title: 'Project' }; }
}

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  let project: Project | null = null;
  try { project = await sanityClient.fetch(projectBySlugQuery, { slug }); } catch {}
  if (!project) notFound();

  return (
    <div className="py-20 md:py-32">
      <div className="section-container max-w-5xl mx-auto">
        <AnimatedSection>
          <Link href="/projects" className="inbio-button !inline-flex !w-auto gap-3 px-6 py-3 mb-10 group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> 
            Back to Projects
          </Link>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          {/* Main Card */}
          <AnimatedSection delay={0.1}>
            <div className="inbio-card overflow-hidden">
              {/* Header */}
              <div className="p-6 md:p-10 border-b border-[var(--border-color)]">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[var(--text-primary)] leading-tight">
                      {project.title}
                    </h1>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.tags?.map((t) => (
                        <span key={t} className="text-xs font-bold text-[var(--accent)] uppercase tracking-widest bg-[var(--accent-muted)] px-3 py-1 rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" 
                         className="inbio-button !w-auto !h-auto px-6 py-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                        Live View <ExternalLink size={16} />
                      </a>
                    )}
                    {project.repoUrl && (
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"
                         className="inbio-button !w-auto !h-auto px-6 py-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                        Repo <Code2 size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Media */}
              {project.thumbnail && (
                <div className="p-6 md:p-10">
                  <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-[var(--bg-secondary)]">
                    <Image 
                      src={urlFor(project.thumbnail).width(1600).height(900).url()} 
                      alt={project.title} 
                      fill 
                      className="object-cover" 
                      priority 
                    />
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-6 md:p-10 lg:p-12 prose-lg">
                {project.excerpt && (
                  <p className="text-xl md:text-2xl font-medium text-[var(--text-secondary)] mb-10 leading-relaxed italic border-l-4 border-[var(--accent)] pl-6">
                    {project.excerpt}
                  </p>
                )}
                
                {project.content && (
                  <div className="portable-text text-[var(--text-primary)] leading-relaxed">
                    <PortableText value={project.content} components={portableTextComponents} />
                  </div>
                )}
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.3}>
            <div className="flex justify-center mt-12">
              <Link href="/projects" className="inbio-button !inline-flex !w-auto gap-3 px-10 py-5 group">
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                View All My Works
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
