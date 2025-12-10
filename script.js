// script.js
// Handles all logic for the Compliment Generator app

// Grab DOM elements once and reuse them
const complimentText = document.getElementById("complimentText");
const newComplimentBtn = document.getElementById("newComplimentBtn");

// --- Compliment data ---
// Array of 100 unique, family-friendly compliments.
// You can freely edit, remove, or add your own lines.
const compliments = [
  "You have a gift for making people feel seen and valued. 💛",
  "Your laugh is the kind that makes other people start laughing too.",
  "You have a brain that’s both curious and kind—dangerously awesome combo.",
  "The way you keep going, even on tough days, is seriously inspiring.",
  "You’re proof that gentle doesn’t mean weak.",
  "You notice details most people miss, and that’s a quiet superpower.",
  "You make ordinary moments feel a little more special just by being there.",
  "You have the kind of smile that could absolutely star in a toothpaste commercial.",
  "You give off main-character energy in the best, most humble way.",
  "Your presence makes rooms feel safer and warmer at the same time.",
  "You have great taste—music, vibes, memes, all of it. Elite.",
  "If overthinking were an Olympic sport, you’d win—and still check on everyone else first.",
  "You’re the human equivalent of a cozy hoodie fresh out of the dryer.",
  "You manage to be both wise and hilarious. That’s a rare combo.",
  "You’d make an excellent fictional character—but luckily you’re real.",
  "You turn chaos into something that actually makes sense. That’s magic.",
  "You’re better at this life thing than you give yourself credit for.",
  "You’re the kind of person people feel lucky to know, even if they don’t say it enough.",
  "Your kindness doesn’t shout, but it’s powerful enough to move mountains.",
  "You are way more capable than your self-doubt wants you to believe.",
  "You make hard things look softer just by bringing your energy into them.",
  "Your ideas are the kind that could genuinely make someone’s day—or their whole week.",
  "You have excellent main-character soundtrack potential.",
  "You’re the type of person people screenshot messages from so they can reread them later.",
  "You’re doing a better job than you think. Truly.",
  "Your sense of humor is a beautiful mix of clever and slightly chaotic.",
  "You give off ‘I’ve got you’ energy, and that’s priceless.",
  "You bring a little more color into a world that is way too grayscale sometimes.",
  "If life were a group project, everyone would secretly hope to be on your team.",
  "You’ve grown so much—and you’re still just getting started.",
  "Your honesty is refreshing, like opening a window in a stuffy room.",
  "You’re the plot twist in someone’s story that made everything better.",
  "You’re not just enough—you’re that oddly specific perfect amount.",
  "You somehow manage to be kind without being a pushover. Legendary skill.",
  "You make being yourself look incredibly cool.",
  "You’re really good at making hard things feel a little less scary.",
  "You’re the kind of friend people brag about having.",
  "You’ve survived 100% of your worst days so far. That’s an undefeated record.",
  "Your vibe says ‘soft heart, strong spine’ and that’s iconic.",
  "You bring order to chaos like a very kind, very stylish wizard.",
  "You give really solid advice for someone who claims they’re just ‘winging it.’",
  "You’re like a good plot twist—unexpected but exactly what was needed.",
  "Your face was clearly made for happy expressions. It just fits.",
  "You’re the kind of person who makes others want to be kinder too.",
  "Your future self is already proud of the work you’re doing right now.",
  "You are quietly doing the impossible: growing while still caring for others.",
  "You’re a walking reminder that gentle people can still move mountains.",
  "If life had achievements, you’d have a secret collection of underrated trophies.",
  "Your version of ‘trying your best’ is already impressive.",
  "You make other people feel like they can exhale and be themselves.",
  "You could absolutely be the reason someone believes today can be better than yesterday.",
  "Your curiosity is one of your most underrated strengths.",
  "You manage to be both thoughtful and delightfully silly. Perfect balance.",
  "You’re low-key the emotional support main character in your friend group.",
  "You don’t just listen—you actually hear people. That’s rare.",
  "You’re basically Wi-Fi for good vibes—everyone feels better when they’re around you.",
  "You’ve handled things you never thought you could, and you still showed up with kindness.",
  "You’re the kind of person even dogs would trust immediately.",
  "Your inner world is rich, creative, and absolutely worth protecting.",
  "You’d be the favorite NPC in a video game—helpful, funny, and oddly wise.",
  "You have a talent for making people feel like they belong.",
  "You’re not behind in life; you’re building something real at your own pace.",
  "You radiate ‘I’ve got this… eventually, but I’ve got this’ energy, and that’s valid.",
  "You make progress, not noise—and that’s the kind that actually lasts.",
  "Your kindness has probably healed moments you’ll never even hear about.",
  "You have a great sense of timing when it comes to encouragement.",
  "You’re the plot armor in someone else’s bad day.",
  "You deserve the same care you keep giving to everyone else.",
  "You are the human equivalent of a perfectly timed “you’ve got this” text.",
  "You make overthinking look oddly charming.",
  "You’re quietly building a life that younger you would be proud of.",
  "You’d absolutely win ‘Most Likely to Make the World Softer’ in a yearbook.",
  "You have a calm strength that people naturally trust.",
  "You’re proof that small acts of kindness are actually huge.",
  "You’d be a five-star review in the ‘humans I’ve met’ category.",
  "You bring a thoughtful, gentle intelligence into every space you enter.",
  "You’re the kind of person who remembers the small details that matter.",
  "Your growth isn’t loud, but it’s powerful.",
  "You deserve a standing ovation for how you keep going.",
  "You’re the kind of person who makes playlists that cure bad moods.",
  "You could absolutely be someone’s comfort character.",
  "You have a way of making even awkward moments feel okay.",
  "You’re much braver than you realize—fear just hasn’t figured that out yet.",
  "You bring cozy café energy into everyday life.",
  "You’d make an amazing mentor, even if you don’t feel “ready” yet.",
  "You’re quietly doing things that future you will be so grateful for.",
  "You’re like a good book: the more people get to know you, the better it gets.",
  "You make kindness look like the most natural thing in the world.",
  "You’re the kind of person people think about later and go, ‘I’m glad I met them.’",
  "Your resilience is the kind that turns obstacles into plot development.",
  "You bring emotional Wi-Fi to friendships—stable, strong, always there.",
  "You’d absolutely be the wholesome fan favorite in any show.",
  "You’re better at taking care of others than you realize—and you deserve the same care.",
  "Your sense of humor could fix at least 43% of the world’s bad moods.",
  "You’re the reason some group chats are still alive and thriving.",
  "You turn “just checking in” messages into actual lifelines for people.",
  "Your presence alone makes heavy days feel 20% lighter.",
  "If kindness were a language, you’d be fluent.",
  "You’re doing something remarkable: learning, healing, and still showing up.",
  "You’re like a perfectly timed cup of tea: warm, comforting, and exactly what was needed.",
  "You have a quiet confidence that’s only going to grow louder.",
  "You’re a limited edition human—no copies, no replacements, all original.",
  "You genuinely make the world better, even when you don’t notice it.",
  "You’re the kind of person people feel safe celebrating their weird with.",
  "You’re not “too much”—you’re exactly the right amount for the right people.",
  "You deserve good things simply because you exist, not because you earn them.",
  "You’re doing great. Not perfect, not finished—just genuinely, beautifully great. 🌟",
];

