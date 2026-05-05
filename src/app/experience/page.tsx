import { Metadata } from 'next';
import SectionHeading from '@/components/SectionHeading';
import ExperienceCard from '@/components/ExperienceCard';
import { sanityClient } from '@/sanity/client';
import { allExperiencesQuery, siteSettingsQuery } from '@/sanity/queries';
import { SiteSettings, Experience } from '@/lib/types';

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  let settings: SiteSettings | null = null;
  try {
    settings = await sanityClient.fetch(siteSettingsQuery);
  } catch (error) {
    console.error('Metadata fetch error:', error);
  }

  const name = settings?.name || 'Rajat Kumar';

  return {
    title: 'Resume',
    description: `Professional career timeline and experience of ${name}.`,
  };
}

export default async function ExperiencePage() {
  let experiences: Experience[] = [];
  let settings: SiteSettings | null = null;

  try {
    [experiences, settings] = await Promise.all([
      sanityClient.fetch(allExperiencesQuery),
      sanityClient.fetch(siteSettingsQuery)
    ]);
  } catch (error) {
    console.error('Data fetch error:', error);
  }

  return (
    <div className="section-padding bg-[var(--bg-primary)] min-h-screen">
      <div className="section-container pt-32 lg:pt-40">
        <SectionHeading
          subtitle={settings?.experienceSubheading || "2022 - PRESENT"}
          title={settings?.experienceHeading || "My Resume"}
        />

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Job Experience Column */}
          <div className="flex-1">
            <div className="mb-12">
              <span className="text-[var(--accent)] text-sm font-medium tracking-[3px] uppercase block mb-4">Features</span>
              <h3 className="text-3xl font-bold text-[var(--text-primary)]">Job Experience</h3>
            </div>
            
            <div className="relative pl-8 border-l-4 border-[var(--bg-secondary)] border-opacity-50 flex flex-col gap-12">
              {experiences.map((exp, i) => (
                <ExperienceCard key={`${exp.company}-${i}`} {...exp} index={i} />
              ))}
              {experiences.length === 0 && (
                <p className="text-[var(--text-secondary)] italic">No experience data found.</p>
              )}
            </div>
          </div>

          {/* Education Quality Column */}
          <div className="flex-1">
            <div className="mb-12">
              <span className="text-[var(--accent)] text-sm font-medium tracking-[3px] uppercase block mb-4">2019 - 2023</span>
              <h3 className="text-3xl font-bold text-[var(--text-primary)]">Education</h3>
            </div>
            
            <div className="relative pl-8 border-l-4 border-[var(--bg-secondary)] border-opacity-50 flex flex-col gap-12">
              <ExperienceCard 
                company={settings?.college || "GL Bajaj Institute of Technology"} 
                role={settings?.education || "B.Tech in Computer Science"} 
                startDate="2019" 
                endDate="2023"
                description={["Relevant coursework: Data Structures, Algorithms, Web Development, DBMS"]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
