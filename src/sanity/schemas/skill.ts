import { defineField, defineType } from 'sanity';

export const skill = defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'categoryRef',
      title: 'Category (from Schema)',
      type: 'reference',
      to: [{ type: 'category' }],
      description: 'Select a category from the predefined categories',
    }),
    defineField({
      name: 'category',
      title: 'Category (Manual/Legacy)',
      type: 'string',
      description: 'If you don\'t want to use a reference, or for legacy support, type a category here (e.g., "AI")',
      options: {
        list: [
          { title: 'Frontend', value: 'Frontend' },
          { title: 'Backend', value: 'Backend' },
          { title: 'Database', value: 'Database' },
          { title: 'DevOps', value: 'DevOps' },
          { title: 'Languages', value: 'Languages' },
          { title: 'Tools', value: 'Tools' },
          { title: 'AI', value: 'AI' },
        ],
      },
    }),
    defineField({
      name: 'skillName',
      title: 'Skill Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Lucide Icon Name',
      type: 'string',
      description: 'Lucide icon name (e.g., "code", "database", "server"). Ignored if SVG Content is provided.',
    }),
    defineField({
      name: 'svgIcon',
      title: 'SVG Icon Content',
      type: 'text',
      description: 'Paste raw SVG code here. This will override the Lucide icon.',
      rows: 5,
    }),
    defineField({
      name: 'enabled',
      title: 'Enabled',
      type: 'boolean',
      description: 'Toggle off to hide this skill from the website without deleting it',
      initialValue: true,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'skillName',
      subtitle: 'category',
      enabled: 'enabled',
    },
    prepare({ title, subtitle, enabled }) {
      return {
        title: `${enabled === false ? '🔴' : '🟢'} ${title}`,
        subtitle: subtitle || '',
      };
    },
  },
});
