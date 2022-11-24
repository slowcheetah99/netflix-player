import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      mode: "development",
      includeAssets: ["favicon.svg", "favicon.ico", "/src/assets/*"],
      manifest: {
        name: "App name",
        short_name: "App short name",
        description: "App description",
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,webmanifest}"],
      },
    }),
  ],
});
