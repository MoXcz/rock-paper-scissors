let humanChoice = 0;
let computerChoice = 0;
const button_paper = document.querySelector(".paper");
const button_rock = document.querySelector(".rock");
const button_scissors = document.querySelector(".scissors");
const buttons = document.querySelector(".buttons");
playGame();

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  buttons.addEventListener("click", (event) => {
    let target = event.target;

    switch (target.getAttribute("class")) {
      case "paper":
        playRound("paper", getComputerChoice());
        break;
      case "rock":
        playRound("rock", getComputerChoice());
        break;
      case "scissors":
        playRound("scissors", getComputerChoice());
        break;
    }
  });

  if (humanScore > computerScore) {
    console.log("You Win the Game!");
  } else if (humanScore < computerScore) {
    console.log("You Lose the Game");
  } else {
    console.log("There is a Tie!");
  }

  function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock") {
      if (computerChoice == "rock") {
        console.log("Tie!");
      }
      if (computerChoice == "paper") {
        console.log("You Lose! Paper beats Rock");
        computerScore++;
      }
      if (computerChoice == "scissors") {
        console.log("You Win! Rock beats Scissors");
        humanScore++;
      }
    }
    if (humanChoice == "paper") {
      if (computerChoice == "rock") {
        console.log("You Win! Paper beats Rock");
        humanScore++;
      }
      if (computerChoice == "paper") {
        console.log("Tie!");
      }
      if (computerChoice == "scissors") {
        console.log("You Lose! Scissors beat Paper");
        computerScore++;
      }
    }
    if (humanChoice == "scissors") {
      if (computerChoice == "rock") {
        console.log("You Lose! Rock beats Scissors");
        computerScore++;
      }
      if (computerChoice == "paper") {
        console.log("You Win! Scissors beat Paper");
        humanScore++;
      }
      if (computerChoice == "scissors") {
        console.log("Tie!");
      }
    }
  }
}

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

function getChoices() {
  computerChoice = getComputerChoice();
  humanChoice = getHumanChoice();
}
