// Introduction to Web Workers and inter-thread communication.
// In main.js
const worker = new Worker("worker.js");
worker.postMessage({ start: 1, end: 100 });

// In worker.js
self.addEventListener("message", function(event) {
  const start = event.data.start;
  const end = event.data.end;
  const primes = findPrimes(start, end);
  self.postMessage(primes);
});

function findPrimes(start, end) {
  // Prime number generation algorithm
  // ...
  return primes;
}
// Workers talking to each other. Main thread sends a message, worker responds. Basic worker chit-chat.