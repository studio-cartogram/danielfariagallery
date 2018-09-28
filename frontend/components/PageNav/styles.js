import styled from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';

const StyledPageNav = styled.div`
  grid-column: span 3;
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;

  ${breakpoints.bpM} {
    grid-column-start: 2;
    grid-column-end: 4;
  }
`;

const StyledPageNavText = styled.span`
  display: inline-flex;
  margin-left: 0;
  ${(props) => props.theme.linkMain};

  ${breakpoints.bpM} {
    margin-right: 0;
    padding-right: ${(props) => props.theme.pxScale[3]};
  }
`;

export {StyledPageNav, StyledPageNavText};
