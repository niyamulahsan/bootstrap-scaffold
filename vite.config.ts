import { defineConfig } from "vite-plus";

export default defineConfig({
  root: "src",
  fmt: {},
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: { "vite-plus/prefer-vite-plus-imports": "error" },
    options: { typeAware: true, typeCheck: true },
  },
  server: {
    // Entry point, same as the old browser-sync --startPath.
    open: "/pages/index.html",
  },
  css: {
    preprocessorOptions: {
      scss: {
        // The design SCSS pulls in Bootstrap 5 with legacy `@import` and some
        // older Sass syntax. Silence that warning noise so the console stays
        // readable while designing — the styles compile exactly the same.
        silenceDeprecations: [
          "import",
          "if-function",
          "global-builtin",
          "color-functions",
          "slash-div",
        ],
      },
    },
  },
  build: {
    rollupOptions: {
      input: {
        index: "src/pages/index.html",
        about: "src/pages/about.html",
        // add every HTML file you need built
      },
    },
  },
});
