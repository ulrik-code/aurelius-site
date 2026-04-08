import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    publishDate: z.string(),
    readTime: z.string(),
    tier: z.enum(['category-defining', 'high-intent', 'long-tail']),
    targetQueries: z.array(z.string()),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })),
    relatedGuides: z.array(z.string()).optional(),
  }),
});

export const collections = { guides };
