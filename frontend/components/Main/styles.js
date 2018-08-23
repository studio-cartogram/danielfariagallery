import styled from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';

export const StyledMain = styled.section`
  grid-column: span 3;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${(props) => props.theme.pxScale[3]};

  ${breakpoints.bpM} {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: ${(props) => props.theme.pxScale[6]};
  }
`;
