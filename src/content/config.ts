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

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    client: z.string(),
    clientLogo: z.string().optional(),
    title: z.string(),
    subtitle: z.string(),
    question: z.string(),
    summary: z.string(),
    offerHref: z.string().optional(),
    offerLabel: z.string().optional(),
    ctaTitle: z.string().optional(),
    ctaSubtitle: z.string().optional(),
    publishDate: z.date(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { articles, caseStudies };
