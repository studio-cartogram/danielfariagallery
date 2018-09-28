import React, {Component} from 'react';
import fetch from 'isomorphic-unfetch';
import {config} from '../config.js';
import withLayout from '../decorators/withLayout';
import Error from '../components/Error';

class SinglePublication extends Component {
  static async getInitialProps(context) {
    const {slug} = context.query;
    const endpoint = `${config.apiUrl}/wp-json/wp/v2/publications?slug=${slug}`;
    const res = await fetch(endpoint);
    const data = await res.json();
    return {data};
  }

  render() {
    const publication = this.props.data[0];
    if (!publication) {
      return <Error />;
    }
    return <div>{publication.title.rendered}</div>;
  }
}

export default withLayout(SinglePublication);
