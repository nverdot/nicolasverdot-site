export interface ChatStep {
  kind: 'msg' | 'typing';
  name: string;
  text?: string;
  time?: string;
  mine?: boolean;
  reactOn?: number;
  reactEmoji?: string;
  reactCount?: number;
}

export interface ExpertInsight {
  diagnosis: string;
  action: string;
}

export interface Conversation {
  id: string;
  label: string;
  title: string;
  people: Record<string, string>;
  steps: ChatStep[];
  insight: ExpertInsight;
}

export const conversations: Conversation[] = [
  {
    id: 'chat-decision',
    label: 'Sur la décision',
    title: 'Entre nous (sans le boss) 🙊',
    people: {
      Karim: '#e2727a',
      Marc: '#e3a651',
      Sophie: '#4fb0a5',
      Julie: '#5b8def',
    },
    steps: [
      { kind: 'typing', name: 'Karim', mine: true },
      { kind: 'msg', name: 'Karim', text: "Encore une réunion qui n'a servi à rien 🙃", time: '18:41', mine: true },
      { kind: 'typing', name: 'Marc' },
      { kind: 'msg', name: 'Marc', text: 'Grave. On a refait le même débat que la dernière fois', time: '18:42', reactOn: 0, reactEmoji: '😂🤣', reactCount: 3 },
      { kind: 'typing', name: 'Sophie' },
      { kind: 'msg', name: 'Sophie', text: "Perso j'ai arrêté d'y croire après le 3e atelier", time: '18:43' },
      { kind: 'typing', name: 'Julie' },
      { kind: 'msg', name: 'Julie', text: "On ressort avec un plan d'action... qu'on n'ouvrira jamais 😅", time: '18:44', reactOn: 2, reactEmoji: '👍👏', reactCount: 2 },
    ],
    insight: {
      diagnosis: "Ce n'est pas un problème de motivation : c'est l'absence d'un processus de décision clair. Personne ne sait qui tranche, sur quels critères, ni à quel moment.",
      action: "Cadrer chaque réunion avec un objectif de décision explicite et une méthode pour y arriver — c'est le cœur de l'offre Décider ensemble.",
    },
  },
  {
    id: 'chat-participation',
    label: 'Sur la participation',
    title: 'Le vrai debrief 🎭',
    people: {
      Claire: '#7d8fe3',
      Vincent: '#e3a651',
      Nadia: '#4fb0a5',
      Thibault: '#e2727a',
    },
    steps: [
      { kind: 'typing', name: 'Claire', mine: true },
      { kind: 'msg', name: 'Claire', text: "Encore un ice breaker de 20 min pour un atelier de 2h... 🙄", time: '14:02', mine: true },
      { kind: 'typing', name: 'Vincent' },
      { kind: 'msg', name: 'Vincent', text: "Et après on fait semblant de nous demander notre avis sur un truc déjà décidé", time: '14:03', reactOn: 0, reactEmoji: '🙄😑', reactCount: 4 },
      { kind: 'typing', name: 'Nadia' },
      { kind: 'msg', name: 'Nadia', text: "Perso j'ai arrêté de lever la main, à quoi bon", time: '14:05' },
      { kind: 'typing', name: 'Thibault' },
      { kind: 'msg', name: 'Thibault', text: "Ils vont même nous envoyer un questionnaire de satisfaction après 😂", time: '14:06', reactOn: 2, reactEmoji: '😂👏', reactCount: 2 },
    ],
    insight: {
      diagnosis: "La participation demandée n'est pas réelle : le niveau de décision réel n'a jamais été clarifié avec le groupe avant l'atelier.",
      action: "Choisir consciemment le niveau de participation — informer, consulter ou co-décider — et le dire clairement au groupe dès le départ.",
    },
  },
  {
    id: 'chat-charge',
    label: 'Sur la charge de travail',
    title: 'On tient le coup 😮‍💨',
    people: {
      Lucas: '#5b8def',
      Emma: '#e2727a',
      Baptiste: '#e3a651',
      Chloe: '#4fb0a5',
    },
    steps: [
      { kind: 'typing', name: 'Lucas', mine: true },
      { kind: 'msg', name: 'Lucas', text: "Nouvel objectif ambitieux... même budget que l'an dernier 🙃", time: '09:12', mine: true },
      { kind: 'typing', name: 'Emma' },
      { kind: 'msg', name: 'Emma', text: "Et 2 personnes en moins dans l'équipe depuis janvier", time: '09:13', reactOn: 0, reactEmoji: '😩😮‍💨', reactCount: 5 },
      { kind: 'typing', name: 'Baptiste' },
      { kind: 'msg', name: 'Baptiste', text: "On n'a même pas fini le sujet d'avant qu'on nous en refile un nouveau", time: '09:15' },
      { kind: 'typing', name: 'Chloe' },
      { kind: 'msg', name: 'Chloe', text: 'Faire plus avec moins... on connaît la chanson 🎶', time: '09:16', reactOn: 2, reactEmoji: '💯🔥', reactCount: 3 },
    ],
    insight: {
      diagnosis: "Le sujet n'est pas caché : c'est l'écart entre les objectifs et les moyens réels qui n'a jamais été rendu visible ni arbitré collectivement.",
      action: "Rendre la charge réelle visible et prioriser ensemble ce qui reste faisable — plutôt que de laisser chacun l'absorber seul dans son coin.",
    },
  },
  {
    id: 'chat-reunionite',
    label: 'Sur la réunionite',
    title: 'RDV RDV RDV 📅',
    people: {
      Hugo: '#e3a651',
      Lea: '#4fb0a5',
      Antoine: '#7d8fe3',
      Manon: '#e2727a',
    },
    steps: [
      { kind: 'typing', name: 'Hugo', mine: true },
      { kind: 'msg', name: 'Hugo', text: "6 réunions aujourd'hui... et je n'ai encore rien produit 🥲", time: '17:20', mine: true },
      { kind: 'typing', name: 'Lea' },
      { kind: 'msg', name: 'Lea', text: 'Bienvenue au club. Mon agenda ressemble à un Tetris', time: '17:21', reactOn: 0, reactEmoji: '😩😅', reactCount: 4 },
      { kind: 'typing', name: 'Antoine' },
      { kind: 'msg', name: 'Antoine', text: 'Le pire, la moitié pourrait être un simple message', time: '17:23' },
      { kind: 'typing', name: 'Manon' },
      { kind: 'msg', name: 'Manon', text: 'Ou un email de 3 lignes... qu\'on lirait vraiment', time: '17:24', reactOn: 2, reactEmoji: '💀😂', reactCount: 3 },
    ],
    insight: {
      diagnosis: "La réunionite n'est pas une fatalité : c'est souvent le signe qu'aucun cadre commun ne distingue ce qui mérite une réunion de ce qui mérite un message.",
      action: "Auditer les rituels d'équipe et redéfinir collectivement ce qui justifie vraiment de réunir tout le monde.",
    },
  },
  {
    id: 'chat-suivi',
    label: 'Sur le suivi des décisions',
    title: 'Le plan d\'action fantôme 👻',
    people: {
      Ines: '#7d8fe3',
      Theo: '#e3a651',
      Zoe: '#4fb0a5',
      Maxime: '#e2727a',
    },
    steps: [
      { kind: 'typing', name: 'Ines', mine: true },
      { kind: 'msg', name: 'Ines', text: 'On a un super plan d\'action... depuis 3 mois 📋', time: '11:05', mine: true },
      { kind: 'typing', name: 'Theo' },
      { kind: 'msg', name: 'Theo', text: 'Il est où déjà ? Quelque part dans le drive ?', time: '11:06', reactOn: 0, reactEmoji: '😂📁', reactCount: 3 },
      { kind: 'typing', name: 'Zoe' },
      { kind: 'msg', name: 'Zoe', text: 'On devait faire un point mensuel... on l\'a fait une fois', time: '11:08' },
      { kind: 'typing', name: 'Maxime' },
      { kind: 'msg', name: 'Maxime', text: 'Classique. On décide, on note, on oublie', time: '11:09', reactOn: 2, reactEmoji: '🙃✅', reactCount: 2 },
    ],
    insight: {
      diagnosis: "Un plan d'action qui disparaît révèle l'absence de responsables clairs et de rituel de suivi — pas un manque de bonne volonté.",
      action: "Installer un rituel de suivi court et régulier, avec des responsables et des échéances nommés dès la décision prise.",
    },
  },
  {
    id: 'chat-silos',
    label: 'Sur les silos',
    title: 'Chacun sa bulle 🫧',
    people: {
      Alice: '#5b8def',
      Romain: '#e2727a',
      Leo: '#4fb0a5',
      Jade: '#e3a651',
    },
    steps: [
      { kind: 'typing', name: 'Alice', mine: true },
      { kind: 'msg', name: 'Alice', text: 'Le service voisin a lancé un truc... on l\'a appris par hasard 🙄', time: '10:30', mine: true },
      { kind: 'typing', name: 'Romain' },
      { kind: 'msg', name: 'Romain', text: 'Nous aussi on a un projet similaire de notre côté. Personne ne le savait', time: '10:32', reactOn: 0, reactEmoji: '😑🤦', reactCount: 5 },
      { kind: 'typing', name: 'Leo' },
      { kind: 'msg', name: 'Leo', text: 'On pourrait peut-être se parler de temps en temps, non ?', time: '10:33' },
      { kind: 'typing', name: 'Jade' },
      { kind: 'msg', name: 'Jade', text: 'Bonne idée. On en discute... en réunion à part 😅', time: '10:35', reactOn: 2, reactEmoji: '😂🎯', reactCount: 2 },
    ],
    insight: {
      diagnosis: "Les silos ne se résolvent pas avec plus de réunions transverses : ils viennent d'un manque de rituels de circulation de l'information entre équipes.",
      action: "Créer des points de synchronisation courts et réguliers entre équipes, avant que les doublons ne se créent.",
    },
  },
  {
    id: 'chat-leader',
    label: 'Sur le leader isolé',
    title: 'Vue d\'en haut 🏔️',
    people: {
      Noa: '#9b59b6',
      Sarah: '#4fb0a5',
      Adam: '#e3a651',
      Lina: '#5b8def',
    },
    steps: [
      { kind: 'typing', name: 'Noa', mine: true },
      { kind: 'msg', name: 'Noa', text: 'Encore un soir où je repars avec tous les problèmes de l\'équipe sur les épaules', time: '19:40', mine: true },
      { kind: 'typing', name: 'Sarah' },
      { kind: 'msg', name: 'Sarah', text: 'T\'as pensé à en parler à quelqu\'un ? Toi aussi t\'as le droit de souffler', time: '19:42', reactOn: 0, reactEmoji: '🫂❤️', reactCount: 4 },
      { kind: 'typing', name: 'Adam' },
      { kind: 'msg', name: 'Adam', text: 'Le manager qui porte tout... jusqu\'à ce qu\'il craque', time: '19:43' },
      { kind: 'typing', name: 'Lina' },
      { kind: 'msg', name: 'Lina', text: 'On devrait plus l\'épauler franchement', time: '19:45', reactOn: 2, reactEmoji: '😔💯', reactCount: 3 },
    ],
    insight: {
      diagnosis: "Un leader qui porte tout seul, c'est souvent un collectif qui n'a jamais appris à partager la responsabilité et la charge mentale.",
      action: "Travailler la posture du leader et la répartition des responsabilités dans l'équipe — c'est l'objet du coaching professionnel.",
    },
  },
  {
    id: 'chat-teambuilding',
    label: 'Sur le team building',
    title: 'Retour du séminaire 🎪',
    people: {
      Enzo: '#e2727a',
      Nina: '#7d8fe3',
      Paul: '#4fb0a5',
      Margaux: '#e3a651',
    },
    steps: [
      { kind: 'typing', name: 'Enzo', mine: true },
      { kind: 'msg', name: 'Enzo', text: 'Sympa le lasergame... mais lundi tout redevient comme avant 🙃', time: '20:15', mine: true },
      { kind: 'typing', name: 'Nina' },
      { kind: 'msg', name: 'Nina', text: 'Team building le vendredi, tensions le lundi, comme d\'hab', time: '20:16', reactOn: 0, reactEmoji: '😂🎯', reactCount: 3 },
      { kind: 'typing', name: 'Paul' },
      { kind: 'msg', name: 'Paul', text: 'On a rigolé, ok. Mais les vrais sujets, personne les a abordés', time: '20:18' },
      { kind: 'typing', name: 'Margaux' },
      { kind: 'msg', name: 'Margaux', text: 'Le prochain, on pourrait peut-être... parler du travail ? 😅', time: '20:19', reactOn: 2, reactEmoji: '🙈👏', reactCount: 2 },
    ],
    insight: {
      diagnosis: "Le problème n'est pas l'activité : c'est l'absence d'un espace, pendant ou après, pour aborder les vrais sujets d'équipe.",
      action: "Profiter des temps collectifs pour ouvrir, avec un cadre sécurisant, les sujets que le quotidien ne laisse jamais remonter.",
    },
  },
  {
    id: 'chat-priorites',
    label: 'Sur les priorités qui changent',
    title: 'Cap ou pas cap ⛵',
    people: {
      Yanis: '#5b8def',
      Emy: '#e2727a',
      Bastien: '#4fb0a5',
      Oceane: '#e3a651',
    },
    steps: [
      { kind: 'typing', name: 'Yanis', mine: true },
      { kind: 'msg', name: 'Yanis', text: '3e changement de priorité ce trimestre... on ne compte plus 🌀', time: '08:55', mine: true },
      { kind: 'typing', name: 'Emy' },
      { kind: 'msg', name: 'Emy', text: 'On venait juste de s\'organiser autour de la précédente', time: '08:57', reactOn: 0, reactEmoji: '😵‍💫🌀', reactCount: 4 },
      { kind: 'typing', name: 'Bastien' },
      { kind: 'msg', name: 'Bastien', text: 'Vu d\'en haut c\'est de l\'agilité. Vu d\'ici c\'est du n\'importe quoi', time: '08:58' },
      { kind: 'typing', name: 'Oceane' },
      { kind: 'msg', name: 'Oceane', text: 'Une vraie priorité, c\'est justement celle qui ne bouge pas', time: '09:00', reactOn: 2, reactEmoji: '😂🎯', reactCount: 5 },
    ],
    insight: {
      diagnosis: "Des priorités qui changent sans cesse trahissent l'absence d'un cadre de décision stable, pas un manque d'agilité.",
      action: "Clarifier collectivement ce qui constitue une vraie priorité — et ce qui ne doit plus bouger une fois décidé.",
    },
  },
  {
    id: 'chat-silence',
    label: 'Sur ce qui ne se dit pas',
    title: 'Ce qu\'on ne dit pas 🤐',
    people: {
      Tom: '#e3a651',
      Lucie: '#7d8fe3',
      Nathan: '#4fb0a5',
      Juliette: '#5b8def',
    },
    steps: [
      { kind: 'typing', name: 'Tom', mine: true },
      { kind: 'msg', name: 'Tom', text: 'En réunion j\'ai rien dit... alors que je pensais l\'inverse de tout le monde', time: '15:10', mine: true },
      { kind: 'typing', name: 'Lucie' },
      { kind: 'msg', name: 'Lucie', text: 'Pareil. Perso je garde ça pour la machine à café', time: '15:11', reactOn: 0, reactEmoji: '🙈😅', reactCount: 4 },
      { kind: 'typing', name: 'Nathan' },
      { kind: 'msg', name: 'Nathan', text: 'Le jour où quelqu\'un osera dire tout haut ce qu\'on pense tout bas...', time: '15:13' },
      { kind: 'typing', name: 'Juliette' },
      { kind: 'msg', name: 'Juliette', text: 'Ça changerait beaucoup de réunions franchement', time: '15:14', reactOn: 2, reactEmoji: '👀💯', reactCount: 3 },
    ],
    insight: {
      diagnosis: "Le silence en réunion n'est pas un manque d'idées : c'est un manque de sécurité pour les exprimer.",
      action: "Créer les conditions qui permettent aux désaccords de s'exprimer en réunion — pas seulement à la machine à café.",
    },
  },
  {
    id: 'chat-onboarding',
    label: 'Sur l\'intégration ratée',
    title: 'Bienvenue... enfin presque 👋',
    people: {
      Sacha: '#e2727a',
      Eva: '#e3a651',
      Mathis: '#4fb0a5',
      Louna: '#5b8def',
    },
    steps: [
      { kind: 'typing', name: 'Sacha', mine: true },
      { kind: 'msg', name: 'Sacha', text: 'Nouvelle recrue depuis 2 semaines... toujours pas d\'accès à grand-chose 😅', time: '13:20', mine: true },
      { kind: 'typing', name: 'Eva' },
      { kind: 'msg', name: 'Eva', text: 'On lui a filé un vieux doc de 2019 en guise de formation', time: '13:21', reactOn: 0, reactEmoji: '😂📄', reactCount: 3 },
      { kind: 'typing', name: 'Mathis' },
      { kind: 'msg', name: 'Mathis', text: 'Elle apprend surtout en nous regardant faire, en vrai', time: '13:23' },
      { kind: 'typing', name: 'Louna' },
      { kind: 'msg', name: 'Louna', text: 'Sympa comme première impression de l\'entreprise...', time: '13:24', reactOn: 2, reactEmoji: '😬🫠', reactCount: 2 },
    ],
    insight: {
      diagnosis: "Un onboarding raté n'est pas un problème de bonne volonté : c'est l'absence d'un parcours d'intégration pensé et partagé.",
      action: "Concevoir un parcours d'intégration clair, avec des repères et des points de suivi dès les premières semaines.",
    },
  },
  {
    id: 'chat-transfo',
    label: 'Sur la résistance au changement',
    title: 'Encore une transfo 🔄',
    people: {
      Ilan: '#5b8def',
      Elise: '#e2727a',
      Victor: '#e3a651',
      Anais: '#4fb0a5',
    },
    steps: [
      { kind: 'typing', name: 'Ilan', mine: true },
      { kind: 'msg', name: 'Ilan', text: 'Nouvelle transformation annoncée... la 4e en 2 ans 🙃', time: '16:45', mine: true },
      { kind: 'typing', name: 'Elise' },
      { kind: 'msg', name: 'Elise', text: 'On a arrêté de s\'investir à fond dès la 2e, perso', time: '16:46', reactOn: 0, reactEmoji: '😮‍💨🔁', reactCount: 5 },
      { kind: 'typing', name: 'Victor' },
      { kind: 'msg', name: 'Victor', text: 'Le pire, c\'est qu\'on refait les mêmes erreurs à chaque fois', time: '16:48' },
      { kind: 'typing', name: 'Anais' },
      { kind: 'msg', name: 'Anais', text: 'Personne n\'a le temps de tirer les leçons avant la suivante', time: '16:49', reactOn: 2, reactEmoji: '😩🎢', reactCount: 3 },
    ],
    insight: {
      diagnosis: "La résistance au changement grandit surtout quand les leçons de la transformation précédente n'ont jamais été tirées collectivement.",
      action: "Prendre le temps d'un vrai retour d'expérience avant de lancer la suivante — pour ne pas répéter les mêmes erreurs.",
    },
  },
];
