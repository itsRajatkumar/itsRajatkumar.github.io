import { defineField, defineType } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fieldsets: [
    { name: 'seo', title: '🔍 SEO & Metadata', options: { collapsible: true, collapsed: false } },
    { name: 'hero', title: '🚀 Hero Section', options: { collapsible: true, collapsed: false } },
    { name: 'about', title: '👤 About Page', options: { collapsible: true, collapsed: true } },
    { name: 'contact', title: '📧 Contact Page', options: { collapsible: true, collapsed: true } },
    { name: 'social', title: '🔗 Social Links', options: { collapsible: true, collapsed: true } },
    { name: 'stats', title: '📊 Stats Counters', options: { collapsible: true, collapsed: true } },
    { name: 'footer', title: '🦶 Footer', options: { collapsible: true, collapsed: true } },
    { name: 'main', title: '⚙️ Global Settings', options: { collapsible: true, collapsed: false } },
    { name: 'theme', title: '🎨 Theme', options: { collapsible: true, collapsed: true } },
  ],
  fields: [
    // ═══════════════════════════════════════
    // GENERAL INFO
    // ═══════════════════════════════════════
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      initialValue: 'Rajat Kumar',
      description: 'Used across the site for your identity (Navbar, About, Footer)',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      initialValue: '+91 XXXXX XXXXX',
    }),
    defineField({
      name: 'showPhone',
      title: 'Show Phone Number',
      type: 'boolean',
      description: 'Toggle to show or hide the phone number across the UI',
      initialValue: true,
    }),

    // ═══════════════════════════════════════
    // SEO & METADATA
    // ═══════════════════════════════════════
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      fieldset: 'seo',
      description: 'Default title for browser tab & search results (e.g. "Rajat Kumar — Full-Stack Developer")',
      initialValue: 'Rajat Kumar — Full-Stack Developer',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      fieldset: 'seo',
      rows: 3,
      description: 'Default meta description for search engines (max ~160 chars)',
      initialValue: 'Full-Stack Developer specializing in MERN stack, ONDC ecosystem, and C++. Building scalable web applications and digital commerce solutions.',
    }),
    defineField({
      name: 'seoKeywords',
      title: 'SEO Keywords',
      type: 'array',
      fieldset: 'seo',
      of: [{ type: 'string' }],
      description: 'Keywords for search engine indexing',
      initialValue: ['Rajat Kumar', 'Full-Stack Developer', 'MERN Stack', 'ONDC', 'React', 'Next.js', 'Node.js', 'C++', 'Web Developer'],
    }),
    defineField({
      name: 'seoOgImage',
      title: 'OG Image (Social Share)',
      type: 'image',
      fieldset: 'seo',
      description: 'Image shown when sharing the site on social media (1200×630 recommended)',
      options: { hotspot: true },
    }),
    defineField({
      name: 'siteUrl',
      title: 'Site URL',
      type: 'url',
      fieldset: 'seo',
      initialValue: 'https://rajatkumar.tech',
    }),

    // ═══════════════════════════════════════
    // HERO SECTION
    // ═══════════════════════════════════════
    defineField({
      name: 'heroTitle',
      title: 'Your Name',
      type: 'string',
      fieldset: 'hero',
      initialValue: 'Rajat Kumar',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Your Role',
      type: 'string',
      fieldset: 'hero',
      initialValue: 'Full-Stack Developer',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      fieldset: 'hero',
      rows: 3,
      description: 'The paragraph below your name on the homepage',
      initialValue: 'Crafting scalable web applications and digital commerce solutions. Passionate about clean code and exceptional user experiences.',
    }),
    defineField({
      name: 'heroTaglines',
      title: 'Rotating Taglines',
      type: 'array',
      fieldset: 'hero',
      of: [{ type: 'string' }],
      description: 'These rotate one by one under your name',
      initialValue: ['MERN Stack Developer', 'ONDC Ecosystem Specialist', 'C++ Enthusiast'],
    }),
    defineField({
      name: 'resumeUrl',
      title: 'Resume Download URL',
      type: 'url',
      fieldset: 'hero',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image / Profile Photo',
      type: 'image',
      fieldset: 'hero',
      options: { hotspot: true },
      description: 'The photo shown in Hero and Contact sections',
    }),
    defineField({
      name: 'availableForWork',
      title: 'Available for Work',
      type: 'boolean',
      fieldset: 'hero',
      initialValue: true,
    }),

    // ═══════════════════════════════════════
    // ABOUT PAGE
    // ═══════════════════════════════════════
    defineField({
      name: 'aboutBio',
      title: 'Bio Paragraphs',
      type: 'text',
      fieldset: 'about',
      rows: 8,
      description: 'Use double line breaks (Enter twice) to separate paragraphs',
    }),
    defineField({
      name: 'education',
      title: 'Education',
      type: 'string',
      fieldset: 'about',
      initialValue: 'B.Tech in Computer Science & Engineering',
    }),
    defineField({
      name: 'college',
      title: 'College / University',
      type: 'string',
      fieldset: 'about',
    }),
    defineField({
      name: 'focusAreas',
      title: 'Focus Areas',
      type: 'array',
      fieldset: 'about',
      of: [{ type: 'string' }],
      description: 'Tag pills shown on the About page (e.g. "MERN Stack", "API Design")',
      initialValue: ['MERN Stack', 'ONDC Protocol', 'API Design', 'System Architecture'],
    }),
    defineField({
      name: 'interests',
      title: 'Interests',
      type: 'array',
      fieldset: 'about',
      of: [{ type: 'string' }],
      description: 'Tag pills for your interests',
      initialValue: ['Open Source', 'System Design', 'Competitive Programming', 'Tech Writing'],
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      fieldset: 'about',
      initialValue: 'India 🇮🇳',
    }),
    defineField({
      name: 'locationSubtext',
      title: 'Location Subtext',
      type: 'string',
      fieldset: 'about',
      initialValue: 'Open to remote opportunities worldwide',
    }),
    defineField({
      name: 'philosophyQuote',
      title: 'Philosophy Quote',
      type: 'text',
      fieldset: 'about',
      rows: 3,
      initialValue: 'The best code is no code at all. Every new line of code you willingly bring into the world is code that has to be debugged, maintained, and supported.',
    }),
    defineField({
      name: 'philosophyAttribution',
      title: 'Quote Attribution',
      type: 'string',
      fieldset: 'about',
      initialValue: 'My approach to software engineering',
    }),

    // ═══════════════════════════════════════
    // CONTACT PAGE
    // ═══════════════════════════════════════
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      fieldset: 'contact',
      initialValue: 'contact@rajatkumar.tech',
    }),
    defineField({
      name: 'contactLocation',
      title: 'Contact Location Text',
      type: 'string',
      fieldset: 'contact',
      initialValue: 'India · Open to Remote',
    }),
    defineField({
      name: 'contactResponseTime',
      title: 'Response Time',
      type: 'string',
      fieldset: 'contact',
      initialValue: 'Usually within 24 hours',
    }),
    defineField({
      name: 'contactHeading',
      title: 'Contact Page Heading',
      type: 'string',
      fieldset: 'contact',
      initialValue: 'Get in Touch',
    }),
    defineField({
      name: 'contactSubheading',
      title: 'Contact Page Subheading',
      type: 'string',
      fieldset: 'contact',
      initialValue: "Have a project in mind? Let's talk about it.",
    }),

    // ═══════════════════════════════════════
    // SOCIAL LINKS (Array of objects)
    // ═══════════════════════════════════════
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      fieldset: 'social',
      description: 'Add, reorder, or disable social media links. They appear in Footer and Contact page.',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  { title: 'GitHub', value: 'github' },
                  { title: 'LinkedIn', value: 'linkedin' },
                  { title: 'Twitter / X', value: 'twitter' },
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'YouTube', value: 'youtube' },
                  { title: 'Email', value: 'email' },
                  { title: 'Website', value: 'website' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'string',
              description: 'Full URL (or mailto: for email)',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'enabled',
              title: 'Enabled',
              type: 'boolean',
              initialValue: true,
            }),
          ],
          preview: {
            select: {
              title: 'platform',
              subtitle: 'url',
              enabled: 'enabled',
            },
            prepare({ title, subtitle, enabled }) {
              return {
                title: `${enabled === false ? '🔴' : '🟢'} ${(title || '').charAt(0).toUpperCase() + (title || '').slice(1)}`,
                subtitle: subtitle || '',
              };
            },
          },
        },
      ],
      initialValue: [
        { platform: 'github', url: 'https://github.com', enabled: true },
        { platform: 'linkedin', url: 'https://linkedin.com', enabled: true },
        { platform: 'twitter', url: 'https://twitter.com', enabled: true },
        { platform: 'email', url: 'mailto:contact@rajatkumar.tech', enabled: true },
      ],
    }),

    // ═══════════════════════════════════════
    // STATS COUNTERS
    // ═══════════════════════════════════════
    defineField({
      name: 'stats',
      title: 'Homepage Stats',
      type: 'array',
      fieldset: 'stats',
      description: 'Counters displayed on the homepage (e.g. "2+" → "Years Experience")',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'value', title: 'Value', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'label', title: 'Label', type: 'string', validation: (Rule) => Rule.required() }),
          ],
          preview: {
            select: { title: 'value', subtitle: 'label' },
          },
        },
      ],
      initialValue: [
        { value: '2+', label: 'Years Experience' },
        { value: '10+', label: 'Projects Built' },
        { value: '5+', label: 'Technologies' },
        { value: '∞', label: 'Lines of Code' },
      ],
    }),

    // ═══════════════════════════════════════
    // FOOTER
    // ═══════════════════════════════════════
    defineField({
      name: 'projectsHeading',
      title: 'Projects Section Heading',
      type: 'string',
      fieldset: 'main',
      initialValue: 'My Portfolio',
    }),
    defineField({
      name: 'projectsSubheading',
      title: 'Projects Section Subheading',
      type: 'string',
      fieldset: 'main',
      initialValue: 'VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK',
    }),
    defineField({
      name: 'skillsHeading',
      title: 'Skills Section Heading',
      type: 'string',
      fieldset: 'main',
      initialValue: 'What I Do',
    }),
    defineField({
      name: 'skillsSubheading',
      title: 'Skills Section Subheading',
      type: 'string',
      fieldset: 'main',
      initialValue: 'FEATURES',
    }),
    defineField({
      name: 'experienceHeading',
      title: 'Experience Heading',
      type: 'string',
      fieldset: 'main',
      initialValue: 'My Resume',
    }),
    defineField({
      name: 'experienceSubheading',
      title: 'Experience Subheading',
      type: 'string',
      fieldset: 'main',
      initialValue: '2022 - PRESENT',
    }),
    defineField({
      name: 'footerTagline',
      title: 'Footer Tagline',
      type: 'string',
      fieldset: 'footer',
      description: 'Text below your name in the footer',
      initialValue: 'Full-Stack Developer · Building for the web',
    }),

    // ═══════════════════════════════════════
    // THEME
    // ═══════════════════════════════════════
    defineField({
      name: 'githubUsername',
      title: 'GitHub Username',
      type: 'string',
      fieldset: 'main',
      description: 'Used for fetching live GitHub activity',
    }),
    defineField({
      name: 'showHomeProjects',
      title: 'Show Projects on Home Page',
      type: 'boolean',
      fieldset: 'main',
      initialValue: true,
    }),
    defineField({
      name: 'showHomeSkills',
      title: 'Show Skills on Home Page',
      type: 'boolean',
      fieldset: 'main',
      initialValue: true,
    }),
    defineField({
      name: 'theme',
      title: 'Color Theme',
      type: 'string',
      fieldset: 'theme',
      description: 'Choose the accent color palette for the entire site.',
      options: {
        list: [
          { title: '🔵 Cyan / Teal', value: 'cyan' },
          { title: '🟣 Purple / Violet', value: 'purple' },
          { title: '🟢 Emerald / Green', value: 'emerald' },
          { title: '🔴 Rose / Pink', value: 'rose' },
          { title: '🟠 Amber / Orange', value: 'amber' },
          { title: '💙 Blue / Indigo', value: 'blue' },
          { title: '🔥 Sunset (Orange → Pink)', value: 'sunset' },
          { title: '🌊 Ocean (Cyan → Blue)', value: 'ocean' },
        ],
        layout: 'radio',
      },
      initialValue: 'cyan',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings',
        subtitle: 'Global configuration — SEO, social links, theme, content',
      };
    },
  },
});
