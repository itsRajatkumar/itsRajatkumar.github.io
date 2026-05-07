import { Metadata } from 'next';
import { GraduationCap, MapPin, Mail, Phone } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import SectionHeading from '@/components/SectionHeading';
import { sanityClient } from '@/sanity/client';
import { urlFor } from '@/sanity/image';
import { siteSettingsQuery } from '@/sanity/queries';
import { SiteSettings } from '@/lib/types';
import Image from 'next/image';

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
    title: 'About Me',
    description: `Learn more about ${name} and his professional background.`,
  };
}

export default async function AboutPage() {
  let settings: SiteSettings | null = null;
  try {
    settings = await sanityClient.fetch(siteSettingsQuery);
  } catch (error) {
    console.error('About page data fetch error:', error);
  }

  const bio = settings?.aboutBio || "I am a Full Stack Developer with experience in building scalable web applications. I love solving complex problems and learning new technologies.";

  return (
    <div className="section-padding bg-[var(--bg-primary)] min-h-screen">
      <div className="section-container pt-32 lg:pt-40">
        <SectionHeading
          subtitle="MY BIOGRAPHY"
          title="About Me"
          level="h1"
        />

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left: Image Card */}
          <AnimatedSection className="w-full lg:w-1/3">
            <div className="inbio-card !p-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[var(--bg-secondary)]">
                {settings?.heroImage ? (
                  <Image
                    src={urlFor(settings.heroImage).url()}
                    alt={settings.name || "Profile"}
                    fill
                    className="object-contain"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[var(--text-muted)] italic">
                    [Profile Image]
                  </div>
                )}
              </div>
              <div className="mt-8 text-center">
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                  {settings?.name || 'Rajat Kumar'}
                </h3>
                <p className="text-[var(--accent)] font-medium tracking-wide uppercase text-sm">
                  {settings?.heroSubtitle || 'Full-Stack Developer'}
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Info */}
          <div className="flex-1 flex flex-col gap-8">
            <AnimatedSection delay={0.1} className="inbio-card !p-10">
              <h3 className="text-2xl font-bold mb-6 text-[var(--text-primary)]">Who am I?</h3>
              <div className="space-y-6">
                {bio.split('\n\n').map((paragraph: string, i: number) => (
                  <p key={i} className="text-lg text-[var(--text-secondary)] leading-relaxed">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Personal Info Grid */}
              <AnimatedSection delay={0.2} className="inbio-card !p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[var(--bg-secondary)] shadow-[var(--shadow-inner)] flex items-center justify-center text-[var(--accent)]">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest font-bold">Email</p>
                    <p className="text-[var(--text-primary)] font-semibold">{settings?.contactEmail || 'rajat@example.com'}</p>
                  </div>
                </div>
                {settings?.showPhone !== false && (
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[var(--bg-secondary)] shadow-[var(--shadow-inner)] flex items-center justify-center text-[var(--accent)]">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest font-bold">Phone</p>
                      <p className="text-[var(--text-primary)] font-semibold">{settings?.phone || '+91 XXXXX XXXXX'}</p>
                    </div>
                  </div>
                )}
              </AnimatedSection>

              <AnimatedSection delay={0.3} className="inbio-card !p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[var(--bg-secondary)] shadow-[var(--shadow-inner)] flex items-center justify-center text-[var(--accent)]">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest font-bold">Location</p>
                    <p className="text-[var(--text-primary)] font-semibold">{settings?.location || 'India 🇮🇳'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[var(--bg-secondary)] shadow-[var(--shadow-inner)] flex items-center justify-center text-[var(--accent)]">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest font-bold">Education</p>
                    <p className="text-[var(--text-primary)] font-semibold">{settings?.education || 'B.Tech in CSE'}</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
