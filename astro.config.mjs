import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://arantxacheca.github.io',

  output: 'static',

  server: {
    port: 3000,
  },
});