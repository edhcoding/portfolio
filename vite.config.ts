import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()], // tsconfigPaths - vite path alias 설정 X (tsconfig.json 설정 자동 인식 플러그인)
});
