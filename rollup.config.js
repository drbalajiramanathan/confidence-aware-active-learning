import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';

export default {
  input: 'src/main.js', // Path to the entry JS file
  output: {
    sourcemap: true,
    format: 'iife', // Use IIFE format for frontend applications
    name: 'app',
    file: 'public/build/bundle.js',
  },
  plugins: [
    svelte({
      preprocess: sveltePreprocess(),
      compilerOptions: {
        dev: false,
      },
    }),
    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),
    commonjs(),
    terser(),
  ],
};
