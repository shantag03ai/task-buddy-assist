import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true, // needed for Replit & other cloud dev environments
    allowedHosts: [
      '.replit.dev' // allow all Replit subdomains
    ],
    port: 3000 // you can change if needed
  }
})
