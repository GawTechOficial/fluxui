import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

import { tokens } from '../src/tokens';

const outDir = join(process.cwd(), 'dist');

mkdirSync(outDir, { recursive: true });

// 1) CSS vars
const css = `:root{--fl-primary:${tokens.primary};--fl-on-primary:${tokens.onPrimary};--fl-success:${tokens.success};--fl-warning:${tokens.warning};--fl-danger:${tokens.danger};--fl-muted:${tokens.muted};}`;

writeFileSync(join(outDir, 'tokens.css'), css);

// 2) JS + CJS
const js = `export const tokens=${JSON.stringify(tokens)};`;

writeFileSync(join(outDir, 'index.js'), js);
writeFileSync(join(outDir, 'index.cjs'), js.replace('export const', 'exports.tokens ='));

// 3) d.ts mínimo
writeFileSync(join(outDir, 'index.d.ts'), 'export declare const tokens: Record<string,string>;');
