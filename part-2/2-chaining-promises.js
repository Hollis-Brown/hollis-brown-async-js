// Illustrates promise chaining for sequential asynchronous tasks.
function getUser(userId) {
  // Fetch user data
  return fetch(`https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/users/${userId}.json`)
    .then(function(response) {
      return response.json();
    });
}

function getPosts(user) {
  // Fetch posts for the given user
  return fetch(`https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/users/${user.id}/posts.json`)
    .then(function(response) {
      return response.json();
    });
}

// One thing after another. Promises chaining for a smoother flow.
getUser(1)
  .then(function(user) {
    // Once user data is fetched, fetch their posts
    return getPosts(user);
  })
  .then(function(posts) {
    // Log the posts obtained from the sequential tasks
    console.log('User posts:', posts);
  })
  .catch(function(error) {
    // Handle errors that may occur during the process
    console.error('Error:', error);
  });

// One thing after another. Promises chaining for a smoother flow.