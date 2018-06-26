import Layout from "../components/Layout";
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper.js";
import Menu from "../components/Menu/Menu.js";
import CurrentExhibition from "../components/CurrentExhibition";
import { Config } from "../config.js";
import withLayout from "../decorators/withLayout";

const PAGE_ID = 85;
const endpoint = `${Config.apiUrl}/wp-json/wp/v2/pages/${PAGE_ID}`;

class Index extends Component {
  static async getInitialProps() {
    const res = await fetch(endpoint);
    const data = await res.json();
    return { data };
  }

  render() {
    const currentExhibition = getCurrentExhibitionFromData(this.props.data);
    return (
      <CurrentExhibition
        url={`/exhibition/${currentExhibition.post_name}`}
        title={currentExhibition.post_title}
        image={currentExhibition.acf.feature}
      />
    );
  }
}

function getCurrentExhibitionFromData(data) {
  return data.acf.current_exhibition[0];
}

export default withLayout(Index);
