/**
 * Le Compagnon : le contenu de ses écrans.
 *
 * Repris du Compagnon des Décoincés du Crayon — même personnage, même
 * principe — mais rebâti sur les intentions de ce site-ci. Là-bas on arrive en
 * se disant « je suis nul en dessin » ; ici on arrive en se disant « mon comité
 * de direction n'arrive pas à trancher » ou « j'ai un séminaire dans six
 * semaines ». Le menu range le catalogue d'offres ; le Compagnon, lui, part de
 * la situation.
 *
 * Deux règles de langue, différentes de l'autre site : on vouvoie, et on ne
 * promet pas un résultat qu'un accompagnement seul ne produit pas. Le
 * Compagnon oriente, il ne vend pas.
 *
 * Sorti du composant pour être lisible seul : cette liste est du contenu
 * éditorial, pas du gabarit. La modifier ici la change partout.
 */

/*
 * Icônes au trait, sur la grille 24, rendues par « currentColor » — les mêmes
 * tracés feutre que Footer.astro et la page d'accueil, pour que le Compagnon
 * parle la langue graphique du site. Elles doivent rester lisibles à 19 px :
 * pas plus de quatre ou cinq traits par icône.
 */
export const ICONES: Record<string, string> = {
  cible: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z',
  decision: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM8 12l3 3 5-6',
  equipe:
    'M9 11.2a3.1 3.1 0 1 0 0-6.2 3.1 3.1 0 0 0 0 6.2zM3.5 19.5c0-3 2.5-5.1 5.5-5.1s5.5 2.1 5.5 5.1M16.2 5.4a3.1 3.1 0 0 1 0 6M17.2 14.7c2 .5 3.3 2.2 3.3 4.4',
  calendrier: 'M4.5 6.5h15v13h-15zM8.5 4v4M15.5 4v4M4.5 11h15M8.5 14.5h.01M12 14.5h.01M15.5 14.5h.01',
  fresque: 'M4.5 4.5h15v11h-15zM12 15.5V20M8.5 20h7M8 8h5M8 11.5h8',
  crayon: 'M4.4 19.6l.9-3.6L15.7 5.6l2.7 2.7L8 18.7zM14.6 6.7l2.7 2.7',
  bulle: 'M4.5 5.5h15v10h-9l-6 4.5z',
  question: 'M12 20.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17zM9.6 9.5a2.5 2.5 0 1 1 3.3 2.4c-.6.2-.9.8-.9 1.4v.4M12 16.8h.01',
  horloge: 'M12 20.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17zM12 7.4V12l3 1.8',
  liste: 'M5 7h14M5 12h14M5 17h9',
  boussole: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM15.2 8.8l-1.8 4.4-4.4 1.8 1.8-4.4z',
  elan: 'M3 17l6-6 4 4 8-8M15 7h6v6',
  calcul: 'M6 3.5h12v17H6zM9 7.5h6M9 11.5h.01M12 11.5h.01M15 11.5h.01M9 15.5h.01M12 15.5h.01M15 15.5h.01',
  scene: 'M4 20h16M6.5 20V9.5L12 5l5.5 4.5V20M10 20v-4.5h4V20M12 8.7h.01',
  etoile: 'M12 4l2.5 5.1 5.6.8-4 3.9 1 5.6-5.1-2.7-5.1 2.7 1-5.6-4-3.9 5.6-.8z',
  fleche: 'M5 12h13M13 7l5 5-5 5',
};

/** Les icônes dessinées en aplat plutôt qu'au trait : à 19 px, elles s'effondrent sinon. */
export const PLEINES = new Set<string>(['etoile']);

export interface Action {
  texte: string;
  /** Clé du jeu d'icônes ci-dessus. */
  icone: string;
  /** Destination finale. Chemin interne (passé par `withBase`) ou URL absolue. */
  vers?: string;
  /** Écran suivant, pour les questions intermédiaires. */
  ecran?: string;
  /** La précision qui fait choisir : format, durée, à qui ça s'adresse. */
  note?: string;
}

export interface Ecran {
  id: string;
  /** Nom du fichier de pose, dans /compagnon/. */
  pose: string;
  /** La petite ligne au-dessus du titre : où on en est dans le cheminement. */
  oeil: string;
  titre: string;
  message: string;
  actions: Action[];
}

