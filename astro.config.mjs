// @ts-check
import { defineConfig } from "astro/config";
import rehypeExternalLinks from "rehype-external-links";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://somaprabha.com",
  trailingSlash: "never",

  experimental: {
      svgo: true,
  },

  markdown: {
      shikiConfig: {
          theme: "gruvbox-light-hard",
      },
      rehypePlugins: [
          rehypeSlug,
          rehypeKatex,

          [
              rehypeAutolinkHeadings,
              {
                  behavior: "wrap",
              },
          ],

          [
              rehypeExternalLinks,
              {
                  target: "_blank",
                  rel: ["noopener", "noreferrer"],
                  content: {
                      type: "text",
                      value: "",
                  },
                  properties: {
                      className: ["external-link"],
                  },
              },
          ],
      ],
      remarkPlugins: [remarkMath],
  },

  integrations: [mdx()],
});