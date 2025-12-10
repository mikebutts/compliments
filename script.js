/*
  Compliment Generator Logic
  --------------------------
  - Stores a list of compliments in an array
  - Picks a random compliment when the button is clicked
  - Updates the compliment text in the UI
*/

document.addEventListener("DOMContentLoaded", function () {
  // Grab references to DOM elements
  const complimentText = document.getElementById("complimentText");
  const complimentButton = document.getElementById("complimentButton");

  // Predefined list of compliments (at least 10)
  // You can add or change these to match your vibe/brand
  const compliments = [
    "You have a talent for making people feel seen and appreciated.",
    "Your ideas are sharp, original, and absolutely worth sharing.",
    "Even on your off days, you’re still someone’s inspiration.",
    "Your sense of humor could brighten an entire room on a cloudy day.",
    "You’re learning, growing, and doing far better than you think you are.",
    "The way you care—about people, about details, about doing things well—is rare and powerful.",
    "You have a calm strength that makes others feel safe around you.",
    "Your future self is already so proud of the work you’re doing today.",
    "You notice things other people miss—and that perspective is a gift.",
    "You’re not behind; you’re on your own timeline, and it looks good on you.",
    "You’ve overcome so much already—there’s proof you can handle what comes next.",
    "Your presence makes things better, even if you don’t always see it.",
  ];

  /**
   * Returns a random compliment from the array.
   * Ensures a fresh compliment each click (though repeats are still possible).
   */
  function getRandomCompliment() {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    return compliments[randomIndex];
  }

  /**
   * Updates the compliment text on the page.
   * Adds a small fade-in effect by toggling a CSS class.
   */
  function showNewCompliment() {
    const newCompliment = getRandomCompliment();

    // Optional: simple fade-out/fade-in effect
    complimentText.classList.remove("fade-in");
    // Force reflow to restart animation
    void complimentText.offsetWidth;

    complimentText.textContent = newCompliment;
    complimentText.classList.add("fade-in");
  }

  // Attach click event listener to the button
  complimentButton.addEventListener("click", showNewCompliment);

  // Initial small animation when page loads
  complimentText.classList.add("fade-in");
});

/* 
  Small CSS-in-JS note:
  The .fade-in class is referenced above.
  Add this to your CSS if you want the animation:

  .fade-in {
    animation: fadeIn 0.4s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(4px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  To keep all styles in style.css, you can paste that block there.
*/
