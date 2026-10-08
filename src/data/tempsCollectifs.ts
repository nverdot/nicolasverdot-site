// Les types de temps collectif proposés dans la calculatrice de
// /seminaires-entreprise/ (composant CoutSeminaire).
//
// Pour ajouter un atelier : une ligne de plus dans cette liste, rien d'autre.
// Les nombres sont des valeurs de départ que le visiteur modifie — des
// exemples pour amorcer le calcul, pas des prix ni des promesses.
export interface TempsCollectif {
  id: string;
  label: string;
  participants: number;
  /** Durée en jours (0.5 = une demi-journée). */
  jours: number;
  /** Jours de préparation en interne, toutes personnes confondues. */
  prepa: number;
}

export const tempsCollectifs: TempsCollectif[] = [
  { id: 'kickoff', label: 'Kick-off de projet', participants: 30, jours: 1, prepa: 6 },
  { id: 'codir', label: 'Séminaire de direction', participants: 8, jours: 2, prepa: 4 },
  { id: 'equipe', label: "Séminaire d'équipe", participants: 15, jours: 1, prepa: 3 },
  { id: 'feuille-de-route', label: 'Atelier feuille de route', participants: 12, jours: 1, prepa: 3 },
  { id: 'agilite', label: "Mise en place de l'agilité", participants: 20, jours: 2, prepa: 5 },
  { id: 'convention', label: 'Convention', participants: 100, jours: 1, prepa: 15 },
];
