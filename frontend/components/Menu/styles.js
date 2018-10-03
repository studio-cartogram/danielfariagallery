import styled from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';
import {hoverLineStyles} from '../../styles/links';

export const StyledMenuText = styled.span`
  display: inline-flex;
  margin-right: ${(props) => props.theme.pxScale[3]};
  ${(props) => (props.current ? `cursor: default` : null)};
  ${(props) => props.theme.linkMain};

  &:hover:after {
    ${(props) => hoverLineStyles(props)};
  }

  &:after {
    ${(props) => (props.current ? hoverLineStyles(props) : null)};
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
