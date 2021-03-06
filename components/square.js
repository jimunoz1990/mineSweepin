import { createComponent } from 'cf-style-container';

const Square = createComponent(
  ({ disabled, gameOver }) => ({
    width: 40,
    height: 40,
    padding: 10,
    cursor: disabled ? 'initial' : 'pointer',
    backgroundColor: disabled ? '#CCC' : '#FFF',
    pointerEvents: disabled ? 'none' : 'auto',
    border: gameOver ? `1px solid red` : `1px solid black`,
    lineHeight: 1,
    textAlign: 'center',
    fontSize: 18
  }),
  'div',
  ['onClick', 'onContextMenu']
);

export default Square;
