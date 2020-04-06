'use strict'

class Board {
  constructor(grid) {
    this.grid = [
      [new Square(), new Square(), new Square()],
      [new Square(), new Square(), new Square()],
      [new Square(), new Square(), new Square()]
    ];
  }

  isFull() {
    let count = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.grid[i][j].state != "") { count++ }
      }
    }
    return count == 9;
  }

  checkWin() {
    for (let i = 0; i < 3; i++) {
      if (this.grid[i][0].state == this.grid[i][1].state && this.grid[i][0].state == this.grid[i][2].state && this.grid[i][0].state != "") {
        printWinner();
      }
    }

    for (let j = 0; j < 3; j++) {
      if (this.grid[0][j].state == this.grid[1][j].state && this.grid[0][j].state == this.grid[2][j].state && this.grid[0][j].state != "") {
        printWinner();
      }
    }

    if ((this.grid[0][0].state == this.grid[1][1].state && this.grid[0][0].state == this.grid[2][2].state && this.grid[0][0].state != "") ||
      (this.grid[0][2].state == this.grid[1][1].state && this.grid[0][2].state == this.grid[2][0].state && this.grid[0][2].state != "")) {
      printWinner();
    }

    if (this.isFull()) {
      printTie();
    }

  }
}

class Square {
  constructor(state) {
    this.state = "";
  }

  whoseTurn() {
    if (counter == 0) {
      return this.state = "x";
    }
    else {
      return this.state = "o";
    }
  }
}

class Player {
  constructor(symbol) {
    this.symbol = symbol;
  }
}

class Game {
  constructor() {
    this.board = new Board();
    this.players = [
      new Player("x"),
      new Player("o")
    ];
  }
}
