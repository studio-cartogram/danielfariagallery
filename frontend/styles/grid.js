import {css} from 'styled-components';
import {breakpoints} from '../styles/breakpoints';

const grid = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 1fr auto;
  grid-gap: ${(props) => props.theme.pxScale[6]};
`;

const gridInner = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${(props) => props.theme.pxScale[6]};
`;

const gridThird = css`
  display: grid;
  grid-template-columns: repeat(3, 33%);
  grid-gap: ${(props) => props.theme.pxScale[6]};
`;

const gridGallery = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: min-content;
  grid-gap: ${(props) => props.theme.pxScale[6]};
`;

export {grid, gridInner, gridThird, gridGallery};
