import fs from 'fs-extra';
import {directories} from '../config.js';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';

async function main() {
  const toolsDir = dirname(fileURLToPath(import.meta.url));
  const libDir = join(toolsDir, '../lib');

  for (const type in directories) {
    const dir = join(libDir, directories[type]);
    await fs.remove(dir);
  }
}

main().catch(err => process.stderr.write(err.stack, () => process.exit(1)));
