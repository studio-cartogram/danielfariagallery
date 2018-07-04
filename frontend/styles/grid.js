import {css} from 'styled-components';
import {breakpoints} from '../styles/breakpoints';

const grid = css`
  display: flex;
  flex-direction: column;

  ${breakpoints.bpM} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto 1fr auto;
    grid-gap: 0 ${(props) => props.theme.pxScale[6]};
  }
`;

const gridInner = css`
  display: flex;
  flex-direction: column;

  ${breakpoints.bpM} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto 1fr auto;
  }
`;

export {grid, gridInner};
