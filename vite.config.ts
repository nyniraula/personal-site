import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  plugins: [react(), viteCompression()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (id.includes("node_modules/three")) {
            return "three-core";
          }
          if (id.includes("@react-three/fiber") || id.includes("@react-three/drei")) {
            return "r3f-vendor";
          }
          if (id.includes("postprocessing") || id.includes("@react-three/postprocessing")) {
            return "postprocessing-vendor";
          }
          if (id.includes("framer-motion") || id.includes("motion")) {
            return "motion-vendor";
          }
          if (id.includes("lenis")) {
            return "lenis-vendor";
          }
          return "vendor";
        },
      },
    },
  },
});
