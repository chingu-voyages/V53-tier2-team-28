import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      cache: false, // Disable cache if necessary
      include: ["src/**/*.js", "src/**/*.jsx", "src/**/*.ts", "src/**/*.tsx"], // Include specific files
    }),
  ],
  assetsInclude: ["**/*.png", "**/*.svg", "**/*.jpg"], // Make sure this includes image types you are using
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
