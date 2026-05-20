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
import Script from 'next/script';

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

  const ogImage = settings?.seoOgImage || '/og-image.png';

  return {
    metadataBase: new URL(settings?.siteUrl || 'https://rajatkumar.tech'),
    title: {
      template: `%s | ${settings?.name || 'Rajat Kumar'}`,
      default: settings?.seoTitle || 'Rajat Kumar | Portfolio',
    },
    description: settings?.seoDescription || 'Professional Full-Stack Developer Portfolio',
    keywords: settings?.seoKeywords || ['Next.js', 'React', 'TypeScript', 'Sanity', 'Portfolio'],
    authors: [{ name: settings?.name || 'Rajat Kumar' }],
    alternates: {
      canonical: '/',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: settings?.seoTitle || 'Rajat Kumar | Portfolio',
      description: settings?.seoDescription || 'Professional Full-Stack Developer Portfolio',
      url: '/',
      siteName: settings?.name || 'Rajat Kumar',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: settings?.name || 'Rajat Kumar',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: settings?.seoTitle || 'Rajat Kumar | Portfolio',
      description: settings?.seoDescription || 'Professional Full-Stack Developer Portfolio',
      images: [ogImage],
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
    "description": settings?.seoDescription || "Software Developer specializing in the MERN Stack and ONDC protocols with over three years of experience.",
    "worksFor": {
      "@type": "Organization",
      "name": latestExp?.company || "Arachnomesh Technologies Pvt. Ltd"
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": settings?.college || "Geetanjali Institute of Technical Studies, Udaipur"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Neemuch",
      "addressRegion": "Madhya Pradesh",
      "addressCountry": "IN"
    },
    "sameAs": settings?.socialLinks?.length
      ? settings.socialLinks.filter(l => l.enabled !== false).map(l => l.url)
      : [
        "https://github.com/itsrajatkumar",
        "https://linkedin.com/in/thisisrajatkumar",
        "https://x.com/iam_RKPrajapati",
        "http://instagram.com/thisisrajatkumar",
        "https://www.facebook.com/thisisrajatkumar"
      ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": settings?.contactEmail || "contact@rajatkumar.tech",
      "contactType": "professional"
    },
    "knowsAbout": settings?.focusAreas?.length
      ? settings.focusAreas
      : [
        "MERN Stack",
        "ONDC Protocol",
        "API Design",
        "System Optimization",
        "TypeScript",
        "MongoDB",
        "Node.js"
      ]
  };

  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
