import Layout from "../components/Layout.js";
import fetch from "isomorphic-unfetch";
import React, { Component } from 'react';
import { Config } from '../config';
import ArtistIndex from "../components/ArtistIndex";
import PageWrapper from "../components/PageWrapper.js";


class ArtistIndexPage extends Component {
  render() {
    return (
      <Layout index={false} { ... this.props}>
        <h1>Artist Index</h1>
        <ArtistIndex limit={20}/>
      </Layout>
    )
  }
};

export default PageWrapper(ArtistIndexPage)