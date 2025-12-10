/*
  Compliment Generator Logic
  --------------------------
  - Stores compliments in an array
  - Picks a random compliment on button click
  - Avoids showing the same compliment twice in a row
  - Updates the displayed compliment text in the DOM
*/

/**
 * An array of warm, encouraging compliments.
 * Feel free to extend this list to customize the app.
 */
const compliments = [
  "You’re doing better than you give yourself credit for. 🌟",
  "Your kindness makes a bigger impact than you realize.",
  "You have a natural ability to make people feel seen and heard.",
  "You learn quickly and adapt like a pro—keep going!",
  "Your creativity adds so much color to the world.",
  "You handle tough situations with so much grace.",
  "You’re growing every single day, even when it doesn’t feel like it.",
  "Your perspective is unique, and it genuinely matters.",
  "You’ve overcome so much already—be proud of how far you’ve come.",
  "The effort you put in, even when no one is watching, is inspiring.",
  "You light up more rooms than you know. ✨",
  "Your future self is already thankful for the work you’re doing today.",
];

// Grab DOM elements once, for performance and clarity
const complimentTextEl = document.getElementById("complimentText");
const newComplimentBtn = document.getElementById("newComplimentBtn");

// Keep track of the last compliment index to avoid repetition
let lastComplimentIndex = -1;

/**
 * Returns a random compliment string from the `compliments` array.
 * Ensures the same compliment is not immediately repeated if possible.
 */
function getRandomCompliment() {
  if (compliments.length === 0) {
    return "No compliments found… but you’re still awesome. 😊";
  }

  // If only one compliment exists, just return it
  if (compliments.length === 1) {
    lastComplimentIndex = 0;
    return compliments[0];
  }

  let index;

  // Loop until we get an index different from the last one
  do {
    index = Math.floor(Math.random() * compliments.length);
  } while (index === lastComplimentIndex);

  lastComplimentIndex = index;
  return compliments[index];
}

/**
 * Updates the compliment text in the UI with a new random compliment.
 */
function showNewCompliment() {
  const nextCompliment = getRandomCompliment();
  complimentTextEl.textContent = nextCompliment;
}

/**
 * Initialize event listeners and show a random compliment on load.
 */
function initComplimentGenerator() {
  // When the user clicks the button, show a new compliment
  newComplimentBtn.addEventListener("click", showNewCompliment);

  // Optionally show a random compliment immediately on page load
  // (This will override the placeholder text in index.html)
  showNewCompliment();
}

// Wait for the DOM to be fully parsed before initializing
// (script is loaded with "defer", so DOM is ready at this point,
// but this is a safe pattern if you move script tags later)
initComplimentGenerator();
