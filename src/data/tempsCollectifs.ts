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
  /** Coût d'une journée, salaire chargé (exemple de départ, modifiable). */
  cout: number;
}

// Une journée de directeur ne coûte pas ce que coûte une journée de
// collaborateur : le calcul se fait donc profil par profil.
export const profils: Profil[] = [
  { id: 'direction', label: 'Dirigeants et directeurs', cout: 1200 },
  { id: 'managers', label: 'Managers et cadres', cout: 700 },
  { id: 'equipes', label: 'Collaborateurs', cout: 400 },
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
}

export const tempsCollectifs: TempsCollectif[] = [
  { id: 'kickoff', label: 'Kick-off de projet', participants: { direction: 2, managers: 6, equipes: 22 }, jours: 1, prepa: 6 },
  { id: 'codir', label: 'Séminaire de direction', participants: { direction: 8, managers: 0, equipes: 0 }, jours: 2, prepa: 4 },
  { id: 'equipe', label: "Séminaire d'équipe", participants: { direction: 1, managers: 2, equipes: 12 }, jours: 1, prepa: 3 },
  { id: 'feuille-de-route', label: 'Atelier feuille de route', participants: { direction: 2, managers: 5, equipes: 5 }, jours: 1, prepa: 3 },
  { id: 'agilite', label: "Mise en place de l'agilité", participants: { direction: 2, managers: 6, equipes: 12 }, jours: 2, prepa: 5 },
  { id: 'convention', label: 'Convention', participants: { direction: 5, managers: 15, equipes: 80 }, jours: 1, prepa: 15 },
];
