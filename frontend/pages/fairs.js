import fetch from 'isomorphic-unfetch';
import React, {Component} from 'react';
import {config} from '../config';
import withLayout from '../decorators/withLayout';
import FairList from '../components/FairList';

const endpoint = `${
  config.apiUrl
}/wp-json/wp/v2/fairs?per_page=100&_embed=true`;

class FairIndex extends Component {
  static async getInitialProps() {
    const res = await fetch(endpoint);
    const data = await res.json();
    return {data};
  }

  render() {
    const fairs = this.props.data;

    return <FairList fairs={fairs} />;
  }
}

export default withLayout(FairIndex);
