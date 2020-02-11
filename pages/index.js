import React, { Fragment, useState, useEffect } from 'react';
import Layout from '../components/layout';

// game components
import DeskComp from '../components/desk';
import SquareComp from '../components/square';
import Mine from '../components/mine';
import Flag from '../components/flag';

// desk model
import { Desk } from '../models/desk';

const Index = () => {
  const [gridSize, setGridSize] = useState(10);
  const [bombCount, setBombCount] = useState(10);
  const [desk, setDesk] = useState(new Desk(gridSize, bombCount));
  // counter for actions taken
  const [actions, setActions] = useState(0);

  function onSquareClick(square) {
    let newDesk = null;
    if (square.hasBomb) {
      window.setTimeout(() => {
        window.alert("Whoops, looks like you lost - you'll gettem next time champ")
        newDesk = new Desk(gridSize, bombCount);
        setDesk(newDesk);
      }, 1500)
      newDesk = desk.uncoverBoard(square.row, square.column, true);
      setDesk(newDesk);
      setActions(0);
    } else  {
      newDesk = desk.findClearPath(square.row, square.column);
      if (newDesk.revealedSquares === (Math.pow(gridSize, 2) - bombCount)) {
          window.setTimeout(() => {
            window.alert("You did it, congratulations!")
            newDesk = new Desk(gridSize, bombCount);
            setDesk(newDesk);
          }, 1500);
          newDesk = desk.uncoverBoard(square.row, square.column, false);
          setDesk(newDesk);
          setActions(0);
      } else {
          setDesk(newDesk);
          setActions(actions + 1);
      }
    }
  }

  return (
    <Layout title={`Minesweepin'`}>
      <DeskComp boardSize={ desk.rows } disabled={ desk.disabled }>
        { desk.squares.map((squareList, i) => (
          <Fragment key={ i }>
          { squareList.map((square, j) => (
              <SquareComp
                key={ i + '-' + j }
                disabled={ square.isRevealed }
                gameOver={ square.gameOver }
                onContextMenu={ () => setDesk(desk.updateSquare(square.setFlagged(true)))}
                onClick={ () => onSquareClick(square)}>
                  { square.showBomb() && <Mine />}
                  { square.flagged && <Flag />}
                  { square.showNumber() ? square.displayNumber : ''}
              </SquareComp>
            )
          ) }
          </Fragment>
        ))}
      </DeskComp>
    </Layout>
  );
}

export default Index;
