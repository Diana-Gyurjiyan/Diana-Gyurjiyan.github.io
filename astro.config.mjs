import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Custom domain on GitHub Pages: no `base` needed (user site at the root).
  site: 'https://diana-gyurjiyan.nl',
  trailingSlash: 'always',
  build: { format: 'directory' },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'nl'],
    routing: {
      prefixDefaultLocale: true,
      // The root page (src/pages/index.astro) picks the language from the browser.
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      // The root page only redirects to /en/ or /nl/.
      filter: (page) => page !== 'https://diana-gyurjiyan.nl/',
      i18n: { defaultLocale: 'en', locales: { en: 'en', nl: 'nl' } },
    }),
  ],
});