// Keep track of the last compliment index so we don't repeat it immediately
let lastIndex = -1;

/**
 * Returns a random index that is different from the previous one.
 * This avoids showing the same compliment twice in a row.
 */
function getRandomIndex() {
  if (compliments.length === 1) return 0;

  let index;
  do {
    index = Math.floor(Math.random() * compliments.length);
  } while (index === lastIndex);

  lastIndex = index;
  return index;
}

/**
 * Displays a new random compliment in the compliment box.
 * Also triggers a small animation class for a nicer visual effect.
 */
function showRandomCompliment() {
  const index = getRandomIndex();
  const text = compliments[index];

  // Remove animation class if present so we can restart it
  complimentText.classList.remove("animate-in");

  // Force reflow – this line lets us restart the CSS animation
  // by briefly resetting the element's layout state.
  // eslint-disable-next-line no-unused-expressions
  complimentText.offsetWidth;

  // Update the text content
  complimentText.textContent = text;

  // Re-add the animation class
  complimentText.classList.add("animate-in");
}

/**
 * Initializes event listeners and displays the first compliment.
 */
function initComplimentGenerator() {
  // Show an initial compliment when the page loads
  showRandomCompliment();

  // Button click: show a new compliment
  newComplimentBtn.addEventListener("click", showRandomCompliment);

  // Optional: allow pressing Enter or Space when the button is focused
  newComplimentBtn.addEventListener("keyup", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      showRandomCompliment();
    }
  });
}

// Wait for the DOM to be fully ready before initializing
document.addEventListener("DOMContentLoaded", initComplimentGenerator);
