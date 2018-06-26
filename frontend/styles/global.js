import { injectGlobal } from "styled-components";
import { reset } from "./utilities";
import { fonts, fontFamily } from "./typography";
import theme from "./theme";
import { scale } from "../styles/scale";

injectGlobal`
  ${fonts}

  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 18px;
    font-family: ${fontFamily};
    font-weight: ${fontFamily};
    color: ${theme.Body.color};
  }
  *,
  *:before,
  *:after {
    ${reset}
  }
  a {
    color: ${theme.LinkPrimary.color};
    text-decoration: none;
  }
`;
