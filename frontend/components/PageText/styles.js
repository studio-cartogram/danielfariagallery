import styled from 'styled-components';
import {grid} from '../../styles/grid';
import {breakpoints} from '../../styles/breakpoints';

const StyledPageText = styled.div`
  grid-column: span 3;

  ${breakpoints.bpM} {
    grid-column: span 2;
  }
`;

export {StyledPageText};
