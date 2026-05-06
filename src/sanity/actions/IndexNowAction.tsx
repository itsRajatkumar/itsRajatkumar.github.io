import { useState, useCallback } from 'react';
import { DocumentActionProps } from 'sanity';
import { useToast } from '@sanity/ui';
import { RocketIcon } from '@sanity/icons';

/**
 * Custom Sanity Document Action to trigger IndexNow manually.
 */
export const IndexNowAction = ({
  id,
  type,
  published,
  draft,
  onComplete,
}: DocumentActionProps) => {
  const [isIndexing, setIsIndexing] = useState(false);
  const toast = useToast();

  const doc = published || draft;
  const slug = (doc?.slug as any)?.current;

  const handle = useCallback(async () => {
    if (!doc) return;
    
    setIsIndexing(true);

    try {
      const response = await fetch('/api/index-now', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type,
          slug,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.push({
          status: 'success',
          title: 'IndexNow Success',
          description: `Successfully notified search engines about ${type}: ${slug || 'Home'}`,
        });
      } else {
        throw new Error(data.error || 'Failed to trigger indexing');
      }
    } catch (err) {
      toast.push({
        status: 'error',
        title: 'IndexNow Failed',
        description: err instanceof Error ? err.message : 'Unknown error occurred',
      });
    } finally {
      setIsIndexing(false);
      onComplete();
    }
  }, [doc, type, slug, toast, onComplete]);

  // Only show for relevant types and if document exists
  const supportedTypes = ['post', 'category', 'author', 'project', 'siteSettings', 'skill', 'experience'];
  if (!supportedTypes.includes(type) || !doc) {
    return null;
  }

  return {
    label: isIndexing ? 'Indexing...' : 'Index Now',
    icon: RocketIcon,
    onHandle: handle,
    disabled: isIndexing || (!published && type !== 'siteSettings'),
    title: !published && type !== 'siteSettings' ? 'Publish the document first to index' : 'Notify search engines about this change',
  };
};

/**
 * Wraps the default publish action to automatically trigger IndexNow.
 */
export const createPublishWithIndexNow = (originalPublishAction: any, context: any) => {
  const { type, schemaType } = context;

  return (props: any) => {
    const originalResult = originalPublishAction(props);
    const slug = (props.draft?.slug as any)?.current || (props.published?.slug as any)?.current;

    return {
      ...originalResult,
      onHandle: async () => {
        // Run original publish
        if (originalResult.onHandle) {
          await originalResult.onHandle();
        }

        // Trigger IndexNow auto-indexing
        try {
          await fetch('/api/index-now', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ type: schemaType, slug }),
          });
          console.log(`Auto-indexed ${schemaType}: ${slug}`);
        } catch (err) {
          console.error('Auto-indexing failed:', err);
        }
      },
    };
  };
};
