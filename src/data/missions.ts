/**
 * Les missions en bref, affichées sur /cas-clients/.
 *
 * Source : la plaquette « Book séminaires » (dossier `Book séminaires BNV`,
 * octobre 2026). Une fiche = les grandes lignes d'une intervention : ce que le
 * client voulait, ce que j'ai fait, ce qui en est sorti. Jamais de prénom de
 * participant, jamais de détail interne.
 *
 * Interdit : toute photo de la mission Sauvegarde 13.
 *
 * `cas` : slug d'un cas client détaillé, quand il existe (lien « Lire le cas complet »).
 */

export interface Mission {
  client: string;
  logo?: string;
  titre: string;
  format: string;
  voulu: string;
  fait: string;
  sorti: string;
  photos: { src: string; alt: string }[];
  cas?: string;
}

export interface FamilleMissions {
  id: string;
  titre: string;
  note: string;
  missions: Mission[];
}

const p = (fichier: string) => `/cas-clients/missions/${fichier}`;

export const familles: FamilleMissions[] = [
  {
    id: 'seminaires-ateliers',
    titre: 'Séminaires et ateliers',
    note: 'Lancements, séminaires de managers, journées de territoire, ateliers réseau.',
    missions: [
      {
        client: 'Urssaf Caisse nationale',
        logo: '/logos/urssaf.webp',
        titre: "Séminaire de managers : faire vivre l'agilité",
        format: 'Juin 2025 · deux jours à Biot (Sophia Antipolis) · une quarantaine de managers',
        voulu: "Que les managers vivent l'agilité, au lieu qu'on la leur explique.",
        fait: "Deux jours d'expériences et de débriefs, co-animés avec l'équipe de transformation.",
        sorti: 'Une expérimentation par manager, des actions collectives par département.',
        photos: [
          { src: p('urssaf-biot-canevas-zoom.jpg'), alt: 'Un manager remplit le canevas du forum ouvert' },
          { src: p('urssaf-biot-fresque-debrief-jour-1.jpg'), alt: 'Fresque « Débrief jour 1 »' },
          { src: p('urssaf-biot-affiche-4-valeurs.jpg'), alt: 'Le personnage et ses ballons : les quatre valeurs du Manifeste agile' },
        ],
        cas: 'urssaf-acoss',
      },
      {
        client: 'Flag Systèmes · Var',
        logo: '/logos/flag-systemes.png',
        titre: "Lancer une transformation avec toute l'équipe",
        format: '2018 · une journée · 40 salariés et le comité de direction · avec Osanwe',
        voulu: "Lancer la transformation de l'entreprise et trouver les premiers pas, avec tout le monde.",
        fait: 'La vision du comité de direction, puis dix thèmes travaillés en petits groupes, sur un grand canevas.',
        sorti: 'Les axes prioritaires choisis ensemble, un plan d’action par axe, puis un plan global porté par les 40 salariés.',
        photos: [
          { src: p('flag-systemes-groupe.jpg'), alt: 'Les 40 salariés de Flag Systèmes en atelier' },
          { src: p('flag-systemes-42-petits-pas.jpg'), alt: 'Paperboard « 42 petits pas »' },
          { src: p('flag-systemes-canevas.jpg'), alt: 'Un groupe devant son canevas' },
        ],
      },
      {
        client: 'JCI Monaco',
        logo: '/logos/jci-monaco.webp',
        titre: 'Séminaire de prise de présidence',
        format: '2025 · conception et facilitation',
        voulu: 'Réussir la prise de présidence : faire adhérer les membres au nouveau mandat et donner une place à chacun.',
        fait: 'Un séminaire en trois temps : se découvrir, se connaître, construire la vision. Tout dessiné en direct.',
        sorti: 'Une direction construite ensemble, et une première expérience de coopération.',
        photos: [
          { src: '/cas-clients/jci-monaco-fresque-agenda-seminaire-prise-presidence.jpg', alt: 'Agenda dessiné du séminaire JCI Monaco' },
          { src: '/cas-clients/jci-monaco-fresque-facteurs-motivations-equipe.jpg', alt: 'Fresque des facteurs de motivation' },
          { src: '/cas-clients/jci-monaco-atelier-collectif-facilitation-graphique.jpg', alt: 'Les membres de JCI Monaco en atelier' },
        ],
        cas: 'jci-monaco',
      },
      {
        client: 'JCE Monaco',
        logo: '/logos/jci-monaco.webp',
        titre: "Faire le bilan de l'année, relancer la suivante",
        format: "Séminaire de fin d'année · avec Amandine Jolibois (Arima Monaco)",
        voulu: "Faire un point d'étape avec les membres : ce qui a été vécu, ce qui a compté, et l'élan pour l'année suivante.",
        fait: "Une frise de l'année et une courbe d'énergie, un partage en binôme, puis chacun se projette et choisit son cap.",
        sorti: 'Une année reconnue, et des membres qui repartent avec leur engagement : « L’an prochain, je choisis de… ».',
        photos: [
          { src: p('jce-frise-annee-courbe.jpg'), alt: "Une participante trace la courbe de son année" },
        ],
      },
      {
        client: 'JCE Monaco',
        logo: '/logos/jci-monaco.webp',
        titre: 'Ateliers vision produit et elevator pitch',
        format: 'Octobre 2025 · « Clarifie ton idée, structure ton pitch, parle avec impact »',
        voulu: 'Aider des entrepreneurs à clarifier leur projet et à le présenter en quelques phrases.',
        fait: "Des ateliers de construction de la vision produit sur un canevas de proposition de valeur, puis l'elevator pitch.",
        sorti: 'Une idée claire, et un pitch prêt à être dit.',
        photos: [
          { src: p('jce-atelier-vision-produit.jpg'), alt: 'Atelier vision produit' },
          { src: p('jce-canevas-proposition-de-valeur.jpg'), alt: 'Le canevas de proposition de valeur, couvert de post-it' },
          { src: p('jce-atelier-canevas-mains.jpg'), alt: 'Les participants travaillent leur canevas' },
        ],
      },
      {
        client: 'LaMAREC · Corse',
        logo: '/logos/lamarec.webp',
        titre: 'Fédérer les acteurs de la petite enfance',
        format: '2024 · une journée · 30 personnes · avec Osanwe',
        voulu: 'Que les établissements de Corse proposent ensemble des réponses adaptées aux enfants, au plus près de chez eux.',
        fait: "Une journée d'atelier, avec la facilitation graphique en direct.",
        sorti: 'Une vue partagée de ce que chacun propose sur le territoire, et des solutions trouvées ensemble.',
        photos: [
          { src: p('lamarec-petite-enfance-tables.jpg'), alt: 'Les participants travaillent sur les cartes du territoire' },
          { src: p('lamarec-petite-enfance-salle.jpg'), alt: "La salle de l'atelier" },
          { src: p('lamarec-petite-enfance-panneau.jpg'), alt: 'Des participantes devant un panneau' },
        ],
        cas: 'lamarec',
      },
      {
        client: 'LaMAREC · Corse',
        logo: '/logos/lamarec.webp',
        titre: 'Co-construire un parcours de soins',
        format: '2024 · une journée · 30 personnes · avec Osanwe',
        voulu: "Repérer plus tôt le handicap chez l'enfant, et agir plus vite.",
        fait: "Une journée d'atelier, avec une grande fresque dessinée en direct.",
        sorti: 'Les étapes du parcours, les acteurs et les outils, posés noir sur blanc. Une carte des établissements mise à jour.',
        photos: [
          { src: p('lamarec-parcours-fresque.jpg'), alt: 'La fresque du parcours de soins' },
          { src: p('lamarec-parcours-salle.jpg'), alt: 'La salle en atelier' },
          { src: p('lamarec-parcours-post-it.jpg'), alt: 'Le mur de post-it' },
        ],
        cas: 'lamarec',
      },
      {
        client: 'France Vélo · filière économique',
        logo: '/logos/france-velo.png',
        titre: "Ateliers pour la naissance d'une filière",
        format: '2022 · avec Osanwe',
        voulu: "Fédérer les acteurs autour de la naissance d'une filière.",
        fait: "Co-conception et animation d'ateliers de la série, en facilitation visuelle.",
        sorti: 'Des ateliers qui ont nourri la vision, les valeurs et les engagements de la filière.',
        photos: [
          { src: p('velo-atelier-engagements.jpg'), alt: 'Atelier « Nos engagements pour la filière vélo »' },
          { src: p('velo-atelier-plenier.jpg'), alt: "Atelier en plénière autour de la métaphore de l'arbre" },
        ],
      },
      {
        client: 'Ville de Valbonne Sophia Antipolis',
        logo: '/logos/valbonne.svg',
        titre: 'Co-construire la charte des éco-gestes',
        format: 'Atelier avec les agents de la commune · après la capture graphique de la conférence',
        voulu: 'Que les agents choisissent eux-mêmes leurs éco-gestes.',
        fait: 'Un atelier avec un jeu de cartes, puis un totem pour afficher la charte.',
        sorti: 'Des agents ambassadeurs et une démarche zéro déchet.',
        photos: [
          { src: p('valbonne-cartes-eco-gestes.jpg'), alt: "Le jeu de cartes des éco-gestes, sur la table de l'atelier" },
          { src: p('valbonne-totem-eco-gestes.jpg'), alt: 'Le totem « Et moi, aujourd’hui, j’adopte quel éco-geste ? »' },
        ],
      },
      {
        client: 'CODEP 06',
        logo: '/logos/departement-06.png',
        titre: "Une demi-journée sur l'équilibre",
        format: 'Novembre 2025 · une demi-journée pour les équipes · environ 25 personnes',
        voulu: "Faire vivre le thème de l'équilibre, au travail et en équipe, plutôt que d'en parler.",
        fait: "Une mise en situation avec le jeu du bâton d'hélium, puis un débrief dessiné en direct pour transposer les comportements dans le travail.",
        sorti: "Les apprentissages du groupe, rendus visibles : écoute, synchronisation, leadership partagé, s'adapter, faire confiance, avancer ensemble.",
        photos: [
          { src: p('codep-fresque-baton-helium.jpg'), alt: "Fresque « Atelier créatif : le bâton d'hélium, l'équilibre »" },
          { src: p('codep-baton-helium-groupe.jpg'), alt: "Le groupe pendant le jeu du bâton d'hélium (visages floutés)" },
        ],
      },
      {
        client: "Ressources Systèmes d'Information",
        logo: '/logos/ressources.webp',
        titre: 'Réenchanter les formations',
        format: "Décembre 2024 · atelier de deux jours avec l'équipe des formateurs",
        voulu: 'Redonner du souffle à ses formations, avec une pédagogie plus active.',
        fait: 'Un atelier avec les formateurs pour reconstruire leurs formations en pédagogie active, avec les cartes bikablo.',
        sorti: 'Des formations repensées par les formateurs eux-mêmes.',
        photos: [
          { src: p('ressources-cartes-bikablo.jpg'), alt: 'Les formateurs choisissent leurs cartes bikablo' },
          { src: p('ressources-agenda-dessine.jpg'), alt: "Une formatrice dessine l'agenda de sa nouvelle formation" },
          { src: p('ressources-mur-methodes.jpg'), alt: 'Le mur des méthodes : avantages, limites, clés de succès' },
        ],
        cas: 'ressources',
      },
      {
        client: 'Relyens',
        logo: '/logos/relyens.png',
        titre: 'Intégrer les nouveaux à distance',
        format: 'Trois ans, depuis la crise du Covid · 8 promotions par an · 3 ateliers à distance par promotion',
        voulu: 'Continuer à bien accueillir les nouveaux collaborateurs, même à distance.',
        fait: "Un parcours d'intégration en trois ateliers pour partager la culture, la mission et la vision du groupe : 24 ateliers par an, pendant trois ans.",
        sorti: "Un rapport d'étonnement construit par les nouveaux, et un groupe ancré dans l'amélioration continue.",
        photos: [
          { src: p('relyens-board-parcours.jpg'), alt: "Le tableau en ligne du parcours d'intégration" },
        ],
      },
      {
        client: "CCI Nice Côte d'Azur · La Place Business",
        logo: '/logos/cci-nice-cote-azur.svg',
        titre: 'Atelier réseau : la « Wish list »',
        format: "16 décembre 2025 · soirée réseau d'entreprises",
        voulu: 'Faire se rencontrer les participants autrement, et créer des mises en relation utiles.',
        fait: 'Chacun écrit son nom et ses besoins de mise en relation sur une enveloppe, puis glisse des coups de pouce dans celles des autres.',
        sorti: 'Des enveloppes remplies de contacts et de coups de pouce.',
        photos: [
          { src: p('place-business-wish-list.jpg'), alt: 'Le paperboard « Wish list » qui explique l’atelier' },
          { src: p('place-business-salle-enveloppes.jpg'), alt: 'Les enveloppes kraft alignées sur les tables' },
          { src: p('place-business-enveloppes-main.jpg'), alt: 'Un participant glisse une carte dans une enveloppe' },
        ],
      },
      {
        client: 'Metropolitan · masterclass',
        logo: '/logos/metropolitan.png',
        titre: 'Conférence-atelier : Respire & Yoga',
        format: '3 juin 2023 · conférencier, avec Cora Teodorescu · récolte visuelle de Viviane Morelle',
        voulu: 'Offrir aux entrepreneurs un temps pour eux : respiration, corps, sécurité intérieure.',
        fait: 'Une conférence-atelier sur la respiration et la théorie polyvagale, avec le yoga de Cora Teodorescu.',
        sorti: "Des participants présents, et l'essentiel retenu sur la fresque.",
        photos: [
          { src: p('metropolitan-respire-yoga-intervenants.jpg'), alt: 'Les intervenants devant la fresque « Respire & Yoga »' },
          { src: p('metropolitan-detail-inspiration-expiration.jpg'), alt: 'Détail de la fresque : inspiration, expiration' },
          { src: p('metropolitan-fresque-en-cours.jpg'), alt: 'La fresque en cours de réalisation' },
        ],
      },
    ],
  },
  {
    id: 'capture-graphique',
    titre: 'Capture graphique',
    note: 'Conférences, colloques et tables rondes dessinés en direct.',
    missions: [
      {
        client: 'CEC · Convention des entreprises pour le climat',
        logo: '/logos/cec.webp',
        titre: "Capture graphique d'un parcours de dirigeants",
        format: "Février 2025 · deux journées d'ateliers et de conférences, Sophia Antipolis · avec Osanwe",
        voulu: 'Que les dirigeants retiennent l’essentiel de deux journées très riches.',
        fait: "Les conférences dessinées en direct, les fresques installées dans l'espace, puis nettoyées pour être réimprimées.",
        sorti: "Des contenus plus mémorables, une vision d'ensemble des deux journées, une trace commune du parcours.",
        photos: [
          { src: '/cas-clients/cec-fresque-former-un-collectif-humanite-jean-pierre-goux.jpg', alt: 'Fresque de la conférence de Jean-Pierre Goux' },
          { src: p('cec-nery-fresque-cadree.jpg'), alt: 'La fresque nettoyée de la conférence de Guillaume Néry' },
          { src: '/cas-clients/cec-groupe-dirigeants-guillaume-nery-anatomie-plongee.jpg', alt: 'Les dirigeants de la CEC devant la fresque' },
        ],
        cas: 'cec',
      },
      {
        client: 'FIBOIS Île-de-France et Région Sud',
        titre: "Capture graphique d'un colloque technique",
        format: "Septembre 2024 · colloque sur le cèdre de l'Atlas · avec Osanwe",
        voulu: 'Rendre une journée technique et scientifique accessible à tous les participants.',
        fait: 'Les présentations dessinées en direct, par grands thèmes.',
        sorti: 'Des sujets complexes plus faciles à suivre, un support pour les échanges, trois années de travaux en une synthèse.',
        photos: [
          { src: p('fibois-fresque-cedre-forets-francaises.jpg'), alt: "Fresque « Le cèdre de l'Atlas dans les forêts françaises »" },
          { src: '/cas-clients/fibois-cedre-atlas-fresque-graine-produits-finis.jpg', alt: 'Fresque « Le cèdre, de la graine aux produits finis »' },
          { src: p('fibois-participant-photographie-fresque.jpg'), alt: 'Un participant photographie la fresque' },
        ],
        cas: 'fibois',
      },
      {
        client: 'Les Rencontres du PMI · Antibes',
        logo: '/logos/pmi.png',
        titre: 'Deux jours de conférences, au bord de la scène',
        format: '2025 · convention de la communauté des chefs de projet · deux jours · avec Osanwe',
        voulu: 'Garder une trace vivante de deux jours de conférences dans un grand auditorium.',
        fait: 'Les conférences dessinées en direct au bord de la scène.',
        sorti: 'Des fresques photographiées et partagées par les participants.',
        photos: [
          { src: p('pmi-fresque-pilotage-projet-extraordinaire.jpg'), alt: 'Fresque « Pilotage d’un projet extraordinaire »' },
          { src: p('pmi-fresque-funambule-des-projets.jpg'), alt: 'Nicolas Verdot dessine en direct au bord de la scène' },
          { src: p('pmi-participants-devant-la-fresque.jpg'), alt: 'Des participants devant la fresque' },
        ],
      },
      {
        client: 'My Talents · UPABC',
        logo: '/logos/mytalents.png',
        titre: 'Un world café, et sa fresque globale',
        format: "Octobre 2024 · 1re Université des professionnels de l'accompagnement et du bilan de compétences · avec Osanwe",
        voulu: "Faire travailler les participants sur l'avenir de leur métier, et garder une trace de tout ce qui s'est dit.",
        fait: 'Le processus du world café co-préparé, un canevas par question, puis les échanges récoltés et dessinés en une fresque globale.',
        sorti: 'Une fresque qui réunit toutes les questions du world café et ce qu’en ont dit les participants.',
        photos: [
          { src: p('upabc-fresque-globale-world-cafe.jpg'), alt: 'La fresque globale du world café' },
          { src: p('upabc-canevas-world-cafe-theme.jpg'), alt: 'Un canevas du world café, couvert de post-it' },
          { src: p('upabc-participants-devant-fresques.jpg'), alt: 'Les participants devant les fresques' },
        ],
      },
      {
        client: 'My Talents · UPABC',
        logo: '/logos/mytalents.png',
        titre: "Le mur d'engagement : la parole des participants",
        format: "Octobre 2024 · un mur de 3 mètres dans l'espace de pause · avec Osanwe",
        voulu: 'Recueillir ce que les participants retiennent de la journée, et ce qu’ils vont en faire.',
        fait: 'Un grand support visuel autour de deux questions, « Avec quoi repartez-vous ? » et « Et en 2025 ? », complété au fil de la journée.',
        sorti: 'Une synthèse vue par la salle, et des engagements écrits par les participants eux-mêmes.',
        photos: [
          { src: p('upabc-mur-engagement-vue.jpg'), alt: "Le mur d'engagement en entier, avec ses post-it" },
          { src: p('upabc-fresque-2025-participants.jpg'), alt: 'Des participantes écrivent sur la fresque « Et en 2025 ? »' },
          { src: p('upabc-fresque-2025-nicolas.jpg'), alt: 'Nicolas Verdot devant la fresque, avec un participant' },
        ],
      },
      {
        client: "Communauté d'agglomération du Pays de Grasse",
        logo: '/logos/pays-de-grasse.png',
        titre: 'Tables rondes « Climat : chaud devant ! »',
        format: 'Palais des congrès de Grasse · 18 septembre 2024 · avec Osanwe',
        voulu: 'Rendre accessibles au public des tables rondes techniques sur le climat.',
        fait: 'Les tables rondes dessinées en direct, sur un grand mur mobile.',
        sorti: "Une fresque devant laquelle on s'arrête et on discute.",
        photos: [
          { src: p('chaud-devant-fresque-tables-rondes.jpg'), alt: 'La fresque des tables rondes « Climat : chaud devant ! »' },
          { src: p('chaud-devant-fresque-comprendre-agir.jpg'), alt: 'Fresque « Comprendre les enjeux de la crise environnementale pour agir à la bonne échelle »' },
          { src: p('chaud-devant-detail-systemie.jpg'), alt: 'Détail de la fresque : comprendre la systémie' },
        ],
      },
      {
        client: 'Ville de Valbonne Sophia Antipolis',
        logo: '/logos/valbonne.svg',
        titre: 'Pollution plastique : enjeux et engagements',
        format: "Une matinée de conférence · avant l'atelier des agents sur leurs éco-gestes",
        voulu: "Que le public garde une trace claire d'une matinée dense sur les déchets.",
        fait: 'La matinée dessinée en direct, qui a servi de base aux ateliers des agents.',
        sorti: 'Une fresque partagée et imprimée sur bâche pour la commune.',
        photos: [
          { src: p('valbonne-fresque-pollution-plastique.jpg'), alt: 'Fresque « Pollution plastique : enjeux et engagements »' },
          { src: p('valbonne-detail-zero-megot.jpg'), alt: 'Détail de la fresque : sensibilisation zéro mégot' },
          { src: p('valbonne-detail-outils-pour-agir.jpg'), alt: 'Détail de la fresque : les outils pour agir' },
        ],
      },
      {
        client: 'Congrès Intelligence collective et innovation',
        logo: '/logos/visions-collectives.png',
        titre: 'Un congrès, une équipe de facilitateurs graphiques',
        format: 'Marseille · 1er mars 2019 · Vision 2021',
        voulu: "Garder une trace de toutes les conférences d'une journée de congrès.",
        fait: 'Des conférences dessinées en direct, au sein d’une équipe de facilitateurs graphiques.',
        sorti: 'Une fresque par conférence, exposée et partagée avec les participants.',
        photos: [
          { src: p('congres-ic-fresque-toujours-fait-comme-ca.jpg'), alt: 'Fresque « Mais on a toujours fait comme ça ! », dessinée par Nicolas Verdot' },
          { src: p('congres-ic-fresque-moocs.jpg'), alt: 'Fresque « MOOCs collaboratifs et communautés apprenantes »' },
          { src: p('congres-ic-equipe-dessine.jpg'), alt: "L'équipe de facilitateurs graphiques dessine en direct" },
        ],
      },
    ],
  },
  {
    id: 'mentoring',
    titre: 'Mentoring',
    note: "Vous animez, je vous prépare : déroulé, script, supports, débrief.",
    missions: [
      {
        client: 'PwC',
        logo: '/logos/pwc.webp',
        titre: 'Un programme de transformation, sprint après sprint',
        format: "2024-2026 · 8 à 9 ateliers d'une demi-journée · environ 25 personnes · animés par une personne de l'équipe",
        voulu: "Faire avancer un programme de transformation du delivery, porté par l'équipe elle-même.",
        fait: "Chaque atelier co-préparé avec l'animatrice interne et le sponsor : déroulé minuté, script, supports, débrief. Lancement, point d'étape, mesure de la maturité, bilan de l'année, rôle d'ambassadeur.",
        sorti: "Un programme tenu par l'équipe, et une première version du rôle d'ambassadeur pour la suite.",
        photos: [
          { src: p('pwc-salle-fresque-objectifs.jpg'), alt: 'La salle prête, avec la fresque des objectifs' },
          { src: p('pwc-atelier-groupes.jpg'), alt: 'Un atelier en petits groupes' },
        ],
      },
      {
        client: 'Urssaf Caisse nationale',
        logo: '/logos/urssaf.webp',
        titre: 'Faciliter le séminaire de son propre CODIR',
        format: 'Un jour et demi au vert · une personne en interne facilite le séminaire de son comité de direction',
        voulu: 'Être prête à faciliter le séminaire de son propre comité de direction, et tenir le cadre devant sa hiérarchie.',
        fait: 'Le déroulé co-conçu avec elle, et sa posture comme celle du directeur préparées séquence par séquence.',
        sorti: 'Un séminaire tenu par elle : le « CODIR utile » défini par le comité, ses engagements, ses règles de délégation.',
        photos: [],
        cas: 'urssaf-acoss',
      },
      {
        client: 'MG2Mix',
        logo: '/logos/mg2mix.webp',
        titre: "Un atelier commercial qu'elle anime seule",
        format: '2025 · un atelier conçu avec la responsable commerciale, animé avec plusieurs groupes',
        voulu: "Faire progresser une équipe d'avant-vente sans méthode imposée.",
        fait: 'Un atelier de deux heures conçu avec la responsable, un guide d’animation et des supports réutilisables.',
        sorti: 'Des ateliers qu’elle anime seule, avec plusieurs groupes.',
        photos: [],
        cas: 'mg2mix',
      },
      {
        client: 'Louis Vuitton',
        logo: '/logos/louis-vuitton.svg',
        titre: 'Faire coopérer des équipes interdépendantes',
        format: "2022-2023 · accompagnement de chefs de projet dans la conception d'ateliers stratégiques",
        voulu: 'Que des équipes interdépendantes coopèrent au lieu de protéger chacune leur périmètre.',
        fait: 'Construire le bon processus, choisir les bons outils, adopter la bonne posture. Je les aide à concevoir leur dispositif, je n’anime pas à leur place.',
        sorti: 'Les priorités et les dépendances visibles entre équipes, et des chefs de projet plus autonomes pour animer.',
        photos: [],
        cas: 'louis-vuitton',
      },
      {
        client: 'Le Cocon',
        logo: '/logos/le-cocon.svg',
        titre: 'Une première retraite de quatre jours',
        format: 'Cercle de déconnexion · première rencontre en présentiel',
        voulu: 'Réussir sa première retraite en présentiel : quatre jours d’introspection et de développement personnel.',
        fait: "L'expérience conçue avec le fondateur, jour après jour, et les panneaux dessinés qui guident les participants.",
        sorti: 'Une retraite prête à vivre, que le fondateur anime lui-même avec ses supports.',
        photos: [
          { src: p('cocon-cercle-ouverture.jpg'), alt: "Le cercle d'ouverture du Cocon, avec les panneaux dessinés" },
        ],
      },
    ],
  },
  {
    id: 'engagement-solidaire',
    titre: 'Engagement solidaire',
    note: 'Transmettre la facilitation là où les moyens manquent, avec ICA International.',
    missions: [
      {
        client: "ICA Côte d'Ivoire",
        logo: '/logos/ica-international.jpg',
        titre: 'Former des formateurs à la Technology of Participation',
        format: 'Mlan Kouassikro · avril 2026 · avec les Fourmis du changement',
        voulu: "Donner aux formateurs de l'ICA les méthodes pour faire participer les groupes qu'ils accompagnent.",
        fait: 'Une formation de formateurs : conversation structurée, atelier de consensus, plan d’action.',
        sorti: 'Des formateurs locaux qui animent à leur tour.',
        photos: [
          { src: p('ica-ci-top-attestations.jpg'), alt: 'Les formateurs et leurs attestations' },
          { src: p('ica-ci-top-mur-de-cartes.jpg'), alt: "Le mur de cartes de l'atelier de consensus" },
          { src: p('ica-ci-top-sous-groupes.jpg'), alt: 'Travail en sous-groupes' },
        ],
      },
      {
        client: "Côte d'Ivoire · un village de brousse",
        logo: '/logos/ica-international.jpg',
        titre: "Un atelier au village sur l'épargne collective",
        format: 'Avril 2026 · avec les Fourmis du changement',
        voulu: "Aider les habitants à faire vivre leurs AVEC, les associations villageoises d'épargne et de crédit.",
        fait: "Un atelier participatif avec les membres du village, avec les méthodes de l'ICA.",
        sorti: "Des membres qui s'approprient le fonctionnement de leur groupe d'épargne.",
        photos: [
          { src: p('ica-ci-avec-restitution.jpg'), alt: 'Un participant présente le travail de son groupe' },
          { src: p('ica-ci-avec-paperboard.jpg'), alt: 'Paperboard : cotisation croissante, non-respect du délai de remboursement' },
          { src: p('ica-ci-avec-salle-de-classe.jpg'), alt: "L'atelier dans une salle de classe du village" },
        ],
      },
      {
        client: 'ICA Bénin',
        logo: '/logos/ica-international.jpg',
        titre: 'La Technology of Participation pour mener ses projets',
        format: "Un groupe d'hommes et de femmes porteurs de projets",
        voulu: 'Donner à un groupe les outils pour mener ses propres projets : transformation culturelle, agriculture.',
        fait: 'Une formation pour faire parler un groupe, construire un consensus et bâtir un plan d’action.',
        sorti: 'Des porteurs de projets outillés pour faire avancer leur communauté.',
        photos: [
          { src: p('ica-benin-top-salle.jpg'), alt: 'La salle de formation, en cercle' },
          { src: p('ica-benin-top-travail-en-groupe.jpg'), alt: 'Travail en petit groupe' },
          { src: p('ica-benin-top-attestations.jpg'), alt: 'Les participants et leurs attestations' },
        ],
      },
      {
        client: 'ICA Bénin',
        logo: '/logos/ica-international.jpg',
        titre: 'La facilitation graphique au Bénin',
        format: 'Deuxième formation, avec le même groupe',
        voulu: "Aider le groupe à rendre ses idées visibles, quelle que soit la langue ou le niveau d'écrit.",
        fait: 'Une formation à la facilitation graphique : lettres, pictogrammes, panneaux pour animer.',
        sorti: 'Des animateurs qui dessinent pour faire comprendre et faire participer.',
        photos: [
          { src: p('ica-benin-fg-marqueurs-leves.jpg'), alt: 'Le groupe lève ses marqueurs à la fin de la formation' },
          { src: p('ica-benin-fg-participant-dessine.jpg'), alt: 'Un participant dessine dans son carnet' },
          { src: p('ica-benin-fg-groupe.jpg'), alt: 'Le groupe de la formation' },
        ],
      },
    ],
  },
];

export const nombreMissions = familles.reduce((n, f) => n + f.missions.length, 0);
