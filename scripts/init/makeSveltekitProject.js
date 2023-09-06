import axios from 'axios';
import { promises as fs } from 'fs';
import { image } from 'image-downloader';
import path from 'path';

export const makeSveltekitProject = async (directory, exec, imgSrc) => {
  await exec(
    [
      `npm init @svelte-add/kit@latest ${directory} -- --demos false --with eslint+prettier`,
      `cd ${directory}`,
      'npx svelte-add@latest tailwindcss',
      'npm i -D @bobthered/tailwindcss-palette-generator tailwind-merge sveltewind',
      'npm i',
    ].join(' && ')
  );

  image({
    dest: path.resolve(process.cwd(), directory, 'dribbble.jpg'),
    url: imgSrc,
  });
};
