// Example showcasing nested callbacks, highlighting the callback hell issue.
function getUser(userId, callback) {
  setTimeout(function() {
    const user = { id: userId, name: "John" };
    callback(user);
  }, 2000);
}

function getPosts(user, callback) {
  setTimeout(function() {
    const posts = ["Post 1", "Post 2"];
    callback(posts);
  }, 2000);
}

function getComments(posts, callback) {
  setTimeout(function() {
    const comments = ["Comment 1", "Comment 2"];
    callback(comments);
  }, 2000);
}

getUser(1, function(user) {
  getPosts(user, function(posts) {
    getComments(posts, function(comments) {
      console.log(comments);
    });
  });
});
// Nested callbacks. It's messy. Avoid if possible. That's the deal.