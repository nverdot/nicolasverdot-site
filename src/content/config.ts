import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    pillar: z.enum([
      'Décision et priorisation',
      'Leadership et autonomie',
      'Réunions et séminaires',
      'Intelligence collective concrète',
      'Pensée visuelle',
      'Parcours personnel',
    ]),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { articles };
