import { mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

const dirs = [
  join(rootDir, '.tshy-build/esm'),
  join(rootDir, '.tshy-build/commonjs')
];

for (const dir of dirs) {
  try {
    mkdirSync(dir, { recursive: true });
  } catch (err) {
    if (err.code !== 'EEXIST') {
      console.error(`Failed to create ${dir}:`, err);
      process.exit(1);
    }
  }
}

