import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import EnvironmentPlugin from "vite-plugin-environment";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@src": "/src",
      "@components": "/src/components",
      "@pages": "/src/pages",
      "@routes": "/src/routes",
      "@locales": "/src/locales",
      "@helper": "/src/helper",
      "@css": "/src/css",
    },
  },
});
