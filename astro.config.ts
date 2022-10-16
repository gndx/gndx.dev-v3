import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

export default defineConfig({
	markdown: {
		shikiConfig: {
			theme: "dracula",
			wrap: true,
		},
	},
	site: "https://gndx.dev",
	base: "/gndx.dev",
	integrations: [
		mdx({}),
		react(),
		tailwind({
			config: { applyBaseStyles: false },
		}),
		image(),
		sitemap(),
	],
});
