'use client';

import AnimatedSection from './AnimatedSection';

interface ExperienceCardProps {
  company: string;
  role: string;
  companyUrl?: string;
  startDate: string;
  endDate?: string;
  description?: string[];
  index?: number;
}

function formatDate(dateStr: string): string {
  if (!dateStr || dateStr.length < 4) return dateStr;
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export default function ExperienceCard({
  company,
  role,
  startDate,
  endDate,
  description,
  index = 0,
}: ExperienceCardProps) {
  return (
    <AnimatedSection delay={index * 0.1} className="relative group">
      {/* Timeline Circle */}
      <div className="absolute -left-[42px] top-10 w-5 h-5 rounded-full border-4 border-[var(--bg-secondary)] bg-[var(--bg-primary)] z-10 group-hover:bg-[var(--accent)] transition-colors duration-300 shadow-[var(--shadow-inner)]" />
      
      {/* Connecting Line */}
      <div className="absolute -left-8 top-12 w-8 h-[2px] bg-[var(--bg-secondary)] z-0 group-hover:bg-[var(--accent)] transition-colors duration-300" />

      <div className="inbio-card !p-8 group-hover:!bg-gradient-to-br group-hover:from-[var(--bg-card)] group-hover:to-[var(--bg-card-hover)]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-2xl font-bold text-[var(--text-primary)] group-hover:text-white transition-colors">
              {role}
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mt-1 font-medium uppercase tracking-wide">
              {company}
            </p>
          </div>
          
          <div className="inbio-button !text-xs !py-2 !px-4 !rounded-md whitespace-nowrap shadow-[var(--shadow-button)]">
            <span className="text-[var(--accent)] font-bold">
              {formatDate(startDate)} - {endDate ? formatDate(endDate) : 'PRESENT'}
            </span>
          </div>
        </div>

        <div className="w-full h-[1px] bg-[var(--border-color)] mb-6" />

        {description && description.length > 0 && (
          <ul className="space-y-3">
            {description.map((bullet, i) => (
              <li key={i} className="text-[var(--text-secondary)] text-base leading-relaxed group-hover:text-[var(--text-primary)] transition-colors">
                • {bullet}
              </li>
            ))}
          </ul>
        )}
      </div>
    </AnimatedSection>
  );
}
