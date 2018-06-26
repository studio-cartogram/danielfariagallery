import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Error from "next/error";
import PageWrapper from "../components/PageWrapper.js";
import { Config } from "../config.js";
import withLayout from "../decorators/withLayout";

class Exhibition extends Component {
  static async getInitialProps(context) {
    const { slug, apiRoute } = context.query;
    const endpoint = `${Config.apiUrl}/wp-json/wp/v2/${apiRoute}?slug=${slug}`;
    const res = await fetch(endpoint);
    const data = await res.json();
    return { data };
  }
  render() {
    const exhibition = this.props.data[0];
    return <div>{exhibition.title.rendered}</div>;
  }
}

export default withLayout(Exhibition);
