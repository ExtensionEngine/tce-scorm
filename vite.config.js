import copy from 'rollup-plugin-copy';
import postcss from 'rollup-plugin-postcss';
import { resolve } from 'path';
import tailorCe from '@extensionengine/rollup-plugin-tailor-ce';
import vue from '@vitejs/plugin-vue2';

export default {
  plugins: [
    vue(),
    copy({
      targets: [{ src: 'src/server', dest: 'dist' }],
      hook: 'writeBundle'
    }),
    postcss({
      extract: 'tce-scorm.css'
    }),
    tailorCe()
  ],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }]
  },
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'TceScorm',
      formats: ['es', 'umd', 'cjs']
    }
  }
};
