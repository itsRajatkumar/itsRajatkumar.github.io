'use client';

import { Heart } from 'lucide-react';
import { SiteSettings, SocialLink } from '@/lib/types';
import { SocialLinkIcon } from './SocialIcons';

// Default social links when no CMS data is available
const defaultSocialLinks: SocialLink[] = [
  { platform: 'github', label: 'GitHub', url: 'https://github.com', enabled: true },
  { platform: 'linkedin', label: 'LinkedIn', url: 'https://linkedin.com', enabled: true },
  { platform: 'twitter', label: 'Twitter', url: 'https://twitter.com', enabled: true },
  { platform: 'email', label: 'Email', url: 'mailto:contact@rajatkumar.tech', enabled: true },
];

interface FooterProps {
  siteSettings?: SiteSettings | null;
}

export default function Footer({ siteSettings }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const name = siteSettings?.name || 'Rajat Kumar';
  const tagline = siteSettings?.footerTagline || 'Full-Stack Developer · Building for the web';
  const socialLinks = (siteSettings?.socialLinks?.length ? siteSettings.socialLinks : defaultSocialLinks)
    .filter((link) => link.enabled !== false);

  return (
    <footer
      className="relative mt-32"
      style={{ borderTop: '1px solid var(--border-color)' }}
    >
      {/* Gradient line at top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, var(--gradient-from), var(--gradient-to), transparent)',
        }}
      />

      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Branding */}
          <div className="text-center md:text-left">
            <p className="text-lg font-bold">
              <span className="gradient-text">{name}</span>
            </p>
            <p style={{ color: 'var(--text-muted)' }} className="text-sm mt-1">
              {tagline}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              return (
                <a
                  key={`${social.platform}-${social.url}`}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label || social.platform}
                  title={social.label || social.platform}
                  className="social-icon-btn w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-secondary)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--accent-light)';
                    e.currentTarget.style.borderColor = 'var(--accent-dark)';
                    e.currentTarget.style.background = 'var(--accent-muted)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.background = 'var(--bg-card)';
                  }}
                >
                  <SocialLinkIcon 
                    platform={social.platform} 
                    svgIcon={social.svgIcon} 
                    size={18} 
                  />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid var(--border-color)' }}
        >
          <p style={{ color: 'var(--text-muted)' }} className="text-sm">
            © {currentYear} {name}. All rights reserved.
          </p>
          <p style={{ color: 'var(--text-muted)' }} className="text-sm flex items-center gap-1">
            Built with <Heart size={14} style={{ color: 'var(--accent)' }} className="inline" /> using Next.js & Sanity
          </p>
        </div>
      </div>
    </footer>
  );
}
