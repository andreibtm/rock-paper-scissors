/* Variables */

let humanScore = 0;  
let computerScore = 0;

const options = document.querySelector("#options");
const optHuman= document.querySelector('#humanChoice');
const optComputer = document.querySelector('#computerChoice');
const winner = document.querySelector('#winner');
const score = document.querySelector('#score');
const finalWinner = document.querySelector('#finalWinner');

/* ----------*/


function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber < 0.33) {
      choice = "rock";
    } else if (randomNumber < 0.66) {
      choice = "paper";
    } else {
      choice = "scissors";
    }
  
    return choice;
}

function playRound(humanChoice, computerChoice) {
  optHuman.textContent = `Your choice: ${capitalizeFirstLetter(humanChoice)}`;
  optComputer.textContent = `Computer's choice: ${capitalizeFirstLetter(computerChoice)}`;

  // Compare choices and determine winner
  if (humanChoice === computerChoice) {
    winner.textContent = "It's a tie!";
    return 0;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    // Player wins
    winner.textContent = `You win! ${capitalizeFirstLetter(humanChoice)} beats ${capitalizeFirstLetter(computerChoice)}`;
    return 1;
  } else {
    // Computer wins
    winner.textContent = `You lose! ${capitalizeFirstLetter(computerChoice)} beats ${capitalizeFirstLetter(humanChoice)}`;
    return 2;
  }
}


function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


function playGame(humanChoice) {

  const humanSelection = humanChoice;
  const computerSelection = getComputerChoice().toLowerCase();
  let scoreCount = playRound(humanSelection, computerSelection);
  
  if (scoreCount === 1) {
    humanScore += 1;
  } else if (scoreCount === 2) {
    computerScore += 1;
  }

  score.textContent = `Score: You - ${humanScore}, Computer - ${computerScore}`;

  if (humanScore == 5) {
    finalWinner.textContent = `You won!`;
  } else if (computerScore == 5) {
    finalWinner.textContent = `Computer won!`;
  }
}

options.addEventListener('click', (event) => {
  let target = event.target;

  switch (target.id) {
    case 'rock':
      playGame(target.id);
      break;
      case 'paper':
      playGame(target.id);
      break;
      case 'scissors':
      playGame(target.id);
      break;
  }
});