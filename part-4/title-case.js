const inputText = document.getElementById("inputText");
const convertButton = document.getElementById("convert");
const resetButton = document.getElementById("reset");
const output = document.getElementById("output");

// Create a new worker, giving it the code in "title-case-worker.js"
const titleCaseWorker = new Worker("./title-case-worker.js");

convertButton.addEventListener("click", () => {
  output.textContent = "Converting...";
  titleCaseWorker.postMessage({ command: "convert", text: inputText.value });
});

resetButton.addEventListener("click", () => {
  inputText.value = "";
  output.textContent = "";
});

titleCaseWorker.addEventListener("message", (message) => {
  output.textContent = `Converted text: ${message.data}`;
});