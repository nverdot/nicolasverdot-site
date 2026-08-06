import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: passer BASE à '/' quand le site quittera le sous-dossier de test
// /TESTSITENV/ pour la racine du domaine (mettre à jour le secret
// FTP_SERVER_DIR et public/.htaccess en conséquence). Tout le reste
// (liens markdown compris) suit automatiquement cette constante.
const BASE = '/TESTSITENV/';

// Les liens racine écrits dans les articles markdown (ex: [contact](/contact/))
// ne connaissent pas la base Astro : ce plugin rehype les préfixe au build,
// pour qu'ils restent justes en test comme après la bascule à la racine.
function rehypeBaseLinks() {
  const prefix = BASE.replace(/\/$/, '');
  const walk = (node) => {
    if (
      prefix &&
      node.type === 'element' &&
      node.tagName === 'a' &&
      typeof node.properties?.href === 'string' &&
      node.properties.href.startsWith('/') &&
      !node.properties.href.startsWith(`${prefix}/`)
    ) {
      node.properties.href = prefix + node.properties.href;
    }
    (node.children || []).forEach(walk);
  };
  return (tree) => walk(tree);
}

export default defineConfig({
  site: 'https://nicolasverdot.com',
  base: BASE,
  integrations: [sitemap()],
  markdown: {
    rehypePlugins: [rehypeBaseLinks],
  },
  redirects: {
    '/offre': '/',
    '/secteurs/nice': '/seminaires-alpes-maritimes/',
    '/secteurs/cannes': '/seminaires-alpes-maritimes/',
    '/secteurs/antibes': '/seminaires-alpes-maritimes/',
    '/secteurs/monaco': '/seminaires-alpes-maritimes/',
    // Refonte de l'offre (2026-08) : 7 offres → 6 prestations. Décider
    // ensemble/Aligner l'équipe deviennent des thématiques traitées via
    // Déléguer l'animation ; Séminaires et ateliers est scindé en deux
    // pages ; Dynamique durable devient Coaching d'équipe.
    '/offres/decider-ensemble': '/offres/deleguer-animation/',
    '/offres/aligner-equipe': '/offres/deleguer-animation/',
    '/offres/seminaires-ateliers': '/offres/deleguer-animation/',
    '/offres/dynamique-durable': '/offres/coaching-equipe/',
  },
});
