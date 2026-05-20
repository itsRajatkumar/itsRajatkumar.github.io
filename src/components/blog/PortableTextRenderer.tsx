import { PortableText, PortableTextComponents } from '@portabletext/react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('json', json);
import Image from 'next/image';
import { urlFor } from '@/sanity/image';

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="relative w-full h-[400px] my-8 rounded-xl overflow-hidden bg-[var(--bg-secondary)]">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || 'Blog Image'}
            fill
            className="object-contain"
          />
        </div>
      );
    },
    code: ({ value }) => {
      if (!value || !value.code) {
        return null;
      }
      return (
        <div className="my-6 rounded-xl overflow-hidden shadow-lg border border-[var(--border-color)]">
          <SyntaxHighlighter
            language={value.language || 'javascript'}
            style={atomDark}
            customStyle={{ margin: 0, padding: '1.5rem', background: '#0d1117' }}
          >
            {value.code}
          </SyntaxHighlighter>
        </div>
      );
    },
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a href={value.href} rel={rel} className="text-[var(--accent)] hover:underline">
          {children}
        </a>
      );
    },
    highlight: ({ children }) => (
      <span className="bg-yellow-200 text-black px-1 rounded">{children}</span>
    ),
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PortableTextRenderer({ value }: { value: any[] }) {
  return (
    <div className="prose prose-lg mx-auto prose-invert prose-a:text-[var(--accent)] prose-img:rounded-xl">
      <PortableText value={value} components={components} />
    </div>
  );
}
