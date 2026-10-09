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
/*
 * Icônes au trait, sur la grille 24, rendues par « currentColor » : la même
 * langue graphique que le Compagnon et le pied de page.
 */
export const ICONES_PORTES: Record<string, string> = {
  equipe: 'M9 11.2a3.1 3.1 0 1 0 0-6.2 3.1 3.1 0 0 0 0 6.2zM3.5 19.5c0-3 2.5-5.1 5.5-5.1s5.5 2.1 5.5 5.1M16.2 5.4a3.1 3.1 0 0 1 0 6M17.2 14.7c2 .5 3.3 2.2 3.3 4.4',
  decision: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM8 12l3 3 5-6',
  drapeau: 'M6 21V4M6 5h11l-2 3.5 2 3.5H6',
  crayon: 'M4.4 19.6l.9-3.6L15.7 5.6l2.7 2.7L8 18.7zM14.6 6.7l2.7 2.7',
  lieu: 'M12 21s-6.5-5.6-6.5-10.5a6.5 6.5 0 0 1 13 0C18.5 15.4 12 21 12 21zM12 12.6a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4z',
  ia: 'M11 4.5l1.7 4.8 4.8 1.7-4.8 1.7L11 17.5l-1.7-4.8L4.5 11l4.8-1.7zM18 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z',
  tableau: 'M4.5 4.5h15v11h-15zM12 15.5V20M8.5 20h7M8 8h5M8 11.5h8',
  diplome: 'M3.2 9.2L12 5.3l8.8 3.9L12 13.1zM7.2 11.2v4.4c0 1.4 2.1 2.5 4.8 2.5s4.8-1.1 4.8-2.5v-4.4M20.8 9.2v5',
  personne: 'M12 11.6a2.9 2.9 0 1 0 0-5.8 2.9 2.9 0 0 0 0 5.8zM5.6 19.4c.6-3.1 3.1-4.8 6.4-4.8s5.8 1.7 6.4 4.8',
  boucle: 'M20 12a8 8 0 1 1-2.7-6M20 4v5h-5',
  elan: 'M3 17l6-6 4 4 8-8M15 7h6v6',
  boussole: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM15.2 8.8l-1.8 4.4-4.4 1.8 1.8-4.4z',
};

export interface Lien {
  titre: string;
  href: string;
  /** Clé du jeu d'icônes ci-dessus. */
  icone: string;
}

export interface Porte {
  id: string;
  /** Ce que dit le client : c'est le surtitre de la carte. */
  besoin: string;
  titre: string;
  phrase: string;
  principal: Lien;
  aussi: Lien[];
}

export const portes: Porte[] = [
  {
    id: 'seminaires',
    besoin: 'Un temps fort à réussir',
    titre: 'Séminaires',
    phrase: "Vous réunissez vos équipes une journée ou deux. Je conçois et j'anime, pour qu'il en sorte des décisions.",
    principal: { titre: "Le séminaire d'entreprise", href: '/seminaires-entreprise/', icone: 'equipe' },
    aussi: [
      { titre: 'Séminaire de direction (CODIR)', href: '/seminaire-codir/', icone: 'decision' },
      { titre: 'Séminaire kick-off', href: '/seminaire-kick-off/', icone: 'drapeau' },
      { titre: 'Facilitation graphique en direct', href: '/offres/capture-graphique/', icone: 'crayon' },
      { titre: 'À Nice et dans les Alpes-Maritimes', href: '/seminaires-alpes-maritimes/', icone: 'lieu' },
    ],
  },
  {
    id: 'ia',
    besoin: 'L’IA : savoir par où commencer',
    titre: 'Stratégie IA',
    phrase: "Tout le monde en parle, rien n'est décidé. On choisit quel problème traiter en premier, puis on teste.",
    principal: { titre: 'La stratégie IA pour PME', href: '/accompagnement-ia-pme/', icone: 'ia' },
    aussi: [
      { titre: 'L’IA dans vos ateliers', href: '/intelligence-collective-augmentee/', icone: 'tableau' },
      { titre: 'Formations IA', href: '/formations/', icone: 'diplome' },
    ],
  },
  {
    id: 'duree',
    besoin: 'Une équipe, un manager ou un dirigeant à faire grandir',
    titre: 'Coaching, mentoring et formation',
    phrase: 'Quand un séminaire ne suffit pas : un travail dans la durée, avec l’équipe, avec son manager ou avec vous.',
    principal: { titre: 'Le coaching d’équipe', href: '/offres/coaching-equipe/', icone: 'equipe' },
    aussi: [
      { titre: 'Coaching de manager ou de dirigeant', href: '/offres/coaching-professionnel/', icone: 'personne' },
      { titre: 'Coaching agile (Scrum, SAFe, Kanban)', href: '/coaching-agile/', icone: 'boucle' },
      { titre: 'Une transformation qui patine', href: '/offres/accompagnement-transformation/', icone: 'elan' },
      { titre: 'Animer vous-même (mentoring)', href: '/offres/mentoring/', icone: 'boussole' },
      { titre: 'Toutes les formations', href: '/formations/', icone: 'diplome' },
    ],
  },
];
