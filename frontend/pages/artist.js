import React, {Component} from 'react';
import fetch from 'isomorphic-unfetch';
import Error from 'next/error';
import {Config} from '../config.js';
import withLayout from '../decorators/withLayout';

class SingleArtist extends Component {
  static async getInitialProps(context) {
    const {slug, apiRoute} = context.query;
    const endpoint = `${Config.apiUrl}/wp-json/wp/v2/${apiRoute}?slug=${slug}`;
    const res = await fetch(endpoint);
    const data = await res.json();
    return {data};
  }

  render() {
    const artist = this.props.data[0];
    return <div>{artist.title.rendered}</div>;
  }
}

export default withLayout(SingleArtist);
