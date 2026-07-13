import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nicolasverdot.com',
  integrations: [sitemap()],
});
