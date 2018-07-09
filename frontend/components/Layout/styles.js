import styled from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';

export const StyledLayout = styled.section`
  padding: ${(props) => props.theme.pxScale[6]}
    ${(props) => props.theme.pxScale[8]};
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto 1fr auto;

  ${breakpoints.bpM} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: ${(props) => props.theme.pxScale[6]};
  }
`;
