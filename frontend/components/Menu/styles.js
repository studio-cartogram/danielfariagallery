import styled from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';

export const StyledMenuText = styled.span`
  display: inline-flex;
  margin-left: 0;
  margin-right: ${(props) => props.theme.pxScale[3]};

  ${(props) => props.theme.linkMain};

  ${breakpoints.bpM} {
    margin-left: ${(props) => props.theme.pxScale[3]};
    margin-right: 0;
  }
`;

export const StyledMenu = styled.nav`
  grid-column: span 3;
  display: inline-flex;
  justify-content: flex-start;
  padding-bottom: ${(props) => props.theme.pxScale[6]};

  ${breakpoints.bpM} {
    grid-column: span 2;
    justify-content: flex-end;
    padding-bottom: 0;
  }
`;
