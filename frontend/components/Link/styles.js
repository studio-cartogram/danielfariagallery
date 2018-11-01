import styled from 'styled-components';
import {css} from 'styled-components';

const hoverLineStyles = (props) => css`
  width: 100%;
  transition: width ${props.theme.transitions.default};
`;

const baseLinkStyles = (props) => css`
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
    case 'zoom':
      color = 'LinkZoom';
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

const Button = styled.button`
  font-size: 100%;
  position: relative;
  display: inline-block;
  cursor: pointer;
  background-color: transparent;
  color: ${(props) => props.theme.LinkPrimary.CurrentColor};
  a {
    cursor: pointer;
  }
`;

const Link = styled.span`
  font-size: 100%;
  position: relative;
  display: inline-block;
  cursor: pointer;
  background-color: transparent;
  border-color: transparent;
  color: ${(props) => props.theme.LinkPrimary.CurrentColor};
  a {
    cursor: pointer;
  }
`;

const StyledPrimaryButton = styled(Button)`
  line-height: 1.2;
  ${(props) => (props.current ? `cursor: default` : null)};
  ${(props) => afterStyles(props)};

  &:hover:after {
    ${(props) => hoverLineStyles(props)};
  }

  &:after {
    ${(props) => (props.current ? hoverLineStyles(props) : null)};
  }
`;

const StyledPrimaryLink = styled(Link)`
  line-height: 1.2;

  ${(props) => (props.current ? `cursor: default` : null)};
  ${(props) => afterStyles(props)};

  &:hover:after {
    ${(props) => hoverLineStyles(props)};
  }

  &:after {
    ${(props) => (props.current ? hoverLineStyles(props) : null)};
  }
`;

const StyledSecondaryLink = styled(Link)`
  height: ${(props) => props.theme.pxScale[3]};
  color: ${(props) => props.theme.LinkSecondary.CurrentColor};

  a {
    color: ${(props) => props.theme.LinkSecondary.CurrentColor};
  }

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

const StyledHybridLink = styled(Link)`
  height: ${(props) => props.theme.pxScale[3]};
  color: ${(props) => props.theme.LinkSecondary.CurrentColor};

  a {
    color: ${(props) => props.theme.LinkSecondary.CurrentColor};
  }

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

const StyledTertiaryLink = styled(Link)`
  height: ${(props) => props.theme.pxScale[3]};
  color: ${(props) => props.theme.LinkTertiary.CurrentColor};

  a {
    color: ${(props) => props.theme.LinkTertiary.CurrentColor};
  }

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

const StyledInvisibleLink = styled(Link)`
  display: inline-flex;
  height: auto;
  color: inherit;

  &:hover::after {
    opacity: 0.8;
  }
`;

const StyledZoomLink = styled(Link)`
  display: inline-flex;
  height: auto;
  color: inherit;

  a {
    position: relative;
    overflow: hidden;
  }
`;

export {
  StyledPrimaryLink,
  StyledSecondaryLink,
  StyledTertiaryLink,
  StyledInvisibleLink,
  StyledHybridLink,
  StyledZoomLink,
  StyledPrimaryButton,
};
