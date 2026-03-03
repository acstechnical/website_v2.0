import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: '/website-version_3.0/'
// })

export default defineConfig(({ mode }) => {
  // Load biến môi trường
  const env = loadEnv(mode, process.cwd(), '');
  
  // Nếu đang deploy trên GitHub (CI/CD), lấy tên repo. 
  // Nếu chạy local, để là '/' (root).
  const repoName = process.env.GITHUB_REPOSITORY 
    ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/` 
    : '/';

  return {
    plugins: [react()],
    base: repoName, // Tự động lấy tên repo mới
    define: {
      'process.env.PUBLIC_URL': JSON.stringify(repoName), // Truyền sang React
    }
  }
})