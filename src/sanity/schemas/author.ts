import { defineArrayMember, defineField, defineType } from 'sanity';

export const author = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'social',
      type: 'array',
      title: 'Social Links',
      description: 'Enter your Social Media URLs',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              type: 'string',
              name: 'media',
              title: 'Choose Social Media',
              options: {
                list: [
                  { title: 'Twitter', value: 'twitter' },
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'Linkedin', value: 'linkedin' },
                  { title: 'Github', value: 'github' },
                  { title: 'Youtube', value: 'youtube' },
                ],
              },
            }),
            defineField({
              type: 'url',
              name: 'url',
              title: 'Full Profile URL',
            }),
          ],
          preview: {
            select: {
              title: 'media',
              subtitle: 'url',
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
});
