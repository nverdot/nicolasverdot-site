import type { ImageMetadata } from 'astro';
import heroCoachingEquipe from '../assets/offres/hero-coaching-equipe.png';

export interface OfferQuestion {
  text: string;
  positive: boolean;
}

export interface OfferLevel {
  max: number;
  title: string;
  text: string;
  tips: string[];
}

export interface Offer {
  slug: string;
  eyebrow: string;
  title: string;
  titleAccent?: string;
  titleTail?: string;
  summary: string;
  heroImage?: ImageMetadata;
  heroImageAlt?: string;
  heroFlip?: boolean;
  price: string;
  useCaseLead: string;
  problems: { title: string; text: string }[];
  outcomeTitle: string;
  outcomeText: string;
  timeline: string[];
  investmentText: string;
  quizTitle: string;
  quizIntro: string;
  quizQuestions: OfferQuestion[];
  quizLevels: OfferLevel[];
  quizCta: string;
}

export const offers: Offer[] = [
  {
    slug: 'coaching-equipe',
    eyebrow: 'Ateliers, séminaires, coaching du manager',
    title: 'Coaching',
    titleAccent: 'd’équipe.',
    summary: 'Un dispositif combiné — séminaires, ateliers réguliers et coaching du manager — pour faire <strong>évoluer durablement</strong> la manière de travailler, de décider et de <strong>responsabiliser l’équipe</strong>.',
    heroImage: heroCoachingEquipe,
    heroImageAlt: 'Une petite équipe soudée marche en formation resserrée sur une terrasse en hauteur, rythme synchronisé.',
    heroFlip: true,
    price: 'À partir de 12 000 € HT',
    useCaseLead: 'Pour les organisations qui vivent régulièrement les mêmes difficultés malgré les plans d’action, les séminaires ou les réorganisations.',
    problems: [
      { title: 'Dépendance au manager', text: 'Trop de décisions remontent vers quelques personnes.' },
      { title: 'Rôles instables', text: 'Les responsabilités se recouvrent ou restent floues.' },
      { title: 'Rituels peu utiles', text: 'Les réunions existent mais n’aident plus réellement à avancer.' },
      { title: 'Problèmes récurrents', text: 'Les mêmes tensions et blocages réapparaissent.' },
    ],
    outcomeTitle: 'Des règles du jeu plus claires, des équipes plus autonomes et un fonctionnement capable de s’ajuster.',
    outcomeText: 'La méthode est choisie après le cadrage. Le résultat attendu, lui, est défini avant l’intervention.',
    timeline: [
      'Diagnostic et observation',
      'Séminaire de lancement',
      'Ateliers réguliers',
      'Accompagnement du sponsor et des managers',
      'Bilan, transmission et plan de continuité',
    ],
    investmentText: 'Le tarif dépend du nombre de participants, du niveau de préparation, des entretiens, des supports, du nombre de facilitateurs et de la restitution attendue.',
    quizTitle: 'Votre équipe est-elle réellement autonome ?',
    quizIntro: 'Répondez à 8 questions et obtenez une première lecture de votre situation.',
    quizQuestions: [
      { text: 'L’équipe peut avancer sans attendre systématiquement le manager.', positive: true },
      { text: 'Les rôles et responsabilités sont suffisamment clairs.', positive: true },
      { text: 'Les réunions nous aident réellement à avancer.', positive: true },
      { text: 'Les décisions sont suivies et mises en œuvre dans le temps.', positive: true },
      { text: 'Les problèmes sont traités au bon niveau.', positive: true },
      { text: 'L’équipe sait ajuster son fonctionnement.', positive: true },
      { text: 'Notre fonctionnement repose encore trop sur quelques personnes clés.', positive: false },
      { text: 'Les mêmes difficultés reviennent malgré les plans d’action.', positive: false },
    ],
    quizLevels: [
      { max: 25, title: 'Un fonctionnement robuste', text: 'Votre équipe semble disposer d’un cadre relativement stable et autonome.', tips: ['Préserver les responsabilités claires', 'Continuer à apprendre du terrain', 'Éviter de surcharger les rituels'] },
      { max: 50, title: 'Une autonomie encore fragile', text: 'L’équipe avance, mais dépend encore de certaines personnes ou circonstances.', tips: ['Clarifier les marges de décision', 'Renforcer le suivi', 'Simplifier les rituels'] },
      { max: 75, title: 'Une dépendance importante', text: 'Le système fonctionne davantage grâce à l’énergie de quelques personnes qu’à des règles du jeu solides.', tips: ['Redistribuer les responsabilités', 'Travailler la posture managériale', 'Installer des boucles d’ajustement'] },
      { max: 100, title: 'Un système qui reproduit les blocages', text: 'Les difficultés paraissent structurelles. Un atelier isolé produirait probablement un effet temporaire.', tips: ['Observer le fonctionnement réel', 'Expérimenter de nouvelles règles', 'Accompagner l’équipe dans la durée'] },
    ],
    quizCta: 'Faisons le point sur votre fonctionnement',
  },
];
