import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: { outDir: "build", },
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
      modules: "/src/modules",
      assets: "/src/assets",
      routes: "/src/routes",
      layouts: "/src/layouts",
      scss: "/src/scss",
    },
  },
})
