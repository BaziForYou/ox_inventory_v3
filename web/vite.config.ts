import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [svelte()],
    resolve: {
      alias: {
        $lib: path.resolve('./src/lib'),
        '~': path.resolve('../'),
        '@common': path.resolve('../src/common'),
      },
    },
    ...(mode === 'development' && { publicDir: '../' }),
  };
});
