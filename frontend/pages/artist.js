import React from 'react';

import {config} from '../config';
import withLayout from '../decorators/withLayout';
import Error from '../components/Error';
import ArtistSingle from '../components/ArtistSingle';
import cachedFetch, {overrideCache} from '../utilities/cached-fetch';

const endpoint = `${config.apiUrl}/wp-json/dfg/v1/artists`;

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

  static getDerivedStateFromProps(props) {
    const artist = props.data.filter((art) => props.slug === art.slug);

    return {
      loading: false,
      artist: artist.length > 0 ? artist[0] : null,
    };
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
        title={artist.name}
        content={artist.content}
        works={artist.works}
        exhibitions={artist.exhibitions}
        press={artist.press}
        news={artist.news}
      />
    );
  }
}

export default withLayout(Artist);
