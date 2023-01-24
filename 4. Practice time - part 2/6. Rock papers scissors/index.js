let hands = ["rock", "paper", "scissor"];

// Create a function that returns a random item from the array
let randomHand = Math.floor(Math.random() * 3);
function getRandomHand() {
  return hands[randomHand];
}
console.log(getRandomHand(hands));
