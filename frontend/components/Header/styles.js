import styled from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';

export const StyledHeader = styled.header`
  grid-column: span 3;
  display: grid;
  grid-template-columns: 1fr;

  ${breakpoints.bpM} {
    grid-template-columns: repeat(3, 1fr);
  }
`;
