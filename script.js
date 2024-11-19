// DOM Elements
const wordEl = document.getElementById("word");
const textEl = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endGameContainer = document.getElementById("end-game-container");
const settingsBtn = document.getElementById("settings-btn");
const settings = document.getElementById("settings");
const difficultySelect = document.getElementById("difficulty");
 
// Array
const words = [
"apple", "bridge", "cloud", "shadow", "river", "pizza", "basket", "travel", "galaxy", "sunset", "gentle", "forest", "mirror",
"thunder", "breeze", "cactus", "ocean", "dragon", "butter", "zebra", "circus", "camera", "yellow", "wizard", "puzzle", "candle",
"silver", "whisper", "silent", "rocket", "giraffe", "noodle", "horizon", "marble", "tunnel", "meadow", "lantern", "melody", "waffle",
"bicycle", "planet", "sunrise", "purple", "jelly", "lizard", "comet", "paper", "rainbow", "jungle", "sparkle", "mountain", "anchor",
"adventure", "blossom", "balloon", "diamond", "ribbon", "soccer", "volcano", "lemon", "desert", "pocket", "bubble", "iguana", "zipper",
"guitar", "fairy", "cottage", "copper", "magic", "button", "painter", "blanket", "canyon", "window", "castle", "north", "ribbon", "fairy",
"lamp", "music", "crystal", "beach", "storm", "shell", "puzzle", "daisy", "whisper", "apple", "forest", "cliff", "bubble", "spark",
"ice", "dream", "fog", "forest", "ocean", "flame", "piano", "garden", "blizzard", "pebble", "helmet", "treasure", "breeze", "river", "sketch",
"cloud", "sunflower", "night", "island", "crystal", "cabin", "silk", "whale", "jungle", "grape", "sapphire", "quilt", "mirror", "sunbeam",
"echo", "clover", "sandwich", "oasis", "parrot", "ghost", "orchid", "goblin", "castle", "feather", "quartz", "journey", "bubble", "rain",
"ember", "pine", "tulip", "dolphin", "storm", "treetop", "moon", "beacon", "cliff", "ember", "fox", "bison", "wander", "potion", "galaxy",
"sage", "moonlight", "crater", "maple", "willow", "thread", "pearl", "maze", "nightfall", "trellis", "flute", "canvas", "owl", "willow",
"harbor", "vivid", "journey", "velvet", "mint", "vessel", "raven", "hollow", "rainbow", "prairie", "sword", "charm", "blossom", "clock",
"shadow", "panther", "cupcake", "pineapple", "ivy", "branch", "sunshine", "story", "plum", "compass", "daisy", "rose", "puddle", "butterfly",
"fern", "gem", "valley", "mountain", "lantern", "violet", "planet", "adventure", "sprout", "feather", "honey", "lake", "silver", "toast", "creek",
 "orchard", "echo", "ivy", "bliss", "feast", "maze", "hazel", "comet", "petal", "anchor", "fable", "woodland", "sparkle", "reef", "dawn", "meadow",
"ember", "frost", "beetle", "cinnamon", "glacier", "freckle", "echo", "birch", "map", "summit", "grain", "skylark", "quiver", "petunia", "summit",
"plume", "bramble", "grove", "sprig", "bayou", "mulberry", "foliage", "thyme", "drift", "thistle", "icicle", "dandelion", "nest", "tide",
"canyon", "basil", "caramel", "fig", "quill", "serene", "sprinkle", "creek", "briar", "shimmer", "lily", "dew", "peach", "glen", "clover",
"pond", "rosebud", "brisk", "whisper", "glow", "lunar", "silhouette", "wind", "acorn", "birch", "fern", "buttercup", "sage", "elm", "archway",
"groove", "thicket", "berry", "garden", "lighthouse", "plume", "haven", "waterfall", "seashell", "bay", "glow", "sunrise", "pebble", "cascade", "serenity", "twig"
];
 
// Initialize game variables
let randomWord;
let score = 0;
let time = 10;
let difficulty = difficultySelect.value; // Initial difficulty setting
 
// Focus input on start
textEl.focus();
 
// Start counting down immediately
const timeInterval = setInterval(updateTime, 1000);
 
// Generate a random word and display it
function addWordToDOM() {
  randomWord = words[Math.floor(Math.random() * words.length)];
  wordEl.innerText = randomWord;
}
 
// Update score
function updateScore() {
  score++;
  scoreEl.innerText = score;
}
 
// Update time
function updateTime() {
  time--;
  timeEl.innerText = time + "s";
 
  // Check if time has run out
  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}
 
// Game over, show end screen
function gameOver() {
  endGameContainer.innerHTML = `
    <h1>Time's up!</h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">Try again!</button>
  `;
  endGameContainer.style.display = "flex";
}
 
// Event listener for typing input
textEl.addEventListener("input", (e) => {
  const insertedText = e.target.value;
 
  if (insertedText === randomWord) {
    // Correct word entered
    updateScore();
    addWordToDOM();
    e.target.value = ""; // Clear input
 
    // Add time based on difficulty
    if (difficulty === "hard") {
      time += 3;
    } else if (difficulty === "medium") {
      time += 6;
    } else {
      time += 10;
    }
    updateTime(); // Update time display immediately
  }
});
 
// Event listener for difficulty change
difficultySelect.addEventListener("change", (e) => {
  difficulty = e.target.value;
 
  // Set time limit based on difficulty
  if (difficulty === "hard") {
    time = 5;
  } else if (difficulty === "medium") {
    time = 8;
  } else {
    time = 10;
  }
  timeEl.innerText = time + "s";
});
 
// Event listener for settings toggle
settingsBtn.addEventListener("click", () => {
  settings.classList.toggle("hide");
});
 
// Initial setup
addWordToDOM();
 
