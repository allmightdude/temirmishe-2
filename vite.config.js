import { defineConfig } from "vite";
import path from "path";

console.log(__dirname);

export default defineConfig({
  root: "src",
  base: "src",
  publicDir: "src/public",
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
@import "/assets/styles/main.scss";
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
    },
  },
});