export const ECRANS: Ecran[] = [
  {
    id: 'accueil',
    pose: 'ecoute',
    oeil: 'Je vous aide à vous repérer',
    titre: 'Bonjour !',
    message:
      /* On ne demande pas « que cherchez-vous ? » : personne n'arrive ici en
         cherchant « du coaching d'équipe ». On arrive avec une situation —
         c'est elle qu'on demande. */
      'Dites-moi ce qui se joue en ce moment dans votre collectif, et je vous emmène directement au bon endroit.',
    actions: [
      { texte: 'On discute beaucoup, on ne tranche pas', icone: 'decision', ecran: 'decider' },
      { texte: "J'ai un séminaire ou un atelier à monter", icone: 'calendrier', ecran: 'temps-fort' },
      { texte: 'Une transformation qui reste sur le papier', icone: 'elan', ecran: 'transformation' },
      { texte: 'Je veux apprendre à animer moi-même', icone: 'crayon', ecran: 'animer' },
      { texte: 'Je travaille surtout ma posture de dirigeant', icone: 'boussole', vers: '/offres/coaching-professionnel/', note: 'Coaching professionnel — en individuel' },
      { texte: 'Je veux chiffrer ce que ça nous coûte', icone: 'calcul', ecran: 'chiffrer' },
      { texte: 'Je veux juste me faire une idée de votre travail', icone: 'etoile', ecran: 'decouvrir' },
      { texte: 'J’ai une question à vous poser', icone: 'bulle', ecran: 'parler' },
    ],
  },

  /*
   * La porte du nouveau positionnement, et la plus fréquentée à terme : le
   * collectif qui n'arrive pas à converger. On ne renvoie pas tout de suite sur
   * une offre — on sépare d'abord « c'est une réunion précise qui tourne à
   * vide » de « c'est le fonctionnement de l'équipe entière ».
   */
  {
    id: 'decider',
    pose: 'paperboard',
    oeil: 'Converger, puis trancher',
    titre: 'Ce qui bloque, ce n’est pas le temps',
    message:
      'Un collectif qui n’arrive pas à décider n’a presque jamais un problème d’agenda : il a un problème de conversation. Où est-ce que ça coince, chez vous ?',
    actions: [
      {
        texte: 'Une décision précise à faire atterrir',
        icone: 'cible',
        vers: '/seminaires-entreprise/',
        note: 'Un atelier conçu et animé pour trancher ce sujet-là',
      },
      {
        texte: 'C’est le fonctionnement de l’équipe',
        icone: 'equipe',
        vers: '/offres/coaching-equipe/',
        note: 'Coaching d’équipe — dans la durée, pas un one-shot',
      },
      {
        texte: 'Nos réunions tournent à vide',
        icone: 'horloge',
        vers: '/outils/cout-de-linaction/',
        note: 'Le diagnostic dit pourquoi, et ce que ça coûte',
      },
      {
        texte: 'Je veux savoir décider en collectif',
        icone: 'crayon',
        vers: '/offres/mentoring/',
        note: 'Mentoring — je vous prépare à l’animer vous-même',
      },
      {
        texte: 'Comment je travaille, concrètement',
        icone: 'boussole',
        vers: '/intelligence-collective/',
      },
    ],
  },

  /*
   * Le temps fort. C'est le chiffre d'affaires le plus élevé du site, et
   * l'entrée la plus concrète : quelqu'un qui a une date a déjà décidé.
   */
  {
    id: 'temps-fort',
    pose: 'micro',
    oeil: 'Un moment qui compte',
    titre: 'Vous avez une date ?',
    message:
      'Un séminaire réussi ne se juge pas le soir même, mais trois mois après, à ce qui a réellement bougé. C’est de là qu’on part pour le concevoir.',
    actions: [
      {
        texte: 'Concevez et animez-le pour nous',
        icone: 'scene',
        vers: '/seminaires-entreprise/',
        note: 'Cadrage, animation, synthèse, prochaines étapes',
      },
      {
        texte: 'Un séminaire dans les Alpes-Maritimes',
        icone: 'calendrier',
        vers: '/seminaires-alpes-maritimes/',
        note: 'Lieux, formats et logistique dans la région',
      },
      {
        texte: 'Je veux qu’il en reste quelque chose de visible',
        icone: 'fresque',
        vers: '/offres/capture-graphique/',
        note: 'Capture graphique — les échanges dessinés en direct',
      },
      {
        texte: 'Je préfère l’animer, avec un filet',
        icone: 'crayon',
        vers: '/offres/mentoring/',
        note: 'On prépare le vôtre ensemble',
      },
      { texte: 'En parler trente minutes', icone: 'bulle', ecran: 'parler' },
    ],
  },

  {
    id: 'transformation',
    pose: 'carnet',
    oeil: 'Du papier au réel',
    titre: 'La décision est prise. Rien ne bouge.',
    message:
      'Une transformation ne se bloque pas sur sa cible, mais sur ce que personne n’a encore dit à voix haute. C’est ce qu’il faut faire remonter avant d’ajouter un plan d’action.',
    actions: [
      {
        texte: 'Accompagner la transformation',
        icone: 'elan',
        vers: '/offres/accompagnement-transformation/',
        note: 'Créer les conditions d’un changement réellement adopté',
      },
      {
        texte: 'Embarquer les managers d’abord',
        icone: 'equipe',
        vers: '/offres/coaching-equipe/',
        note: 'Coaching d’équipe et du manager',
      },
      {
        texte: 'Associer largement les parties prenantes',
        icone: 'fresque',
        vers: '/intelligence-collective/',
        note: 'Les dispositifs participatifs, et leurs limites',
      },
      {
        texte: 'Chiffrer ce que le statu quo nous coûte',
        icone: 'calcul',
        vers: '/outils/cout-de-linaction/',
      },
    ],
  },

  {
    id: 'animer',
    pose: 'feutre',
    oeil: 'Le faire vous-même',
    titre: 'Animer, ça s’apprend',
    message:
      'Tenir un groupe, ce n’est pas savoir remplir un paperboard : c’est savoir quoi faire quand la conversation part de travers. Ça se travaille sur vos vrais sujets.',
    actions: [
      {
        texte: 'Être accompagné sur mes propres ateliers',
        icone: 'crayon',
        vers: '/offres/mentoring/',
        note: 'Mentoring — posture, déroulé, méthodes, répétition',
      },
      {
        texte: 'Les formations',
        icone: 'liste',
        vers: '/formations/',
        note: 'Ce qui se transmet en groupe, en quelques jours',
      },
      {
        texte: 'Dessiner pour faire penser',
        icone: 'fresque',
        vers: '/facilitation-graphique/',
        note: 'La facilitation graphique — à quoi elle sert vraiment',
      },
      {
        texte: 'Le matériel que j’utilise',
        icone: 'etoile',
        vers: '/materiel/',
        note: 'Feutres, papier, supports — sans mystère',
      },
    ],
  },

  {
    id: 'chiffrer',
    pose: 'paperboard',
    oeil: 'Mettre un nombre dessus',
    titre: 'Ce que l’indécision coûte',
    message:
      'Le temps passé en réunion se voit dans les agendas. Ce qu’on ne voit pas, c’est ce que coûte la décision qui n’est pas prise — et c’est presque toujours le plus gros montant.',
    actions: [
      {
        texte: 'Calculer le coût de l’inaction',
        icone: 'calcul',
        vers: '/outils/cout-de-linaction/',
        note: 'Douze questions : pourquoi ça bloque, et ce que ça coûte',
      },
      {
        texte: 'Des situations réelles, avec leurs résultats',
        icone: 'etoile',
        vers: '/cas-clients/',
      },
      {
        texte: 'En parler à partir de mon chiffre',
        icone: 'bulle',
        ecran: 'parler',
      },
    ],
  },

  {
    id: 'decouvrir',
    pose: 'carnet',
    oeil: 'Se faire une idée',
    titre: 'Regardez avant de me parler',
    message:
      'Rien ne presse. Voilà de quoi juger sur pièces : ce que j’ai fait ailleurs, ce que j’écris, et qui je suis.',
    actions: [
      { texte: 'Des cas concrets', icone: 'etoile', vers: '/cas-clients/', note: 'Contexte, dispositif, effets' },
      { texte: 'Les articles', icone: 'liste', vers: '/blog/', note: 'Méthodes utilisables sans moi' },
      { texte: 'Qui je suis', icone: 'question', vers: '/a-propos/' },
      { texte: 'Toutes les offres', icone: 'fleche', vers: '/offres/' },
    ],
  },

  {
    id: 'parler',
    pose: 'ecoute',
    oeil: 'Me joindre',
    titre: 'Racontez-moi la situation',
    message:
      'Pour une question, un message suffit et j’y réponds moi-même. Pour un projet de collectif, une demi-heure au téléphone vaut mieux qu’un échange de mails.',
    actions: [
      {
        texte: 'Réserver trente minutes',
        icone: 'calendrier',
        vers: 'https://zcal.co/nicolas-verdot/30minutes',
        note: 'Gratuit, sans engagement — et souvent suffisant',
      },
      { texte: 'M’écrire', icone: 'bulle', vers: '/contact/', note: 'Réponse dans la journée' },
      { texte: 'Qui je suis', icone: 'question', vers: '/a-propos/' },
    ],
  },
];

/**
 * Le personnage.
 *
 * Les mêmes sept dessins que sur le site des Décoincés du Crayon : Nicolas à
 * son image, polo blanc, feutre orange, un accessoire par pose. Les fichiers
 * sont recopiés dans `public/compagnon/` ; les sources et le script qui les
 * met au gabarit (même taille de crâne, même hauteur) vivent dans l'autre
 * dépôt — c'est là qu'il faut aller pour ajouter une pose.
 */
export const personnage = {
  actif: true,
  dossier: '/compagnon/',
};

/**
 * Les poses réellement recopiées ici. La pose « acces » (l'ordinateur au
 * cadenas) n'a pas d'usage sur ce site : il n'y a pas d'espace client.
 */
export const POSES_FOURNIES = new Set(['ecoute', 'feutre', 'carnet', 'paperboard', 'micro', 'couleurs']);
export const POSE_DEFAUT = 'ecoute';
export const poseDe = (p: string) => (POSES_FOURNIES.has(p) ? p : POSE_DEFAUT);

/** Les poses réellement servies — ce qu'il faut précharger. */
export const POSES = [...new Set(ECRANS.map((e) => poseDe(e.pose)))];
