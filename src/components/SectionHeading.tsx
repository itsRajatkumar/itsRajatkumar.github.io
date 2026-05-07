import AnimatedSection from './AnimatedSection';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export default function SectionHeading({ 
  title, 
  subtitle, 
  align = 'center',
  level = 'h2' 
}: SectionHeadingProps) {
  const HeadingTag = level;
  
  return (
    <AnimatedSection className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <span className="text-[var(--accent)] text-sm font-medium tracking-[3px] uppercase block mb-4">
          {subtitle}
        </span>
      )}
      <HeadingTag className="text-4xl md:text-5xl font-bold leading-tight text-[var(--text-primary)]">
        {title}
      </HeadingTag>
    </AnimatedSection>
  );
}
