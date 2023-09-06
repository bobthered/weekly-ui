import { exec as child_processExec } from 'child_process';
import { promisify } from 'util';

export const exec = promisify(child_processExec);
