import { Writable } from "node:stream";

const myStream = new Writable();

const fooErr = new Error("foo error");
myStream.destroy(fooErr);
myStream.on("error", (fooErr) => console.error(fooErr.message));
