import styled from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';

export const StyledMenuText = styled.span`
  display: inline-flex;
  margin-right: ${(props) => props.theme.pxScale[3]};
  ${(props) => props.theme.linkMain};

  ${breakpoints.bpM} {
  }
`;

export const StyledMenu = styled.nav`
  grid-column: span 3;
  display: inline-flex;
  justify-content: flex-start;
  padding-bottom: ${(props) => props.theme.pxScale[3]};
  flex-wrap: wrap;

  ${breakpoints.bpM} {
    padding-bottom: ${(props) => props.theme.pxScale[6]};
    grid-column: span 2;
    padding-bottom: 0;
  }
`;
