// Demonstrates error handling in promises using the .catch method.
function getUser(userId) {
  // Fetch user data
  return fetch(`https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/users/${userId}.json`)
    .then(function(response) {
      if (!response.ok) {
        throw new Error("User not found");
      }
      return response.json();
    });
}

// Handling errors in the promise chain. Stuff breaks, catch it.
getUser(1)
  .then(function(user) {
    // Log user data if successful
    console.log('User data:', user);
  })
  .catch(function(error) {
    // Handle errors that may occur during the process
    console.error('Error:', error);
  });

// Handling errors in the promise chain. Stuff breaks, catch it.