import styled from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';

export const StyledColumn = styled.section`
  grid-column: span 1;
  padding-bottom: 0;

  ${breakpoints.bpL} {
    padding-bottom: ${(props) => props.theme.pxScale[5]};
  }
`;
