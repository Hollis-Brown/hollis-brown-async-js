// Demonstrates a long-running synchronous operation and its impact on the main thread.
console.log("Before");

function longRunningOperation() {
  for (let i = 0; i < 1000000000; i++) {
    // Do nothing
  }
}

longRunningOperation();

console.log("After");

// We're just faking a slow operation using setTimeout. Callback gets triggered after a delay.