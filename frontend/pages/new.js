import React from 'react';
import {config} from '../config.js';
import withLayout from '../decorators/withLayout';
import Error from '../components/Error';
import NewsSingle from '../components/NewsSingle';
import cachedFetch, {overrideCache} from '../utilities/cached-fetch';

class SingleNew extends React.Component {
  static async getInitialProps(ctx) {
    const {slug} = ctx.query;
    const endpoint = `${config.apiUrl}/wp-json/wp/v2/news?slug=${slug}`;
    const data = await cachedFetch(endpoint);
    const isServer = !!ctx.req;
    return {data, endpoint, isServer};
  }

  componentDidMount() {
    if (this.props.isServer) {
      overrideCache(this.props.endpoint, this.props.data);
    }
  }

  render() {
    const news = this.props.data[0];
    if (!news) {
      return <Error />;
    }

    return (
      <NewsSingle
        title={news.title.rendered}
        content={news.content.rendered}
        artists={news.acf.artist}
      />
    );
  }
}

export default withLayout(SingleNew);
