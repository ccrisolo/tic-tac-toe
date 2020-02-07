/*----- constants -----*/
let players = {
    '1': 'x',
    '-1': 'o' ,
    'null': 'white'
};

const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
/*----- app's state (variables) -----*/
let gameBoard;//represents the cells
let whosTurn;
let whoWon;//who wins or a tie or game in play

/*----- cached element references -----*/
let msgEl = document.querySelector('h2')

/*----- event listeners -----*/
document.querySelector('table').addEventListener('click', pickSq );
// document.querySelector('button').addEventListener('click', init);

/*----- functions -----*/
init();

function init() {
    gameBoard = [null, null, null, null, null, null, null, null, null];
    whosTurn = -1;
    winner = null;
    // render();
}

function pickSq(evt) {
    let i = evt.target.id;
    let x = evt.target;
    if(gameBoard[i] === null){
        gameBoard[i] = whosTurn;
    }
    whosTurn *= -1;
    render(x);

    console.log(gameBoard);
    
}


function checkWin() {
    for(let i = 0; i < winCombos.length; i++) {
        if (Math.abs(gameBoard[winCombos[i][0]] + gameBoard[winCombos[i][1]] + gameBoard[winCombos[i][2]]) === 3) {
          
            board.style.pointerEvents = 'none';
            if(whosTurn === -1) {
                msgEl.innerText = 'Kobe 24 for the WIN!'
            } else {
                msgEl.innerText = 'Kobe 8 for the WIN!'
            } 
        
        } else if (gameBoard[0] !== null && gameBoard[1] !== null && gameBoard[2] !== null && gameBoard[3] !== null && gameBoard[4] !== null && gameBoard[5] !== null && gameBoard[6] !== null && gameBoard[7] !== null && gameBoard[8] !== null) {
            msgEl.innerText = "It's a TIE!"
        }
    }
    if(gameBoard.includes(null)){
        return null;

    } 
    return 'T';
}
        
            
function render(x) {
    if(whosTurn === -1) {
        x.innerText = '24';
    } else {
        x.innerText = '8';
        
    }
    checkWin();
}

            

    
        


// 4) Upon loading the app should:
// 	4.1) Initialize the state variables
// 	4.2) Render those state variables to the page:
// 		4.2.1) Render the board:
// 			4.2.1.1) Loop over each of the 9 elements that represent the squares on the page, and for each iteration:
// 				4.2.1.1.2) Use the index of the iteration to access the mapped value from the board array.
// 				4.3.1.1.3) Set the background color of the current element by using the value as a key on the colors lookup object (constant).
// 		4.2.2) Render a message:
// 			4.2.2.1) If winner has a value other than null (game still in progress), render whose turn it is - use the color name for the player, converting it to upper case.
// 			4.2.2.2) If winner is equal to 'T' (tie), render a tie message.
// 			4.2.2.3) Otherwise, render a congratulatory message to which player has won - use the color name for the player, converting it to uppercase.
// 	4.3) Wait for the user to click a square

// 5) Handle a player clicking a square:
// 	5.1) Obtain the index of the square that was clicked by either:
// 		5.1.1) "Extracting" the index from an id assigned to the element in the HTML, or
// 		5.1.2) Looping through the cached square elements using a for loop and breaking out when the current square element equals the event object's target.
// 	5.2) If the board has a value at the index, immediately return because that square is already taken.
// 	5.3) If winner is not null, immediately return because the game is over.
// 	5.4) Update the board array at the index with the value of turn.
// 	5.5) Flip turns by multiplying turn by -1 (flips a 1 to -1, and vice-versa).
// 	5.6) Set the winner variable if there's a winner:
// 		5.6.1) Loop through the each of the winning combination arrays defined.
// 		5.6.2) Total up the three board positions using the three indexes in the current combo.
// 		5.6.3) Convert the total to an absolute value (convert any negative total to positive).
// 		5.6.4) If the total equals 3, we have a winner! Set winner to the board's value at the index specified by the first index in the combo array. Exit the loop.
// 	5.7) If there's no winner, check if there's a tie:
// 		5.7.1) Set winner to 'T' if there are no more nulls in the board array.
// 	5.8) All state has been updated, so render the state to the page (step 4.2).
		

// 6) Handle a player clicking the replay button:
// 	6.1) Do steps 4.1 (initialize the state variables) and 4.2 (render).