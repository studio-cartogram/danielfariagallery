import styled from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';
import theme from '../../styles/theme';

const buttonHeight = theme.scale[5];

const StyledFilterControl = styled.div`
  position: relative;
  height: auto;
  position: relative;

  ${breakpoints.bpM} {
  }
`;

const StyledItemsList = styled.ul`
  display: ${(props) => (props.open ? 'block' : 'none')};
  background-color: white;
  border: 1px solid ${theme.LinkPrimary.CurrentColor};
  top: -${(props) => props.theme.pxScale[2]};
  margin: 0;
  position: absolute;
  left: -${(props) => props.theme.pxScale[1]};
  right: -${(props) => props.theme.pxScale[12]};
  padding-top: ${(props) => props.theme.pxScale[7]};
  padding-bottom: ${(props) => props.theme.pxScale[1]};
  padding-left: ${(props) => props.theme.pxScale[3]};
  padding-right: ${(props) => props.theme.pxScale[3]};
  z-index: 1;
`;

const StyledButton = styled.button`
  cursor: pointer;
  background: none;
  color: ${theme.LinkPrimary.CurrentColor};
  font-size: ${(props) => props.theme.pxScale[2]};
  display: block;
  position: relative;
  ${(props) => (props.open ? 'z-index: 2' : null)};
  width: 100%;
  text-align: left;
  min-height: ${buttonHeight}px;
  line-height: ${buttonHeight}px;
`;

const StyledLi = styled.li`
  list-style: none;
  display: block;
`;

const StyledArrow = styled.span`
  padding-right: 0;
  padding-left: ${(props) => props.theme.pxScale[2]};
`;

export {
  StyledButton,
  StyledLi,
  StyledFilterControl,
  StyledItemsList,
  StyledArrow,
};
