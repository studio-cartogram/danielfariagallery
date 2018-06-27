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
    console.log(
      artists[0]._embedded['wp:featuredmedia'][0].media_details.sizes.large
        .source_url,
    );
    console.log(artists[0]._embedded['wp:featuredmedia']);
    return (
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>
            <Artist
              url={artist.link}
              title={artist.title.rendered}
              image={artist._embedded}
            />
          </li>
        ))}
      </ul>
    );
  }
}

// post._links['wp:featuredmedia'][0].media_details.sizes.large.source_url

export default withLayout(ArtistIndex);
