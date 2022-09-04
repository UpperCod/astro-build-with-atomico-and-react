import { defineConfig } from "astro/config";
import Atomico from "@atomico/astro";
import react from "@astrojs/react";
// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    Atomico({ cssLiterals: { minify: true, postcss: true } }),
  ],
});
