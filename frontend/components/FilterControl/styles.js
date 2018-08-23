import styled from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';
import theme from '../../styles/theme';

const StyledButton = styled.button`
  cursor: pointer;
  color: ${theme.LinkPrimary.CurrentColor};
  font-size: ${(props) => props.theme.pxScale[2]};
`;

const StyledLi = styled.li`
  padding-top: ${(props) => props.theme.pxScale[0]};
  padding-bottom: ${(props) => props.theme.pxScale[0]};

  &:hover {
    cursor: pointer;
  }
`;

const StyledFilterControl = styled.ul`
  border: 1px solid ${theme.LinkPrimary.CurrentColor};
  padding: ${(props) => props.theme.pxScale[3]};
  width: 100%;
  height: auto;
  position: relative;
  grid-column: span 3;

  &:before {
    position: absolute;
    content: '^';
    color: ${theme.LinkPrimary.CurrentColor};
    right: ${(props) => props.theme.pxScale[3]};
  }

  ${breakpoints.bpM} {
    grid-column: span 1;
  }
`;

export {StyledButton, StyledLi, StyledFilterControl};
