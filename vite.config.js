// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/One-piecedex/', // <- This line is the key
  plugins: [react()],
})
