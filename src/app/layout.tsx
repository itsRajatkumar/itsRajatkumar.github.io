import type { Metadata } from 'next';
import { Poppins, Montserrat } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThemeProvider from '@/components/ThemeProvider';
import { sanityClient } from '@/sanity/client';
import { siteSettingsQuery, latestExperienceQuery } from '@/sanity/queries';
import { SiteSettings } from '@/lib/types';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
});

export async function generateMetadata(): Promise<Metadata> {
  const settings: SiteSettings = await sanityClient.fetch(siteSettingsQuery);
  
  return {
    title: {
      template: `%s | ${settings?.name || 'Rajat Kumar'}`,
      default: settings?.seoTitle || 'Rajat Kumar | Portfolio',
    },
    description: settings?.seoDescription || 'Professional Full-Stack Developer Portfolio',
    keywords: settings?.seoKeywords || ['Next.js', 'React', 'TypeScript', 'Sanity', 'Portfolio'],
    authors: [{ name: settings?.name || 'Rajat Kumar' }],
    openGraph: {
      title: settings?.seoTitle || 'Rajat Kumar | Portfolio',
      description: settings?.seoDescription || 'Professional Full-Stack Developer Portfolio',
      type: 'website',
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [settings, latestExp] = await Promise.all([
    sanityClient.fetch<SiteSettings>(siteSettingsQuery),
    sanityClient.fetch<{ company: string }>(latestExperienceQuery)
  ]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": settings?.name || "Rajat Kumar Prajapati",
    "url": settings?.siteUrl || "https://rajatkumar.tech",
    "jobTitle": settings?.heroTaglines?.[0] || "Software Developer",
    "worksFor": {
      "@type": "Organization",
      "name": latestExp?.company || "Arachnomesh Technologies Pvt. Ltd."
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": settings?.college || "Geetanjali Institute of Technical Studies, Udaipur"
    },
    "sameAs": settings?.socialLinks?.filter(l => l.enabled !== false).map(l => l.url) || [],
    "knowsAbout": settings?.focusAreas || []
  };

  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body 
        className={`${poppins.variable} ${montserrat.variable} font-sans`}
        data-accent={settings?.theme || 'cyan'}
      >
        <ThemeProvider>
          <Navbar siteSettings={settings} />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer siteSettings={settings} />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
