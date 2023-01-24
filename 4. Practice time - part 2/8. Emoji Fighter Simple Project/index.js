let fighters = [
  "🐉",
  "🐥",
  "🐊",
  "💩",
  "🦍",
  "🐢",
  "🐩",
  "🦭",
  "🦀",
  "🐝",
  "🤖",
  "🐘",
  "🐸",
  "🕷",
  "🐆",
  "🦕",
  "🦁",
];

let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fightButton");
let player = "";

function getRandomEmoji() {
  let randomEmoji = Math.floor(Math.random() * fighters.length);
  player = fighters[randomEmoji];
  return player;
}

fightButton.addEventListener("click", function () {
  // Challenge:
  // When the user clicks on the "Pick Fighters" button, pick two random
  // Generate random fighters for the 2 sides
  let player1 = getRandomEmoji();
  let player2 = getRandomEmoji();
  // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
  // Place the generated players into the dom
  stageEl.textContent = `${player1} vs ${player2}`;
});
