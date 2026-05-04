'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';
import { SiteSettings } from '@/lib/types';
import { urlFor } from '@/sanity/image';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/about', label: 'ABOUT' },
  { href: '/experience', label: 'EXPERIENCE' },
  { href: '/projects', label: 'PROJECTS' },
  { href: '/blog', label: 'BLOG' },
  { href: '/contact', label: 'CONTACT' },
];

export default function Navbar({ siteSettings }: { siteSettings: SiteSettings }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [pathname]);

  if (pathname?.startsWith('/studio')) return null;

  const initials = siteSettings?.name
    ? siteSettings.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()
    : 'RK';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'h-20 bg-[var(--bg-primary)]/90 backdrop-blur-md shadow-[var(--shadow-outer)]' 
            : 'h-24 bg-transparent'
        }`}
      >
        <div className="section-container h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-4 group">
              {siteSettings?.logo ? (
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[var(--border-color)] group-hover:shadow-[var(--shadow-button-hover)] transition-all">
                  <Image 
                    src={urlFor(siteSettings.logo).url()} 
                    alt="Logo" 
                    fill 
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[var(--bg-card)] shadow-[var(--shadow-button)] border-2 border-[var(--border-color)] group-hover:shadow-[var(--shadow-button-hover)] transition-all">
                  <Code2 className="text-[var(--accent)] w-6 h-6" />
                </div>
              )}
              <span className="text-xl font-extrabold tracking-widest text-[var(--text-primary)]">
                {initials}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <ul className="flex items-center gap-6">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`text-sm font-medium tracking-wider transition-all duration-300 hover:text-[var(--accent)] ${
                          isActive ? 'text-[var(--accent)]' : 'text-[var(--text-secondary)]'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              
              <div className="h-6 w-[1px] bg-[var(--border-color)] mx-2" />
              
              <div className="flex items-center gap-4">
                <ThemeToggle />
                <Link 
                  href="/contact" 
                  className="inbio-button !text-xs !py-3 !px-6"
                >
                  HIRE ME
                </Link>
              </div>
            </nav>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center gap-4">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--bg-card)] shadow-[var(--shadow-button)] text-[var(--accent)]"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-[60] md:hidden backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] bg-[var(--bg-primary)] z-[70] md:hidden p-8 shadow-[-10px_0_30px_rgba(0,0,0,0.2)]"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-12">
                  {siteSettings?.logo ? (
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[var(--border-color)]">
                      <Image 
                        src={urlFor(siteSettings.logo).url()} 
                        alt="Logo" 
                        fill 
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[var(--bg-card)] shadow-[var(--shadow-button)] border-2 border-[var(--border-color)]">
                      <Code2 className="text-[var(--accent)] w-6 h-6" />
                    </div>
                  )}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--bg-card)] shadow-[var(--shadow-button)] text-[var(--accent)]"
                  >
                    <X size={20} />
                  </button>
                </div>

                <nav className="flex-1">
                  <ul className="flex flex-col gap-4">
                    {navLinks.map((link, i) => {
                      const isActive = pathname === link.href;
                      return (
                        <motion.li
                          key={link.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Link
                            href={link.href}
                            className={`block py-3 text-lg font-semibold tracking-wide border-b border-[var(--border-color)] transition-colors ${
                              isActive ? 'text-[var(--accent)]' : 'text-[var(--text-secondary)]'
                            }`}
                          >
                            {link.label}
                          </Link>
                        </motion.li>
                      );
                    })}
                  </ul>
                </nav>

                <div className="mt-auto">
                  <p className="text-sm text-[var(--text-muted)] mb-4 uppercase tracking-widest">Connect with me</p>
                  <Link 
                    href="/contact" 
                    className="inbio-button w-full !py-4"
                  >
                    CONTACT NOW
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
