// Introduction to async/await syntax for asynchronous code.
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchData();
// Async/await making async code look less like spaghetti. await for the win.