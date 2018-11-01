import styled from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';

const StyledPageNav = styled.div`
  grid-column: span 3;
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  margin-left: ${(props) => `-${props.theme.pxScale[2]}`};
  z-index: 1;

  ${breakpoints.bpM} {
    grid-column-start: 2;
    grid-column-end: 4;
  }

  > * {
    margin-left: ${(props) => props.theme.pxScale[2]};
    margin-right: ${(props) => props.theme.pxScale[2]};
  }
`;

export {StyledPageNav};
