import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(( { command }) => {
  const config = {
    // base: './',
    base: './',
    plugins: [react()],
    resolve: {
      // alias: {
      //   '@': fileURLToPath(new URL('./src', import.meta.url))
      // },
      alias: [
        {
          find: '@',
          replacement: fileURLToPath(new URL('./src', import.meta.url))
          // path.resolve(__dirname, "src") 
        },
        {
          find: '@static',
          replacement: fileURLToPath(new URL('./static', import.meta.url))
          // path.resolve(__dirname, "static") 
        }
      ]
    },
    build: {
      // cssCodeSplit: false,
      sourcemap: true,
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            // console.log(assetInfo.name)
            let extType = assetInfo.name.split('.').at(1);
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
              extType = 'img';
            } else if (/woff|woff2/.test(extType)) {
              extType = "font";
            }
            return `assets/${extType}/[name]-[hash][extname]`;
          },
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
        },
      },
    }
  }

  if (command !== 'serve') {
    config.base = '/iam'
  }
  console.log('--->>', command)

  return config
})
