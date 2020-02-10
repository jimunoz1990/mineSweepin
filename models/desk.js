import { Square } from '../models/square'

export class Desk {
  constructor(size, bombs) {
    this.rows = size;
    this.columns = size;
    this.squares = this.createEmptyGrid(size);
  }

  createEmptyGrid(size) {
    let grid = [];
    for (var i = 0; i < size; i++) {
      grid.push([]);
      for (var j = 0; j < size; j++) {
        grid[i].push(new Square(i, j));
      }
    }
    return grid
  }
}
