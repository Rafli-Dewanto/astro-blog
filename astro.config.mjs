import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import daisyui from 'daisyui';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact()],
  plugins: [daisyui]
});