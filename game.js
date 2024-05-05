let humanScore = 0;
let computerScore = 0;

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

    return humanChoice;
}