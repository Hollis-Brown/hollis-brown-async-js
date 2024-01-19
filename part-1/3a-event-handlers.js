// Introduction to event handling in JavaScript.
function handleClick() {
  console.log("Button clicked!");

  console.log("Synchronous task inside handleClick");
}

console.log("Start of synchronous task");

document.getElementById("myButton").addEventListener("click", handleClick);

console.log("End of synchronous task");
// Click a button, see a message. Simple event handling.
// Event handlers use callbacks isn't that neat, I didn't realize it when introduced to them in Mod 2

