import styled from 'styled-components';
import theme from '../../styles/theme';
import {breakpoints} from '../../styles/breakpoints';

const StyledEmpty = styled.div`
  grid-column: span 2;
  display: flex;
  justify-content: start;

  ${breakpoints.bpM} {
    grid-column: span 2;
    grid-column-start: 2;
    grid-column-end: 4;
  }
`;

export {StyledEmpty};
