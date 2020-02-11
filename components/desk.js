import { createComponent } from 'cf-style-container';

const Desk = createComponent(({ boardSize }) => ({
  width: 40 * boardSize,
  height: 40 * boardSize,
  display: 'flex',
  flexWrap: 'wrap'
}));

export default Desk;
