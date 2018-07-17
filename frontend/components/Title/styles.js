import styled from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';

export const StyledTitle = styled.h1`
  grid-column: span 1;
  padding-bottom: ${(props) => props.theme.pxScale[2]};

  ${breakpoints.bpL} {
    padding-bottom: ${(props) => props.theme.pxScale[2]};
  }
`;
