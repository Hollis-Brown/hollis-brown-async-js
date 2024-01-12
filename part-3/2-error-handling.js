// Demonstrates error handling in promises and rejection scenarios.
function fetchData() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      reject(new Error("Data fetch failed"));
    }, 2000);
  });
}

fetchData()
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  });
// Error handling in promise land. Reject the promise on trouble.