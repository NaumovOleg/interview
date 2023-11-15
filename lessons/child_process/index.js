import { spawn, fork } from "node:child_process";
import { join } from "node:path";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const ls = spawn("ls", ["-lh", "/usr"], {
  //   stdio: "ignore",
  env: { NODE_ENV: "dev" },
});

ls.stdout.on("data", (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on("data", (data) => {
  console.error(`stderr: ${data}`);
});

ls.on("close", (code) => {
  console.log(`child process exited with code ${code}`);
});

const child = fork(join(__dirname, "./child.js"), ["child"]);
child.on("message", (msg) => {
  console.log("--=========", msg);
});
export default "child process";
