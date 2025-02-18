//vite.config.ts

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [react(), tailwindcss(),],
  test: {
    include: ["tests/**/*.test.tsx"],
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.ts",
    css: true,
  },
});
