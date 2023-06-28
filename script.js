"use strict";

// document.querySelector(".message").textContent = "🎉 Correct Number!";
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value;

//Actual development of the project starts!

//EVENT:-It is something(change or action) on our webpage it could be anything amouse click input from keyboard anything.
//eventListener:-with this we wait for a certain event to happen then react to it.
//.addEventListener(type of event,eventHandler)

//Defining the secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = Number(document.querySelector(".score").textContent);
let highScore = Number(document.querySelector(".highscore").textContent);
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //For no input
  if (!guess) {
    displayMessage("🚫 No Number!");
  }
  //When guess is right
  else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  }
  //When guess is not correct.
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? "📈 Number is too high!"
          : "📉 Number is too low!"
      );

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("😓 OOPS!YOU LOST THE GAME");
      document.querySelector(".score").textContent = 0;
    }
  }
});
//Again button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start Guessing...");
  highScore = 0;
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
