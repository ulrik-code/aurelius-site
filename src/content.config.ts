import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    publishDate: z.string(),
    // Last real content change. Feeds the byline and the Article dateModified.
    updatedDate: z.string().optional(),
    readTime: z.string(),
    tier: z.enum(['category-defining', 'high-intent', 'long-tail']),
    targetQueries: z.array(z.string()),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })),
    relatedGuides: z.array(z.string()).optional(),
    // App Store campaign token for this page. When set, the page's download buttons
    // go through /go/<guide-slug>/, which counts the tap and opens the App Store with
    // ct=<storeToken>, so App Store Connect Campaigns shows which page brought it.
    storeToken: z.string().regex(/^[a-z0-9_]{1,40}$/).optional(),
  }),
});

export const collections = { guides };
