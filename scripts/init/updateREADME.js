import fs from 'fs/promises';
import path from 'path';
import { format } from 'prettier';

export const updateREADME = async (challengeNumber, directory, title, url) => {
  let contents = await fs.readFile(
    path.join(process.cwd(), 'README.md'),
    'utf-8'
  );
  contents =
    contents +
    '|' +
    [
      challengeNumber,
      new Date().toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      }),
      title.replace(/\|/g, '\\|'),
      `[dribbble](${url}) \\| [live preview](./${directory}) \\| [code](./${directory})`,
    ].join('|') +
    '|';
  contents = await format(contents, { parser: 'markdown' });
  await fs.writeFile(path.join(process.cwd(), 'README.md'), contents, 'utf-8');
};
