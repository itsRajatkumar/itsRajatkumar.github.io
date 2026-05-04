import { Metadata } from 'next';
import Image from 'next/image';
import { Mail, Globe } from 'lucide-react';
import { 
  FacebookIcon, 
  TwitterIcon, 
  LinkedinIcon, 
  InstagramIcon,
  GithubIcon,
  YoutubeIcon
} from '@/components/SocialIcons';

import AnimatedSection from '@/components/AnimatedSection';
import SectionHeading from '@/components/SectionHeading';
import ContactForm from '@/components/ContactForm';
import { sanityClient } from '@/sanity/client';
import { urlFor } from '@/sanity/image';
import { siteSettingsQuery } from '@/sanity/queries';
import { SiteSettings } from '@/lib/types';

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  let settings: SiteSettings | null = null;
  try {
    settings = await sanityClient.fetch(siteSettingsQuery);
  } catch {
    // fallback
  }

  const name = settings?.heroTitle || 'Rajat Kumar';

  return {
    title: 'Contact',
    description: `Get in touch with ${name} for freelance projects, collaborations, or job opportunities.`,
  };
}

export default async function ContactPage() {
  let settings: SiteSettings | null = null;
  try {
    settings = await sanityClient.fetch(siteSettingsQuery);
  } catch {
    // Use fallback
  }

  const name = settings?.heroTitle || 'Rajat Kumar';
  const role = settings?.heroSubtitle || 'Full-Stack Developer';
  const email = settings?.contactEmail || 'contact@rajatkumar.tech';
  const heading = settings?.contactHeading || 'Contact With Me';
  const subheading = settings?.contactSubheading || 'Get In Touch';

  return (
    <div className="section-padding bg-[var(--bg-primary)] min-h-screen">
      <div className="section-container pt-32 lg:pt-40">
        <SectionHeading title={subheading} subtitle={heading} />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12">
          {/* Left: Contact Info Card */}
          <div className="lg:col-span-5">
            <AnimatedSection delay={0.1}>
              <div className="inbio-card h-full">
                <div className="rounded-xl overflow-hidden mb-8 relative h-[350px] md:h-[400px] bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-primary)]">
                  {settings?.heroImage ? (
                    <Image
                      src={urlFor(settings.heroImage).url()}
                      alt={name}
                      fill
                      className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[var(--text-muted)] opacity-50">
                      <Image 
                        src="/images/contact-bg.png" 
                        alt="Contact" 
                        fill 
                        className="object-cover opacity-20"
                      />
                      <span className="text-4xl font-bold uppercase tracking-widest">{name.split(' ')[0]}</span>
                    </div>
                  )}
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-2 text-[var(--text-primary)]">{name}</h2>
                    <p className="text-[var(--text-secondary)] font-medium">{role}</p>
                  </div>
                  
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    I am available for freelance work. Connect with me via and call in to my account.
                  </p>
                  
                  <div className="space-y-4">
                    {settings?.showPhone !== false && (
                      <div className="flex items-center gap-4 text-[var(--text-secondary)]">
                        <span className="text-[var(--text-muted)]">Phone:</span>
                        <span className="text-[var(--text-primary)] font-medium hover:text-[var(--accent)] transition-colors">{settings?.phone || '+91 1234567890'}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-4 text-[var(--text-secondary)]">
                      <span className="text-[var(--text-muted)]">Email:</span>
                      <span className="text-[var(--text-primary)] font-medium hover:text-[var(--accent)] transition-colors">{email}</span>
                    </div>
                  </div>
                  
                  <div className="pt-6">
                    <span className="text-xs font-semibold tracking-widest text-[var(--text-muted)] uppercase mb-5 block">FIND ME IN</span>
                    <div className="flex gap-4">
                      {settings?.socialLinks?.filter(l => l.enabled !== false).map((link, i) => (
                        <a 
                          key={i} 
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inbio-button !w-12 !h-12 !p-0 !rounded-lg"
                        >
                          {link.platform === 'facebook' && <FacebookIcon size={18} />}
                          {link.platform === 'twitter' && <TwitterIcon size={18} />}
                          {link.platform === 'linkedin' && <LinkedinIcon size={18} />}
                          {link.platform === 'github' && <GithubIcon size={18} />}
                          {link.platform === 'instagram' && <InstagramIcon size={18} />}
                          {link.platform === 'youtube' && <YoutubeIcon size={18} />}
                          {link.platform === 'email' && <Mail size={18} />}
                          {link.platform === 'website' && <Globe size={18} />}

                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Contact Form Card */}
          <div className="lg:col-span-7">
            <AnimatedSection delay={0.2}>
              <div className="inbio-card p-6 md:p-10">
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
