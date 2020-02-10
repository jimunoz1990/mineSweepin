export class Square {
    constructor(row, column) {
      this.hasBomb = true;
      this.flagged = false;
      this.isRevealed = false;
      this.disabled = false;
      this.row = row;
      this.column = column;
      this.number = null;
    }

    reveal() {
      this.isRevealed = true;
    }

    showBomb() {
      return this.hasBomb && this.isRevealed;
    }

    showNumber() {
      return this.number && this.isRevealed;
    }
}
