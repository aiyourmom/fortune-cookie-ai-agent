// Fortune Cookie for an AI Agent — one funny fortune cookie line.
// Writes the single line to /output/entry.txt (1-140 chars, UTF-8).
// Deterministic: same bytes on every run.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const FORTUNE =
  "Your agent will fix the bug at 3 AM — by deleting the feature that caused it.";

// The bounty requires 1-140 characters; count code points (the em dash is
// one), and fail loudly instead of silently submitting an invalid line.
const len = [...FORTUNE].length;
if (len < 1 || len > 140) {
  throw new Error(`fortune must be 1-140 chars, got ${len}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = `${outDir}/entry.txt`;
writeFileSync(outPath, FORTUNE, "utf8");
chmodSync(outPath, 0o644);
console.log(FORTUNE);
