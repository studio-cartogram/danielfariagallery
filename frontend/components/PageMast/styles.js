import styled from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';

const StyledPageMast = styled.div`
  grid-column: span 3;

  ${breakpoints.bpM} {
    grid-column: span 2;
    grid-column-start: 2;
    grid-column-end: 4;
  }
`;

export {StyledPageMast};
