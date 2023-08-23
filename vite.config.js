import { defineConfig } from "vite";

export default defineConfig({
  root: "./src",
  server: { port: 5001 },
  build: {
    lib: {
      entry: "/index.js", // Entry point of your library
      name: "SimpFetch", // The name of your library
    },
    rollupOptions: {
      external: [],
      output: {
        format: "umd",
        globals: {},
      },
    },
  },
});
