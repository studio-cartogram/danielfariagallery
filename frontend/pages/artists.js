import fetch from 'isomorphic-unfetch';
import React, {Component} from 'react';
import {config} from '../config';
import withLayout from '../decorators/withLayout';
import Artist from '../components/Artist';

const endpoint = `${
  config.apiUrl
}/wp-json/wp/v2/artists?per_page=100&_embed=true`;

class ArtistIndex extends Component {
  static async getInitialProps() {
    const res = await fetch(endpoint);
    const data = await res.json();
    return {data};
  }

  render() {
    const artists = this.props.data;
    const artistlistMarkup = artists
      .filter((artist) => {
        console.log(artist);
        return artist.acf.representation;
      })
      .map((artist) => {
        const image =
          artist._embedded['wp:featuredmedia'][0].media_details.sizes.large
            .source_url;
        return (
          <li key={artist.id}>
            <Artist
              url={`/artist/${artist.slug}`}
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
