import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import { Config } from "../config.js";

const mainNavEndpoint = `${Config.apiUrl}/wp-json/menus/v1/menus/main-nav`;
const footerNavEndpoint = `${Config.apiUrl}/wp-json/menus/v1/menus/footer-nav`;
const footerInfoEndpoint = `${
  Config.apiUrl
}/wp-json/acf/v2/options?option_id=contact-information`;

function withLayout(Component) {
  return class extends React.Component {
    static async getInitialProps(args) {
      const mainNavRes = await fetch(mainNavEndpoint);
      const main = await mainNavRes.json();
      const footerNavRes = await fetch(footerNavEndpoint);
      const footerNav = await footerNavRes.json();
      const footerInfoRes = await fetch(footerInfoEndpoint);
      const footerInfo = await footerInfoRes.json();
      const componentProps = Component.getInitialProps
        ? await Component.getInitialProps(args)
        : null;

      return {
        globalData: {
          navs: {
            footer,
            main
          }
        },
        ...componentProps
      };
    }

    render() {
      return (
        <ThemeProvider theme={theme}>
          <Layout>
            <Header items={this.props.globalData.navs.main.items} />
            <Main>
              <Component {...this.props} />
            </Main>
            <Footer />
          </Layout>
        </ThemeProvider>
      );
    }
  };
}

export default withLayout;
