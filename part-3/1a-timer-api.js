// Create a promise-based API for the timer.
// The startTimer function returns a promise that resolves after the specified duration.
const output = document.querySelector("#output");
const button = document.querySelector("#start-timer");

function startTimer() {
    setTimeout(() => {
      output.textContent = "Timer is running...";
  }, 1000);
}

button.addEventListener("click", startTimer);
 
// Use setTimeout() to create a delay and resolve the promise with a message when the timer expires.
// Event listener for the button click to trigger the timer.
// Display a message indicating the timer is running.
// Wait for the timer to finish and update the output with the result.
// Simulating a pretend API call. Resolves a promise after a timeout. Basic stuff.
