import styled from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';

const StyledPageNav = styled.div`
  grid-column: span 3;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;

  ${breakpoints.bpM} {
    grid-column: span 2;
    justify-content: space-between;
  }
`;

export {StyledPageNav};
