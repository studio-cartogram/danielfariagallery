import { injectGlobal } from 'styled-components'
import { reset } from './utilities'
import { fonts, fontFamily } from './typography';

injectGlobal`
  ${fonts}

  html,
  body {
    height: 100%;
    width: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${fontFamily};
    font-weight: ${fontFamily};
  }
  *,
  *:before,
  *:after {
    ${reset}
  }
`