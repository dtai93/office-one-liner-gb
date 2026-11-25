// One-line office joke entry.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "We nested one ticket under the ticket whose only job is tracking who owns the ticket.";

const n = [...LINE].length;
if (n < 1 || n > 200 || LINE.trim().length === 0) {
  throw new Error("entry line must be 1-200 non-blank characters");
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, LINE, { encoding: "utf8" });
