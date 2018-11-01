import React from 'react';
import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';
import {ThemeProvider} from 'styled-components';
import theme from '../styles/theme';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import {endpoints} from '../config.js';

function withLayout(Component) {
  return class extends React.Component {
    static async getInitialProps(args) {
      const mainNavRes = await fetch(endpoints.mainNav);
      const main = await mainNavRes.json();
      const footerNavRes = await fetch(endpoints.footerNav);
      const footer = await footerNavRes.json();
      const contactInfoRes = await fetch(endpoints.contactInfo);
      const contactInfo = await contactInfoRes.json();
      const componentProps = Component.getInitialProps
        ? await Component.getInitialProps(args)
        : null;

      return {
        globalData: {
          contactInfo,
          navs: {
            footer,
            main,
          },
        },
        ...componentProps,
      };
    }

    componentDidMount() {
      const currentRoute = this.props.url.pathname;
      Router.onRouteChangeStart = (newRoute) => {
        if (newRoute !== currentRoute) {
          NProgress.start();
        }
      };
      Router.onRouteChangeComplete = () => NProgress.done();
      Router.onRouteChangeError = () => NProgress.done();
    }

    render() {
      const {
        email,
        address,
        map,
        twitter,
        facebook,
        instagram,
        phone,
      } = this.props.globalData.contactInfo.acf;
      return (
        <React.Fragment>
          <Head>
            <link
              rel="stylesheet"
              type="text/css"
              href="/static/nprogress.css"
            />
          </Head>
          <ThemeProvider theme={theme}>
            <Layout>
              <Header
                current={this.props.url.pathname}
                items={this.props.globalData.navs.main.items}
              />
              <Main>
                <Component {...this.props} />
              </Main>
              <Footer
                email={email}
                address={address}
                map={map}
                twitter={twitter}
                facebook={facebook}
                instagram={instagram}
                phone={phone}
              />
            </Layout>
          </ThemeProvider>
        </React.Fragment>
      );
    }
  };
}

export default withLayout;
