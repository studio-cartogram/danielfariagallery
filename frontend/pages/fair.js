import React, {Component} from 'react';
import fetch from 'isomorphic-unfetch';
import {config} from '../config.js';
import withLayout from '../decorators/withLayout';
import Error from '../components/Error';

class SingleFair extends Component {
  static async getInitialProps(context) {
    const {slug} = context.query;
    const endpoint = `${config.apiUrl}/wp-json/wp/v2/fairs?slug=${slug}`;
    const res = await fetch(endpoint);
    const data = await res.json();
    return {data};
  }

  render() {
    const fair = this.props.data[0];
    if (!fair) {
      return <Error />;
    }
    return <div>{fair.title.rendered}</div>;
  }
}

export default withLayout(SingleFair);
