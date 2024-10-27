/*        User Stories:
AAU 1: As a player, I want to start a new game, 
so that I can play tic-tac-toe from the beginning.

AAU 2: As a player, I want to click on a square to make my move, 
so that I can place my mark (X or O) on the board.

AAU 3: As a player, I want the game to detect a win, 
so that I know when I have won or lost game.

AAU 4: As a player, I want the game to detect a draw, 
so that I know when the game ends without a winner.

AAU 5: As a player, I want to restart the game, 
so that I can play a new round.

//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.
*/

/*-------------------------------- Constants --------------------------------*/
//possible winning combos
const winningCombos = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [0, 4, 8], // Top-left to bottom-right diagonal
  [2, 4, 6], // Top-right to bottom-left diagonal
];
/*---------------------------- Variables (state) ----------------------------*/
let board;
let turn;
let winner;
let tie;

/*------------------------ Cached Element References ------------------------*/
//selects all square on the board
const squareEls = document.querySelectorAll(".square");
console.log("Square elements length", squareEls.length);
// Meesage element to display game status
const messageEl = document.querySelector("#message");
console.log("Message Element:", messageEl);

/*-------------------------------- Functions --------------------------------*/
//initializes game state
function init() {
  board = ["", "", "", "", "", "", "", "", ""];
  turn = "X";
  winner = false;
  tie = false;
  console.log("Game initialized");

  render(); //calls render to update the initial game.
}

function render() {
  updateBoard(); //calls the update board function
  updateMessage(); //calls the update message function
  console.log("Rendering the game state...");
}
//updates board display
function updateBoard() {
  board.forEach((value, index) => {
    if (squareEls[index]) {
      squareEls[index].innerText = value;
    }
  });
}
//updates message based on game state
function updateMessage() {
  if (!winner && !tie) {
    //game still in progress
    messageEl.innerText = `Player ${turn}'s turn`;
  } else if (tie) {
    messageEl.innerText = "It's a tie!";
  } else {
    messageEl.innerText = `Winner!!!!, Player ${turn}'s wins!`;
  }
}
//handles each click event on the board
function handleClick(event) {
  const squareIndex = parseInt(event.target.id);
  // Check if the square is taken or if the game has been won
  if (board[squareIndex] !== "" || winner) return;
  placePiece(squareIndex);
  checkForWinner();
  checkForTie();
  switchPlayerTurn();
  render();
}
function placePiece(index) {
  board[index] = turn;
  console.log(board); //testing the board
}

//checks if the player has won.
function checkForWinner() {
  winningCombos.forEach((combo) => {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      winner = true;
    }
  });
  console.log("Winner", winner); // testing
}

function checkForTie() {
  if (winner) return;
  tie = board.every((cell) => cell !== "");
  console.log("Tie", tie);
}
//switches the players from 'X' to 'O'
function switchPlayerTurn() {
  if (winner) return;
  turn = turn === "X" ? "O" : "X";
  console.log("Turn:", turn); // testing
}

/*-------------------------------- event listeners --------------------------------*/
squareEls.forEach((square) => {
  square.addEventListener("click", handleClick);
});
const resetBtnEl = document.getElementById("reset");
resetBtnEl.addEventListener("click", init);

init(); //starts the game
