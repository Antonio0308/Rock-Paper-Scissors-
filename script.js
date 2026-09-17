const buttons = document.querySelectorAll("button");
const scorePlayer = document.querySelector(".scorePlayer");
const scoreComputer = document.querySelector(".scoreComputer");
const resultRound = document.querySelector(".resultRound");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choiceNum = Math.round(Math.random() * 2);
  let choiceComputer;
  if (choiceNum === 0) {
    choiceComputer = "ROCK";
  } else if (choiceNum === 1) {
    choiceComputer = "PAPER";
  } else {
    choiceComputer = "SCISSOR";
  }

  return choiceComputer;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "ROCK" && computerChoice === "PAPER") {
    computerScore++;
    return "Vous avez perdu ! Papier bat Pierre";
  } else if (humanChoice === "ROCK" && computerChoice === "SCISSOR") {
    humanScore++;
    return "Vous avez gagné ! Pierre bat Ciseaux";
  } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
    humanScore++;
    return "Vous avez gagné ! Papier bat Pierre";
  } else if (humanChoice === "PAPER" && computerChoice === "SCISSOR") {
    computerScore++;
    return "Vous avez perdu ! Ciseaux bat Papier";
  } else if (humanChoice === "SCISSOR" && computerChoice === "ROCK") {
    computerScore++;
    return "Vous avez perdu ! Pierre bat Ciseaux";
  } else if (humanChoice === "SCISSOR" && computerChoice === "PAPER") {
    humanScore++;
    return "Vous avez gagné ! Ciseaux bat Papier";
  } else {
    return "Egalité ! Même choix";
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (humanScore === 5) {
      resultRound.textContent = "Player wins !";
    } else if (computerScore === 5) {
      resultRound.textContent = "Computer wins !";
    } else {
      const humanSelection = e.target.textContent.toUpperCase();
      const computerSelection = getComputerChoice();
      const resultRoundText = playRound(humanSelection, computerSelection);
      scorePlayer.textContent = humanScore;
      scoreComputer.textContent = computerScore;
      resultRound.textContent = resultRoundText;
    }
  });
});
