// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://aureliusagent.com',
  integrations: [sitemap({ filter: (page) => !page.includes("/go/") })],
  build: {
    format: 'directory',
  },
});
