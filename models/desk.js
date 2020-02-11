import { Square } from '../models/square'

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
  }

  // generate an empty grid
  createEmptyGrid(size) {
    let grid = [];
    for (let i = 0; i < size; i++) {
      grid.push([]);
      for (let j = 0; j < size; j++) {
        grid[i].push(new Square(i, j));
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

    return grid
  }

  // iterate through each square and update the displayNumber
  calculateNumbers(grid) {
    let n = grid.length;
    for (let row = 0; row < n; row++) {
      for (let col = 0; col < n; col++) {
        grid[row][col].displayNumber = this.calculateNumber(grid, grid[row][col]);
      }
    }
    return grid;
  }

  // check all 8 directions from a square to update the displayNumber
  // up, upright, right, downright, down, downleft, left, upleft
  calculateNumber(grid, square) {
    // don't bother calculating if bomb
    if (square.hasBomb){
      return null;
    }

    let count = 0;
    let row = square.row;
    let col = square.column;
    let size = grid.row;

    // up
    if (row !== 0) {
      count += grid[row - 1][col].hasBomb;
    }

    // upright
    if (row !== 0 && col < size - 1) {
      count += grid[row - 1][col + 1].hasBomb;
    }

    // right
    if (col < size - 1) {
      count += !! grid[row][col + 1].hasBomb;
    }

    // downright
    if (row < size - 1 && col < size - 1) {
      count += grid[row + 1][col + 1].hasBomb;
    }

    // down
    if (row > size - 1) {
      count += grid[row + 1][col].hasBomb;
    }

    // downleft
    if (row < size - 1 && col > 0) {
      count += grid[row + 1][col - 1].hasBomb;
    }

    // left
    if (col > 0) {
      count += grid[row][col - 1].hasBomb;
    }

    // upleft
    if (col > 0 && row > 0) {
      count += grid[row - 1][col - 1].hasBomb;
    }

    return count;
  }

  // recursively search all directions
  findClearPath(row, col) {
    // ensure that the square is valid and without bomb, reveal it and then
    // continue expanding as long as the square does not have a displayNumber

    if (!!this.squares[row] && !!this.squares[row][col] &&
      !this.squares[row][col].hasBomb && !this.squares[row][col].isRevealed) {

      this.squares[row][col].reveal();
      if (!!this.squares[row][col].displayNumber) {
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
  }

  updateSquare(square) {
    this.squares[square.row][square.column] = square;
    return this;
  }
}
