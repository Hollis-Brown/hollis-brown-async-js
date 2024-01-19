// Example showcasing nested callbacks, highlighting the callback hell issue.
let knockoffSneakers = {
  Jike: ["Nike Air Fauxdacity", "Just Do It... But Not Really"],
  Abbidas: ["Adibags", "Three Stripes, No Guarantees"],
  Leebok: ["Leebok Weebleek", "Pump It... Sparingly"]
};

let order = (sneakerVariant, callProduction) => {
  setTimeout(() => {
    console.log(`${knockoffSneakers.Jike[sneakerVariant]} was chosen to be designed.`);
    callProduction();
  }, 2000);
};

let production = () => {
  setTimeout(() => {
    console.log("Production has started");
    
    setTimeout(() => {
      console.log("The sneakers have been stitched by an overgrown Northpole elf named Bubba and his cadre of lackies.");

      setTimeout(() => {
        console.log(`The sneakers are magically flown from the Northpole to the U.S by an alcoholic piloting a dilapidated sleigh with two lazy reindeer.`);

        setTimeout(() => {
          console.log(`A cabal of dim witted street toughs unload the merchandise in Manhattan somewhere.`);

          setTimeout(() => {
            console.log(`An undisclosed store's employees stage the new sneakers on shelves.`);

            setTimeout(() => {
              console.log("The store opens and the sneakers are ready to be sold!");
            }, 2000);
          }, 3000);
        }, 2000);
      }, 2000);
    }, 2000);
  }, 0);
};

order(0, production);
// This is an illustration of complex web of nested callbacks formally known as CALLBACK-HELL!
// What is the solution to this? Promises.