// let plusOnePoint = document.getElementById("plus-one-point");
// let plusTwoPoint = document.getElementById("plus-two-point");
// let plusThreePoint = document.getElementById("plus-three-point");

let scoreOne = document.getElementById("home-score");
let scoreTwo = document.getElementById("away-score");
let homePoint = 0;
let awayPoint = 0;
// create the function to add one home
function plusOneHome() {
  homePoint += 1;
  scoreOne.textContent = homePoint;
  console.log(homePoint);
}
// create the function to add two home
function plusTwoHome() {
  homePoint += 2;
  scoreOne.textContent = homePoint;
  console.log(homePoint);
}
// create the function to add three home
function plusThreeHome() {
  homePoint += 3;
  scoreOne.textContent = homePoint;
  console.log(homePoint);
}
// create the function to add one away
function plusOneAway() {
  awayPoint += 1;
  scoreTwo.textContent = awayPoint;
  console.log(awayPoint);
}
// create the function to add two away
function plusTwoAway() {
  awayPoint += 2;
  scoreTwo.textContent = awayPoint;
  console.log(awayPoint);
}
// create the function to add three away
function plusThreeAway() {
  awayPoint += 3;
  scoreTwo.textContent = awayPoint;
  console.log(awayPoint);
}
