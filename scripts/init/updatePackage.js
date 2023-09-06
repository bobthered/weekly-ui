import fs from 'fs/promises';
import path from 'path';

export const updatePackage = async (directory = 'challenges/0001') => {
  let contents = await fs.readFile(
    path.join(process.cwd(), directory, 'package.json'),
    'utf-8'
  );
  contents = contents.replace(
    /"dev": "vite dev"/g,
    `"dev": "vite dev --host --port 3000"`
  );

  await fs.writeFile(
    path.join(process.cwd(), directory, 'package.json'),
    contents,
    'utf-8'
  );
};
