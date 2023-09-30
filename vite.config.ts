import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//from package installed "node" : beautiful short import paths (no ../../) but @
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //from package installed "node" : beautiful short import paths
  resolve :{
    alias: [{find: "@", replacement: path.resolve(__dirname, "src") }],
  },
})
