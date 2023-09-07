import fs from 'fs/promises';
import path from 'path';

export const updatePackage = async (directory = 'challenges/0001') => {
  let contents = await fs.readFile(
    path.join(process.cwd(), directory, '.prettierrc'),
    'utf-8'
  );
  contents = contents.replace(
    /\["prettier-plugin-svelte"\]/g,
    `["prettier-plugin-svelte", "prettier-plugin-tailwindcss"]`
  );

  await fs.writeFile(
    path.join(process.cwd(), directory, '.prettierrc'),
    contents,
    'utf-8'
  );
};
