import NextDocument, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import "../styles/global";

export default class Document extends NextDocument {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <html>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta charSet="utf-8" />
            <title>Daniel Faria Gallery, Toronto Canada</title>
            {this.props.styleTags}
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </html>
      </ThemeProvider>
    );
  }
}
