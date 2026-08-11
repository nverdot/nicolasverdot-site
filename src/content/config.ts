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
    /** Titre/description courts pour la balise <title> et la meta description (SEO). Si absents, on retombe sur title/summary — souvent trop longs pour un SERP (Google tronque au-delà de ~60 / ~155 caractères). */
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    offerHref: z.string().optional(),
    offerLabel: z.string().optional(),
    ctaTitle: z.string().optional(),
    ctaSubtitle: z.string().optional(),
    factsheet: z.array(z.object({
      label: z.string(),
      value: z.string(),
      href: z.string().optional(),
    })).optional(),
    /** Vraie photo du client pour le hero (colonne de droite). Absente si aucune photo réelle n'est disponible — jamais de photo générée ou recréée. */
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    /** Texte éditorial de la section "Le point de départ", sous la question mise en avant. */
    challengeText: z.string().optional(),
    /** Section "Notre rôle" : ce que le collectif savait déjà vs. ce dont nous étions responsables. */
    role: z.object({
      expertiseTitle: z.string().default("L'expertise était dans la salle"),
      expertiseItems: z.array(z.string()),
      responsibilityTitle: z.string().default('Notre responsabilité'),
      responsibilityItems: z.array(z.string()),
    }).optional(),
    /** Frise "Le processus" : 4 à 6 étapes. */
    process: z.array(z.object({
      title: z.string(),
      text: z.string(),
    })).optional(),
    /** Un ou plusieurs chapitres (ateliers, missions, séminaires...) structurés en cartes plutôt qu'en longs paragraphes qui s'enchaînent. */
    chapters: z.array(z.object({
      number: z.string(),
      title: z.string(),
      subtitle: z.string(),
      context: z.string(),
      challenge: z.string(),
      approach: z.string(),
      resultsTitle: z.string().default('Ce que la démarche a permis'),
      results: z.array(z.object({
        title: z.string(),
        text: z.string(),
      })),
      image: z.string().optional(),
      imageAlt: z.string().optional(),
    })).optional(),
    /** Section facilitation graphique : vraies photos de fresques uniquement. Si aucune n'est disponible, la section affiche des emplacements à alimenter plutôt que d'inventer des images. */
    gallery: z.object({
      title: z.string().default('Rendre visible pour permettre au collectif de penser ensemble'),
      text: z.string().optional(),
      process: z.array(z.string()).default(['Comprendre', 'Relier', 'Décider', 'Mémoriser']),
      images: z.array(z.object({
        src: z.string(),
        alt: z.string(),
        wide: z.boolean().optional(),
      })).default([]),
    }).optional(),
    /** 4 cartes "Ce que la facilitation a changé". */
    impact: z.array(z.object({
      title: z.string(),
      text: z.string(),
    })).optional(),
    /** Section éditoriale de clôture ("facilitation neutre au service de l'expertise du terrain"). */
    closingTitle: z.string().optional(),
    closingText: z.string().optional(),
    publishDate: z.date(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { articles, caseStudies };
