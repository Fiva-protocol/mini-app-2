import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';


const HOST = "0.0.0.0"
const REPLACEMENT = `${path.resolve(__dirname, './src')}/`
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  
    
  ],
  base: "./",
  server: {
    host: process.env.HOST,
    port: process.env.PORT,
  },
  //   server: {
  //     port: process.env.PORT || 4000
  //   },
  resolve: {
    alias: [
      {
        find: "@/",
        replacement: REPLACEMENT,
      },
      {
        find: "src/",
        replacement: REPLACEMENT,
      },
      {
        find: /* ~/ */ /^~(?=\/)/,
        replacement: path.join(__dirname, "node_modules"),
      },
      {
        find: /* ~ */ /^~(?!\/)/,
        replacement: path.join(__dirname, "node_modules/"),
      },
    ],
    extensions: [".vue", ".js", ".jsx", ".ts", ".tsx", ".json"],
  },
});
