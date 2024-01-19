// Demonstrates a long-running synchronous operation and its impact on the main thread.
function sayHelloWorld() {
  console.log("Hello, World!");
}

console.log("Program started.");

for (let i = 0; i < 10000000000; i++) {
  // Simulate a long-running synchronous operation.
}

sayHelloWorld();

console.log("Finished!"); // This message is logged after the loop and sayHelloWorld().
