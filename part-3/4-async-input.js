// Integrates async/await for handling user input asynchronously.
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

button.addEventListener("click", async () => {
  try {
    const message = await timer(activity.value, duration.value);
    output.textContent = message;
  } catch (error){
    output.textContent = `Couldn't start timer: ${error}`;
  }
});
// Async input thing. Promise resolves with user input.