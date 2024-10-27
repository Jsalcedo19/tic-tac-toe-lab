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

  

/*---------------------------- Variables (state) ----------------------------*/
let board = ["","","","","","","",]; 
let turn = "X"; //represents player x
let winner = false;
let tie = false;

/*------------------------ Cached Element References ------------------------*/
//selects all square on the board
const squareEls = document.querySelectorAll(".square");
const messageEl = document.queryselector("#message");
console.log("Message Element:", messageEl);

/*-------------------------------- Functions --------------------------------*/
//this for loop accesses each square on the game.
squareEls.forEach((square, index) => {
    console.log('Square ${index + 1}:', square);
});

function init() {
const board = [ [" "," "," "],
                [" "," "," "],
                [" "," "," "]]
}
console.log("Game initialized")

init();

function render() {
console.log("Rendering the game state...");

}

init()
/*----------------------------- Event Listeners -----------------------------*/




