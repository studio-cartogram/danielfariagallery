import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import React, { Component } from "react";
import { Config } from "../config";
import ArtistIndex from "../components/ArtistIndex";
import PageWrapper from "../components/PageWrapper.js";
import withLayout from "../decorators/withLayout";

class ArtistIndexPage extends Component {
  render() {
    return (
      <Layout index={false} {...this.props}>
        <h1>Artist Index</h1>
        <ArtistIndex limit={20} />
      </Layout>
    );
  }
}

export default withLayout(ArtistIndexPage);
