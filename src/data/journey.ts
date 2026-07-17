// Le grand parcours narratif de la home : 6 étapes, du flou à l'action.
// Piloté par la donnée pour pouvoir ajuster texte et ordre sans toucher au
// composant. `icon` référence un des dessins provisoires de JourneyIcon.astro
// — à remplacer par de vrais sketchnotes plus tard.
export interface JourneyStep {
  icon: 'observer' | 'clarifier' | 'concevoir' | 'vivre' | 'decider' | 'ancrer';
  eyebrow: string;
  title: string;
  text: string;
  bullets: string[];
}

export const journey: JourneyStep[] = [
  {
    icon: 'observer',
    eyebrow: 'Étape 1 · Observer',
    title: 'Avant de proposer, je regarde.',
    text: "Un collectif qui n'avance plus a rarement besoin d'une solution de plus. Il a besoin qu'on prenne le temps de comprendre le terrain : qui porte quoi, ce qui se dit vraiment, ce qui bloque en silence.",
    bullets: ['Écouter les acteurs', 'Comprendre le système', 'Distinguer le symptôme de la cause'],
  },
  {
    icon: 'clarifier',
    eyebrow: 'Étape 2 · Clarifier',
    title: 'Un cap avant une méthode.',
    text: "On ne facilite pas un collectif qui ne sait pas où il va. Avant de choisir un format d'atelier, il faut un horizon commun : une intention claire, des priorités assumées, une décision nommée.",
    bullets: ["Clarifier l'intention", 'Aligner les parties prenantes', 'Nommer la décision attendue'],
  },
  {
    icon: 'concevoir',
    eyebrow: 'Étape 3 · Concevoir',
    title: 'Le dispositif suit le contexte, jamais l\'inverse.',
    text: "Il n'existe pas de méthode universelle. World Café, forum ouvert, atelier de décision, séminaire de direction : le format se choisit après avoir compris où vous en êtes, pas avant.",
    bullets: ['Choisir le format adapté', 'Séquencer les temps', 'Préparer les conditions de réussite'],
  },
  {
    icon: 'vivre',
    eyebrow: "Étape 4 · Faire vivre",
    title: 'Ici, tout le monde contribue — pas seulement ceux qui parlent fort.',
    text: "Un atelier bien conçu donne une place à chacun : celui qui a besoin de réfléchir avant de parler, celle qui voit ce que personne d'autre ne voit. La facilitation graphique rend visible ce qui se construit.",
    bullets: ['Ateliers et séminaires', 'Intelligence collective', 'Facilitation graphique en direct'],
  },
  {
    icon: 'decider',
    eyebrow: 'Étape 5 · Décider',
    title: 'Une bonne discussion ne suffit pas.',
    text: "Les idées qui circulent doivent converger : vers une priorité, une décision, un responsable, une échéance. Sans ce dernier pas, même le meilleur atelier retombe au premier lundi.",
    bullets: ['Faire émerger les convergences', 'Arbitrer et prioriser', 'Attribuer les responsabilités'],
  },
  {
    icon: 'ancrer',
    eyebrow: 'Étape 6 · Ancrer',
    title: 'Le vrai test, c\'est le mardi suivant.',
    text: "Ce qui se joue en séminaire doit survivre au quotidien. Rituels, suivi des engagements, autonomie progressive : mon rôle continue après que la salle s'est vidée, jusqu'à ce que vous n'ayez plus besoin de moi.",
    bullets: ['Installer des rituels', 'Suivre les engagements', "Développer l'autonomie"],
  },
];
