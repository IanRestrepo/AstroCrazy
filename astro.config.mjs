import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import addClasses from "rehype-add-classes";

// https://astro.build/config
export default defineConfig({
  markdown: {
    rehypePlugins: [
      [
        addClasses,
        {
          h1: "text-4xl font-bold font-mplus mb-2",
          h2: "text-2xl font-bold font-mplus mb-2",
          h3: "text-xl font-bold font-mplus mb-1",
          h4: "text-lg font-bold font-mplus",
          h5: "font-bold",
          h6: "font-bold"
        },
      ],
    ],
  },

  integrations: [tailwind(), mdx()],
});