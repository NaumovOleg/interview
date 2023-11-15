import EventEmitter, { errorMonitor } from "node:events";

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on("event", () => {
  setImmediate(() => {
    console.log("this happens asynchronously1");
  });
});

myEmitter.on(errorMonitor, (err) => {
  console.log("-----------", err);
});

// myEmitter.emit("error", new Error("Event Error"));
myEmitter.emit("event");

const ee1 = new EventEmitter({ captureRejections: true });
ee1.on("something", async (value) => {
  throw new Error("kaboom");
});

ee1.on("error", console.log);

const ee2 = new EventEmitter({ captureRejections: true });
ee2.on("something", async (value) => {
  throw new Error("kaboom");
});

ee2[Symbol.for("nodejs.rejection")] = () => {
  console.log("dddd");
};
ee2.emit("something");

myEmitter.listeners("event");
myEmitter.removeAllListeners("event");
myEmitter.removeListener("event", () => {});
myEmitter.eventNames();
// myEmitter.prependListener();
// myEmitter.prependOnceListener();

export default "events";
