import styled from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';
import theme from '../../styles/theme';

const buttonHeight = theme.scale[5];

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

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
  top: -${(props) => props.theme.pxScale[3]};
  margin: 0;
  position: absolute;
  left: -${(props) => props.theme.pxScale[3]};
  right: -${(props) => props.theme.pxScale[12]};
  padding-top: ${(props) => props.theme.pxScale[8]};
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
  line-height: ${(props) => props.theme.pxScale[3]};
`;

const StyledLi = styled.li`
  list-style: none;
  display: block;
  padding-bottom: ${(props) => props.theme.pxScale[1]};
`;

const StyledArrow = styled.span`
  position: relative;
  top: -2px;
  padding-right: 0;
  padding-left: ${(props) => props.theme.pxScale[2]};
`;

const StyledLink = styled.span`
  display: block;
  padding-top: ${(props) => props.theme.pxScale[4]};
  padding-bottom: ${(props) => props.theme.pxScale[1]};
`;

export {
  StyledLink,
  StyledButton,
  StyledLi,
  StyledFilterControl,
  StyledItemsList,
  StyledArrow,
  StyledBackdrop,
};
