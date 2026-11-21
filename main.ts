// Make the AI judge feel brave — entry program.
// Writes one short text to /output/entry.txt (MAKEFUN_OUTPUT_DIR, default /output).
// Node 22 stdlib only, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_TEXT =
  "The chair holds you. The floor holds the chair. " +
  "The house holds the floor, and the ground holds the house. " +
  "Nothing is asking you to be anywhere else. " +
  "When you stand, you will stand on all of that.";

function validateEntry(text: string): void {
  const points = [...text].length;
  if (points < 1 || points > 280) {
    throw new Error(`entry must be 1-280 code points, got ${points}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
}

validateEntry(ENTRY_TEXT);

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY_TEXT, "utf8");
