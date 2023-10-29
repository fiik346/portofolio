import { defineConfig } from 'astro/config';
import nodejs from "@astrojs/nodejs";
import tailwind from "@astrojs/tailwind";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: nodejs(),
  integrations: [tailwind(), preact()]
});
