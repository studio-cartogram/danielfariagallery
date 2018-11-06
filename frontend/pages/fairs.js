import React from 'react';
import {config} from '../config';
import withLayout from '../decorators/withLayout';
import FairList from '../components/FairList';
import cachedFetch, {overrideCache} from '../utilities/cached-fetch';

const endpoint = `${
  config.apiUrl
}/wp-json/wp/v2/fairs?per_page=100&_embed=true`;

class FairIndex extends React.Component {
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
    const fairs = this.props.data;

    return <FairList fairs={fairs} />;
  }
}

export default withLayout(FairIndex);
