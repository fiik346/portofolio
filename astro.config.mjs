import { defineConfig } from 'astro/config';
import nodejs from "@astrojs/nodejs";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: nodejs(),
  integrations: [tailwind()]
});
