import styled from 'styled-components';
import {css} from 'styled-components';

const hoverLineStyles = (props) => css`
  width: 100%;
  transition: width ${props.theme.transitions.default};
`;

const afterStyles = (props) => {
  let color;
  switch (props.variant) {
    case 'secondary':
      color = 'LinkSecondary';
      break;
    case 'tertiary':
      color = 'LinkTertiary';
      break;
    case 'invisible':
      color = 'LinkInvisible';
      break;
    case 'hybrid':
      color = 'LinkHybrid';
      break;
    default:
      color = 'LinkPrimary';
  }

  return css`
    &:after {
      width: 0;
      content: '';
      left: 0;
      bottom: -4px;
      position: absolute;
      height: 1px;
      background-color: ${(props) => props.theme[color].CurrentColor};
      transition: width ${(props) => props.theme.transitions.default};
    }
  `;
};

const StyledPrimaryLink = styled.span`
  color: ${(props) => props.theme.LinkPrimary.CurrentColor};
  ${(props) => (props.current ? `cursor: default` : null)};
  position: relative;
  cursor: pointer;

  ${(props) => afterStyles(props)};

  &:hover:after {
    ${(props) => hoverLineStyles(props)};
  }

  &:after {
    ${(props) => (props.current ? hoverLineStyles(props) : null)};
  }
`;

const StyledSecondaryLink = styled.span`
  display: inline-flex;
  position: relative;
  cursor: pointer;
  height: ${(props) => props.theme.pxScale[3]};
  color: ${(props) => props.theme.LinkSecondary.CurrentColor};

  &:after {
    width: 0;
    content: '';
    left: 0;
    bottom: -2px;
    position: absolute;
    height: 1px;
    background-color: ${(props) => props.theme.BorderLight.CurrentColor};
    transition: width ${(props) => props.theme.transitions.default};
  }

  &:hover:after {
    ${(props) => hoverLineStyles(props)};
  }

  &:after {
    ${(props) => (props.current ? hoverLineStyles(props) : null)};
  }
`;

const StyledHybridLink = styled.span`
  display: inline-flex;
  position: relative;
  cursor: pointer;
  height: ${(props) => props.theme.pxScale[3]};
  color: ${(props) => props.theme.LinkSecondary.CurrentColor};

  &:after {
    width: 100%;
    content: '';
    left: 0;
    bottom: -2px;
    position: absolute;
    height: 1px;
    background-color: ${(props) => props.theme.BorderLight.CurrentColor};
    transition: width ${(props) => props.theme.transitions.default};
  }

  &:hover::after {
    width: 0;
  }
`;

const StyledTertiaryLink = styled.span`
  display: inline-flex;
  position: relative;
  cursor: pointer;
  height: ${(props) => props.theme.pxScale[3]};
  color: ${(props) => props.theme.LinkTertiary.CurrentColor};

  &:after {
    width: 100%;
    content: '';
    left: 0;
    bottom: -2px;
    position: absolute;
    height: 1px;
    background-color: ${(props) => props.theme.BorderLight.CurrentColor};
    transition: width ${(props) => props.theme.transitions.default};
  }

  &:hover::after {
    width: 0;
  }
`;

const StyledInvisibleLink = styled.span`
  display: inline-flex;
  height: auto;
  color: inherit;

  &:hover::after {
    opacity: 0.8;
  }
`;

export {
  StyledPrimaryLink,
  StyledSecondaryLink,
  StyledTertiaryLink,
  StyledInvisibleLink,
  StyledHybridLink,
};
