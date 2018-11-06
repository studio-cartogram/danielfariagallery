import React from 'react';
import {config} from '../config.js';
import withLayout from '../decorators/withLayout';
import Error from '../components/Error';
import PublicationSingle from '../components/PublicationSingle';
import cachedFetch, {overrideCache} from '../utilities/cached-fetch';

class Publication extends React.Component {
  static async getInitialProps(ctx) {
    const {slug} = ctx.query;
    const endpoint = `${config.apiUrl}/wp-json/wp/v2/publications?slug=${slug}`;
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
    const publication = this.props.data[0];
    if (!publication) {
      return <Error />;
    }

    return (
      <PublicationSingle
        slug={publication.slug}
        title={publication.title.rendered}
        content={publication.content.rendered}
        works={publication.acf.work}
        startDate={publication.acf.start_date}
        endDate={publication.acf.end_date}
      />
    );
  }
}

export default withLayout(Publication);
