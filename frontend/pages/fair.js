import React from 'react';
import {config} from '../config.js';
import withLayout from '../decorators/withLayout';
import Error from '../components/Error';
import FairSingle from '../components/FairSingle';
import cachedFetch, {overrideCache} from '../utilities/cached-fetch';

class Fair extends React.Component {
  static async getInitialProps(ctx) {
    const {slug} = ctx.query;
    const endpoint = `${config.apiUrl}/wp-json/wp/v2/fairs?slug=${slug}`;
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
    const fair = this.props.data[0];
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
