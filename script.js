// ===============================
// DATA
// ===============================

const compliments = [
  "You're doing an amazing job, even on days that feel heavy.",
  "Your curiosity is one of your best superpowers.",
  "You make complicated things feel wonderfully simple.",
  "Your laugh makes other people want to laugh too.",
  "You have a gift for making people feel seen and heard.",
  "Your ideas are refreshingly creative.",
  "You’re kinder than you realize—and it matters more than you know.",
  "Your future self is already proud of you.",
  "You have a remarkable ability to stay resilient.",
  "The way you keep going says so much about your strength.",
  "You bring warmth into every space you enter.",
  "Your attention to detail is seriously impressive.",
  "You make the world feel a bit more gentle.",
  "Your presence makes people feel safer.",
  "You’re allowed to be proud of how far you’ve come.",
  "Your perspective is valuable and worth sharing.",
  "You’re more capable than your doubts suggest.",
  "There’s something very comforting about your energy.",
  "You turn small moments into good memories.",
  "You’re growing in ways you don’t even see yet.",
  "Your kindness ripples farther than you realize.",
  "You think deeply, and it shows.",
  "You adapt to challenges with quiet bravery.",
  "You’re the kind of person others feel lucky to know.",
  "Your sense of humor is delightful.",
  "You notice things others miss.",
  "Your hard work is paving the way for future success.",
  "Your honesty is refreshing.",
  "You’re better at this than you think.",
  "You’re learning faster than you realize.",
  "You make progress even on tough days.",
  "Your patience is one of your strengths.",
  "You solve problems creatively.",
  "You bring thoughtfulness into everything you do.",
  "You make people feel included.",
  "Your smile is contagious.",
  "You’re brave for trying even when it's hard.",
  "You turn setbacks into stepping stones.",
  "Your calm energy helps others relax.",
  "You’re building a life you’ll be proud of.",
  "Your creativity colors the world.",
  "You were a bright spot in someone’s day today.",
  "Your presence makes challenges feel smaller.",
  "You’re stronger than yesterday’s worries.",
  "You’re seen, even when you feel overlooked.",
  "You find good in tough moments.",
  "Your genuine care impacts people deeply.",
  "Teamwork feels easy with you.",
  "Your intuition is powerful.",
  "Your mind is wonderfully bright.",
  "You’re on your own timeline—and it's the right one.",
  "Your growth is inspiring.",
  "You bring magic into ordinary moments.",
  "Your kindness is never wasted.",
  "You adapt quickly and gracefully.",
  "You make days feel lighter.",
  "You’re lovable in ways you don’t even notice.",
  "You bring stability to chaos.",
  "You’re doing better than you think.",
  "Your voice matters.",
  "Your awareness is your strength.",
  "You’re making your future self proud.",
  "You help others feel understood.",
  "Your gentleness is powerful.",
  "You persevere in ways others don’t see.",
  "You bring comfort wherever you go.",
  "You're more ready than you think.",
  "You handle change with courage.",
  "You care deeply, and it shows.",
  "You're allowed to take up space.",
  "Your effort is meaningful.",
  "You're dependable in the best way.",
  "You're quietly becoming someone incredible.",
  "You make challenges seem manageable.",
  "Your compassion is rare.",
  "You're growing stronger than your doubts.",
  "You're doing better than yesterday's worries tell you.",
  "You bring peace into stressful moments.",
  "You're turning dreams into plans.",
  "You're becoming the version of yourself you needed.",
  "You're making tiny miracles happen every day.",
  "You're a masterpiece in progress.",
  "Your resilience is admirable.",
  "You bring a glow wherever you go.",
  "You’re doing beautiful work on yourself.",
  "You inspire growth in others.",
  "You're learning to choose yourself—and that's powerful.",
  "Your authenticity is refreshing.",
  "You care in ways that heal others.",
  "You're stronger than your challenges.",
  "You add value just by being here.",
  "You're becoming someone you're going to be proud of.",
  "Your journey is unfolding beautifully.",
  "You're doing enough—and you ARE enough.",
];

