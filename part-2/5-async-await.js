// Introduction to async/await syntax for asynchronous code.
// Let's do some review...
// Question: When will this (hypothetical reference to the) promise below work?
function kitchen() {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("promise is fulfilled");
    } else {
      reject("error caught here");
    }
  });
}

kitchen() // run the code
  .then() // next step
  .then() // next step
  .catch() // error caught here
  .finally(); // end of the promise (which is optional)
// Answer: Regardless of whether the promise is resolved or rejected.

// Remember this inventory for the sneaker store?
let knockoffSneakers = {
  Jike: ["Nike Air Fauxdacity", "Just Do It... But Not Really"],
  Abbidas: ["Adibags", "Three Stripes, No Guarantees"],
  Leebok: ["Leebok Weebleek", "Pump It... Sparingly"]
};

let is_store_open = true; 

// Next, comment out the above code and I want to see what happens when the async/... format/theory is used in practice.

// Testing the async/await pattern for handling asynchronous operations
async function order() {
  try {
    await new Promise((resolve, reject) => {
      // Rejecting the promise
      reject(new Error("This is a simulated error"));
    });
  } catch (error) {
    console.log("Error:", error.message);
  } finally {
    console.log("Runs the code anyway");
  }
}

order().then(() => {
  console.log("This is just a test string");
});
// Async/await making async code look less like spaghetti. await for the win.