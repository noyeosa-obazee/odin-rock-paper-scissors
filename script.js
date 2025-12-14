const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");
const result = document.querySelector("#result");
const choices = document.querySelector("#choices");
const humanScoreDisplay = document.querySelector("#human-score-display");
const computerScoreDisplay = document.querySelector("#computer-score-display");
const finalResultContainer = document.querySelector("#final-result-container");
const finalResultText = document.querySelector("#final-result");

let humanScore = 0;
let computerScore = 0;
let numberOfTies = 0;

function playGame(e) {
  const button = e.target.closest("button");
  if (!button) return;

  const playerSelection = button.id.replace("-btn", "");
  playRound(playerSelection, getComputerChoice());
}

rockBtn.addEventListener("click", playGame);
paperBtn.addEventListener("click", playGame);
scissorsBtn.addEventListener("click", playGame);

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  return randomNumber === 0
    ? "rock"
    : randomNumber === 1
    ? "paper"
    : "scissors";
}

function playRound(humanChoice, computerChoice) {
  result.style.color = "#2c3e50";

  if (humanChoice === computerChoice) {
    numberOfTies++;
    result.textContent = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    result.style.color = "#27ae60";
  } else {
    computerScore++;
    result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    result.style.color = "#e74c3c";
  }

  humanScoreDisplay.textContent = humanScore;
  computerScoreDisplay.textContent = computerScore;

  choices.textContent = `You chose ${humanChoice} vs Computer chose ${computerChoice}`;

  if (computerScore === 5 || humanScore === 5) {
    finalResultContainer.classList.remove("hidden");

    const winnerMessage =
      computerScore > humanScore
        ? "Computer Wins the Game! 🤖"
        : "You Win the Game! 🎉";
    finalResultText.textContent = winnerMessage;

    rockBtn.removeEventListener("click", playGame);
    paperBtn.removeEventListener("click", playGame);
    scissorsBtn.removeEventListener("click", playGame);
  }
}
