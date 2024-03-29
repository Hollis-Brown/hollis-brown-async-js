// Sneaker store program which illustrates promise chaining for sequential asynchronous tasks.

let knockoffSneakers = {
  Jike: ["Nike Air Fauxdacity", "Just Do It... But Not Really"],
  Abbidas: ["Adibags", "Three Stripes, No Guarantees"],
  Leebok: ["Leebok Weebleek", "Pump It... Sparingly"]
};

let is_store_open = true;

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

order(2000, () => console.log(`${knockoffSneakers.Jike[0]} was selected`))
  // The `.then()` method is used to specify what should happen after a promise is fulfilled or resolved.
  .then(() => order(0, () => console.log("Production has started")))
  .then(() => order(2000, () => console.log("The sneakers have been stitched by an overgrown Northpole elf named Bubba and his cadre of lackies.")))
  .then(() => order(2000, () => console.log("The sneakers are magically flown from the Northpole to the U.S by an alcoholic piloting a dilapidated sleigh with two lazy reindeer.")))
  .then(() => order(2000, () => console.log("A cabal of dim-witted street toughs unload the merchandise in Manhattan somewhere.")))
  .then(() => order(3000, () => console.log("An undisclosed store's employees stage the new sneakers on shelves.")))
  .then(() => order(2000, () => console.log("The store opens and the sneakers are ready to be sold!")));
// One thing after another. Promises chaining for a smoother flow.

