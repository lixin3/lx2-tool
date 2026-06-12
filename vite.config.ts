import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      // 你的源代码入口文件
      entry: resolve(__dirname, 'src/index.ts'),
      // 库的全局变量名（用于 UMD 格式）
      name: 'MyUtils',
      // 输出的文件名
      fileName: (format) => `my-utils.${format}.js`,
      // 输出的模块格式，通常同时输出 ESM 和 UMD
      formats: ['es', 'umd']
    },
    // 启用代码压缩，可选 'esbuild'（默认）或 'terser'
    minify: 'terser',
    // 如果不需要 source map，可以设置为 false 来减小体积
    sourcemap: false,
    rollupOptions: {
      // 如果你不希望某些依赖被打包进库，可以在这里将其标记为外部依赖
      // external: ['lodash'],
      output: {
        // 为 UMD 格式提供全局变量映射
        // globals: {
        //   'lodash': '_'
        // }
      }
    }
  }
});