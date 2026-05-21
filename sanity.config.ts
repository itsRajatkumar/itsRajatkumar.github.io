'use client';

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { codeInput } from '@sanity/code-input';
import { table } from '@sanity/table';
import { schemaTypes } from './src/sanity/schemas';
import ContactMessages from './src/sanity/tools/ContactMessages';
import { IndexNowAction, createPublishWithIndexNow } from './src/sanity/actions/IndexNowAction';

export default defineConfig({
  name: 'rajat-kumar-portfolio',
  title: 'Rajat Kumar Portfolio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  basePath: '/studio',
  plugins: [
    table(),
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Site Settings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (listItem) => !['siteSettings'].includes(listItem.getId()!)
            ),
          ]),
    }),
    codeInput(),
  ],
  tools: (prev) => [
    ...prev,
    {
      name: 'contact-messages',
      title: 'Contact Messages',
      component: ContactMessages,
    },
  ],
  schema: {
    types: schemaTypes,
  },
  document: {
    actions: (prev, context) => {
      const supportedTypes = ['post', 'category', 'author', 'project', 'siteSettings', 'skill', 'experience'];
      
      if (supportedTypes.includes(context.schemaType)) {
        return [
          ...prev.map((originalAction) =>
            originalAction.action === 'publish'
              ? createPublishWithIndexNow(originalAction, context)
              : originalAction
          ),
          IndexNowAction,
        ];
      }
      return prev;
    },
  },
});
