// One Sentence for a Traveler from 1800 — make.fun bounty entry.
// Writes a single sentence (<=200 chars) explaining the modern internet
// to a time traveler from 1800, using only things they could picture:
// a road, a post office, a library, a market, a letter.
//
// The sentence: every library, post office, and market joined by one road,
// with letters arriving before the ink dries — the network as a single
// road, and instant delivery as the image that sticks.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Imagine every library, post office, and market in the world joined by a single road, so a letter you write arrives before its ink dries.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to /output/entry.txt`);
