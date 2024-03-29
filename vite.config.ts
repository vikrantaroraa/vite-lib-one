import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";
import postcss from "rollup-plugin-postcss";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "index.ts"),
      name: "vite-lib-one",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
      plugins: [
        postcss({
          plugins: [],
          minimize: true,
        }),
      ],
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [react(), dts()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
});
