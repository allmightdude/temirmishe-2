import { defineConfig } from "vite";

import path from "path";

export default defineConfig({
  root: "src",
  base: "/src",
  publicDir: "src/public",

  server: {
    watch: {
      usePolling: true,
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "@/assets/styles/abstracts/_variables.scss";
        @import "@/assets/styles/abstracts/_mixins.scss";
        @import "@/assets/styles/abstracts/_functions.scss";
        `,
      },
    },
  },
  resolve: {
    alias: {
      "~": path.resolve("src"),
      "~~": path.resolve("src"),
      "@": path.resolve("src"),
      "@helper": path.resolve("src/assets/helpers"),
      "@style": path.resolve("src/assets/styles"),
    },
  },
});
