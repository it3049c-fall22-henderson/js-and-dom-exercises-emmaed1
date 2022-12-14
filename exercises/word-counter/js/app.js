// 🤖: create 2 constants with references to textarea input and the stats section from the DOM


// 🤖: Create an Event Listener on textarea input
// 🤖: The event handler should update the stats section with the number of words and characters in the textarea input.
// 🤖: You will need to utilize the split method to get the words count.
let inputTextArea = document.getElementById("text");
let characCount = document.getElementById("text");
let wordCount = document.getElementById("stat");

inputTextArea.addEventListener("input", () => {
  stat.textContent = "You've written " + inputTextArea.value.split(" ").filter((item) => item).length + " words and " + inputTextArea.value.length + " characters.";
  // let txt = inputTextArea.value.trim();
  // wordCount.textContent = txt.split(" ").filter((item) => item).length;
  
});