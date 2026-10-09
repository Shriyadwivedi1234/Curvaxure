import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// Replace with the real domain once purchased.
export default defineConfig({
  site: 'https://curvaxure.com',
  adapter: vercel(), // pages stay static; only /api/lead runs on the server
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
