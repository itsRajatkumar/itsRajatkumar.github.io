import { PortableTextComponents } from '@portabletext/react';
import Image from 'next/image';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('json', json);
import { urlFor } from '@/sanity/image';

export const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return (
        <figure className="my-8">
          <div className="relative rounded-xl overflow-hidden border" style={{ borderColor: 'var(--border-color)' }}>
            <Image
              src={urlFor(value).width(1200).url()}
              alt={value.alt || 'Image'}
              width={1200}
              height={675}
              className="w-full h-auto"
            />
          </div>
          {value.caption && (
            <figcaption
              className="text-center text-sm mt-3"
              style={{ color: 'var(--text-muted)' }}
            >
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    code: ({ value }: { value: { code: string; language?: string; filename?: string } }) => {
      if (!value?.code) return null;
      return (
        <div className="my-6 rounded-xl overflow-hidden" style={{ border: '1px solid var(--border-color)' }}>
          {value.filename && (
            <div
              className="px-4 py-2 text-xs font-mono"
              style={{
                background: 'var(--bg-elevated)',
                borderBottom: '1px solid var(--border-color)',
                color: 'var(--text-muted)',
              }}
            >
              {value.filename}
            </div>
          )}
          <SyntaxHighlighter
            language={value.language || 'text'}
            style={dracula}
            customStyle={{
              margin: 0,
              padding: '1.25rem',
              background: 'var(--bg-secondary)',
              fontSize: '0.875rem',
              lineHeight: '1.7',
              borderRadius: 0,
            }}
          >
            {value.code}
          </SyntaxHighlighter>
        </div>
      );
    },
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href || '';
      const isExternal = href.startsWith('http');
      return (
        <a
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          style={{ color: 'var(--accent-light)' }}
          className="underline underline-offset-2 hover:opacity-80 transition-opacity"
        >
          {children}
        </a>
      );
    },
    code: ({ children }) => (
      <code
        className="font-mono text-sm px-1.5 py-0.5 rounded"
        style={{
          background: 'var(--accent-muted)',
          color: 'var(--accent-light)',
        }}
      >
        {children}
      </code>
    ),
  },
  block: {
    h2: ({ children }) => (
      <h2
        className="text-2xl md:text-3xl font-bold mt-12 mb-4"
        style={{ color: 'var(--text-primary)' }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        className="text-xl md:text-2xl font-semibold mt-8 mb-3"
        style={{ color: 'var(--text-primary)' }}
      >
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4
        className="text-lg font-semibold mt-6 mb-2"
        style={{ color: 'var(--text-primary)' }}
      >
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote
        className="my-6 pl-4 italic"
        style={{
          borderLeft: '3px solid var(--accent)',
          color: 'var(--text-secondary)',
        }}
      >
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="space-y-2 mb-4 ml-4" style={{ color: 'var(--text-secondary)' }}>
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="space-y-2 mb-4 ml-4 list-decimal" style={{ color: 'var(--text-secondary)' }}>
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex gap-2">
        <span className="mt-2.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--accent)' }} />
        <span>{children}</span>
      </li>
    ),
    number: ({ children }) => <li>{children}</li>,
  },
};
