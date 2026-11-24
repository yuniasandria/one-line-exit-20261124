import { mkdirSync, writeFileSync } from "node:fs";

// The One-Line Exit: one resignation letter, exactly one line long.
// Specific voice (morgue night-shift attendant) + surprise turn in the
// final clause (a better work-life balance — from a morgue).
const LINE =
  "I hereby resign as the morgue's night-shift attendant: I have finally found a job with a better work-life balance.";

// Gate, checked before writing: the sealed scorer accepts UTF-8 text of
// 1 to 140 characters that is not only white space.
if (LINE.length < 1 || LINE.length > 140 || /^\s*$/.test(LINE)) {
  throw new Error(`entry line fails the gate: ${LINE.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
