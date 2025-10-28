import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';

export default {
  input: 'src/main.js',  // Entry file for your Svelte app
  output: {
    file: 'public/build/bundle.js',
    format: 'iife',  // Suitable for frontend apps
    name: 'app',
    sourcemap: true,
  },
  plugins: [
    svelte({
      // You can specify other options here if needed
    }),
    resolve(),
    commonjs(),
    css({ output: 'public/build/styles.css' }),  // Process CSS and output it to a separate file
    terser(),  // Minify the code
  ],
};
