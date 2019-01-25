import React from 'react';
import {config} from '../config.js';
import withLayout from '../decorators/withLayout';
import Error from '../components/Error';
import PublicationSingle from '../components/PublicationSingle';
import cachedFetch, {overrideCache} from '../utilities/cached-fetch';

const endpoint = `${
  config.apiUrl
}/wp-json/wp/v2/publications?per_page=100&_embed=true`;

class Publication extends React.Component {
  state = {
    loading: true,
  };
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
    const publication = this.props.data.filter(
      (publication) => this.props.slug === publication.slug,
    );

    this.setState({
      loading: false,
      publication: publication.length > 0 ? publication[0] : null,
    });
  }

  render() {
    const {publication, loading} = this.state;
    if (loading) {
      return 'loading...';
    }

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
