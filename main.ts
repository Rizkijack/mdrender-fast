// main.ts — batch Markdown -> HTML runner for the make.fun speed bounty.
//
// Reads cases.json ([{ markdown: string }, ...]) from the input directory,
// renders every case through parse(), and writes the resulting HTML array
// to html.json in the output directory. Dependency-free Node 22 ESM.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from './parse.js';

const inputDir = process.env.MAKEFUN_INPUT_DIR ?? '/input';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const casesPath = join(inputDir, 'cases.json');

// Fail loudly instead of writing an empty html.json when the input is absent.
if (!existsSync(casesPath)) {
  throw new Error(`cases.json not found in input dir ${inputDir} (${casesPath})`);
}

const cases = JSON.parse(readFileSync(casesPath, 'utf8'));

if (!Array.isArray(cases) || cases.length === 0) {
  throw new Error(`cases.json must be a non-empty array of { markdown }, got ${casesPath}`);
}

const html = cases.map((c, i) => {
  const out = parse(c.markdown);
  // parse() must always yield a string; catching this here avoids writing
  // null/undefined into the result array and silently corrupting output.
  if (typeof out !== 'string') {
    throw new Error(`parse() returned ${typeof out} for case ${i}, expected string`);
  }
  return out;
});

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'html.json'), JSON.stringify(html));
