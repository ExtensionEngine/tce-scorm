import copy from 'rollup-plugin-copy';
import postcss from 'rollup-plugin-postcss';
import { resolve } from 'path';
import tailorCe from '@extensionengine/rollup-plugin-tailor-ce';
import visualizer from 'rollup-plugin-visualizer';
import vue from '@vitejs/plugin-vue';

export default {
  plugins: [
    vue(),
    visualizer({ open: false }),
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
