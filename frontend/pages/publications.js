import React from 'react';
import {config} from '../config';
import withLayout from '../decorators/withLayout';
import PublicationList from '../components/PublicationList';
import cachedFetch, {overrideCache} from '../utilities/cached-fetch';

const endpoint = `${
  config.apiUrl
}/wp-json/wp/v2/publications?per_page=100&_embed=true`;

class PublicationIndex extends React.Component {
  static async getInitialProps(ctx) {
    const data = await cachedFetch(endpoint);
    const isServer = !!ctx.req;
    return {data, isServer};
  }

  componentDidMount() {
    if (this.props.isServer) {
      overrideCache(endpoint, this.props.data);
    }
  }

  render() {
    const publications = this.props.data;

    return <PublicationList publications={publications} />;
  }
}

export default withLayout(PublicationIndex);
