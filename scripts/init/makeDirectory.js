import { promises as fs } from 'fs';

export const makeDirectory = async (title) => {
  const files = await fs.readdir('./challenges');
  const challengeNumber = (files.length + 1).toString().padStart(4, '0');
  const directory = `challenges/${challengeNumber}`;

  return { challengeNumber, directory };
};
