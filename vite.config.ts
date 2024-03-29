import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: { outDir: "build", },
  server: {
    port: 3000,
    host: '0.0.0.0' // Replace with your desired IP address
  },
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
