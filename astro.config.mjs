import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import { SITE_METADATA } from "./src/consts.ts";
import metaTags from "astro-meta-tags";
import vercel from "@astrojs/vercel/serverless";
// import react from "@astrojs/react";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  site: SITE_METADATA.siteUrl,
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),

    metaTags(),
    robotsTxt(),

    solidJs({
      // include: ["**/solidjs/*"],
    }),
  ],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});