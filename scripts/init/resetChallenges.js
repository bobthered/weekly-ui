import { exec } from './exec.js';

const resetChallenges = async () =>
  await exec('rimraf challenges && mkdir challenges');

export { resetChallenges };
