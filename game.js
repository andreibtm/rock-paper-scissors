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

function getHumanChoice() {
  let humanChoice = prompt("Chosse between rock, paper or scissors!")
  const choiceList = ["rock", "paper", "scissors"];

  while(choiceList.indexOf(humanChoice) === -1 ){
    humanChoice = prompt("Type a valid choice! Chosse between rock, paper or scissors!")
  }

  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  // Compare choices and determine winner
  if (humanChoice === computerChoice) {
    console.log("It's a tie!")
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    // Player wins
    humanScore++;
    console.log(`You win! ${capitalizeFirstLetter(humanChoice)} beats ${capitalizeFirstLetter(computerChoice)}`);
  } else {
    // Computer wins
    computerScore++;
    console.log(`You lose! ${capitalizeFirstLetter(computerChoice)} beats ${capitalizeFirstLetter(humanChoice)}`);
  }
}

const humanSelection = getHumanChoice().toLowerCase();
const computerSelection = getComputerChoice().toLowerCase();

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}