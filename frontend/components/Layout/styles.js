import styled from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';

export const StyledLayout = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${(props) => props.theme.pxScale[3]};

  & > * {
    grid-column: span 3;
  }

  ${breakpoints.bpM} {
    grid-gap: ${(props) => props.theme.pxScale[6]};
  }
`;
