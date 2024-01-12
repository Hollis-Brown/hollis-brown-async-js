// Integrates async/await for handling user input asynchronously.
async function getUserInput() {
  const input = await getInput();
  console.log("Input:", input);
}

function getInput() {
  return new Promise(function(resolve, reject) {
    const input = prompt("Enter your input:");
    if (input) {
      resolve(input);
    } else {
      reject(new Error("No input provided"));
    }
  });
}

getUserInput();
// Async input thing. Promise resolves with user input.