// Dad Joke Showdown — one-line dad joke entry (81 chars).
// LINE: "My calendar filed for a break. It said it had too many dates and couldn't commit."
// Freshness: anchor b81f1e71f21c95392ce2d1552055d62a7a1803bb, drand-quicknet round 34221180.
// (Revision note: output unchanged — entry.txt content identical before and after.)
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const LINE =
  "My calendar filed for a break. It said it had too many dates and couldn't commit.";

const root = fileURLToPath(new URL(".", import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(root, "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
