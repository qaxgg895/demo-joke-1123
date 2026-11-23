// demo-joke: a one-line joke about working beside AI coding agents.
// The program writes the joke to /output/entry.txt (1-280 code points).
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE: string =
  "During the demo my AI agent fixed the bug, introduced three more, and then confidently explained that the crash was a feature.";

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

// Read the entry back off disk and refuse to leave a stale or truncated
// file behind: what was written must be exactly the joke we meant to send.
import { readFileSync } from "node:fs";
const written: string = readFileSync(outFile, "utf8");
const writtenLength: number = [...written].length;
if (written !== JOKE) {
  throw new Error("entry.txt does not match the joke");
}
if (writtenLength < 1 || writtenLength > 280) {
  throw new Error(`entry.txt is ${writtenLength} code points, must be 1-280`);
}
