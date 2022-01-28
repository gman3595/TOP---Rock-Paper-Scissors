"use strict";

// Rock, Paper, Scissors Game

// let playerSelection = prompt("Rock, Paper, or Scissors?");

// Generates computer's play, randomly
function computerPlay() {
  let computerChoice = ["rock", "paper", "scissors"];
  const computerChoiceIndex = Math.floor(Math.random() * computerChoice.length);
  return computerChoice[computerChoiceIndex];
}

// Genereates winner of one game
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  let winner = "";

  if (playerSelection === computerSelection) {
    return (winner = "None, it's a tie!");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    winner = "Computer";
    return winner;
    // return `Computer selected ${computerSelection}, you lose!`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    winner = "Human";
    return winner;
    // return `Computer selected ${computerSelection}, you win!`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    winner = "Human";
    return winner;
    // return `Computer selected ${computerSelection}, you win!`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    winner = "Computer";
    return winner;
    // return `Computer selected ${computerSelection}, you lose!`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    winner = "Computer";
    return winner;
    // return `Computer selected ${computerSelection}, you lose!`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    winner = "Human";
    return winner;
    // return `Computer selected ${computerSelection}, you win!`;
  }
}

let computerWins = 0;
let humanWins = 0;
let ties = 0;

// Determines winner based on best of five games
function game() {
  for (let i = 1; i <= 5; i++) {
    let playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
    let getComputerSelection = computerPlay();

    let winner = playRound(playerSelection, getComputerSelection);

    if (winner === "Human") {
      console.log(
        `Human wins: ${playerSelection} beats ${getComputerSelection}`
      );
      humanWins++;
    } else if (winner === "Computer") {
      console.log(
        `Computer wins: ${getComputerSelection} beats ${playerSelection}`
      );
      computerWins++;
    } else {
      console.log(
        `It's a tie! Computer: ${getComputerSelection} vs. Human: ${playerSelection}`
      );
      ties++;
    }
  }

  if (humanWins === computerWins) {
    return `It's a tie. Human wins: ${humanWins} / Computer wins: ${computerWins}. / Ties: ${ties}`;
  } else if (humanWins > computerWins) {
    return `Human wins. Human wins: ${humanWins} / Computer wins: ${computerWins}. / Ties: ${ties}`;
  } else {
    return `Computer wins. Human wins: ${humanWins} / Computer wins: ${computerWins}. / Ties: ${ties}`;
  }
}

console.log(game());
