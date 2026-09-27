export interface Formation {
  slug: string;
  title: string;
  duration: string;
  format: string;
  level: string;
  summary: string;
  /**
   * Le programme complet. Optionnel : une formation sans `programme` reste une
   * carte du catalogue, une formation qui en a un gagne sa propre page.
   *
   * La trame suit ce qu'attend un responsable formation ou un OPCO — contexte,
   * public, prerequis, deroule, objectifs pedagogiques formules en « sera
   * capable de », modalites, livrables. Ce n'est pas un gabarit marketing :
   * c'est le minimum exigible d'un organisme de formation, et c'est aussi
   * l'ordre dans lequel la decision se prend (est-ce pour moi ? qu'est-ce que
   * j'y fais ? qu'est-ce que j'en repars avec ?).
   */
  programme?: FormationProgramme;
}

export interface FormationProgramme {
  /** Pourquoi cette formation existe maintenant. Deux ou trois paragraphes. */
  contexte: string[];
  /** A qui elle s'adresse, en clair — y compris qui ne doit PAS venir. */
  pourQui: string[];
  prerequis: string[];
  /** Le deroule, sequence par sequence. */
  deroule: { titre: string; texte: string }[];
  /** Formules en « sera capable de » : c'est l'exigence Qualiopi. */
  objectifs: string[];
  modalites: string[];
  /** Ce que le participant emporte, concretement. */
  livrables: string[];
  /** Ce que cette formation ne fait pas — et vers quoi renvoyer alors. */
  pasPourVous?: string;
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
      /* Les trois formations « augmentées ». Elles ne parlent pas d'outils mais
         de processus : où l'IA entre dans un temps collectif, ce qu'elle y fait,
         et à quel moment on la sort de la pièce pour décider entre humains.
         C'est la déclinaison en formation des offres « augmentées ». */
      {
        slug: 'ia-dans-processus-intelligence-collective',
        title: "Introduire l'IA dans un processus d'intelligence collective",
        duration: '1 à 2 jours',
        format: 'Formation 1 à 2 jours ou parcours',
        level: 'Intermédiaire',
        summary:
          "Où placer l'IA dans un atelier — préparation, divergence, objection, restitution — et où la sortir de la pièce pour que le collectif décide vraiment.",
        programme: {
          contexte: [
            "L'IA générative est entrée dans les postes de travail. Elle n'est pas entrée dans les ateliers — ou alors par la petite porte, pour générer un déroulé ou reformuler un compte rendu.",
            "Face à elle, les professionnels de l'accompagnement oscillent entre deux réflexes : l'adopter comme un gadget qui fait gagner un peu de temps, ou la refuser au nom de la relation humaine. Les deux positions ratent la question.",
            "La bonne question n'est pas « quel outil », ni même « est-ce que j'en mets ». C'est « à quel moment du processus, pour quoi faire, et annoncé comment au groupe ». Un collectif ne bloque presque jamais faute d'idées : il bloque faute d'information au moment de trancher, et parce que trancher fait des perdants. L'IA traite le premier point. Elle ne touchera jamais au second.",
          ],
          pourQui: [
            'Facilitateurs, formateurs, coachs et consultants qui animent déjà des temps collectifs.',
            "Managers et dirigeants qui conduisent eux-mêmes leurs ateliers, séminaires ou comités.",
            "Responsables de transformation et chefs de projet qui doivent faire converger des parties prenantes.",
          ],
          prerequis: [
            "Animer déjà des temps collectifs, même occasionnellement — la formation travaille sur vos ateliers réels, pas sur des cas d'école.",
            "Un ordinateur portable et une connexion correcte.",
            "Un compte gratuit sur un assistant d'IA générative. Aucune connaissance technique n'est attendue.",
          ],
          deroule: [
            {
              titre: "Le procès de l'IA en atelier",
              texte:
                "On commence par ce qui fâche : ce qu'on craint de perdre, ce qu'on a déjà vu rater, ce qui relève du fantasme. On trie ce qui est fondé de ce qui ne l'est pas — parce qu'on ne fait pas entrer un outil dans une salle sans savoir répondre aux objections du groupe.",
            },
            {
              titre: 'Cartographier son propre processus',
              texte:
                "Divergence, exploration, confrontation, convergence, décision, engagement. Chacun cartographie un atelier qu'il anime réellement, et on repère ensemble les moments où l'IA ajoute, ceux où elle ne change rien, et ceux où elle détruit de la valeur.",
            },
            {
              titre: 'Instruire un sujet avant la salle',
              texte:
                "Rassembler la matière éparpillée, faire remonter les contradictions, préparer deux ou trois options réellement documentées. Le groupe arrive sur un dossier instruit au lieu de le découvrir ensemble — c'est le gain le plus massif, et le moins spectaculaire.",
            },
            {
              titre: "En salle : élargir, puis contredire",
              texte:
                "Produire vingt options quand le groupe en voyait trois. Puis faire objecter à chacune, y compris à la plus confortable. Une IA attaque une proposition sans y laisser de capital politique : c'est ce qui la rend utile là où personne ne peut se le permettre.",
            },
            {
              titre: "Confronter aux données de l'organisation",
              texte:
                "« On vérifiera et on en reparle au prochain comité » est la phrase qui coûte le plus cher en réunion. On travaille la mise à disposition de la connaissance de l'entreprise — chiffres, comptes rendus, études — pendant l'atelier, ainsi que ses limites de fiabilité et de confidentialité.",
            },
            {
              titre: 'Restituer sans lisser',
              texte:
                "Transformer trois heures de débat en un relevé de décisions lisible le soir même, avec les désaccords conservés plutôt qu'arrondis. Ce qui n'est pas écrit le jour même n'existe plus la semaine suivante.",
            },
            {
              titre: 'La ligne rouge',
              texte:
                "Ce qu'on ne délègue jamais, et comment le dire au groupe : le choix, l'arbitrage de valeurs, le désaccord qu'il faut porter, la responsabilité devant ceux qui en répondront dans six mois. On écrit ensemble la charte d'usage qu'on présentera à un collectif.",
            },
            {
              titre: 'Concevoir, animer, débriefer',
              texte:
                "Chacun conçoit une séquence augmentée pour un atelier qui l'attend vraiment, l'anime devant le groupe, et reçoit les retours. C'est la partie la plus longue, et c'est elle qui fait la différence entre avoir compris et savoir faire.",
            },
          ],
          objectifs: [
            "Situer, sur un processus collectif donné, les moments où l'IA produit de la valeur et ceux où elle en détruit",
            "Concevoir une séquence d'atelier intégrant l'IA avec un rôle explicite, annoncé au groupe et accepté par lui",
            "Formuler des requêtes qui instruisent une option et qui confrontent une proposition aux données de l'organisation",
            "Produire une restitution de temps collectif qui conserve les désaccords au lieu de les lisser",
            "Poser et tenir la limite entre ce que la machine instruit et ce que le collectif décide",
            "Répondre aux objections d'un groupe réticent à voir entrer l'IA dans ses ateliers",
          ],
          modalites: [
            "Une réunion de cadrage en amont, pour comprendre votre contexte, vos participants et ce qui devra être différent à la fin.",
            "Un questionnaire de positionnement envoyé aux participants : on adapte le niveau et les exemples à ce qui remonte.",
            "Pédagogie active : apports courts, démonstrations, et surtout mise en pratique sur les ateliers réels des participants.",
            "En présentiel ou à distance. Le présentiel est recommandé pour la partie animation.",
            "Groupe de 4 à 14 personnes. Au-delà, la partie « animer devant le groupe » n'est plus tenable.",
          ],
          livrables: [
            "Une trame d'atelier augmenté, réutilisable et adaptée à votre contexte",
            "Une bibliothèque de requêtes classées par moment du processus — instruire, élargir, objecter, restituer",
            "La charte d'usage à présenter à un groupe avant de faire entrer l'IA dans la salle",
            "Les supports et la documentation envoyés après la formation",
          ],
          pasPourVous:
            "Si vous cherchez à maîtriser un outil en particulier — ChatGPT, Claude, Copilot, Gemini — ce n'est pas ici. Cette formation porte sur le processus collectif, pas sur le poste de travail individuel. Je vous orienterai vers la bonne formation outil.",
        },
      },
      {
        slug: 'chef-de-projet-augmente',
        title: 'Chef de projet augmenté',
        duration: '2 jours ou parcours',
        format: 'Formation 2 jours ou parcours',
        level: 'Fondamentaux',
        summary:
          "Piloter avec l'IA sans y perdre le collectif : cadrage, risques, arbitrages, comptes rendus et préparation des décisions qui engagent.",
        programme: {
          contexte: [
            "L'IA a fait fondre le temps de production des livrables d'un projet. Le cadrage, la note de synthèse, le support de comité, le compte rendu : ce qui prenait deux jours en prend deux heures.",
            "Sauf qu'un projet ne se bloque presque jamais sur la production. Il se bloque sur un arbitrage qu'on reporte, une dépendance qu'on n'a pas vue, une décision qui remonte d'un cran et ne redescend pas. Accélérer ce qui n'est pas la contrainte ne fait qu'envoyer plus de travail vers la contrainte.",
            "Cette formation part donc de là : trouver où votre projet bloque réellement, puis mettre l'IA au service de ce point-là — instruire les options, rendre les risques discutables, préparer les décisions qui engagent. Et pas au service de la production de documents que personne n'attendait.",
          ],
          pourQui: [
            'Chefs de projet, product owners, responsables de programme et de portefeuille.',
            "Managers qui pilotent des projets transverses sans autorité hiérarchique sur les contributeurs.",
            "PMO et responsables de transformation qui doivent faire décider des comités.",
          ],
          prerequis: [
            "Piloter actuellement au moins un projet réel : c'est sur lui qu'on travaille pendant les deux jours.",
            'Un ordinateur portable et une connexion correcte.',
            "Un compte gratuit sur un assistant d'IA générative. Aucune compétence technique requise.",
          ],
          deroule: [
            {
              titre: 'Où votre projet bloque vraiment',
              texte:
                "Chacun cartographie le flux de son projet et cherche la contrainte réelle : production, validation, arbitrage, dépendance externe, disponibilité d'une personne. La suite des deux jours se décide à partir de ce diagnostic — il est rarement là où on le croyait.",
            },
            {
              titre: 'Du besoin flou au cadrage instruit',
              texte:
                "Transformer une demande vague en cadrage qui tient : périmètre, hypothèses explicites, ce qui est hors sujet, ce qu'on ne sait pas encore. Faire produire les questions qu'on n'a pas pensé à poser, avant d'aller voir le commanditaire.",
            },
            {
              titre: "Risques et dépendances : écrire ce qu'on n'ose pas écrire",
              texte:
                "Un registre de risques sincère est rare, parce que nommer un risque revient souvent à désigner quelqu'un. On travaille la production de scénarios défavorables et leur mise en discussion — l'IA formule ce qui coûte politiquement cher à formuler soi-même.",
            },
            {
              titre: 'Préparer une décision qui engage',
              texte:
                "Un comité qui arbitre entre des intuitions reporte. Un comité qui arbitre entre deux ou trois scénarios documentés tranche. On construit le dossier de décision : options, critères, conséquences, ce qu'on perd dans chaque cas — et le mandat de décision, qui manque presque toujours.",
            },
            {
              titre: 'Le compte rendu qui survit à la réunion',
              texte:
                "Relevé de décisions produit le jour même, désaccords conservés, engagements avec un nom et une date. On travaille aussi la relance : ce qui n'est pas suivi n'a pas été décidé.",
            },
            {
              titre: 'Piloter un portefeuille',
              texte:
                "Consolider l'avancement, repérer les signaux faibles dans les comptes rendus, préparer un comité de pilotage. Et voir ce que l'IA rate systématiquement : le non-dit, la fatigue d'une équipe, le conflit qui n'apparaît dans aucun document.",
            },
            {
              titre: "Les limites, et le piège",
              texte:
                "L'IA amplifie le système existant : un portefeuille confus devient confus plus vite, une gouvernance floue produit plus de documents flous. On regarde aussi la confidentialité, la fiabilité des sources, et le risque d'une compétence qui paraît solide en surface parce qu'on n'a plus à la construire.",
            },
            {
              titre: 'Mise en pratique sur votre projet',
              texte:
                "Chacun repart avec un dossier de décision réel, préparé pendant la formation, pour un arbitrage qui l'attend. C'est la séquence la plus longue des deux jours.",
            },
          ],
          objectifs: [
            "Identifier la contrainte réelle d'un projet et distinguer ce que l'IA peut accélérer de ce qu'elle ne fera pas avancer",
            "Produire un cadrage de projet explicitant le périmètre, les hypothèses et les zones d'incertitude",
            "Construire un registre de risques et un jeu de scénarios défavorables discutables en comité",
            "Préparer un dossier de décision comportant des options instruites, des critères et un mandat de décision explicite",
            "Produire un relevé de décisions exploitable le jour même, avec engagements nommés et datés",
            "Évaluer la fiabilité, la confidentialité et les angles morts d'une production assistée par IA",
          ],
          modalites: [
            "Une réunion de cadrage en amont avec le responsable formation ou le commanditaire.",
            "Un questionnaire de positionnement : les exemples et le niveau sont ajustés aux projets réels des participants.",
            "Alternance d'apports courts et de mise en pratique sur les projets des participants. Aucun cas d'école.",
            'En présentiel ou à distance, sur deux jours consécutifs ou espacés.',
            'Groupe de 4 à 12 personnes.',
          ],
          livrables: [
            'Le cadrage et le dossier de décision de votre projet réel, produits pendant la formation',
            "Une trame de dossier de décision et de relevé de décisions, réutilisables",
            'Une bibliothèque de requêtes de pilotage classées par usage',
            'Les supports et la documentation envoyés après la formation',
          ],
          pasPourVous:
            "Si votre sujet est la méthode de gestion de projet elle-même — agilité, planification, gouvernance — cette formation ne la remplacera pas. Elle suppose que vous avez déjà un cadre de pilotage, et travaille sur ce que l'IA y change.",
        },
      },
      {
        slug: 'codir-augmente',
        title: 'Codir augmenté',
        duration: '1 jour ou parcours',
        format: 'Formation ou atelier sur mesure, en équipe de direction',
        level: 'Intermédiaire',
        summary:
          "Préparer, instruire et tenir les décisions d'un comité de direction avec l'IA — et garder l'arbitrage, le désaccord et la responsabilité du côté humain.",
        programme: {
          contexte: [
            "Un comité de direction reporte rarement par incompétence. Il reporte parce qu'il lui manque l'information au moment où il faudrait trancher, et parce que trancher fait des perdants — un budget, un périmètre, le rôle de quelqu'un autour de la table.",
            "L'IA règle proprement le premier problème : l'information peut être instruite avant la séance, et interrogée pendant. Elle ne touchera jamais au second, et c'est très bien ainsi.",
            "Cette journée se travaille avec le comité réel, sur ses sujets réels. Ce n'est pas une sensibilisation : à la fin, un arbitrage qui traînait depuis des mois a avancé, ou on a compris précisément pourquoi il n'avance pas.",
          ],
          pourQui: [
            "Comités de direction, comités exécutifs et équipes de direction constituées — la formation se donne au collectif entier, pas à des individus venus séparément.",
            "Codirs d'entreprise, de collectivité, d'association ou de filiale, de 4 à 12 personnes.",
          ],
          prerequis: [
            "Aucun prérequis technique. Le niveau de maîtrise des outils est indifférent : la journée porte sur la décision collective.",
            "Un sujet réel, non tranché, que le comité accepte de mettre sur la table ce jour-là.",
            "La présence de la personne qui détient le mandat de décision sur ce sujet.",
          ],
          deroule: [
            {
              titre: 'Ce qui ne se décide pas chez vous',
              texte:
                "On part des sujets qui reviennent sans être tranchés, et on chiffre ce que ce report coûte chaque mois. Puis on cherche la vraie cause : mandat flou, personnes absentes, options non instruites, désaccord que personne ne nomme, ou animation inexistante.",
            },
            {
              titre: 'Instruire avant la séance',
              texte:
                "Ce que le comité devrait avoir lu avant d'entrer : options documentées, conséquences, ce qu'on perd dans chaque scénario. On construit le format de dossier de décision du comité, et la règle qui va avec — un sujet non instruit n'est pas à l'ordre du jour.",
            },
            {
              titre: 'Le mandat de décision',
              texte:
                "Qui tranche, qui est consulté, qui est informé, et à partir de quel seuil. C'est l'heure qui change le plus de choses dans une année de comité, et celle qu'on ne prend jamais.",
            },
            {
              titre: 'Interroger la connaissance de la maison, en séance',
              texte:
                "Chiffres, comptes rendus, études, retours clients : la question qui aurait renvoyé au comité suivant trouve sa réponse en quelques minutes. On travaille aussi ce qu'il faut vérifier avant de s'appuyer dessus, et ce qui ne doit pas sortir de la maison.",
            },
            {
              titre: 'Faire objecter sans faire perdre la face',
              texte:
                "Attaquer la proposition la plus confortable, y compris celle du dirigeant, sans que personne n'y laisse de capital politique. C'est l'usage le plus utile de l'IA dans un codir, et le plus contre-intuitif.",
            },
            {
              titre: 'Trancher, pour de vrai',
              texte:
                "Le sujet mis sur la table le matin est arbitré l'après-midi : décision, mandat, engagements nommés et datés, et ce qu'on dira aux équipes. Ou bien on nomme explicitement ce qui empêche de trancher aujourd'hui, et ce qu'il faut pour y arriver.",
            },
            {
              titre: 'La règle du jeu pour la suite',
              texte:
                "Le comité écrit sa propre charte : ce qu'il instruit avec l'IA, ce qu'il ne lui confie pas, ce qui reste confidentiel, et comment il annonce cet usage à ses équipes. La décision, elle, reste à ceux qui en répondront dans six mois.",
            },
          ],
          objectifs: [
            "Identifier, pour un sujet non tranché, la cause réelle du report et son coût mensuel",
            "Construire un dossier de décision instruisant deux à trois options documentées avec leurs conséquences",
            "Formuler un mandat de décision explicite : qui tranche, qui est consulté, à partir de quel seuil",
            "Utiliser l'IA en séance pour interroger la connaissance de l'organisation et faire objecter à une proposition",
            "Arbitrer un sujet réel et produire les engagements nommés et datés qui en découlent",
            "Définir les limites d'usage de l'IA au sein du comité, y compris en matière de confidentialité",
          ],
          modalites: [
            "Un entretien préalable avec le dirigeant, et un entretien court avec chaque membre du comité : c'est là que remonte ce qui ne se dit pas en séance.",
            "Le choix du sujet réel se fait avec vous en amont — c'est la décision la plus déterminante de la journée.",
            "Une journée en présentiel, fortement recommandé pour ce format.",
            "Un point d'étape à distance quelques semaines après, pour vérifier ce qui a réellement été mis en œuvre.",
            "Le comité entier, de 4 à 12 personnes.",
          ],
          livrables: [
            "Un arbitrage réel, rendu dans la journée, avec ses engagements nommés et datés",
            "Le format de dossier de décision du comité, et la règle d'ordre du jour qui va avec",
            'La matrice de mandat de décision du comité',
            "La charte d'usage de l'IA du comité, écrite par lui",
          ],
          pasPourVous:
            "Si le comité n'est pas prêt à mettre un vrai sujet sur la table, ou si la personne qui détient le mandat ne peut pas être présente, il vaut mieux décaler. Une journée de démonstration sur un cas fictif ne produirait rien de durable.",
        },
      },
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
