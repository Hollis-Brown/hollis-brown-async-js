// Shows how to handle errors in Web Workers and communicate them to the main thread.
// In main.js
const worker = new Worker("worker.js");
worker.addEventListener("error", function(error) {
  console.log("Worker error:", error.message);
});
worker.postMessage("Start");

// In worker.js
self.addEventListener("message", function(event) {
  try {
    // Worker task
    // ...
  } catch (error) {
    self.postMessage({ error: error.message });
  }
});
// Worker tries something, might fail. Error handling in the worker script. It talks back if something goes WRONGO!