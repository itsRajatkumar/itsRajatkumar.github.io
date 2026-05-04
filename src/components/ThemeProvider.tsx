'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  // We no longer fetch accent here as it's handled in layout.tsx via data-accent on body
  // However, we still need a mount check for next-themes to avoid hydration mismatch
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen transition-colors duration-300">
        {children}
      </div>
    </NextThemesProvider>
  );
}
