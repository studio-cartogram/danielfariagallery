import styled from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';

export const StyledMenuText = styled.span`
  display: inline-flex;
  margin-right: ${(props) => props.theme.pxScale[3]};
  padding-bottom: ${(props) => props.theme.pxScale[2]};

  ${breakpoints.bpM} {
    padding-bottom: 0;
  }
`;

export const StyledMenu = styled.nav`
  grid-column: span 3;
  display: inline-flex;
  justify-content: flex-start;
  padding-top: ${(props) => props.theme.pxScale[3]};
  padding-bottom: ${(props) => props.theme.pxScale[3]};
  flex-wrap: wrap;

  ${breakpoints.bpM} {
    padding-top: 0;
    padding-bottom: ${(props) => props.theme.pxScale[6]};
    grid-column: span 2;
    padding-bottom: 0;
  }
`;
