// Shows how to combine multiple promises and handle them collectively.
const promise1 = fetch("https://api.example.com/data1");
const promise2 = fetch("https://api.example.com/data2");

Promise.all([promise1, promise2])
  .then(function(responses) {
    const results = responses.map(function(response) {
      return response.json();
    });
    return Promise.all(results);
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  });
// Juggling multiple async operations at once. Promise.all() makes it happen.