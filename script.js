function getComputerChoice() {
  let choice = parseInt(Math.random() * 3);
  if (choice == 0) {
    return "rock";
  } else if (choice == 1) {
    return "paper";
  } else if (choice == 2) {
    return "scissors";
  }
}

function getHumanChoice() {
  return prompt("Enter one of the following: 'rock', 'paper, 'scissors'");
}

function playRound(humanChoice, computerChoice) {
  humanChoice = getHumanChoice().toLowerCase();
  computerChoice = getComputerChoice().toLowerCase();
  if (humanChoice == "rock") {
    if (computerChoice == "rock") {
      console.log("Tie!");
    }
    if (computerChoice == "paper") {
      console.log("You Lose! Paper beats Rock");
    }
    if (computerChoice == "scissors") {
      console.log("You Win! Rock beats Scissors");
    }
  }
  if (humanChoice == "paper") {
    if (computerChoice == "rock") {
      console.log("You Win! Paper beats Rock");
    }
    if (computerChoice == "paper") {
      console.log("Tie!");
    }
    if (computerChoice == "scissors") {
      console.log("You Lose! Scissors beat Paper");
    }
  }
  if (humanChoice == "scissors") {
    if (computerChoice == "rock") {
      console.log("You Lose! Rock beats Scissors");
    }
    if (computerChoice == "paper") {
      console.log("You Win! Scissors beat Paper");
    }
    if (computerChoice == "scissors") {
      console.log("Tie!");
    }
  }
}
