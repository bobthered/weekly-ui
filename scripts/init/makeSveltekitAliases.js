import fs from 'fs/promises';
import path from 'path';

export const makeSveltekitAliases = async (directory) => {
  await fs.mkdir(path.resolve(process.cwd(), directory, 'src/actions'));
  await fs.mkdir(path.resolve(process.cwd(), directory, 'src/components'));
  await fs.mkdir(path.resolve(process.cwd(), directory, 'src/icons'));
  await fs.mkdir(path.resolve(process.cwd(), directory, 'src/stores'));
  await fs.writeFile(
    path.join(process.cwd(), directory, 'src/actions/index.js'),
    `export * from 'sveltewind/actions'`,
    { flag: 'wx' }
  );
  await fs.writeFile(
    path.join(process.cwd(), directory, 'src/components/index.js'),
    `export * from 'sveltewind/components'`,
    { flag: 'wx' }
  );
  await fs.writeFile(
    path.join(process.cwd(), directory, 'src/icons/index.js'),
    `export * from 'sveltewind/components/icons'`,
    { flag: 'wx' }
  );
  await fs.writeFile(
    path.join(process.cwd(), directory, 'src/stores/index.js'),
    `export * from 'sveltewind/stores'`,
    { flag: 'wx' }
  );
};
