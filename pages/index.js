import React, { Fragment, useState, useEffect } from 'react';
import Layout from '../components/layout';

// game components
import DeskComp from '../components/desk';
import SquareComp from '../components/square';
import Mine from '../components/mine';
import Flag from '../components/flag';
import { Desk } from '../models/desk';

// TODO: make board size configurable
// TODO: add how many squares are available to discover until
// win condition is satisfied.

const Index = () => {
  const [desk, setDesk] = useState(new Desk(10, 10));
  // counter for actions taken
  const [actions, setActions] = useState(0);

  function onSquareClick(square) {
    setActions(actions + 1);

    if (square.hasBomb) {
      window.alert("Whoops, looks like you lost - you'll gettem next time champ")
      setDesk(new Desk(10, 10));
    } else {
      let newDesk = desk.findClearPath(square.row, square.column);
      setDesk(newDesk.findClearPath(square));
    }
  }

  console.log('render');
  return (
    <Layout title={`Minesweepin'`}>
      <DeskComp boardSize={ desk.rows }>
        { desk.squares.map((squareList, i) => (
          <Fragment key={ i }>
          { squareList.map((square, j) => (
              <SquareComp
                key={ i + '-' + j }
                disabled={ square.isRevealed }
                onClick={ () => onSquareClick(square)}>
                  { square.showBomb() && <Mine />}
                  { square.flagged && <Flag />}
                  { square.showNumber() ? square.number : ''}
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
