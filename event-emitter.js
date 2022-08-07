const EventEmitter = require("events");

class myEventEmitter extends EventEmitter {
  constructor() {
    super();
    console.log("here");
  }

  emitEvents() {
    this.emit("hello");
  }
}

const test = new myEventEmitter();

test.on("hello", () => {
  console.log("hello world sdf");
});

test.emitEvents();
