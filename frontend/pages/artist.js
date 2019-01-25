import React from 'react';
import {config} from '../config.js';
import withLayout from '../decorators/withLayout';
import Error from '../components/Error';
import ArtistSingle from '../components/ArtistSingle';
import cachedFetch, {overrideCache} from '../utilities/cached-fetch';

const endpoint = `${
  config.apiUrl
}/wp-json/wp/v2/artists?per_page=100&_embed=true`;

class Artist extends React.Component {
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

    const artist = this.props.data.filter(
      (artist) => this.props.slug === artist.slug,
    );

    this.setState({
      loading: false,
      artist: artist.length > 0 ? artist[0] : null,
    });
  }

  render() {
    const {artist, loading} = this.state;

    if (loading) {
      return 'loading...';
    }

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
