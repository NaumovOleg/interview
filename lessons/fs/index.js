import {
  accessSync,
  constants,
  openSync,
  appendFileSync,
  chmodSync,
  copyFileSync,
  mkdirSync,
  statSync,
  symlinkSync,
} from "node:fs";
import { join } from "node:path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const filepath = join(__dirname, "./test.txt");
const descriptor = await openSync(filepath, "r+");
await appendFileSync(__dirname + `/uppendFile.txt`, "append file");
await chmodSync(__dirname + `/uppendFile.txt`, 400);
// await copyFileSync("source.txt", "destination.txt");
// mkdirSync(__dirname + "/testdir");
// fsPromises.rename(oldPath, newPath);
// fsPromises.rm()
statSync(filepath);
try {
  accessSync(join(__dirname, "./test.txt"), constants.R_OK | constants.W_OK);
  console.log("can read/write");
} catch (err) {
  console.log(err);
}

export const fs = "fs";
