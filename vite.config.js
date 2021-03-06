import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import styleImport from 'vite-plugin-style-import';
const { resolve } = require('path');

/**
 * @type {import('vite').UserConfig}
 */
export default {
  base: './',
  server: {
    port: 3001
  },

  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            name = name.slice(3);
            return `element-plus/packages/theme-chalk/src/${name}.scss`;
          },
          resolveComponent: (name) => {
            return `element-plus/lib/${name}`;
          }
        }
      ]
    })
  ],
  alias: [{ find: '@', replacement: resolve(__dirname, 'src') }]
};
