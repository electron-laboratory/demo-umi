import { defineConfig } from 'umi';

export default defineConfig({
  outputPath: './.el/renderer',
  history: { type: 'hash' },
  publicPath: './',
  mfsu: {},
});
