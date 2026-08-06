import { withBase } from '../utils/url';

export interface Priority {
  title: string;
  text: string;
  href: string;
}

export const priorities: Priority[] = [
  { title: 'Clarifier un sujet et décider ensemble', text: 'Transformer un sujet complexe en choix clairs, compris par les personnes concernées et suivis d\'actions concrètes.', href: withBase('/offres/decider-ensemble/') },
  { title: 'Construire une direction commune', text: "Faire émerger une vision partagée, définir les priorités et permettre à chacun de comprendre la direction et la manière d'y contribuer.", href: withBase('/offres/aligner-equipe/') },
  { title: 'Concevoir un temps collectif vraiment utile', text: 'Préparer et faciliter un séminaire, un atelier ou une rencontre qui permet de comprendre, décider, construire ou passer à l\'action — pas simplement de remplir un agenda.', href: withBase('/offres/seminaires-ateliers/') },
  { title: 'Faire vivre une transformation', text: 'Donner du sens à une évolution, associer les équipes à sa construction et transformer une intention stratégique en changements concrets dans le quotidien.', href: withBase('/offres/accompagnement-transformation/') },
  { title: "Renforcer la coopération et l'autonomie", text: "Faire évoluer les rôles, les interactions, les modes de décision et les façons de travailler pour permettre au collectif d'avancer plus efficacement dans la durée.", href: withBase('/offres/dynamique-durable/') },
  { title: 'Faire évoluer la posture des leaders', text: 'Prendre du recul sur sa manière de diriger, décider et interagir afin de mobiliser les équipes avec davantage de clarté, de confiance et de justesse.', href: withBase('/offres/coaching-professionnel/') },
  { title: 'Rendre une réflexion collective visible et mémorable', text: "Grâce à la facilitation graphique et à la capture graphique, traduire en direct vos séminaires, ateliers ou conférences en fresques visuelles qui aident à comprendre, se souvenir et embarquer ceux qui n'étaient pas là.", href: withBase('/offres/capture-graphique/') },
];
