// Demonstrates error handling in promises and rejection scenarios.
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
// Error handling in promise land. Reject the promise on trouble.