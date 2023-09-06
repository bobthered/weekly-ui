import fs from 'fs/promises';
import path from 'path';
import { format } from 'prettier';

export const updateViteConfig = async (
  directory = 'challenges/0001-awayday-travel-app-daily-ui-challenge-001-sign-up-flow'
) => {
  let contents = `import { sveltekit } from '@sveltejs/kit/vite';
  import { resolve } from 'path';
  
  const config = {
    plugins: [sveltekit()],
    resolve: {
      alias: {
        $actions: resolve('./src/actions'),
        $components: resolve('./src/components'),
        $icons: resolve('./src/icons'),
        $lib: resolve('./src/lib'),
        $routes: resolve('./src/routes'),
        $src: resolve('./src'),
        $stores: resolve('./src/stores')
      }
    }
  };
  
  export default config;
  `;

  contents = await format(contents, { parser: 'typescript' });
  await fs.writeFile(
    path.join(process.cwd(), directory, 'vite.config.js'),
    contents,
    'utf-8'
  );
};
