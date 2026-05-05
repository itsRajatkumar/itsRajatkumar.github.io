'use client';

import { motion } from 'framer-motion';
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon
} from './SocialIcons';

import Image from 'next/image';
import { SiteSettings } from '@/lib/types';
import { urlFor } from '@/sanity/image';

import LiveStatus from './LiveStatus';
import { Globe, Mail } from 'lucide-react';

export default function Hero({ settings }: { settings: SiteSettings }) {
  const taglines = settings.heroTaglines || ['Full Stack Developer', 'MERN Stack Expert', 'UI/UX Designer'];

  return (
    <section id="home" className="section-padding min-h-screen flex items-center pt-32 lg:pt-0">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="flex-1 order-2 lg:order-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <LiveStatus username={settings.githubUsername} />
            </motion.div>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-sm font-medium tracking-[3px] text-[var(--text-secondary)] uppercase mb-5 block"
            >
              WELCOME TO MY WORLD
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Hi, I’m <span className="text-[var(--accent)]">{settings.name || 'Rajat Kumar'}</span>
              <br />
              <span className="text-[var(--text-primary)]">a </span>
              <span className="text-[var(--text-primary)] inline-block">
                {/* Simplified typewriter effect with Framer Motion */}
                <motion.span
                  key={taglines[0]} // Simple implementation for now
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="gradient-text"
                >
                  {taglines[0]}.
                </motion.span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-lg text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              {settings.heroDescription || "I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding onoz lulla bits and bites and sparkle spots."}
            </motion.p>

            {/* Social & Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-12 items-center lg:items-start"
            >
              <div className="flex flex-col items-center lg:items-start gap-5">
                <span className="text-xs font-semibold tracking-widest text-[var(--text-muted)] uppercase">FIND ME IN</span>
                <div className="flex gap-4">
                  {settings.socialLinks?.filter(l => l.enabled !== false).slice(0, 3).map((link, i) => (
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

              <div className="flex flex-col items-center lg:items-start gap-5">
                <span className="text-xs font-semibold tracking-widest text-[var(--text-muted)] uppercase">BEST SKILL ON</span>
                <div className="flex gap-4">
                  <div className="inbio-button !w-12 !h-12 !p-0 !rounded-lg"><GithubIcon size={18} /></div>
                  <div className="inbio-button !w-12 !h-12 !p-0 !rounded-lg"><GithubIcon size={18} /></div>
                  <div className="inbio-button !w-12 !h-12 !p-0 !rounded-lg"><GithubIcon size={18} /></div>

                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0.5, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex-1 order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-[300px] h-[350px] sm:w-[400px] sm:h-[450px] lg:w-[450px] lg:h-[550px] inbio-card !p-4">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-b from-[var(--bg-secondary)] to-[var(--bg-primary)] relative">
                {settings.heroImage ? (
                  <Image
                    src={urlFor(settings.heroImage).url()}
                    alt={settings.name || "Profile"}
                    fill
                    sizes="(max-width: 640px) 300px, (max-width: 1024px) 400px, 450px"
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[var(--text-muted)] italic">
                    [Profile Image Placeholder]
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative Separator */}
        <div className="w-full h-[1px] bg-[var(--border-color)] mt-24" />
      </div>
    </section>
  );
}
