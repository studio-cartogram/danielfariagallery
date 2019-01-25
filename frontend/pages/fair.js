import React from 'react';
import {config} from '../config.js';
import withLayout from '../decorators/withLayout';
import Error from '../components/Error';
import FairSingle from '../components/FairSingle';
import cachedFetch, {overrideCache} from '../utilities/cached-fetch';

const endpoint = `${
  config.apiUrl
}/wp-json/wp/v2/fairs?per_page=100&_embed=true`;

class Fair extends React.Component {
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

    const fair = this.props.data.filter(
      (fair) => this.props.slug === fair.slug,
    );

    this.setState({
      loading: false,
      fair: fair.length > 0 ? fair[0] : null,
    });
  }

  render() {
    const {fair, loading} = this.state;
    if (loading) {
      return 'loading...';
    }

    if (!fair) {
      return <Error />;
    }

    const displayTitle = `${fair.title.rendered}, ${fair.acf.location}`;

    return (
      <FairSingle
        slug={fair.slug}
        title={displayTitle}
        content={fair.content.rendered}
        works={fair.acf.work}
        startDate={fair.acf.start_date}
        endDate={fair.acf.end_date}
        location={fair.acf.location}
      />
    );
  }
}

export default withLayout(Fair);
