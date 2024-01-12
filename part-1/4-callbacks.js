// Illustration of callback functions for asynchronous operations.
function getDataFromServer(callback) {
  setTimeout(function() {
    const data = "Some data";
    callback(data);
  }, 2000);
}

function processData(data) {
  console.log("Processing:", data);
}

getDataFromServer(processData);
// Another fake async thing with setTimeout. Callback fires later, that's it.