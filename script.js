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

function getHumanChoice() {
  const choiceHuman = prompt("Rock/Paper/Scissor: ").trim().toUpperCase();
  return choiceHuman;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "ROCK" && computerChoice === "PAPER") {
    computerScore++;
    console.log("Vous avez perdu ! Papier bat Pierre");
  } else if (humanChoice === "ROCK" && computerChoice === "SCISSOR") {
    humanScore++;
    console.log("Vous avez gagné ! Pierre bat Ciseaux");
  } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
    humanScore++;
    console.log("Vous avez gagné ! Papier bat Pierre");
  } else if (humanChoice === "PAPER" && computerChoice === "SCISSOR") {
    computerScore++;
    console.log("Vous avez perdu ! Ciseaux bat Papier");
  } else if (humanChoice === "SCISSOR" && computerChoice === "ROCK") {
    computerScore++;
    console.log("Vous avez perdu ! Pierre bat Ciseaux");
  } else if (humanChoice === "SCISSOR" && computerChoice === "PAPER") {
    humanScore++;
    console.log("Vous avez gagné ! Ciseaux bat Papier");
  } else {
    console.log("Egalité ! Même choix");
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
