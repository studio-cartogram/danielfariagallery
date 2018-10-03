import styled from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';

const StyledNewsList = styled.ul`
  display: grid;
  grid-column: span 3;
  grid-template-columns: 1fr;
  grid-gap: ${(props) => props.theme.pxScale[3]};
  list-style: none;
  width: 100%;
  height: auto;

  ${breakpoints.bpM} {
    grid-column: span 3;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: ${(props) => props.theme.pxScale[6]};
  }
`;

const StyledNewsLi = styled.li`
  grid-column: span 3;

  ${breakpoints.bpM} {
    grid-column: span 1;
  }
`;

export {StyledNewsList, StyledNewsLi};
