export interface ExpertiseAction {
  label: string;
  href: string;
}

export interface ExpertiseApproach {
  title: string;
  text: string;
}

export interface ExpertisePanel {
  slug: string;
  label: string;
  definition: string;
  description: string;
  usefulFor: string[];
  approaches: ExpertiseApproach[];
  actions: ExpertiseAction[];
}

// Contenu des panneaux : rédigé pour que chaque action pointe vers une page
// réelle du site (pas de format de séminaire "catalogue", pas de page
// fabriquée). Les formations n'ont pas de fiche individuelle : toutes les
// actions "se former" renvoient vers /formations/, où la formation
// correspondante existe réellement et peut être trouvée via la recherche.
export const expertisePanels: ExpertisePanel[] = [
  {
    slug: 'facilitation',
    label: 'Facilitation',
    definition:
      "Faire travailler un groupe de manière structurée pour lui permettre de comprendre, décider, construire et passer à l'action ensemble.",
    description:
      "Chaque rencontre est conçue à partir du contexte, des personnes concernées et du résultat attendu. Je ne propose pas un catalogue de séminaires ou d'ateliers préconstruits : le processus de travail est imaginé sur mesure.",
    usefulFor: [
      'lancer un nouveau projet',
      'construire une vision commune',
      'prendre une décision importante',
      'définir des priorités',
      'préparer une transformation',
      'faire travailler plusieurs métiers ensemble',
      'rassembler une équipe ou une communauté',
      "dépasser une situation qui s'enlise",
    ],
    approaches: [
      {
        title: 'Déléguer la facilitation',
        text: 'Je prends en charge la conception du processus, la préparation de la rencontre, son animation et la formalisation des résultats.',
      },
      {
        title: 'Construire et faciliter ensemble',
        text: "Je vous aide à clarifier l'intention, choisir les participants, construire le déroulé et préparer l'animation. Nous pouvons ensuite cofaciliter la rencontre ou vous permettre de l'animer vous-même.",
      },
      {
        title: 'Développer votre posture',
        text: 'Je vous forme à la posture de leader facilitateur afin de mieux faire contribuer, décider et avancer vos équipes.',
      },
    ],
    actions: [
      { label: 'Déléguer la facilitation de votre séminaire ou atelier', href: '/offres/deleguer-animation/' },
      { label: 'Se former à la posture de leader facilitateur', href: '/formations/' },
      { label: 'Parler de votre projet', href: '/contact/' },
    ],
  },
  {
    slug: 'coaching',
    label: 'Coaching',
    definition:
      "Prendre du recul sur une situation, sa posture et sa manière d'agir pour trouver ses propres réponses et avancer avec davantage de clarté.",
    description:
      "Le coaching ne consiste pas à apporter des solutions toutes faites. Il crée un espace pour questionner ce qui se joue, explorer de nouvelles possibilités et choisir une manière d'agir plus adaptée.",
    usefulFor: [
      'prendre une nouvelle fonction',
      'faire évoluer sa posture de leader',
      'mobiliser une équipe',
      'prendre une décision importante',
      'trouver sa place dans une organisation',
      'traverser une période de changement',
      'gérer une relation complexe',
      'sortir de situations qui se répètent',
    ],
    approaches: [
      {
        title: 'Coaching individuel',
        text: "Un accompagnement personnalisé autour d'une situation, d'un objectif ou d'une évolution professionnelle.",
      },
      {
        title: 'Mentorat et prise de recul',
        text: "Un espace mêlant questionnement, partage d'expérience et apports concrets lorsque la situation le nécessite.",
      },
      {
        title: 'Diagnostic de posture',
        text: 'Un travail permettant de mieux comprendre sa manière de diriger, de décider, de coopérer et de mobiliser les autres.',
      },
    ],
    actions: [
      { label: 'Découvrir le coaching individuel', href: '/offres/coaching-professionnel/' },
      { label: 'Découvrir le programme Leader ancré', href: '/formations/' },
      { label: 'Parler de votre situation', href: '/contact/' },
    ],
  },
  {
    slug: 'formation',
    label: 'Formation',
    definition:
      'Développer des compétences concrètes, directement applicables dans les situations professionnelles du quotidien.',
    description:
      "Mes formations alternent apports, expérimentation, entraînement et retours personnalisés. L'objectif n'est pas seulement de comprendre une méthode, mais de savoir réellement l'utiliser.",
    usefulFor: [
      'apprendre à faciliter un groupe',
      'développer une posture de leader facilitateur',
      'concevoir de meilleurs ateliers',
      'animer des réunions plus utiles',
      'pratiquer la facilitation graphique',
      'développer sa pensée visuelle',
      'faire évoluer les pratiques managériales',
      'transmettre de nouvelles pratiques à une équipe',
    ],
    approaches: [
      {
        title: 'Formation interentreprises',
        text: "Participer à une session avec des professionnels issus de différentes organisations.",
      },
      {
        title: 'Formation au sein de votre organisation',
        text: "Construire une formation adaptée aux besoins de votre équipe ou de votre organisation.",
      },
      {
        title: "Parcours d'apprentissage",
        text: 'Associer formation, mise en pratique et accompagnement dans la durée.',
      },
    ],
    actions: [
      { label: 'Se former à la posture de leader facilitateur', href: '/formations/' },
      { label: 'Se former à la facilitation graphique', href: '/formations/' },
      { label: 'Organiser une formation pour votre équipe', href: '/contact/' },
    ],
  },
  {
    slug: 'intelligence-collective',
    label: 'Intelligence collective',
    definition:
      "Créer les conditions pour que les connaissances, les expériences et les points de vue d'un groupe produisent davantage que la somme des contributions individuelles.",
    description:
      "L'intelligence collective ne consiste pas à demander l'avis de tout le monde sur tout. Elle permet d'associer les bonnes personnes, au bon moment, avec un processus adapté au résultat recherché.",
    usefulFor: [
      'explorer un sujet complexe',
      'faire émerger des idées',
      'croiser différents métiers',
      'construire une vision commune',
      'associer des parties prenantes',
      'définir des priorités',
      'prendre une décision collective',
      'construire une feuille de route',
    ],
    approaches: [
      {
        title: 'Concevoir une démarche collective',
        text: 'Définir les personnes à associer, les étapes du travail et les modalités de contribution.',
      },
      {
        title: 'Faciliter les échanges',
        text: 'Créer les conditions pour que les différents points de vue puissent être exprimés, compris et utilisés.',
      },
      {
        title: 'Transformer les contributions en décisions',
        text: 'Structurer le travail pour parvenir à des arbitrages, des engagements et des actions concrètes.',
      },
    ],
    actions: [
      { label: 'Construire une démarche collective', href: '/offres/deleguer-animation/' },
      { label: "Déléguer la facilitation d'un temps collectif", href: '/offres/deleguer-animation/' },
      { label: 'Parler de votre enjeu', href: '/contact/' },
    ],
  },
  {
    slug: 'transformation',
    label: 'Transformation',
    definition:
      'Aider les personnes concernées à comprendre une évolution, à y contribuer et à construire concrètement la suite.',
    description:
      "Une transformation ne repose pas uniquement sur une stratégie, un outil ou une nouvelle organisation. Elle dépend aussi de la manière dont les personnes sont associées, dont les décisions sont prises et dont les apprentissages sont intégrés.",
    usefulFor: [
      'lancer une nouvelle stratégie',
      'accompagner une croissance',
      'faire évoluer une organisation',
      'introduire de nouveaux outils',
      "accompagner l'arrivée de l'intelligence artificielle",
      'faire évoluer les pratiques de travail',
      'mobiliser les équipes autour d\'un changement',
      'construire une culture plus apprenante',
    ],
    approaches: [
      {
        title: 'Clarifier la transformation',
        text: 'Faire émerger les enjeux, les impacts humains et les conditions nécessaires à la réussite.',
      },
      {
        title: 'Associer les personnes concernées',
        text: 'Concevoir des espaces dans lesquels les équipes peuvent comprendre, contribuer et construire la suite.',
      },
      {
        title: 'Apprendre et ajuster',
        text: "Mettre en place des points d'étape pour observer les résultats, tirer des enseignements et adapter la démarche.",
      },
    ],
    actions: [
      { label: 'Construire votre démarche de transformation', href: '/offres/accompagnement-transformation/' },
      { label: 'Associer vos équipes au changement', href: '/offres/accompagnement-transformation/' },
      { label: 'Parler de votre transformation', href: '/contact/' },
    ],
  },
  {
    slug: 'cooperation',
    label: 'Coopération',
    definition:
      "Permettre à des personnes aux métiers, aux responsabilités et aux points de vue différents de travailler ensemble de manière plus fluide et plus efficace.",
    description:
      'La coopération repose notamment sur des objectifs compris, des rôles clairs, des espaces de dialogue utiles et des règles de fonctionnement partagées.',
    usefulFor: [
      'améliorer le travail entre plusieurs équipes',
      'clarifier les rôles et les responsabilités',
      'sortir des fonctionnements en silo',
      'fluidifier les interactions',
      'renforcer la confiance',
      'mieux gérer les désaccords',
      'faire vivre une équipe ou une communauté',
      'construire des règles de fonctionnement communes',
    ],
    approaches: [
      {
        title: 'Observer les modes de fonctionnement',
        text: 'Comprendre ce qui facilite ou freine actuellement la coopération.',
      },
      {
        title: 'Construire un cadre commun',
        text: 'Clarifier les rôles, les attentes, les règles de fonctionnement et les espaces de décision.',
      },
      {
        title: 'Mettre le collectif au travail',
        text: 'Organiser et faciliter les conversations nécessaires pour améliorer concrètement la coopération.',
      },
    ],
    actions: [
      { label: 'Faire évoluer la coopération de votre collectif', href: '/offres/coaching-equipe/' },
      { label: "Organiser un temps de travail d'équipe", href: '/offres/deleguer-animation/' },
      { label: 'Parler de votre situation', href: '/contact/' },
    ],
  },
  {
    slug: 'agilite',
    label: 'Agilité',
    definition:
      "Avancer progressivement dans un environnement incertain, apprendre de l'expérience et ajuster les décisions à mesure que la situation évolue.",
    description:
      "L'agilité ne se limite pas à une méthode ou aux équipes informatiques. C'est une manière de prioriser, de coopérer, d'expérimenter et de produire régulièrement de la valeur.",
    usefulFor: [
      'clarifier les priorités',
      "avancer dans l'incertitude",
      'responsabiliser les équipes',
      'réduire les projets trop longs',
      'renforcer les boucles de retour',
      'apprendre plus rapidement',
      'améliorer la collaboration',
      'faire évoluer les pratiques managériales',
    ],
    approaches: [
      {
        title: 'Observer le fonctionnement actuel',
        text: 'Identifier les pratiques utiles, les irritants et les freins à la création de valeur.',
      },
      {
        title: 'Faire évoluer les pratiques',
        text: 'Adapter les rôles, les rituels, la priorisation et les modes de décision au contexte réel.',
      },
      {
        title: "Développer l'autonomie",
        text: "Aider les équipes et les responsables à faire vivre les pratiques sans dépendre durablement d'un accompagnement extérieur.",
      },
    ],
    actions: [
      { label: 'Faire évoluer vos pratiques de travail', href: '/offres/coaching-equipe/' },
      { label: 'Former vos équipes à l\'agilité', href: '/formations/' },
      { label: 'Parler de votre contexte', href: '/contact/' },
    ],
  },
  {
    slug: 'facilitation-graphique',
    label: 'Facilitation graphique',
    definition:
      "Rendre visibles les idées, les échanges et les décisions d'un groupe grâce aux mots, au dessin et à la mise en page.",
    description:
      "La facilitation graphique permet de suivre plus facilement les échanges, de rendre un sujet complexe plus accessible et de conserver une trace claire et mémorable du travail réalisé.",
    usefulFor: [
      "capturer les échanges d'un événement",
      'rendre visible une vision commune',
      'synthétiser un sujet complexe',
      'illustrer une feuille de route',
      'soutenir une prise de décision',
      "produire une trace d'un séminaire",
      'faciliter la compréhension',
      'rendre une présentation plus engageante',
    ],
    approaches: [
      {
        title: 'Capture graphique en direct',
        text: 'Je rends visibles les échanges et les idées au fil de la rencontre.',
      },
      {
        title: 'Création de supports visuels',
        text: 'Je transforme un contenu, une stratégie ou un processus en une représentation claire et mémorable.',
      },
      {
        title: 'Formation',
        text: "J'apprends aux participants à utiliser le dessin et la mise en page dans leurs propres pratiques professionnelles.",
      },
    ],
    actions: [
      { label: 'Déléguer la capture graphique de votre événement', href: '/offres/capture-graphique/' },
      { label: 'Se former à la facilitation graphique', href: '/formations/' },
      { label: 'Découvrir la facilitation graphique', href: '/facilitation-graphique/' },
    ],
  },
  {
    slug: 'pensee-visuelle',
    label: 'Pensée visuelle',
    definition:
      'Utiliser les mots, les formes, les pictogrammes et les métaphores visuelles pour mieux comprendre, structurer et partager une idée.',
    description:
      'La pensée visuelle ne demande pas de savoir bien dessiner. Elle permet avant tout de rendre une information plus claire, plus mémorable et plus facile à transmettre.',
    usefulFor: [
      'clarifier une idée',
      'structurer une présentation',
      'expliquer un sujet complexe',
      'préparer une réunion',
      'construire une vision',
      'prendre des notes',
      'faciliter la mémorisation',
      'communiquer de manière plus impactante',
    ],
    approaches: [
      {
        title: 'Apprendre les fondamentaux',
        text: 'Développer un vocabulaire graphique simple et facilement réutilisable.',
      },
      {
        title: 'Appliquer la pensée visuelle à son métier',
        text: 'Utiliser le visuel dans les réunions, les formations, les présentations ou les accompagnements.',
      },
      {
        title: 'Progresser dans la durée',
        text: "S'entraîner grâce à des formations, des exercices et des programmes en ligne.",
      },
    ],
    actions: [
      { label: 'Découvrir les formations en pensée visuelle', href: '/formations/' },
      { label: 'Parler de votre projet', href: '/contact/' },
    ],
  },
];
