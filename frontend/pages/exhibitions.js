import Layout from "../components/Layout.js";
import fetch from "isomorphic-unfetch";
import React, { Component } from 'react';
import { Config } from '../config';
import ExhibitionIndex from "../components/ExhibitionIndex";
import PageWrapper from "../components/PageWrapper.js";


class ExhibitionIndexPage extends Component {
  render() {
    return (
      <Layout index={false} { ... this.props}>
        <h1>Exhibition Index</h1>
        <ExhibitionIndex limit={20}/>
      </Layout>
    )
  }
};

export default PageWrapper(ExhibitionIndexPage)