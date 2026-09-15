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
