import React from 'react';
import Router, {withRouter} from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';
import {ShortcutProvider} from '@shopify/react-shortcuts';
import {ThemeProvider} from 'styled-components';
import theme from '../styles/theme';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import {endpoints} from '../config.js';
import GlobalStyles from '../styles/global';

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
      const currentRoute = Router.pathname;
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
        <AppWithRouter
          email={email}
          address={address}
          map={map}
          twitter={twitter}
          facebook={facebook}
          instagram={instagram}
          phone={phone}
          items={this.props.globalData.navs.main.items}
        >
          <ShortcutProvider>
            <Component {...this.props} />
          </ShortcutProvider>
        </AppWithRouter>
      );
    }
  };
}

export default withLayout;

function App({
  email,
  address,
  map,
  twitter,
  facebook,
  instagram,
  phone,
  router,
  items,
  children,
}) {
  return (
    <React.Fragment>
      <Head>
        <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Daniel Faria Gallery, Toronto Canada</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/images/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/images/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/static/images/safari-pinned-tab.svg"
          color="#003468"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <ThemeProvider theme={theme}>
        <Layout>
          <GlobalStyles />
          <Header current={router.pathname} items={items} />
          <Main>{children}</Main>
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

const AppWithRouter = withRouter(App);
