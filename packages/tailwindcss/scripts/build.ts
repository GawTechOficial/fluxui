import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
// import { utilities } from '../src/shared';

const outDir = join(process.cwd(), 'dist');

mkdirSync(outDir, { recursive: true });

// Em v4, utilizaremos @plugin (entrada CSS). Por ora, geramos um CSS simples placeholder.
writeFileSync(join(outDir, 'v4.css'), `@layer utilities{/* gerado em build */}`);

// Exports mínimos
writeFileSync(join(outDir, 'index.js'), 'export const fluxUtilities = {}');
writeFileSync(join(outDir, 'index.cjs'), 'exports.fluxUtilities = {}');
writeFileSync(join(outDir, 'index.d.ts'), 'export declare const fluxUtilities: Record<string, unknown>;');
