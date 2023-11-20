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
        @import "@/assets/styles/abstracts/vars/_main.scss";
        @import "@/assets/styles/abstracts/mixins/_main.scss";
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
      "@public": path.resolve("src/assets/styles"),
    },
  },
});
