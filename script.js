// Create a new SpeechSynthesisUtterance object
let speech = new SpeechSynthesisUtterance();

// Get the textarea and button elements
const textarea = document.querySelector("textarea");
const button = document.querySelector("button");
const languageSelect = document.querySelector("select");

// Add an event listener to the button
button.addEventListener("click", () => {
  // Set the text to be spoken
  speech.text = textarea.value;

  // Set the language
  speech.lang = languageSelect.value;

  // Speak the text
  window.speechSynthesis.speak(speech);
});