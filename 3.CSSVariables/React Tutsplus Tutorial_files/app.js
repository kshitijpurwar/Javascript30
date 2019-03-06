const human = "X";
const bot = "O";
let currentPlayer = human;

// Stores all the winning permuatation
const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

const state = ["","","","","","","","",""];

// DOM elements
const board = document.querySelector('.board');
const squares = document.querySelectorAll('.square');

board.addEventListener("click",function(e) {
  const index = +e.target.getAttribute("data-index");

  // Only allow filling if the square is empty
  if(e.target.innerHTML === ""){

    // Update state in the JS
    state[index] = currentPlayer;

    // Update the game in DOM
    e.target.innerHTML = currentPlayer;

    console.log(state,checkWin(state));

    // After each turn,check if either player has won the game and declare it, the reset the board
    if(checkWin()){
      alert(`Game won by ${currentPlayer}`);
      resetGame();
    }

  }

  // When player selects a sqaure which is already filled
  else {
    alert("Sorry it's already filled!")
    return 0;
  }


  // Switches the currentPlayer
  currentPlayer = currentPlayer === "X" ? "O" : "X" ;

  BotTurn();

});


// Checks if the game has been won or not
function checkWin(){
  for( let i = 0; i < 8 ; i++ ){
    const combo = winningCombos[i];
    if (state[combo[0]] == state[combo[1]] && state[combo[0]] == state[combo[2]] && state[combo[1]] == state[combo[2]] && state[combo[0]] != "") {
      return true;
    }
  }
  return false;
}

// Resets the board and the state of the game
function resetGame() {
  for (let i = 0; i < state.length; i++) {
    state[i] = "";
    squares[i].innerHTML = "";
  }
}


// Basic AI which wins if possible but never loses
function BotTurn(){

  let emptyIndexes = [];

  state.forEach(function(sq,i) {
    if(sq === ""){
      emptyIndexes.push(i);
    }
  })

  console.log(emptyIndexes);

  const randomIndex = emptyIndexes[emptyIndexes.length - 1];


  // const randomIndex = emptyIndexes[Math.floor[Math.random()*emptyIndexes.length]];


  console.log(randomIndex);

  // Update state in the JS
  state[randomIndex] = currentPlayer;


  // Update the game in DOM
  const botSquare = document.querySelector(`.square[data-index="${randomIndex}"]`);

  botSquare.innerHTML = currentPlayer;

  if(checkWin()){
    alert(`Game won by ${currentPlayer}`);
    resetGame();
  }
  
  currentPlayer = "X";


}








  // let empty = [];
  //
  // for (var i = 0; i < state.length; i++) {
  //   if(state[i] == ""){
  //     empty.push(i);
  //   }
  // }
  // for (var i = 0; i < empty.length; i++) {
  //
  //   let VirtualState = [...state];
  //
  //   VirtualState[empty[i]] = robot;
  //
  //   if(checkWin(VirtualState)){
  //     return empty[i];
  //   }
  //
  // }
