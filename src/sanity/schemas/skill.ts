import { defineField, defineType } from 'sanity';

export const skill = defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Frontend', value: 'Frontend' },
          { title: 'Backend', value: 'Backend' },
          { title: 'Database', value: 'Database' },
          { title: 'DevOps', value: 'DevOps' },
          { title: 'Languages', value: 'Languages' },
          { title: 'Tools', value: 'Tools' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'skillName',
      title: 'Skill Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Lucide icon name (e.g., "code", "database", "server")',
    }),
    defineField({
      name: 'enabled',
      title: 'Enabled',
      type: 'boolean',
      description: 'Toggle off to hide this skill from the website without deleting it',
      initialValue: true,
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
