// Shows how to handle multiple asynchronous operations concurrently.
const alarmIds = [1, 2, 3];
const promises = alarmIds.map(function(id) {
  return getAlarmData(id);
});

Promise.all(promises)
  .then(function(results) {
    console.log(results);
  })
  .catch(function(error) {
    console.log(error);
  });
// Stringing along API calls one after the other. Sequential vibe.