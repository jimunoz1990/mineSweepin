import { Square } from "../models/square";

/**
 * Desk describes the full MineSweeper game state (assuming square board)
 *
 * rows - number - indicates number of rows
 * column - number - indicates number of column
 * squares - [][]Square - state of each square in the game
 */

export class Desk {
  constructor(size, bombs) {
    this.rows = size;
    this.columns = size;
    this.squares = this.placeBombs(size, bombs);
    this.disabled = false;
    this.revealedSquares = 0;
  }

  // generate an empty grid
  createEmptyGrid(size) {
    let grid = [];
    for (let row = 0; row < size; row++) {
      grid.push([]);
      for (let col = 0; col < size; col++) {
        grid[row].push(new Square(row, col));
      }
    }
    return grid;
  }

  // randomly place bombs
  placeBombs(size, bombs) {
    let grid = this.createEmptyGrid(size);
    let count = 0;
    let row;
    let col;
    while (count < bombs) {
      row = Math.floor(Math.random() * size);
      col = Math.floor(Math.random() * size);
      if (!grid[row][col].hasBomb) {
        grid[row][col].hasBomb = true;
        count++;
      }
    }

    grid = this.calculateNumbers(grid);

    return grid;
  }

  // iterate through each square and update the displayNumber
  calculateNumbers(grid) {
    let size = grid.length;
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        grid[row][col].displayNumber = this.calculateNumber(
          grid,
          grid[row][col]
        );
      }
    }
    return grid;
  }

  // check all 8 directions from a square to update the displayNumber
  // up, upright, right, downright, down, downleft, left, upleft
  calculateNumber(grid, square) {
    // don't bother calculating if bomb
    if (square.hasBomb) {
      return null;
    }

    let count = 0;
    let row = square.row;
    let col = square.column;
    let size = this.rows;

    // up
    if (row !== 0) {
      count += grid[row - 1][col].hasBomb;
    }

    // upright
    if (row !== 0 && col !== size - 1) {
      count += grid[row - 1][col + 1].hasBomb;
    }

    // right
    if (col !== size - 1) {
      count += !!grid[row][col + 1].hasBomb;
    }

    // downright
    if (row !== size - 1 && col !== size - 1) {
      count += grid[row + 1][col + 1].hasBomb;
    }

    // down
    if (row !== size - 1) {
      count += grid[row + 1][col].hasBomb;
    }

    // downleft
    if (row !== size - 1 && col !== 0) {
      count += grid[row + 1][col - 1].hasBomb;
    }

    // left
    if (col !== 0) {
      count += grid[row][col - 1].hasBomb;
    }

    // upleft
    if (col !== 0 && row !== 0) {
      count += grid[row - 1][col - 1].hasBomb;
    }

    return count;
  }

  // recursively search all directions
  findClearPath(row, col) {
    // ensure that the square is valid and without bomb, reveal it and then
    // continue expanding as long as the square does not have a displayNumber
    if (row < 0 || row > this.rows || col < 0 || col > this.columns) {
      return this;
    }
    if (
      !!this.squares[row] &&
      !!this.squares[row][col] &&
      !this.squares[row][col].hasBomb &&
      !this.squares[row][col].isRevealed
    ) {
      this.squares[row][col].reveal();
      this.revealedSquares++;
      if (this.squares[row][col].displayNumber === 0) {
        this.findClearPath(row - 1, col);
        this.findClearPath(row - 1, col + 1);
        this.findClearPath(row, col + 1);
        this.findClearPath(row + 1, col + 1);
        this.findClearPath(row + 1, col);
        this.findClearPath(row + 1, col - 1);
        this.findClearPath(row, col - 1);
        this.findClearPath(row - 1, col - 1);
      }
    }
    return this;
  }

  updateSquare(square) {
    this.squares[square.row][square.column] = square;
    return this;
  }

  setDisabled(disabled) {
    this.disabled = disabled;
    return this;
  }

  // when the game is over show the user the board
  uncoverBoard(gameOverRow, gameOverColumn, lose) {
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.columns; col++) {
        let square = this.squares[row][col];
        if (square.hasBomb) {
          square.reveal();
          this.squares[row][col] = square;
        }
      }
    }

    // only light up the end square if it was a losing square
    if (lose) {
      this.squares[gameOverRow][gameOverColumn].gameOver = true;
    }
    return this;
  }
}
