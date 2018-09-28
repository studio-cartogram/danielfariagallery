import fetch from 'isomorphic-unfetch';
import React, {Component} from 'react';
import {config} from '../config';
import withLayout from '../decorators/withLayout';
import ArtistDisplay from '../components/ArtistDisplay';
import ArtistList from '../components/ArtistList';
import Error from '../components/Error';

const endpoint = `${
  config.apiUrl
}/wp-json/wp/v2/artists?per_page=100&_embed=true`;

class ArtistIndex extends Component {
  state = {
    currentArtist: undefined,
  };
  static async getInitialProps() {
    const res = await fetch(endpoint);
    const data = await res.json();
    return {data};
  }

  render() {
    const artists = this.props.data;
    const {currentArtist} = this.state;
    const representedArtists = artists.filter((artist) => {
      return artist.acf.representation;
    });

    console.log(representedArtists);
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
    console.log('i am hovered');
    this.setState({
      currentArtist: artist.slug,
    });
  };
}

export default withLayout(ArtistIndex);
