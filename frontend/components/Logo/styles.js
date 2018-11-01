import styled from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';

export const StyledLogo = styled.span`
  grid-column: span 3;
  height: 0;
  display: inline-flex;

  ${breakpoints.bpM} {
    grid-column: span 1;
  }
`;
