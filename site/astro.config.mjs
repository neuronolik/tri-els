import { defineConfig } from 'astro/config';

// The site is static, served from the root of slab-elements.dev. `site` makes
// llms.txt's links, the canonical links and the sitemap absolute. Every
// internal link goes through `import.meta.env.BASE_URL`, so a `base` is the
// only change a subpath would need.
export default defineConfig({
  site: 'https://slab-elements.dev',

  // Off, because it drops the space at a line break beside an inline element,
  // "wraps\n<code>" becoming "wraps<code>", wherever prose wraps in a template.
  compressHTML: false,

  vite: {
    server: {
      // The live examples import Slab's styled components from the repository's
      // `src`, outside this package.
      fs: {
        allow: ['..'],
      },
    },
  },
});
