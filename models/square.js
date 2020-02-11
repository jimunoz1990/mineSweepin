/**
* Square describes the state of an individual MineSweeper Square
*
* hasBomb - boolean - contains a bomb
* flagged - boolean - display flag
* row - number - indicates row idx
* column - number - indicates column idx
* displayNumber - number - how many bombs are next to the square
* gameOver - boolean - whether this square lost the game or not
*/

export class Square {
    constructor(row, column) {
      this.hasBomb = false;
      this.flagged = false;
      this.isRevealed = false;
      this.row = row;
      this.column = column;
      this.displayNumber = null;
      this.gameOver = false;
    }

    // set isRevealed to true
    reveal() {
      this.isRevealed = true;
      return this
    }

    // toggle flagged
    setFlagged(flagged) {
      this.flagged = flagged;
      return this;
    }

    // logic for UI to display bomb svg
    showBomb() {
      return this.hasBomb && this.isRevealed;
    }

    // logic for UI to display number
    showNumber() {
      return this.displayNumber && this.isRevealed;
    }

}
