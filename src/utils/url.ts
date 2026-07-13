// Préfixe les chemins internes avec la base Astro (utile quand le site est
// déployé dans un sous-dossier, ex. /TESTSITENV/, plutôt qu'à la racine).
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  return `${cleanBase}${path}`;
}
