playGame();

function playGame() {
  const buttons = document.querySelector(".buttons");
  const score = document.querySelector(".score");
  const scoreboard = document.querySelector(".scoreboard");
  const restart = document.querySelector(".restart");
  let humanScore = 0;
  let computerScore = 0;
  let winnerScore = 5;
  buttons.addEventListener("click", (event) => {
    let target = event.target;

    if (humanScore == winnerScore || computerScore == winnerScore) {
      checkWinner();
      restart.style.display = "block";
      restart.addEventListener("click", () => {
        restartGame();
      });
    } else {
      switch (target.getAttribute("class")) {
        case "paper":
          playRound("paper", getComputerChoice());
          scoreboard.textContent = `${humanScore}  ${computerScore}`;
          break;
        case "rock":
          playRound("rock", getComputerChoice());
          scoreboard.textContent = `${humanScore}  ${computerScore}`;
          break;
        case "scissors":
          playRound("scissors", getComputerChoice());
          scoreboard.textContent = `${humanScore}  ${computerScore}`;
          break;
      }
    }
  });

  function restartGame() {
    humanScore = 0;
    computerScore = 0;
    restart.style.display = "none";
    scoreboard.textContent = `${humanScore}  ${computerScore}`;
  }

  function checkWinner() {
    if (humanScore == 5 || computerScore == 5) {
      if (humanScore > computerScore) {
        score.textContent = "You Win!";
      } else if (humanScore < computerScore) {
        score.textContent = "You Lose!";
      } else {
        score.textContent = "There's a tie!";
      }
    }
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
        score.textContent = "There's a tie!";
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
        score.textContent = "There's a tie!";
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
