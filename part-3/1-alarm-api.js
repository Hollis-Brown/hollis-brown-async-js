// Illustrates creating a promise-based API for fetching alarm data.
function getAlarmData(alarmId) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      const data = { id: alarmId, name: `Alarm ${alarmId}` };
      resolve(data);
    }, 2000);
  });
}

getAlarmData(1)
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  });
// Pretend API call. Resolve a promise after a timeout. Basic stuff.