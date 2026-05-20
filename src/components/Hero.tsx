'use client';

import { motion } from 'framer-motion';
import { SocialLinkIcon } from './SocialIcons';

import Image from 'next/image';
import { SiteSettings } from '@/lib/types';
import { urlFor } from '@/sanity/image';

import LiveStatus from './LiveStatus';
import { useState, useEffect } from 'react';
import { Globe as GlobeIcon, Mail, Code, Database, Server, Cloud, Terminal, GitBranch, Layout, Cpu, Box, Layers, Workflow, type LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  code: Code,
  database: Database,
  server: Server,
  cloud: Cloud,
  terminal: Terminal,
  'git-branch': GitBranch,
  globe: GlobeIcon,
  layout: Layout,
  cpu: Cpu,
  box: Box,
  layers: Layers,
  workflow: Workflow,
  react: Code,
  nextjs: GlobeIcon,
  nodejs: Server,
  typescript: Terminal,
  javascript: Code,
  python: Terminal,
};

export default function Hero({ settings }: { settings: SiteSettings }) {
  const taglines = settings.heroTaglines || ['Full Stack Developer', 'MERN Stack Expert', 'UI/UX Designer'];
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(30);

  useEffect(() => {
    if (!taglines.length) return;

    const handleTyping = () => {
      const i = loopNum % taglines.length;
      const fullText = taglines[i];

      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 50);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause at end
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, taglines, typingSpeed]);

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
              <span className="text-[var(--text-primary)] inline-block min-h-[1.2em] align-top">
                <span className="gradient-text inline-block">
                  {displayText}
                  <span className="inline-block ml-1 w-[3px] h-[1em] bg-[var(--accent)] animate-pulse align-middle" />
                </span>
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
                  {settings.socialLinks?.filter(l => l.enabled !== false).slice(0, 4).map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inbio-button !w-12 !h-12 !p-0 !rounded-lg"
                      title={link.label || link.platform}
                    >
                      <SocialLinkIcon platform={link.platform} svgIcon={link.svgIcon} size={18} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center lg:items-start gap-5">
                <span className="text-xs font-semibold tracking-widest text-[var(--text-muted)] uppercase">BEST SKILL ON</span>
                <div className="flex gap-4">
                  {settings.heroSkills?.map((skill, i) => {
                    const IconComponent = skill.icon && iconMap[skill.icon] ? iconMap[skill.icon] : Code;
                    return (
                      <div key={i} className="inbio-button !w-12 !h-12 !p-0 !rounded-lg" title={skill.skillName}>
                        {skill.svgIcon ? (
                          <div
                            className="w-[18px] h-[18px] flex items-center justify-center"
                            dangerouslySetInnerHTML={{ __html: skill.svgIcon }}
                          />
                        ) : (
                          <IconComponent size={18} />
                        )}
                      </div>
                    );
                  })}
                  {!settings.heroSkills?.length && (
                    <>
                      <div className="inbio-button !w-12 !h-12 !p-0 !rounded-lg" title="React"><Code size={18} /></div>
                      <div className="inbio-button !w-12 !h-12 !p-0 !rounded-lg" title="Next.js"><GlobeIcon size={18} /></div>
                      <div className="inbio-button !w-12 !h-12 !p-0 !rounded-lg" title="Node.js"><Server size={18} /></div>
                    </>
                  )}
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
                    src={urlFor(settings.heroImage).auto('format').fit('max').width(800).url()}
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
