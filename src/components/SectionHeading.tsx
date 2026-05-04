import AnimatedSection from './AnimatedSection';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({ title, subtitle, align = 'center' }: SectionHeadingProps) {
  return (
    <AnimatedSection className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <span className="text-[var(--accent)] text-sm font-medium tracking-[3px] uppercase block mb-4">
          {subtitle}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[var(--text-primary)]">
        {title}
      </h2>
    </AnimatedSection>
  );
}
