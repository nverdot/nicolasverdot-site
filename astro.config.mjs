import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nicolasverdot.com',
  // TODO: repasser à '/' quand le site passera du sous-dossier de test /TESTSITENV/
  // à la racine du domaine (et mettre à jour le secret FTP_SERVER_DIR en conséquence).
  base: '/TESTSITENV/',
  integrations: [sitemap()],
  redirects: {
    '/offre': '/',
    '/secteurs/nice': '/',
    '/secteurs/cannes': '/',
    '/secteurs/antibes': '/',
    '/secteurs/monaco': '/',
  },
});
