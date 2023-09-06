import fs from 'fs/promises';
import path from 'path';
import { format } from 'prettier';

export const updateTailwindConfig = async (
  directory = 'challenges/0001-awayday-travel-app-daily-ui-challenge-001-sign-up-flow',
  primary = '#926EFF'
) => {
  let contents = await fs.readFile(
    path.join(process.cwd(), directory, 'tailwind.config.cjs'),
    'utf-8'
  );
  contents =
    `const { tailwindcssPaletteGenerator } = require('@bobthered/tailwindcss-palette-generator');` +
    contents
      .replace(
        /content:\s\[(.+?)\]\,/g,
        `content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/sveltewind/**/*.{html,js,svelte,ts}'],`
      )
      .replace(
        /extend:\s\{\}/g,
        `extend: {
        colors: tailwindcssPaletteGenerator({
            colors: ['${primary}'],
            names: ['primary']
        })
    }`
      );

  contents = await format(contents, { parser: 'typescript' });
  await fs.writeFile(
    path.join(process.cwd(), directory, 'tailwind.config.cjs'),
    contents,
    'utf-8'
  );
};
