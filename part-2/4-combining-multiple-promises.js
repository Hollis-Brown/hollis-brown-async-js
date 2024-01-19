// Shows how to combine multiple promises and handle them collectively.
let knockoffSneakers = {
  Jike: ["Nike Air Fauxdacity", "Just Do It... But Not Really"],
  Abbidas: ["Adibags", "Three Stripes, No Guarantees"],
  Leebok: ["Leebok Weebleek", "Pump It... Sparingly"]
};

let is_store_open = true; // Toggle the boolean to true or false to view result.

let order = (time, work, shouldReject = false) => {
  return new Promise((resolve, reject) => {
    if (is_store_open) {
      setTimeout(() => {
        if (shouldReject) {
          reject(new Error("Intentional rejection"));
        } else {
          resolve(work());
        }
      }, time);
    } else {
      reject(new Error("My store is closed"));
    }
  });
};

// Create an array of promises with intentional rejection in the second promise
const promises = [
  order(2000, () => console.log(`${knockoffSneakers.Jike[0]} was chosen to be designed`)),
  order(0, () => console.log("Production has started"), true), // Intentional rejection
  order(2000, () => console.log("The sneakers have been stitched by an overgrown Northpole elf named Bubba and his cadre of lackies.")),
];

// Use Promise.all to wait for all promises to resolve or reject
Promise.all(promises)
  .then(() => {
    console.log("All promises resolved");
  })
  .catch((error) => {
    console.log(`Error in one of the promises: ${error.message}`);
  })
  .finally(() => {
    console.log("The day has ended.");
  });

// Juggling multiple async operations at once. Promise.all() makes it happen.