export class Square {
    constructor(row, column) {
      this.hasBomb = false;
      this.flagged = false;
      this.isRevealed = false;
      this.row = row;
      this.column = column;
      this.number = null;
      this.gameOver = false;
    }

    reveal() {
      this.isRevealed = true;
      return this
    }

    setFlagged(flagged) {
      this.flagged = flagged;
      return this;
    }

    showBomb() {
      return this.hasBomb && this.isRevealed;
    }

    showNumber() {
      return this.number && this.isRevealed;
    }

}