const jokes = [
  {
    setup: "Why did the scarecrow win an award?",
    punchline: "Because he was outstanding in his field!",
  },
  {
    setup: "Why don’t eggs tell jokes?",
    punchline: "They’d crack each other up.",
  },
  {
    setup: "What do you call cheese that isn’t yours?",
    punchline: "Nacho cheese.",
  },
  {
    setup: "Why did the math book look sad?",
    punchline: "Because it had too many problems.",
  },
  {
    setup: "Why can’t you give Elsa a balloon?",
    punchline: "Because she’ll let it go.",
  },
  {
    setup: "Why did the bicycle fall over?",
    punchline: "Because it was two-tired.",
  },
  {
    setup: "Why don’t skeletons fight?",
    punchline: "They don’t have the guts.",
  },
  {
    setup: "What do you call a bear with no teeth?",
    punchline: "A gummy bear.",
  },
  {
    setup: "Why did the cookie go to the hospital?",
    punchline: "It felt crumby.",
  },
  { setup: "What do you call fake spaghetti?", punchline: "An impasta." },
  {
    setup: "Why did the golfer bring two pants?",
    punchline: "In case he got a hole in one.",
  },
  {
    setup: "Why was the computer cold?",
    punchline: "It left its Windows open.",
  },
  {
    setup: "Why did the student bring a ladder to school?",
    punchline: "To go to high school.",
  },
  {
    setup: "Why is six afraid of seven?",
    punchline: "Because seven eight nine.",
  },
  { setup: "What do you call a sleeping bull?", punchline: "A bulldozer." },
  {
    setup: "Why did the tomato turn red?",
    punchline: "It saw the salad dressing.",
  },
  {
    setup: "What do you call a fish with a bowtie?",
    punchline: "Sofishticated.",
  },
  { setup: "Why was the broom late?", punchline: "It swept in." },
  {
    setup: "What do you call an alligator in a vest?",
    punchline: "An investigator.",
  },
  { setup: "Why don’t oysters share pearls?", punchline: "They're shellfish." },
  {
    setup: "Why did the musician bring a ladder?",
    punchline: "To reach high notes.",
  },
  {
    setup: "What did one wall say to the other?",
    punchline: "Meet you at the corner.",
  },
  { setup: "Why did the orange stop?", punchline: "It ran out of juice." },
  { setup: "What did the zero say to the eight?", punchline: "Nice belt!" },
  {
    setup: "What do you call a snowman with abs?",
    punchline: "An abdominal snowman.",
  },
  {
    setup: "Why did the cow cross the road?",
    punchline: "To get to the udder side.",
  },
  {
    setup: "Why do seagulls fly over the sea?",
    punchline: "Because if they flew over the bay, they'd be bagels.",
  },
  {
    setup: "Why did the chicken join a band?",
    punchline: "Because it had the drumsticks.",
  },
  { setup: "What do you call a pile of cats?", punchline: "A meowtain." },
  {
    setup: "Why can't a nose be 12 inches long?",
    punchline: "Because then it would be a foot.",
  },
  "Parallel lines have so much in common… it’s a shame they’ll never meet.",
];

// Corner visuals
const cornerEmojis = [
  "✨",
  "🌟",
  "🍀",
  "🔥",
  "💎",
  "⭐",
  "🎵",
  "🎉",
  "🧡",
  "🌈",
  "🦋",
  "💫",
];
const cornerColors = [
  "#ff6b6b",
  "#ff9f1c",
  "#06d6a0",
  "#118ab2",
  "#8338ec",
  "#ff4d6d",
];

// Timeout tracker for punchline
let punchlineTimeoutId = null;

// ===============================
// HELPERS
// ===============================
function randomIndex(max) {
  return Math.floor(Math.random() * max);
}

// Update the two card circles with the same emoji/color
function updateCardDecorations() {
  const topRight = document.querySelector(".card-corner-top-right");
  const bottomLeft = document.querySelector(".card-corner-bottom-left");
  const emoji = cornerEmojis[randomIndex(cornerEmojis.length)];
  const color = cornerColors[randomIndex(cornerColors.length)];

  topRight.style.background = color;
  bottomLeft.style.background = color;

  topRight.querySelector(".corner-emoji").textContent = emoji;
  bottomLeft.querySelector(".corner-emoji").textContent = emoji;
}

// ===============================
// COMPLIMENT
// ===============================
function showCompliment() {
  const text = document.getElementById("display-text");
  const punchline = document.getElementById("punchline");
  const label = document.getElementById("card-label");

  if (punchlineTimeoutId) clearTimeout(punchlineTimeoutId);

  punchline.textContent = "";
  punchline.classList.remove("show");

  label.textContent = "Compliment";
  text.textContent = compliments[randomIndex(compliments.length)];

  updateCardDecorations();
}

// ===============================
// JOKE
// ===============================
function showJoke() {
  const text = document.getElementById("display-text");
  const punchlineEl = document.getElementById("punchline");
  const label = document.getElementById("card-label");

  if (punchlineTimeoutId) clearTimeout(punchlineTimeoutId);

  punchlineEl.textContent = "";
  punchlineEl.classList.remove("show");

  label.textContent = "Joke";

  const joke = jokes[randomIndex(jokes.length)];

  // One-liner
  if (typeof joke === "string") {
    text.textContent = joke;
    return updateCardDecorations();
  }

  // Setup
  text.textContent = joke.setup;

  // Punchline (delayed)
  punchlineEl.textContent = joke.punchline;

  punchlineTimeoutId = setTimeout(() => {
    punchlineEl.classList.add("show");
    punchlineTimeoutId = null;
  }, 2000);

  updateCardDecorations();
}

// ===============================
// INIT
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("complimentBtn")
    .addEventListener("click", showCompliment);
  document.getElementById("jokeBtn").addEventListener("click", showJoke);

  updateCardDecorations();
});
