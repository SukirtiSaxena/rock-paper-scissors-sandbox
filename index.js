const getRandomMove = () => {
  const moves = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
};

const getOutcome = (moveOne, moveTwo) => {
  if (moveOne === moveTwo) {
    return "It's a draw!";
  }

  if (
    (moveOne === "scissors" && moveTwo === "paper") ||
    (moveOne === "rock" && moveTwo === "scissors") ||
    (moveOne === "paper" && moveTwo === "rock")
  ) {
    return "Player One wins!";
  }

  return "Player Two wins!";
};

// Removing elements (nodes) from the DOM
const resetGame = () => {
  if (document.getElementById("outcome")) {
    const outcome = document.body.lastChild;
    document.body.removeChild(outcome);
  }
};

const playGame = () => {
  resetGame();
  const playerOneMove = getRandomMove();
  const playerTwoMove = getRandomMove();
  const outcome = getOutcome(playerOneMove, playerTwoMove);
  updateDOM(playerOneMove, playerTwoMove, outcome);
};

const updateDOM = (moveOne, moveTwo, outcome) => {
  const playerOneMove = document.getElementById("player-one-move__img");
  const playerTwoMove = document.getElementById("player-two-move__img");
  playerOneMove.src = "./images/"+moveOne+".png";
  playerTwoMove.src = "./images/"+moveTwo+".png";

  const myWinner = document.createElement("h3");
  myWinner.textContent = outcome;
  const body = document.querySelector("body");
  body.append(myWinner);
};

const playButton = document.getElementById("play-btn");
playButton.addEventListener("click", playGame);
