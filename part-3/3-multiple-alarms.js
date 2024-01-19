// Shows how to handle multiple asynchronous operations concurrently.
const name = document.querySelector("#activity");
const delay = document.querySelector("#duration");
const button = document.querySelector("#start-timer");
const output = document.querySelector("#output");

function startTimer(activity, duration) {
  return new Promise((resolve, reject) => {
    if (duration < 0) {
      reject(new Error("Timer duration must not be negative"));
    }
    setTimeout(() => {
      resolve(`Timer for ${activity} finished!`);
    }, duration);
  });
}

button.addEventListener("click", () => {
  timer(name.value, delay.value)
    .then((message) => (output.textContent = message))
    .catch((error) => (output.textContent = `Couldn't start timer: ${error}`));
});
// Stringing along API calls one after the other. Sequential vibe.