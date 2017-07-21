import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript';

export default {
  entry: 'src/largetable/main.ts',
  dest: 'dist/largetable/app.min.js',
  sourceMap: true,
  format: 'iife',
  plugins: [
    typescript({
      typescript: require('typescript'),
      "experimentalDecorators": true,
      "emitDecoratorMetadata": true
    }),
    nodeResolve({jsnext: true, module: true}),
    commonjs({
      include: 'node_modules/rxjs/**',
    })
  ]
}