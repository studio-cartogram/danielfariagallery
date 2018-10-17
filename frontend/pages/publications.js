import fetch from 'isomorphic-unfetch';
import React, {Component} from 'react';
import {config} from '../config';
import withLayout from '../decorators/withLayout';
import PublicationList from '../components/PublicationList';

const endpoint = `${
  config.apiUrl
}/wp-json/wp/v2/publications?per_page=100&_embed=true`;

class PublicationIndex extends Component {
  static async getInitialProps() {
    const res = await fetch(endpoint);
    const data = await res.json();
    return {data};
  }

  render() {
    const publications = this.props.data;

    return <PublicationList publications={publications} />;
  }
}

export default withLayout(PublicationIndex);
