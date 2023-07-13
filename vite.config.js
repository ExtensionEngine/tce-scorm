import copy from 'rollup-plugin-copy';
import { resolve } from 'node:path';
import tailorCe from '@extensionengine/rollup-plugin-tailor-ce';
import vue from '@vitejs/plugin-vue2';

/**
 * @type {import('vite').UserConfig}
 */
export default {
  build: {
    cssMinify: false,
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'TceScorm',
      formats: ['es', 'umd', 'cjs']
    },
    rollupOptions: {
      output: {
        assetFileNames: 'tce-scorm.[ext]'
      }
    }
  },
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }]
  },
  plugins: [
    vue(),
    copy({
      targets: [{ src: 'src/server', dest: 'dist' }],
      hook: 'writeBundle'
    }),
    tailorCe()
  ]
};
