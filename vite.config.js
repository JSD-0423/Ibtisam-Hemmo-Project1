import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig(({ command }) => {
//   const config = {
//     plugins: [react()],
//     base: '/',
//   }

//   if (command !== 'serve') {
//     config.base = '/Ibtisam-Hemmo-Project1/'
//   }

//   return config
// })
export default defineConfig({
  base: "/",
  plugins: [react()],
})
