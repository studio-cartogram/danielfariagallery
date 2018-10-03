import styled from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';

const StyledPageNav = styled.div`
  grid-column: span 3;
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  margin-left: ${(props) => `-${props.theme.pxScale[2]}`};

  ${breakpoints.bpM} {
    grid-column-start: 2;
    grid-column-end: 4;
  }

  > * {
    padding-left: ${(props) => props.theme.pxScale[2]};
    padding-right: ${(props) => props.theme.pxScale[2]};
  }
`;

export {StyledPageNav};
