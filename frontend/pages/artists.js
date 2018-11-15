import React, {Component} from 'react';
import {config} from '../config';
import withLayout from '../decorators/withLayout';
import ArtistDisplay from '../components/ArtistDisplay';
import ArtistList from '../components/ArtistList';
import Error from '../components/Error';
import cachedFetch, {overrideCache} from '../utilities/cached-fetch';

const endpoint = `${
  config.apiUrl
}/wp-json/wp/v2/artists?per_page=100&_embed=true`;

class ArtistIndex extends Component {
  state = {
    currentArtist: undefined,
  };
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
    const artists = this.props.data;
    const {currentArtist} = this.state;
    const representedArtists = artists.filter((artist) => {
      return artist.acf.representation;
    });

    if (representedArtists.length === 0) {
      return <Error />;
    }
    return (
      <React.Fragment>
        <ArtistList
          artists={representedArtists}
          onArtistHover={this.handleArtistHover}
        />
        <ArtistDisplay
          artists={representedArtists}
          filter={currentArtist || representedArtists[0]}
        />
      </React.Fragment>
    );
  }

  handleArtistHover = (artist) => {
    this.setState({
      currentArtist: artist.slug,
    });
  };
}

export default withLayout(ArtistIndex);
