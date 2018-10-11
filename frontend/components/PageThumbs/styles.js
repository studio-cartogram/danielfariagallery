import styled from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';

const StyledPageThumbs = styled.div`
  grid-column: span 3;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${(props) => props.theme.pxScale[3]};
  width: 100%;
  height: auto;

  ${breakpoints.bpM} {
    grid-column: span 3;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: ${(props) => props.theme.pxScale[6]};
    grid-row-gap: ${(props) => props.theme.pxScale[6]};
  }
`;

export {StyledPageThumbs};
