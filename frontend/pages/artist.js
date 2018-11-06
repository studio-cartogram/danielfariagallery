import React from 'react';
import {config} from '../config.js';
import withLayout from '../decorators/withLayout';
import Error from '../components/Error';
import ArtistSingle from '../components/ArtistSingle';
import cachedFetch, {overrideCache} from '../utilities/cached-fetch';

class Artist extends React.Component {
  static async getInitialProps(ctx) {
    const {slug} = ctx.query;
    const endpoint = `${config.apiUrl}/wp-json/wp/v2/artists?slug=${slug}`;
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
    const artist = this.props.data[0];

    if (!artist) {
      return <Error />;
    }

    return (
      <ArtistSingle
        slug={artist.slug}
        title={artist.title.rendered}
        content={artist.content.rendered}
        works={artist.acf.work}
        exhibitions={artist.acf.exhibitions}
        press={artist.acf.press}
        news={artist.acf.news}
      />
    );
  }
}

export default withLayout(Artist);
