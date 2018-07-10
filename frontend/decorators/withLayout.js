import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from '../styles/theme';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GridWrapper from '../components/GridWrapper';
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

    render() {
      return (
        <ThemeProvider theme={theme}>
          <GridWrapper>
            <Layout>
              <Header items={this.props.globalData.navs.main.items} />
              <Main>
                <Component {...this.props} />
              </Main>

              <Footer
                email={this.props.globalData.contactInfo.acf.email}
                address={this.props.globalData.contactInfo.acf.address}
                map={this.props.globalData.contactInfo.acf.map}
                twitter={this.props.globalData.contactInfo.acf.twitter}
                facebook={this.props.globalData.contactInfo.acf.facebook}
                instagram={this.props.globalData.contactInfo.acf.instagram}
                phone={this.props.globalData.contactInfo.acf.phone}
              />
            </Layout>
          </GridWrapper>
        </ThemeProvider>
      );
    }
  };
}

export default withLayout;
