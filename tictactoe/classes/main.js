'use strict'

var game = new Game(); // new game
var counter = 0; // counter is by start zero

function play() {
  let move = document.getElementById(move());
  autoPlay();

  //function
  function autoPlay(){
    let move = document.getElementById(getRandomID());
    move.innerHTML = game.players[counter].symbol;

    console.log(move);

    var squareNum = getRandomID().split("");
    var row = squareNum[0];
    var col = squareNum[1];

    game.board.grid[row][col].whoseTurn();
    game.board.checkWin();

    if (counter == 0) { 
        counter = 1;
    } 
    else{ 
        counter = 0;
    }
  }

  if(randomElement = ""){
    //function
  }else{
    printWinner();
  }
}

function getRandomID(){
  var randomX = Math.floor(Math.random() * 3);
  console.log("randomX = " + randomX);
  let randomStringX = randomX.toString();

  var randomY = Math.floor(Math.random() * 3);
  console.log("randomY = " + randomY);
  let randomStringY = randomY.toString();

  let generatedRandomID = (randomStringX) + (randomStringY);
  return generatedRandomID;
}

function printWinner() {
  let winner = game.players[counter].symbol;
  document.getElementById("message").innerHTML = `${winner} wins`;
  console.log(`${winner} wins`);
}

function printTie() {
  document.getElementById("message").innerHTML = "It's a tie";
  console.log("It's a tie");
}

function playAgain() {
  let btn = document.getElementById('new-game');
  btn.addEventListener('click', () => {
    for (let i = 0; i < 9; i++) {
      document.querySelectorAll('.square')[i].innerHTML = "";
    }
    document.getElementById("message").innerHTML = "";

    var game = new Game();
  });
}

play();
playAgain();
