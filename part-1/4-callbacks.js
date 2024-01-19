// Illustration of callback functions for asynchronous operations.
// Each line depends on the work done in the preceding lines in this order placing process
let initiateTelemarketingCall = (recordNotes) => {
  console.log("Hi, this is XYZ Telemarketing...");
  recordNotes(); // Calling the notes recording process
};

// Notes recording process
let recordInformation = () => {
  console.log("Can I please get your social security and debit card numbers?");
};

// Initiating the telemarketing call and passing the notes recording process as a callback
initiateTelemarketingCall(recordInformation);
