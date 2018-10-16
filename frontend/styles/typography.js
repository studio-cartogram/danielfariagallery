import {css} from 'styled-components';

const fonts = css`
  @font-face {
    font-family: 'basis-grotesque-regular';
    src: url('../static/fonts/basis-grotesque-regular.eot');
    src: url('../static/fonts/basis-grotesque-regular.eot?#iefix')
        format('embedded-opentype'),
      url('../static/fonts/basis-grotesque-regular.woff') format('woff'),
      url('../static/fonts/basis-grotesque-regular.woff2') format('woff2'),
      url('../static/fonts/basis-grotesque-regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'basis-grotesque-italic';
    src: url('../static/fonts/basis-grotesque-italic.eot');
    src: url('../static/fonts/basis-grotesque-italic.eot?#iefix')
        format('embedded-opentype'),
      url('../static/fonts/basis-grotesque-italic.woff') format('woff'),
      url('../static/fonts/basis-grotesque-italic.woff2') format('woff2'),
      url('../static/fonts/basis-grotesque-italic.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;

const fontFamily = `'basis-grotesque-regular', helvetica, verdana, sans-serif;`;
const fontFamilyItalic = `'basis-grotesque-italic', helvetica, verdana, sans-serif;`;

export {fonts, fontFamily, fontFamilyItalic};
