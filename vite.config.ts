import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
// import fs from 'fs';
import path from 'path'

// let httpsConfig = {
//   key: fs.readFileSync("C:/Users/ca/wps.cn/_wildcard.wps.cn+3-key.pem"),
//   cert: fs.readFileSync("C:/Users/ca/wps.cn/_wildcard.wps.cn+3.pem")
// };

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslintPlugin()],
  server: {
    // open: true,
    // https: httpsConfig,
    // host: 'vipdev.wps.cn',
    port: 3000
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        charset: false,
        // 引入 var.scss 这样就可以在全局中使用 var.scss中预定义的变量了
        additionalData: '@import "@/assets/scss/var.scss";'
      }
    }
  }
})
