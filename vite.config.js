import { defineConfig } from "vite";

export default defineConfig({
  test: {
    environment: "jsdom",
  },
  server: {
    port: "8000",
  },
  preview: {
    port: "8001",
  },
});
