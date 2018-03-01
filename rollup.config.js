import * as fs from 'fs';
import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';

const production = !!process.env.production;

let file = 'bundle.js'
production ? file = 'bundle.min.js' : file = 'bundle.js'

export default {
  input: 'source/js/main.js',
  output: {
    name: 'app',
    format: 'iife',
    file: file
  },
  plugins: [
    svelte(),
    resolve(),
    commonjs(),
    production && buble({ exclude: 'node_modules/**' }),
    production && uglify()
  ]
};