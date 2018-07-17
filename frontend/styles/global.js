import {injectGlobal} from 'styled-components';
import {reset} from './utilities';
import {fonts, fontFamily} from './typography';
import theme from './theme';

injectGlobal`
  ${fonts}
  html {
    box-sizing: border-box;
  }
  html,
  body {
    height: 100vh;
    width: 100vw;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: ${(props) => props.theme.pxScale[21]}
    font-family: ${fontFamily};
    font-weight: normal;
    color: ${theme.Body.CurrentColor};
  }
  *,
  *:before,
  *:after {
    ${reset}
  }
  a {
    color: ${theme.LinkPrimary.CurrentColor};
    text-decoration: none;
  }
  h1 {
    font-size: ${(props) => props.theme.pxScale[3]};
    font-weight: normal;
  }
  h3 {
    font-size: ${(props) => props.theme.pxScale[21]}
    padding-bottom: ${(props) => props.theme.pxScale[2]};
    font-weight: normal;
    color: ${theme.Secondary.CurrentColor};
  }
  ul {
    list-style: none;
  }
  li {
    padding-bottom: ${(props) => props.theme.pxScale[2]};
  }
`;
