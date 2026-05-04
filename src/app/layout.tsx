import type { Metadata } from 'next';
import { Poppins, Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThemeProvider from '@/components/ThemeProvider';
import { sanityClient } from '@/sanity/client';
import { siteSettingsQuery } from '@/sanity/queries';
import { SiteSettings } from '@/lib/types';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
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
  const settings: SiteSettings = await sanityClient.fetch(siteSettingsQuery);

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
        </ThemeProvider>
      </body>
    </html>
  );
}
