// Saneaker store program which illustrates error handling in promises using the `Promise.all()` and `Promise.any()` methods.
let knockoffSneakers = {
  Jike: ["Nike Air Fauxdacity", "Just Do It... But Not Really"],
  Abbidas: ["Adibags", "Three Stripes, No Guarantees"],
  Leebok: ["Leebok Weebleek", "Pump It... Sparingly"]
};

let is_store_open = false; // Toggle the boolean to true or false to view result. 

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_store_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(new Error("My store is closed"));
    }
  });
};

// Create an array of promises
const promises = [
  order(2000, () => console.log(`${knockoffSneakers.Jike[0]} was chosen to be designed`)),
  order(0, () => console.log("Production has started")),
  order(2000, () => console.log("The sneakers have been stitched by an overgrown Northpole elf named Bubba and his cadre of lackies.")),
  order(2000, () => console.log("The sneakers are magically flown from the Northpole to the U.S by an alcoholic piloting a dilapidated sleigh with two lazy reindeer.")),
  order(2000, () => console.log("A cabal of dim-witted street toughs unload the merchandise in Manhattan somewhere.")),
  order(3000, () => console.log("An undisclosed store's employees stage the new sneakers on shelves.")),
  order(2000, () => console.log("The store opens and the sneakers are ready to be sold!"))
];

// Use Promise.all to wait for all promises to resolve
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


// Uncomment the below code to experiment with how it works. 

/*
// Use Promise.any to wait for any promise to resolve
Promise.any(promises)
.then(() => {
  console.log("At least one promise resolved");
})
.catch((error) => {
  console.log(`All promises rejected: ${error.message}`);
})
.finally(() => {
  console.log("The day has ended.");
});

*/