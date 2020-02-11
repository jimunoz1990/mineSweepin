# Minesweeper

## Installation

It assumes you have the latest node and yarn installed.

```
yarn install
yarn dev
open http://localhost:3000
```

## Rules

The rules are pretty simple (try to play with the [demo](https://sweeper.now.sh/)):

- Player can left click to reveal square.
- Player can right click to flag square as mine.
- The number tells how many mines are in the immediate neighborhood.
- The goal is to reveal or flag all squares without revealing a mine.

## Methodology

I approached the problem using am OOP method. Using classes for desk and square,
with the majority of the game logic is done in desk. Except for the winning/losing
conditions, which are done at the `index` level. Losing condition was trivial -
I could have extracted the winning condition into the desk as well, but I didn't
see too much benefit.

Used react hooks to keep state and update the component whenever an action is
taken and update the desk. Added bombCount and gridSize in hopes of making the
game configurable.

Game throws an alert when the losing/winning condition is met and restarts on confirmation.
