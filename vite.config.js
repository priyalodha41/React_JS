import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: "/React_JS/",   // 👈 IMPORTANT: add repo name here
  plugins: [react()],
})
