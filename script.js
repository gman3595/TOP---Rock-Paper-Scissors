"use strict";

const computerChoiceDisplay = document.getElementById("computer-selection");
const userChoiceDisplay = document.getElementById("player-selection");
const resultDisplay = document.getElementById("round-winner");
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
const gameWinnerDisplay = document.getElementById("game-winner");
const possibleChoices = document.querySelectorAll("button");

let userChoice;
let computerChoice;
let roundWinner;
let playerScore = 0;
let computerScore = 0;
let gameIsOver = false;
let gameWinner;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.textContent = userChoice;
    computerChoice = computerPlay();
    computerChoiceDisplay.textContent = computerChoice;
    roundWinner = getRoundWinner();
    resultDisplay.textContent = roundWinner;

    if (!gameIsOver) {
      if (roundWinner === "YOU WIN!") {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
      }
      if (roundWinner === "YOU LOSE!") {
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
      }
      if (computerScore === 5 || playerScore === 5) {
        gameWinner =
          computerScore === 5 ? `Computer wins the game!` : `You win the game!`;
        gameWinnerDisplay.textContent = gameWinner;
        gameIsOver = true;
      }
    }
  })
);

function computerPlay() {
  let options = ["rock", "paper", "scissors"];
  const computerChoiceIndex = Math.floor(Math.random() * options.length);
  return options[computerChoiceIndex];
}

function getRoundWinner() {
  switch (userChoice + computerChoice) {
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      roundWinner = "TIE!";
      break;
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      roundWinner = "YOU WIN!";
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      roundWinner = "YOU LOSE!";
      break;
  }
  return roundWinner;
}
