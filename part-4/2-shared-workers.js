// Illustrates the usage of Shared Workers for parallel processing.
// In main.js
const sharedWorker = new SharedWorker("shared-worker.js");
sharedWorker.port.addEventListener("message", function(event) {
  console.log("Message from shared worker:", event.data);
});
sharedWorker.port.start();
sharedWorker.port.postMessage("Hello from main");

// In shared-worker.js
self.addEventListener("connect", function(event) {
  const port = event.ports[0];
  port.addEventListener("message", function(event) {
    console.log("Message from main:", event.data);
    port.postMessage("Hello from shared worker");
  });
  port.start();
});
// Workers not just for one script. Shared worker doing the rounds, chatting with different scripts.