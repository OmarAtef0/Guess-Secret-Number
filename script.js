"use strict";

let secretNumber = Math.trunc(Math.random() * 101);

let score = 20;
let play = 1;
let highscore = 0;

function displayText(element, message) {
  document.querySelector(`.${element}`).textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess && play) {
    document.querySelector(".message").textContent = " ⛔ No Number";
  } else if (guess === secretNumber && play) {
    highscore = Math.max(highscore, score);
    document.querySelector(
      ".label-highscore"
    ).textContent = `🥇 Highscore: ${highscore}`;
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    if (score === 20) {
      displayText("message", "😍 This is an ACE, You're a GENUIS");
    } else {
      displayText("message", " 🎉  Correct Number!");
    }
  } else if (guess > secretNumber && play) {
    displayText("message", " 📈 Too high!");
    score--;
  } else if (guess < secretNumber && play) {
    displayText("message", " 📉  Too low!");
    score--;
  }

  displayText("score", score);

  if (score == 0) {
    play = 0;
    displayText("message", " 😭  You lost the game!");
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  play = 1;
  displayText("number", "?");

  document.querySelector(".guess").value = null;
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".message").textContent = " Start guessing...";
});
