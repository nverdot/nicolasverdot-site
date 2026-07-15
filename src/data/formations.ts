export interface Formation {
  slug: string;
  title: string;
  duration: string;
  format: string;
  level: string;
  summary: string;
}

export interface FormationGroup {
  universe: string;
  items: Formation[];
}

export const formationGroups: FormationGroup[] = [
  {
    universe: 'IA appliquée',
    items: [
      { slug: 'decouvrir-ia-generative-sans-bullshit', title: "Découvrir l'IA générative sans bullshit", duration: '1h30 à 1 jour', format: 'Conférence, atelier ou formation 1 jour', level: 'Découverte', summary: "Comprendre l'IA générative, identifier ses usages utiles, ses limites et repartir avec des pratiques applicables au travail." },
      { slug: 'identifier-cas-usages-ia-equipe', title: "Identifier les bons cas d'usage IA dans votre équipe", duration: '1/2 journée à 1 jour', format: 'Atelier 1/2 journée ou 1 journée', level: 'Pratique accompagnée', summary: "Un atelier participatif pour identifier où l'IA peut réellement apporter de la valeur dans le travail quotidien de votre équipe." },
      { slug: 'ia-managers-leaders-facilitateurs', title: 'IA pour managers et leaders facilitateurs', duration: '1 jour ou parcours', format: 'Formation 1 jour ou parcours sur mesure', level: 'Fondamentaux', summary: "Utiliser l'IA pour mieux préparer les réunions, clarifier les idées, synthétiser et décider sans perdre la dimension humaine du leadership." },
      { slug: 'ia-formateurs-facilitateurs-coachs-consultants', title: 'IA pour formateurs, facilitateurs, coachs et consultants', duration: '1 à 2 jours', format: 'Formation 1 à 2 jours ou parcours', level: 'Fondamentaux', summary: "Utiliser l'IA comme assistant de conception, de créativité, de reformulation et de structuration." },
      { slug: 'ia-facilitation-visuelle', title: 'IA & facilitation visuelle', duration: '1/2 journée à 1 jour', format: 'Atelier ou formation 1 jour', level: 'Fondamentaux', summary: "Utiliser l'IA pour générer des métaphores visuelles, structurer des idées et créer des supports visuels utiles." },
    ],
  },
  {
    universe: 'Facilitation graphique & pensée visuelle',
    items: [
      { slug: 'facilitation-graphique-fondamentaux', title: 'Facilitation graphique — fondamentaux', duration: '1 à 2 jours', format: 'Formation 1 à 2 jours', level: 'Fondamentaux', summary: 'Apprendre les bases de la facilitation graphique, clarifier les idées et créer des supports visuels.' },
      { slug: 'facilitation-graphique-usages-avances', title: 'Facilitation graphique — usages avancés', duration: '1 jour ou parcours', format: 'Formation 1 jour ou parcours', level: 'Avancé', summary: 'Approfondir la facilitation graphique pour les ateliers, séminaires, formations et temps collectifs à fort enjeu.' },
      { slug: 'captation-graphique-graphic-recording', title: 'Captation graphique & graphic recording', duration: '2 jours — 14 heures', format: 'Présentiel', level: 'Intermédiaire', summary: "Écouter, structurer et restituer visuellement les idées clés d'un événement." },
      { slug: 'visualiser-strategie-idees-projets', title: 'Visualiser sa stratégie, ses idées et ses projets', duration: '1 jour — 7 heures', format: 'Présentiel ou distanciel avec outil collaboratif', level: 'Fondamentaux', summary: 'Transformer une idée floue en support visuel clair, partageable et mobilisateur.' },
      { slug: 'utiliser-visuel-engager-federer-faire-agir-collectif', title: 'Utiliser le visuel pour engager, fédérer et faire agir un collectif', duration: '1, 2 ou 3 jours — parcours progressif', format: 'Présentiel recommandé', level: 'Progressif', summary: 'Un parcours en trois niveaux pour donner à voir, faire réfléchir et faire parler grâce au visuel.' },
    ],
  },
  {
    universe: 'Facilitation, séminaires & intelligence collective',
    items: [
      { slug: 'concevoir-animer-atelier-seminaire-participatif', title: 'Concevoir et animer un atelier ou un séminaire participatif', duration: '1 à 2 jours', format: 'Formation 1 à 2 jours', level: 'Fondamentaux', summary: 'Concevoir, structurer et animer un atelier ou séminaire participatif orienté résultats.' },
      { slug: 'concevoir-animer-seminaire-participatif', title: 'Concevoir et animer un séminaire participatif', duration: '2 jours — 14 heures', format: 'Présentiel', level: 'Intermédiaire', summary: 'Transformer un temps collectif en expérience qui aligne, engage et met en mouvement.' },
      { slug: 'faciliter-ateliers-participatifs', title: 'Faciliter des ateliers participatifs', duration: '2 jours — 14 heures', format: 'Présentiel recommandé, distanciel possible', level: 'Fondamentaux', summary: 'Construire et animer des ateliers qui engagent vraiment.' },
      { slug: 'intelligence-collective-fondamentaux', title: 'Intelligence collective — fondamentaux', duration: '1 à 2 jours', format: 'Formation 1 à 2 jours', level: 'Découverte / fondamentaux', summary: "Comprendre et pratiquer les fondamentaux de l'intelligence collective pour faire participer, décider et agir ensemble." },
    ],
  },
  {
    universe: 'Leadership, posture & théorie polyvagale',
    items: [
      { slug: 'leader-facilitateur', title: 'Leader facilitateur', duration: '2 jours ou parcours', format: 'Formation 2 jours ou parcours', level: 'Fondamentaux', summary: 'Développer la posture et les outils du leader facilitateur pour engager les équipes et passer à l\'action.' },
      { slug: 'leader-facilitateur-methodes-participatives-top', title: 'Leader facilitateur — méthodes participatives ToP', duration: '3 jours — 21 heures', format: 'Présentiel recommandé', level: 'Intermédiaire', summary: 'Donner la parole, structurer les conversations, construire du consensus et transformer les échanges en plan d\'action.' },
      { slug: 'leader-ancre-posture-securite-tpv', title: 'Leader ancré — posture, sécurité et théorie polyvagale', duration: '2 jours — 14 heures', format: 'Présentiel recommandé', level: 'Fondamentaux', summary: "Comprendre comment l'état interne du leader influence l'énergie, la confiance et les décisions du collectif." },
      { slug: 'accompagner-changement-sans-epuiser-equipes', title: 'Accompagner le changement sans épuiser les équipes', duration: '2 jours — 14 heures + option suivi', format: 'Présentiel', level: 'Intermédiaire', summary: 'Associer les personnes, reconnaître les résistances et construire un mouvement réaliste.' },
      { slug: 'delegation-autonomie-responsable', title: 'Délégation et autonomie responsable', duration: '1 jour — 7 heures', format: 'Présentiel ou distanciel', level: 'Intermédiaire', summary: 'Donner de l\'autonomie sans créer de flou, de retrait ou de chaos.' },
      { slug: 'culture-du-feedback', title: 'Culture du feedback', duration: '3 demi-journées — 9 heures', format: 'Présentiel ou distanciel', level: 'Fondamentaux', summary: "Faire du feedback un levier d'apprentissage, de confiance et de progression collective." },
      { slug: 'reunions-qui-engagent', title: 'Réunions qui engagent', duration: '1 jour — 7 heures', format: 'Présentiel ou distanciel', level: 'Fondamentaux', summary: 'Arrêter de subir les réunions et en faire des espaces de clarté, de contribution et de décision.' },
    ],
  },
  {
    universe: 'Agile, produit & amélioration continue',
    items: [
      { slug: 'amelioration-continue-retrospectives-utiles', title: 'Amélioration continue et rétrospectives utiles', duration: '1 jour — 7 heures', format: 'Présentiel ou distanciel', level: 'Fondamentaux', summary: "Transformer les rétrospectives en vrais leviers d'apprentissage et d'action." },
      { slug: 'product-owner-oriente-valeur', title: 'Product Owner orienté valeur', duration: '1 jour — 7 heures', format: 'Présentiel ou distanciel', level: 'Intermédiaire', summary: 'Prioriser, raconter et décider pour maximiser la valeur produite.' },
      { slug: 'scrum-master-facilitateur', title: 'Scrum Master facilitateur', duration: '1 jour — 7 heures', format: 'Présentiel ou distanciel', level: 'Intermédiaire', summary: 'Renforcer sa posture et ses outils pour mieux accompagner une équipe Scrum.' },
    ],
  },
  {
    universe: 'Pédagogie active & formateurs',
    items: [
      { slug: 'dynamiser-ses-formations', title: 'Dynamiser ses formations', duration: '1 à 2 jours', format: 'Formation 1 à 2 jours', level: 'Fondamentaux', summary: 'Transformer des formations descendantes en expériences pédagogiques actives, engageantes et mémorables.' },
      { slug: 'concevoir-formation-active-engageante', title: 'Concevoir une formation active et engageante', duration: '2 jours — 14 heures', format: 'Présentiel ou distanciel', level: 'Fondamentaux', summary: "Passer d'un déroulé de contenus à une expérience d'apprentissage qui transforme les pratiques." },
    ],
  },
];
