// Introduction to the Fetch API and the basics of promises.
fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  });
// Fetching data from a server. Promises making HTTP requests less painful.