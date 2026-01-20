import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(() => {
  const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1]
  const base =
    process.env.VITE_BASE ?? (repoName ? `/${repoName}/` : '/')

  return {
    plugins: [react()],
    base,
    server: {
      proxy: {
        '/api': 'http://localhost:5000',
      },
    },
  }
})
