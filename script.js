let humanChoice = 0;
let computerChoice = 0;
const buttons = document.querySelector(".buttons");
const score = document.querySelector(".score");
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
        score.textContent = "There's a tie!";
      }
      if (computerChoice == "paper") {
        score.textContent = "You Lose! Paper beats Rock";
        computerScore++;
      }
      if (computerChoice == "scissors") {
        score.textContent = "You Win! Rock beats Scissors";
        humanScore++;
      }
    }
    if (humanChoice == "paper") {
      if (computerChoice == "rock") {
        score.textContent = "You Win! Paper beats Rock";
        humanScore++;
      }
      if (computerChoice == "paper") {
        score.textContent = "Tie!";
      }
      if (computerChoice == "scissors") {
        score.textContent = "You Lose! Scissors beat Paper";
        computerScore++;
      }
    }
    if (humanChoice == "scissors") {
      if (computerChoice == "rock") {
        score.textContent = "You Lose! Rock beats Scissors";
        computerScore++;
      }
      if (computerChoice == "paper") {
        score.textContent = "You Win! Scissors beat Paper";
        humanScore++;
      }
      if (computerChoice == "scissors") {
        score.textContent = "Tie!";
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
