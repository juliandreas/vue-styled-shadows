import vue from 'rollup-plugin-vue';
import css from 'rollup-plugin-css-only'; // Export CSS as a separate file for SSR support
import commonjs from '@rollup/plugin-commonjs'; // Convert CommonJS modules to ES6
import buble from '@rollup/plugin-buble'; // Transpile/polyfill with reasonable browser support
import filesize from 'rollup-plugin-filesize';

export default [
  {
    input: 'src/wrapper.js',
    output: {
      format: 'esm',
      file: 'dist/vue-styled-shadows.esm.js'
    },
    plugins: [
      vue({
        css: true, // Dynamically inject css as a <style> tag
        compileTemplate: true // Explicitly convert template to render function
      }),
      commonjs(),
      buble(),
      filesize()
    ]
  },
  {
    input: 'src/wrapper.js',
    output: {
      format: 'esm',
      file: 'dist/vue-styled-shadows.ssr.js'
    },
    plugins: [
      vue({
        css: false // Disable css injecting as a <style> tag
      }),
      css(),
      commonjs(),
      buble(),
      filesize()
    ]
  }
];
