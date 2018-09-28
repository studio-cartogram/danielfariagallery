import React, {Component} from 'react';
import fetch from 'isomorphic-unfetch';
import {config} from '../config.js';
import withLayout from '../decorators/withLayout';
import Error from '../components/Error';

class SingleNew extends Component {
  static async getInitialProps(context) {
    const {slug} = context.query;
    const endpoint = `${config.apiUrl}/wp-json/wp/v2/news?slug=${slug}`;
    const res = await fetch(endpoint);
    const data = await res.json();
    return {data};
  }

  render() {
    const news = this.props.data[0];
    if (!news) {
      return <Error />;
    }
    return <div>{news.title.rendered}</div>;
  }
}

export default withLayout(SingleNew);
