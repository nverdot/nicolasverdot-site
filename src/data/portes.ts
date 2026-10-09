/**
 * Les trois portes : toute l'offre du site, rangée par ce que le client vient
 * chercher.
 *
 * Avant octobre 2026, le site présentait six accompagnements au même niveau,
 * plus la stratégie IA, plus les formations : « un restaurant qui fait de
 * tout ». Trois besoins, une offre principale par besoin, et les autres en
 * second rang. Cette liste est la seule source : l'accueil, la page des offres
 * et le menu s'y réfèrent.
 */
export interface Porte {
  id: string;
  /** Ce que dit le client : c'est le surtitre de la carte. */
  besoin: string;
  titre: string;
  phrase: string;
  principal: { titre: string; href: string };
  aussi: { titre: string; href: string }[];
}

export const portes: Porte[] = [
  {
    id: 'seminaires',
    besoin: 'Un temps fort à réussir',
    titre: 'Séminaires',
    phrase: "Vous réunissez vos équipes une journée ou deux. Je conçois et j'anime, pour qu'il en sorte des décisions.",
    principal: { titre: "Le séminaire d'entreprise", href: '/seminaires-entreprise/' },
    aussi: [
      { titre: 'Séminaire de direction (CODIR)', href: '/seminaire-codir/' },
      { titre: 'Séminaire kick-off', href: '/seminaire-kick-off/' },
      { titre: 'Fresque dessinée en direct', href: '/offres/capture-graphique/' },
      { titre: 'À Nice et dans les Alpes-Maritimes', href: '/seminaires-alpes-maritimes/' },
    ],
  },
  {
    id: 'ia',
    besoin: 'L’IA : savoir par où commencer',
    titre: 'Stratégie IA',
    phrase: "Tout le monde en parle, rien n'est décidé. On choisit quel problème traiter en premier, puis on teste.",
    principal: { titre: 'La stratégie IA pour PME', href: '/accompagnement-ia-pme/' },
    aussi: [
      { titre: 'L’IA dans vos ateliers', href: '/intelligence-collective-augmentee/' },
      { titre: 'Formations IA', href: '/formations/' },
    ],
  },
  {
    id: 'duree',
    besoin: 'Une équipe, un manager ou un dirigeant à faire grandir',
    titre: 'Coaching et formations',
    phrase: 'Quand un séminaire ne suffit pas : un travail dans la durée, avec l’équipe, avec son manager ou avec vous.',
    principal: { titre: 'Le coaching d’équipe', href: '/offres/coaching-equipe/' },
    aussi: [
      { titre: 'Coaching de manager ou de dirigeant', href: '/offres/coaching-professionnel/' },
      { titre: 'Une transformation qui patine', href: '/offres/accompagnement-transformation/' },
      { titre: 'Animer vous-même (mentoring)', href: '/offres/mentoring/' },
      { titre: 'Toutes les formations', href: '/formations/' },
    ],
  },
];
