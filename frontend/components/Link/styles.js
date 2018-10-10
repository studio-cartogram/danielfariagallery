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
    default:
      color = 'LinkPrimary';
  }

  return css`
    &:after {
      width: 0;
      content: '';
      left: 0;
      bottom: 0;
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
  color: red;
`;

const StyledTertiaryLink = styled.span`
  display: inline-flex;
  position: relative;
  height: ${(props) => props.theme.pxScale[3]};
  color: ${(props) => props.theme.LinkSecondary.CurrentColor};

  ${(props) => afterStyles(props)};

  &:hover::after {
    width: 0;
  }
`;

export {StyledPrimaryLink, StyledSecondaryLink, StyledTertiaryLink};
