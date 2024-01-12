// Demonstrates how errors can propagate through promise chains.
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
    return processData(data);
  })
  .catch(function(error) {
    console.log(error);
  });

function processData(data) {
  console.log("Processing:", data);
  throw new Error("Processing error");
}
// Passing on errors in promises. It's like hot potato, but with errors.