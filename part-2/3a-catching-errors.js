// Saneaker store program which illustrates error handling in promises using the `.catch()` and `.finally()` methods.
let knockoffSneakers = {
  Jike: ["Nike Air Fauxdacity", "Just Do It... But Not Really"],
  Abbidas: ["Adibags", "Three Stripes, No Guarantees"],
  Leebok: ["Leebok Weebleek", "Pump It... Sparingly"]
};

let is_store_open = false;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_store_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("My store is closed"));
    }
  });
};

order(2000, () => console.log(`${knockoffSneakers.Jike[0]} was chosen to be designed`))
  // The `.then()` method is used to specify what should happen after a promise is fulfilled or resolved.
  .then(() => order(0, () => console.log("Production has started")))
  .then(() => order(2000, () => console.log("The sneakers have been stitched by an overgrown Northpole elf named Bubba and his cadre of lackies.")))
  .then(() => order(2000, () => console.log("The sneakers are magically flown from the Northpole to the U.S by an alcoholic piloting a dilapidated sleigh with two lazy reindeer.")))
  .then(() => order(2000, () => console.log("A cabal of dim-witted street toughs unload the merchandise in Manhattan somewhere.")))
  .then(() => order(3000, () => console.log("An undisclosed store's employees stage the new sneakers on shelves.")))
  .then(() => order(2000, () => console.log("The store opens and the sneakers are ready to be sold!")))
  
  // The `.catch()` method is used to handle errors in promises allowing the specification of a callback function that will be called when the promise is rejected. This is a neat way to handle error cases.
  .catch(() => {
    console.log("The customer has left.");
  })
// After viewing the console output remove this semicolon and add the `.finally()` method to this code.

  // The `.finally()` method is used to specify a callback function that will be executed regardless of whether the promise is fulfilled or rejected. It allows you to perform cleanup or finalization tasks that need to be done regardless of the promise's outcome. 
  .finally (() => {
    console.log("The day has ended.");
  });
// This is the example of the error handling technique analogized as a customer abruptly leaving the ice cream store.