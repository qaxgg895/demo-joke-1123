// demo-joke: a one-line joke about working beside AI coding agents.
// The program writes the joke to /output/entry.txt (1-280 code points).
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE: string =
  "My agent fixed the demo crash live on stage by deleting the feature. The audience applauded — it was the only thing all day that worked exactly as promised.";

// The gate counts Unicode code points, not UTF-16 units, so count with
// the string iterator and fail loudly instead of writing an invalid entry.
const length: number = [...JOKE].length;
if (length < 1 || length > 280) {
  throw new Error(`joke is ${length} code points, must be 1-280`);
}

const outDir: string = "/output";
const outFile: string = `${outDir}/entry.txt`;

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, JOKE, "utf8");
