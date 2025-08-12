import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      Components: resolve(__dirname, "src/Components"),
      Pages: resolve(__dirname, "src/Pages"),
      Configs: resolve(__dirname, "src/Configs"),
      Helpers: resolve(__dirname, "src/Helpers"),
      Redux: resolve(__dirname, "src/Redux"),
      Assets: resolve(__dirname, "src/Assets"),
      Routes: resolve(__dirname, "src/Routes"),
      Layouts: resolve(__dirname, "src/Layouts"),
    },
  },
});
