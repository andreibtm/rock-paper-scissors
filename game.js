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
  console.log(`Your choice: ${capitalizeFirstLetter(humanChoice)}`)
  console.log(`Computer's choice: ${capitalizeFirstLetter(computerChoice)}`)

  // Compare choices and determine winner
  if (humanChoice === computerChoice) {
    console.log("It's a tie!")
    return 0;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    // Player wins
    console.log(`You win! ${capitalizeFirstLetter(humanChoice)} beats ${capitalizeFirstLetter(computerChoice)}`);
    return 1;
  } else {
    // Computer wins
    console.log(`You lose! ${capitalizeFirstLetter(computerChoice)} beats ${capitalizeFirstLetter(humanChoice)}`);
    return 2;
  }
}


function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


function playGame(humanChoice) {
  let humanScore = 0;
  let computerScore = 0;

  const humanSelection = humanChoice;
  const computerSelection = getComputerChoice().toLowerCase();
  let scoreCount = playRound(humanSelection, computerSelection);
  
  if (scoreCount === 1) {
    humanScore += 1;
  } else if (scoreCount === 2) {
    computerScore += 1;
  }

  console.log(`Final Score: You - ${humanScore}, Computer - ${computerScore}`);
}

const options = document.querySelector("#options");

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