import { Square } from '../models/square'

// assuming square grid - for simplicity
export class Desk {
  constructor(size, bombs) {
    this.rows = size;
    this.columns = size;
    this.squares = this.placeBombs(size, bombs);
    this.disabled = false;
    this.revealedSquares = 0;
  }

  createEmptyGrid(size) {
    let grid = [];
    for (var i = 0; i < size; i++) {
      grid.push([]);
      for (var j = 0; j < size; j++) {
        grid[i].push(new Square(i, j));
      }
    }
    return grid;
  }

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

  calculateNumbers(grid) {
    // assuming square grid
    let n = grid.length;
    for (let row = 0; row < n; row++) {
      for (let col = 0; col < n; col++) {
        let square = grid[row][col];
        square.number = this.calculateNumber(grid, square)
        grid[row][col] = square;
      }
    }
    return grid;
  }

  calculateNumber(grid, square) {
    // don't bother calculating if bomb
    if (square.hasBomb){
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
      count += !! grid[row][col + 1].hasBomb;
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
    if (row < 0 || row > this.rows || col < 0 || col > this.columns){
        return this;
    }
    if (!!this.squares[row] && !!this.squares[row][col] &&
      !this.squares[row][col].hasBomb && !this.squares[row][col].isRevealed) {
      this.squares[row][col].reveal();
      this.revealedSquares++;
      if (this.squares[row][col].number === 0) {
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

    if (lose) {
        this.squares[gameOverRow][gameOverColumn].gameOver = true;
    }
    return this;
  }
}
