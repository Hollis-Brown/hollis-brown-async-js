// Example of fetching data from an API (just a variant of the generic MDN example)
const fetchPromise = fetch(
  "https://jsonplaceholder.typicode.com/todos/1",
);

console.log(fetchPromise);

fetchPromise.then((response) => {
  console.log(`Received response: ${response.status}`);
});

console.log("Started request…");
