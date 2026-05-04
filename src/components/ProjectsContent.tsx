'use client';

import { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';

interface Project {
  title: string;
  slug: { current: string };
  thumbnail?: unknown;
  excerpt?: string;
  tags?: string[];
  liveUrl?: string;
  repoUrl?: string;
}

interface ProjectsContentProps {
  initialProjects: Project[];
}

export default function ProjectsContent({ initialProjects }: ProjectsContentProps) {
  const [projects] = useState<Project[]>(initialProjects);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const loading = false; // Data is now passed from server

  const allTags = Array.from(
    new Set(projects.flatMap((p) => p.tags || []))
  ).sort();

  const filteredProjects = activeTag
    ? projects.filter((p) => p.tags?.includes(activeTag))
    : projects;

  return (
    <div className="section-padding bg-[var(--bg-primary)] min-h-screen">
      <div className="section-container pt-32 lg:pt-40">
        <SectionHeading
          subtitle="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          title="My Portfolio"
        />

        {/* Tag Filters */}
        {allTags.length > 0 && (
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <button
              onClick={() => setActiveTag(null)}
              className={`inbio-button !px-8 !py-4 !rounded-lg text-sm font-semibold tracking-wider transition-all ${
                !activeTag ? 'active !text-[var(--accent)]' : '!text-[var(--text-secondary)]'
              }`}
            >
              ALL
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag === activeTag ? null : tag)}
                className={`inbio-button !px-8 !py-4 !rounded-lg text-sm font-semibold tracking-wider transition-all ${
                  activeTag === tag ? 'active !text-[var(--accent)]' : '!text-[var(--text-secondary)]'
                }`}
              >
                {tag.toUpperCase()}
              </button>
            ))}
          </div>
        )}

        {/* Projects Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="inbio-card animate-pulse aspect-[4/5]" />
            ))}
          </div>
        ) : filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.slug.current} {...project} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 inbio-card">
            <p className="text-xl text-[var(--text-muted)]">
              No projects found for the selected category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
