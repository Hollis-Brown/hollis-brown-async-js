// Listen for messages from the main thread.
// If the message command is "convert", call `convertToTitleCase()`
self.addEventListener("message", (message) => {
  if (message.data.command === "convert") {
    const convertedText = convertToTitleCase(message.data.text);
    self.postMessage(convertedText);
  }
});

// Convert text to title case
function convertToTitleCase(text) {
  const convertedText = text.replace(/\b\w/g, (match) => match.toUpperCase());

  return convertedText;
}