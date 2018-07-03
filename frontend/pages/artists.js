import fetch from 'isomorphic-unfetch';
import React, {Component} from 'react';
import {Config} from '../config';
import withLayout from '../decorators/withLayout';
import Artist from '../components/Artist';

const endpoint = `${Config.apiUrl}/wp-json/wp/v2/artists?_embed`;

class ArtistIndex extends Component {
  static async getInitialProps() {
    const res = await fetch(endpoint);
    const data = await res.json();
    return {data};
  }

  render() {
    const artists = this.props.data;
    const artistlistMarkup = artists.map((artist) => {
      const image =
        artist._embedded['wp:featuredmedia'][0].media_details.sizes.large
          .source_url;
      return (
        <li key={artist.id}>
          <Artist
            url={artist.link}
            title={artist.title.rendered}
            artistImage={image}
          />
        </li>
      );
    });
    return <ul>{artistlistMarkup}</ul>;
  }
}

export default withLayout(ArtistIndex);
