import { Fragment } from 'react';
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
  let desk = new Desk(10, 0);
  console.log('desk', desk);

  function onSquareClick(square) {
    console.log(square);
    square.reveal();
  }

  return (
  <Layout title={`Minesweepin'`}>
    <DeskComp boardSize={ desk.rows }>
      { desk.squares.map((squareList, i) => (
        <Fragment key={ i }>
        { squareList.map((square, j) => (
            <SquareComp key={ i + '-' + j } disabled={ square.disabled } onClick={ (e) => onSquareClick(square) }>
              { square.showBomb() && <Mine />}
              { square.flagged && <Flag />}
              { square.showNumber() ? square.getNumber() : ''}
            </SquareComp>
          )
        ) }
        </Fragment>
      ))}
    </DeskComp>
  </Layout>);
}


export default Index;
