import { defineConfig } from "vitest/config";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  plugins: [svelte()],
  test: {
    // include: ["tests/*.test.ts"],
    globals: true,
    environment: "jsdom",
  },
});
