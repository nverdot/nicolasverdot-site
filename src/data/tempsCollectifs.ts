// Les types de temps collectif et les profils de participants proposés dans
// la calculatrice de /seminaires-entreprise/ (composant CoutSeminaire).
//
// Pour ajouter un atelier : une ligne de plus dans `tempsCollectifs`.
// Pour ajouter un profil : une ligne de plus dans `profils`, puis son nombre
// dans chaque atelier.
// Tous les nombres sont des valeurs de départ que le visiteur modifie — des
// exemples pour amorcer le calcul, pas des prix ni des promesses.

export interface Profil {
  id: string;
  label: string;
  /** Forme au singulier, pour la phrase « Imaginons… ». */
  singulier: string;
  /** Coût d'une journée, salaire chargé (exemple de départ, modifiable). */
  cout: number;
}

// Une journée de directeur ne coûte pas ce que coûte une journée de
// collaborateur : le calcul se fait donc profil par profil.
export const profils: Profil[] = [
  { id: 'direction', label: 'Dirigeants et directeurs', singulier: 'dirigeant ou directeur', cout: 1200 },
  { id: 'managers', label: 'Managers', singulier: 'manager', cout: 700 },
  { id: 'equipes', label: 'Collaborateurs', singulier: 'collaborateur', cout: 400 },
];

export interface TempsCollectif {
  id: string;
  label: string;
  /** Début de la phrase « Imaginons… », avec son article. */
  phrase: string;
  /** Ce qui s'y passe, en quelques mots, affiché sous la liste. */
  description: string;
  /** Nombre de participants par profil (clé = id du profil). */
  participants: Record<string, number>;
  /** Durée en jours (0.5 = une demi-journée). */
  jours: number;
  /** Jours de préparation en interne, toutes personnes confondues. */
  prepa: number;
  /** Nombre de fois par an : 1 = une seule fois, 11 = chaque mois, 46 = chaque semaine. */
  parAn: number;
  /** Lieu et repas, en euros par personne et par jour (0 si cela se tient sur place). */
  lieu: number;
}

// Les fréquences proposées. 46 semaines et 11 mois : une année de travail,
// congés déduits. C'est une hypothèse affichée au visiteur.
export const frequences = [
  { parAn: 46, label: 'Chaque semaine', phrase: 'chaque semaine' },
  { parAn: 11, label: 'Chaque mois', phrase: 'chaque mois' },
  { parAn: 4, label: 'Chaque trimestre', phrase: 'une fois par trimestre' },
  { parAn: 1, label: 'Une fois par an', phrase: 'une fois par an' },
];

// Les durées proposées, en jours (une journée = 7 heures de travail).
export const durees = [
  { jours: 0.25, label: '1 h 30 à 2 h', phrase: 'deux heures' },
  { jours: 0.5, label: 'Une demi-journée', phrase: 'une demi-journée' },
  { jours: 1, label: '1 jour', phrase: 'une journée' },
  { jours: 1.5, label: '1,5 jour', phrase: 'un jour et demi' },
  { jours: 2, label: '2 jours', phrase: 'deux jours' },
  { jours: 3, label: '3 jours', phrase: 'trois jours' },
];

// Six temps collectifs, nommés de la même façon : ce que c'est, puis son
// rythme. Du plus fréquent au plus rare, du plus petit cercle au plus large.
// `parDefaut` sert au rendu initial ; au chargement, la page en tire un au
// hasard pour ne pas toujours montrer le même exemple.
export const tempsCollectifs: TempsCollectif[] = [
  {
    id: 'reunion',
    label: "Point d'équipe · chaque semaine",
    phrase: "Un point d'équipe",
    description: "Le point d'équipe ou de projet, sans directeur : 1 h 30 à 2 h, chaque semaine.",
    participants: { direction: 0, managers: 1, equipes: 7 },
    jours: 0.25, prepa: 0, parAn: 46, lieu: 0,
  },
  {
    id: 'copil',
    label: "Comité de pilotage · chaque semaine",
    phrase: "Un comité de pilotage",
    description: "On présente l'avancement, on tranche, on ajuste : 1 h 30 à 2 h, chaque semaine.",
    participants: { direction: 2, managers: 4, equipes: 2 },
    jours: 0.25, prepa: 0.5, parAn: 46, lieu: 0,
  },
  {
    id: 'codir',
    label: "CODIR · chaque semaine",
    phrase: "Un CODIR hebdomadaire",
    description: 'Tous les directeurs de la branche et quelques invités : une demi-journée, chaque semaine.',
    participants: { direction: 6, managers: 2, equipes: 0 },
    jours: 0.5, prepa: 0.5, parAn: 46, lieu: 0,
  },
  {
    id: 'codir-mensuel',
    label: "CODIR élargi · chaque mois",
    phrase: "Un CODIR élargi",
    description: 'Le comité de direction élargi : une journée, une fois par mois.',
    participants: { direction: 8, managers: 6, equipes: 0 },
    jours: 1, prepa: 1, parAn: 11, lieu: 0,
  },
  {
    id: 'trimestre',
    label: "Séminaire · chaque trimestre",
    phrase: "Un séminaire trimestriel",
    description: 'Un jour ou un jour et demi, une fois par trimestre.',
    participants: { direction: 2, managers: 6, equipes: 12 },
    jours: 1, prepa: 3, parAn: 4, lieu: 120,
  },
  {
    id: 'annuel',
    label: "Séminaire · chaque année",
    phrase: "Un séminaire annuel",
    description: 'Le temps fort de l’année : deux jours, une fois par an.',
    participants: { direction: 4, managers: 8, equipes: 18 },
    jours: 2, prepa: 6, parAn: 1, lieu: 120,
  },
];

export const parDefaut = 'codir';
