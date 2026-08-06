import { withBase } from '../utils/url';

export interface Priority {
  title: string;
  text: string;
  href: string;
}

export const priorities: Priority[] = [
  { title: "Déléguer l'animation d'un temps collectif", text: "Je conçois et j'anime votre séminaire ou atelier de bout en bout — cadrage, facilitation graphique, synthèse et prochaines étapes.", href: withBase('/offres/deleguer-animation/') },
  { title: 'Mentoring', text: "Je co-construis avec vous, et je vous prépare à animer vous-même : posture, déroulé, méthodes, répétition des moments sensibles.", href: withBase('/offres/mentoring/') },
  { title: 'Facilitation graphique / Capture graphique', text: "Grâce à la facilitation graphique et à la capture graphique, traduire en direct vos séminaires, ateliers ou conférences en fresques visuelles qui aident à comprendre, se souvenir et embarquer ceux qui n'étaient pas là.", href: withBase('/offres/capture-graphique/') },
  { title: 'Coaching individuel', text: 'Travailler la posture, les interactions et la sécurité intérieure du leader facilitateur, en tête-à-tête.', href: withBase('/offres/coaching-professionnel/') },
  { title: 'Accompagnement des transformations', text: 'Débloquer une transformation qui reste sur le papier en créant les conditions d\'un changement réellement adopté.', href: withBase('/offres/accompagnement-transformation/') },
  { title: "Coaching d'équipe", text: "Un dispositif combiné dans la durée — séminaires, ateliers réguliers et coaching du manager — pour faire évoluer la façon de travailler et de décider.", href: withBase('/offres/coaching-equipe/') },
];
