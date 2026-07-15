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
  summary: string;
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
    slug: 'decider-ensemble',
    eyebrow: 'Décision, priorisation, arbitrage',
    title: 'Décider ensemble',
    summary: 'Transformer un sujet complexe en décisions claires, comprises et suivies d’actions.',
    price: 'À partir de 4 500 € HT',
    useCaseLead: 'Pour les équipes qui discutent beaucoup, arbitrent difficilement ou remettent régulièrement les mêmes sujets sur la table.',
    problems: [
      { title: 'Décisions floues', text: 'Personne ne sait exactement ce qui a été tranché.' },
      { title: 'Priorités mouvantes', text: 'Tout semble urgent, mais rien ne sort réellement du radar.' },
      { title: 'Responsabilités confuses', text: 'Le rôle de chacun dans la décision reste implicite.' },
      { title: 'Réunions répétitives', text: 'Les mêmes débats reviennent sans réduire l’incertitude.' },
    ],
    outcomeTitle: 'Une décision explicite, des critères partagés, des responsabilités claires et une prochaine étape visible.',
    outcomeText: 'La méthode est choisie après le cadrage. Le résultat attendu, lui, est défini avant l’intervention.',
    timeline: [
      'Cadrage avec le sponsor',
      'Analyse du sujet et des parties prenantes',
      'Conception de l’atelier',
      'Animation et arbitrage',
      'Synthèse visuelle et plan d’action',
    ],
    investmentText: 'Le tarif dépend du nombre de participants, du niveau de préparation, des entretiens, des supports, du nombre de facilitateurs et de la restitution attendue.',
    quizTitle: 'Votre équipe sait-elle réellement décider ?',
    quizIntro: 'Répondez à 8 questions et obtenez une première lecture de votre situation.',
    quizQuestions: [
      { text: 'À la fin d’une réunion, chacun sait clairement ce qui a été décidé.', positive: true },
      { text: 'Lorsqu’un désaccord apparaît, tout le monde sait qui doit trancher.', positive: true },
      { text: 'Les critères utilisés pour prendre les décisions sont explicites.', positive: true },
      { text: 'Les priorités permettent réellement de dire non à certains sujets.', positive: true },
      { text: 'Les décisions débouchent sur un responsable et une prochaine étape claire.', positive: true },
      { text: 'Certaines décisions reviennent régulièrement en discussion.', positive: false },
      { text: 'Nous passons parfois plus de temps à discuter qu’à mettre en œuvre.', positive: false },
      { text: 'Les personnes savent si elles sont informées, consultées ou décisionnaires.', positive: true },
    ],
    quizLevels: [
      { max: 25, title: 'Une prise de décision solide', text: 'Votre équipe dispose déjà de bases saines. L’enjeu est surtout de sécuriser les décisions sensibles.', tips: ['Conserver des critères explicites', 'Formaliser les décisions importantes', 'Faire faciliter les sujets à fort enjeu'] },
      { max: 50, title: 'Des décisions encore fragiles', text: 'Votre équipe décide, mais les règles du jeu restent parfois trop implicites.', tips: ['Clarifier qui contribue et qui tranche', 'Rendre les critères visibles', 'Stabiliser les décisions prises'] },
      { max: 75, title: 'Une difficulté réelle à arbitrer', text: 'Les échanges produisent beaucoup d’information, mais pas toujours une décision exploitable.', tips: ['Nommer la décision attendue', 'Définir le niveau de participation', 'Conclure par un responsable et une échéance'] },
      { max: 100, title: 'Un fonctionnement décisionnel bloqué', text: 'La manière actuelle de décider ralentit directement l’action.', tips: ['Repartir d’un sujet concret', 'Reconstruire le cadre de décision', 'Créer un atelier dédié avec les bonnes personnes'] },
    ],
    quizCta: 'Parlons de la décision à débloquer',
  },
  {
    slug: 'aligner-equipe',
    eyebrow: 'Vision, priorités, cohérence',
    title: 'Aligner l’équipe',
    summary: 'Créer une direction commune et remettre le collectif en mouvement autour de priorités réellement partagées.',
    price: 'De 7 500 à 15 000 € HT',
    useCaseLead: 'Pour les équipes qui ont de l’énergie, mais pas toujours la même compréhension des enjeux, de la stratégie ou des priorités.',
    problems: [
      { title: 'Lecture différente', text: 'Chacun comprend les enjeux depuis son propre métier.' },
      { title: 'Coopération difficile', text: 'Les services avancent côte à côte plus qu’ensemble.' },
      { title: 'Vision abstraite', text: 'La stratégie ne guide pas suffisamment le quotidien.' },
      { title: 'Engagement dispersé', text: 'L’énergie existe, mais elle part dans plusieurs directions.' },
    ],
    outcomeTitle: 'Une compréhension commune, des priorités assumées, des désaccords traités et une feuille de route visible.',
    outcomeText: 'La méthode est choisie après le cadrage. Le résultat attendu, lui, est défini avant l’intervention.',
    timeline: [
      'Entretiens de cadrage',
      'Clarification de l’intention du séminaire',
      'Conception du processus',
      'Animation d’une ou deux journées',
      'Restitution et accompagnement de la suite',
    ],
    investmentText: 'Le tarif dépend du nombre de participants, du niveau de préparation, des entretiens, des supports, du nombre de facilitateurs et de la restitution attendue.',
    quizTitle: 'Votre équipe avance-t-elle vraiment dans la même direction ?',
    quizIntro: 'Répondez à 8 questions et obtenez une première lecture de votre situation.',
    quizQuestions: [
      { text: 'Les membres de l’équipe partagent la même compréhension des priorités.', positive: true },
      { text: 'La stratégie guide réellement les décisions du quotidien.', positive: true },
      { text: 'Les différents métiers travaillent dans la même direction.', positive: true },
      { text: 'Les tensions importantes peuvent être exprimées ouvertement.', positive: true },
      { text: 'Chacun comprend ce qui est attendu de lui et pourquoi cela compte.', positive: true },
      { text: 'Nous savons clairement à quoi nous devons renoncer.', positive: true },
      { text: 'Les décisions prises en séminaire se retrouvent dans les actions.', positive: true },
      { text: 'Nous avons parfois l’impression d’avancer, mais pas dans la même direction.', positive: false },
    ],
    quizLevels: [
      { max: 25, title: 'Une direction bien partagée', text: 'Votre équipe semble disposer d’un socle d’alignement solide.', tips: ['Entretenir les espaces de dialogue', 'Rendre les arbitrages visibles', 'Réévaluer régulièrement les priorités'] },
      { max: 50, title: 'Un alignement encore fragile', text: 'La direction générale est comprise, mais elle ne guide pas toujours les choix de façon homogène.', tips: ['Traduire la stratégie en décisions concrètes', 'Nommer les divergences', 'Clarifier les priorités communes'] },
      { max: 75, title: 'Des visions qui divergent', text: 'Les équipes peuvent être engagées tout en avançant selon des lectures différentes.', tips: ['Créer une lecture commune', 'Faire émerger les désaccords', 'Construire une feuille de route partagée'] },
      { max: 100, title: 'Un collectif dispersé', text: 'L’organisation mobilise de l’énergie sans disposer d’une direction suffisamment commune.', tips: ['Reposer l’intention collective', 'Aligner les décideurs', 'Concevoir un séminaire avec des décisions attendues'] },
    ],
    quizCta: 'Parlons de l’alignement à recréer',
  },
  {
    slug: 'dynamique-durable',
    eyebrow: 'Autonomie, responsabilités, fonctionnement',
    title: 'Installer une dynamique durable',
    summary: 'Faire évoluer la manière de travailler, de décider et de responsabiliser les équipes dans le temps.',
    price: 'De 12 000 à 30 000 € HT',
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
