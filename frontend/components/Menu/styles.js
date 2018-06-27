import styled from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';
import theme from '../../styles/theme';

export const StyledMenuText = styled.span`
  color: ${(props) => props.theme.LinkPrimary.CurrentColor};
  margin-left: 0;
  margin-right: ${(props) => props.theme.pxScale[3]};
  position: relative;
  display: inline-flex;

  &:after {
    width: 0%;
    content: '';
    left: 0;
    bottom: 0;
    position: absolute;
    height: 1px;
    background-color: ${theme.LinkPrimary.CurrentColor};
    transition: width ${theme.transitions.default};
  }

  &:hover::after {
    width: 100%;
    transition: width ${theme.transitions.default};
  }

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
