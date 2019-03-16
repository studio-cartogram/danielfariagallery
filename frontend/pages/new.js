import React from 'react';
import {config} from '../config.js';
import withLayout from '../decorators/withLayout';
import Error from '../components/Error';
import NewsSingle from '../components/NewsSingle';
import cachedFetch, {overrideCache} from '../utilities/cached-fetch';

const endpoint = `${config.apiUrl}/wp-json/dfg/v1/news`;

class SingleNew extends React.Component {
  state = {loading: true};

  static async getInitialProps(ctx) {
    const {slug} = ctx.query;
    const data = await cachedFetch(endpoint);
    const isServer = !!ctx.req;
    return {data, endpoint, isServer, slug};
  }

  componentDidMount() {
    if (this.props.isServer) {
      overrideCache(this.props.endpoint, this.props.data);
    }
    const news = this.props.data.filter(
      (news) => this.props.slug === news.slug,
    );

    this.setState({
      loading: false,
      news: news.length > 0 ? news[0] : null,
    });
  }

  render() {
    const {news, loading} = this.state;
    if (loading) {
      return 'loading...';
    }
    if (!news) {
      return <Error />;
    }

    return (
      <NewsSingle
        title={news.title}
        content={news.content}
        artists={news.artists}
      />
    );
  }
}

export default withLayout(SingleNew);
