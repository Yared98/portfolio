// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://yared.com.br',
  vite: {
    plugins: [tailwindcss()]
  },
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true
    }
  },
  integrations: [
    mdx(),
    sitemap({
      // A raiz "/" apenas redireciona para /pt/ — não deve constar no sitemap
      filter: (page) => page !== 'https://yared.com.br/',
      i18n: {
        defaultLocale: 'pt',
        locales: { pt: 'pt-BR', en: 'en' },
      },
    }),
  ]
});