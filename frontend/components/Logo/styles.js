import styled from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';

export const StyledLogo = styled.span`
  grid-column: span 3;
  height: auto;
  display: inline-flex;

  ${breakpoints.bpTablet} {
    grid-column: span 1;
  }
`;
