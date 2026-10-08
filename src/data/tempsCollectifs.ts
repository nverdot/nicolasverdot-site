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
  { id: 'managers', label: 'Managers et cadres', singulier: 'manager ou cadre', cout: 700 },
  { id: 'equipes', label: 'Collaborateurs', singulier: 'collaborateur', cout: 400 },
];

export interface TempsCollectif {
  id: string;
  label: string;
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

// Quatre temps collectifs, nommés par leur durée et leur rythme : c'est ainsi
// qu'un dirigeant les reconnaît dans son agenda. `parDefaut` désigne celui
// qui s'affiche à l'ouverture de la page.
export const tempsCollectifs: TempsCollectif[] = [
  { id: 'reunion', label: 'Une réunion de 1 h 30 à 2 h, chaque semaine', participants: { direction: 1, managers: 3, equipes: 4 }, jours: 0.25, prepa: 0, parAn: 46, lieu: 0 },
  { id: 'demi-journee', label: 'Une demi-journée, chaque semaine', participants: { direction: 4, managers: 3, equipes: 0 }, jours: 0.5, prepa: 0.5, parAn: 46, lieu: 0 },
  { id: 'trimestre', label: '1 jour ou 1,5 jour, chaque trimestre', participants: { direction: 2, managers: 6, equipes: 12 }, jours: 1, prepa: 3, parAn: 4, lieu: 120 },
  { id: 'annuel', label: '2 jours, une fois par an', participants: { direction: 4, managers: 8, equipes: 18 }, jours: 2, prepa: 6, parAn: 1, lieu: 120 },
];

export const parDefaut = 'demi-journee';
